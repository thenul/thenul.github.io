export interface ProjectTask {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tasks?: ProjectTask[];
  image?: string;
  imageBadge?: string;
  code: string;
  filename: string;
  schematicUrl?: string;
}

export const projects: Project[] = [
  {
    id: "sizzling-gaaris",
    title: "Autonomous Mobile Robot (AMR) — \"Sizzling Gaaris\"",
    description: "A high-efficiency autonomous mobile robotics platform utilizing an ATmega328P microcontroller base and advanced H-bridge phase control. The vehicle independently navigates unknown environments by executing dynamic obstacle-avoidance matrices derived from real-time spatial pulse calculations.\n\n• Hardware-Software Synthesis: Orchestrated a 4WD chassis array alongside low-level digital I/O signal management, successfully avoiding pin assignment collisions across hardware boundaries.\n• Proactive Error Resolution: Successfully diagnosed and mitigated physical static-friction torque drops and voltage drops by implementing software parameter tuning and stabilizing current profiles.\n• Professional Documentation: Fully mapped, routed, and open-sourced a complete hardware blueprint using KiCad EDA on Linux environments, executing strict net-labeling architecture for pristine signal isolation.",
    tags: ["C++", "PlatformIO", "Embedded Systems", "KiCad (Linux)", "AVR Architecture", "Mechatronics"],
    tasks: [
      {
        title: "TASK 1: [Spatial Scanning Core]",
        desc: "Iteratively fires microsecond ultrasonic pulses via the HC-SR04 transceiver to parse high-frequency time-of-flight reflections into normalized metric distance data."
      },
      {
        title: "TASK 2: [Predictive Decision Matrix]",
        desc: "Monitors the primary forward distance threshold (< 20 cm). Upon intersection, the loop halts operational state logic and initiates comparative side-scanning routines to calculate maximum navigational clearance."
      },
      {
        title: "TASK 3: [H-Bridge Actuation Driver]",
        desc: "Interfaces directly with an L293D motor driver network to manipulate multi-motor phase profiles (FORWARD, BACKWARD, RELEASE) using customized directional truth tables."
      }
    ],
    image: "/sizzling_gaaris_chassis.jpg",
    imageBadge: "Physical Chassis Deployment Pending Assembly",
    filename: "main.cpp",
    schematicUrl: "/Schematic.pdf",
    code: `#include <Arduino.h>
#include <AFMotor.h>
#include <Servo.h>

// Motor channel configuration
AF_DCMotor frontLeft(1);
AF_DCMotor backLeft(2);
AF_DCMotor frontRight(3);
AF_DCMotor backRight(4);

// Hardware pin attachments
const int TRIG_PIN = A0;
const int ECHO_PIN = A1;
const int SERVO_PIN = 9;

Servo radarServo;

// Configuration thresholds
const int DISTANCE_THRESHOLD = 20; // Clear path constraint in cm
const int MOTOR_SPEED = 255;        // Peak duty cycle performance

// Function prototypes for layout integrity
long readDistance();
void moveForward();
void moveBackward();
void turnLeft();
void turnRight();
void stopMotors();

void setup() {
    Serial.begin(9600);
    
    pinMode(TRIG_PIN, OUTPUT);
    pinMode(ECHO_PIN, INPUT);
    
    radarServo.attach(SERVO_PIN);
    radarServo.write(90); // Center sonar sweep alignment
    
    // Initialize full system speed parameters
    frontLeft.setSpeed(MOTOR_SPEED);
    backLeft.setSpeed(MOTOR_SPEED);
    frontRight.setSpeed(MOTOR_SPEED);
    backRight.setSpeed(MOTOR_SPEED);
    
    stopMotors();
}

void loop() {
    long currentDistance = readDistance();
    
    if (currentDistance > DISTANCE_THRESHOLD) {
        moveForward();
    } else {
        stopMotors();
        delay(300);
        moveBackward();
        delay(400);
        stopMotors();
        delay(200);
        
        // Initiate spatial sweep matrix
        radarServo.write(30);
        delay(500);
        long rightDistance = readDistance();
        
        radarServo.write(150);
        delay(500);
        long leftDistance = readDistance();
        
        radarServo.write(90); // Reset home point
        delay(500);
        
        if (leftDistance > rightDistance) {
            turnLeft();
        } else {
            turnRight();
        }
        delay(600);
        stopMotors();
    }
    delay(50);
}

long readDistance() {
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIG_PIN, LOW);
    
    long duration = pulseIn(ECHO_PIN, HIGH, 30000); // 30ms timeout bound
    if (duration == 0) return 400; // Default to maximum bounds out of range
    
    return duration * 0.034 / 2; // Compute logic to metric conversion
}

void moveForward() {
    frontLeft.run(FORWARD);
    backLeft.run(FORWARD);
    frontRight.run(FORWARD);
    backRight.run(FORWARD);
}

void moveBackward() {
    frontLeft.run(BACKWARD);
    backLeft.run(BACKWARD);
    frontRight.run(BACKWARD);
    backRight.run(BACKWARD);
}

void turnLeft() {
    frontLeft.run(BACKWARD);
    backLeft.run(BACKWARD);
    frontRight.run(FORWARD);
    backRight.run(FORWARD);
}

void turnRight() {
    frontLeft.run(FORWARD);
    backLeft.run(FORWARD);
    frontRight.run(BACKWARD);
    backRight.run(BACKWARD);
}

void stopMotors() {
    frontLeft.run(RELEASE);
    backLeft.run(RELEASE);
    frontRight.run(RELEASE);
    backRight.run(RELEASE);
}`
  },
  {
    id: "beta",
    title: "IoT Smart Weather Station (ESP32 & FreeRTOS)",
    description: "A high-efficiency meteorological monitoring hub utilizing an ESP32 microprocessor. The system manages sensor data readings, network transactions, and low-power sleep schedules via a preemptive real-time operating system scheduler (FreeRTOS).\n\n• Multi-task synchronization using FreeRTOS queues.\n• Hardware interfaces: I2C for SHT31 sensor, SPI for SD Logging.\n• Dynamic sleep profiling saving 80% battery capacity.",
    tags: ["FreeRTOS", "ESP32", "I2C", "C++", "Sensors"],
    filename: "weather_station.cpp",
    code: `#include <Arduino.h>
#include <WiFi.h>
#include "DHTesp.h"

TaskHandle_t SensorTaskHandle = NULL;
QueueHandle_t SensorQueue;

void readSensorTask(void *pvParameters) {
  DHTesp dht;
  dht.setup(23, DHTesp::DHT22);
  for(;;) {
    float temp = dht.getTemperature();
    xQueueSend(SensorQueue, &temp, portMAX_DELAY);
    vTaskDelay(pdMS_TO_TICKS(2000));
  }
}`
  },
  {
    id: "gamma",
    title: "Digital Signal Processor Audio Filter (MATLAB)",
    description: "Design of FIR and IIR filters to filter out high-frequency noise from audio streams inside MATLAB environments. Analyzes pre- and post-filtered power spectral density maps to verify filter isolation integrity.\n\n• Hamming-window FIR design algorithms.\n• Frequency response & phase plots analysis.\n• Convolution filtration matrix functions.",
    tags: ["MATLAB", "DSP Filter", "FIR / IIR", "Audio FFT"],
    filename: "dsp_filter.m",
    code: `% MATLAB script to design FIR Lowpass Filter
Fs = 44100;           % Sampling Frequency (Hz)
Fc = 3000;            % Cutoff Frequency (Hz)
N = 64;               % Filter Order

Wc = Fc / (Fs / 2);   % Normalized Cutoff
h = fir1(N, Wc, 'low', hamming(N+1));
filteredAudio = filter(h, 1, noisyInputSignal);`
  }
];
