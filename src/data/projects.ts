export interface ProjectTask {
  title: string;
  desc: string;
}

export interface ProjectLink {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  tasks?: ProjectTask[];
  image?: string;
  imageBadge?: string;
  code: string;
  filename: string;
  schematicUrl?: string;
  links?: ProjectLink[];
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
    id: "phasorz",
    title: "PhasorZ — AC Network & Complex Impedance Engine",
    subtitle: "Dark-mode Manifest V3 Chrome Extension & Web App for Electrical Engineering Labs",
    description: "Engineered a real-time AC complex impedance calculator designed to eliminate manual vector conversions and tab-switching during EE lab experiments.\n\n• Datasheet Shorthand Parser: Built an inline input lexer that converts engineering shorthand notation (e.g., 4.7k, 10u, 22n) into floating-point SI values on the fly.\n• Complex Math Engine: Computes series/parallel R, L, C network impedances by evaluating inductive (X_L = 2πfL) and capacitive (X_C = 1 / (2πfC)) reactances at locked operating frequencies.\n• Dual Vector Output: Calculates simultaneous real-time output in Rectangular (R + jX Ω) and Polar (|Z| ∠ θ°) forms with phase angle normalization.\n• Reactive State Analysis: Dynamically classifies circuit phase response as net-inductive, net-capacitive, or resonant based on calculated phase angle θ.\n• Manifest V3 Deployment: Prototyped and validated in Python before porting to lightweight vanilla JavaScript. Fully published on the Chrome Web Store and hosted live.",
    tags: ["JavaScript (ES6+)", "Chrome Extension (Manifest V3)", "Python", "HTML5/CSS3", "Complex Analysis"],
    image: "/phasorz.png",
    imageBadge: "Chrome Web Store Published",
    filename: "impedance_engine.js",
    code: `// PhasorZ: AC Complex Impedance Calculation Engine
// Parses engineering shorthand notation and evaluates RLC networks.

class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }

  add(c) {
    return new Complex(this.re + c.re, this.im + c.im);
  }

  parallel(c) {
    // Z_p = (Z_1 * Z_2) / (Z_1 + Z_2)
    const num_re = this.re * c.re - this.im * c.im;
    const num_im = this.re * c.im + this.im * c.re;
    const den_re = this.re + c.re;
    const den_im = this.im + c.im;
    const den = den_re * den_re + den_im * den_im;
    if (den === 0) return new Complex(0, 0);
    return new Complex(
      (num_re * den_re + num_im * den_im) / den,
      (num_im * den_re - num_re * den_im) / den
    );
  }

  toPolar() {
    const magnitude = Math.sqrt(this.re * this.re + this.im * this.im);
    const angleRad = Math.atan2(this.im, this.re);
    const angleDeg = (angleRad * 180) / Math.PI;
    return { r: magnitude, theta: angleDeg };
  }
}

// Parses shorthand string like "4.7k", "10u", "22n" into float
function parseShorthand(valStr) {
  const match = valStr.trim().match(/^([0-9.]+)\\s*([a-zA-Z]*)$/);
  if (!match) return NaN;
  const num = parseFloat(match[1]);
  const unit = match[2].toLowerCase();
  
  const multipliers = {
    'm': 1e-3,  // milli
    'u': 1e-6,  // micro
    'n': 1e-9,  // nano
    'p': 1e-12, // pico
    'k': 1e3,   // kilo
    'meg': 1e6, // mega
    'mhz': 1e6  // megahertz
  };
  
  return multipliers[unit] ? num * multipliers[unit] : num;
}`,
    links: [
      { name: "Chrome Web Store", url: "https://chromewebstore.google.com/detail/phasorz/hlanpmlkdggjkapemgcncpjbenpbohej" },
      { name: "Live Web App", url: "https://thenuldemel.com/calc" }
    ]
  }
];
