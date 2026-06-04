export const projects = [
  {
    id: "alpha",
    title: "Project Alpha",
    description: "Designed and implemented a custom real-time embedded system for sensor data acquisition and filtering. Integrated custom PCB design with an ARM Cortex-M microcontroller.",
    code: `#include <stdint.h>
#include "sensor.h"

int main(void) {
    sensor_init();
    while(1) {
        uint16_t data = sensor_read();
        process_signal(data);
    }
    return 0;
}`,
    filename: "main.c",
  },
  {
    id: "beta",
    title: "Project Beta",
    description: "Developed a telemetry parsing module for a student-led satellite mission. Focused on highly optimized C code to ensure reliable communication over low-bandwidth links.",
    code: `void parse_telemetry(uint8_t* buffer, size_t len) {
    if (len < PACKET_MIN_SIZE) return;
    uint32_t header = (buffer[0] << 24) | (buffer[1] << 16);
    if (header != SYNC_WORD) {
        // Handle sync error
        handle_error(ERR_SYNC);
    }
}`,
    filename: "parser.c",
  },
  {
    id: "gamma",
    title: "Project Gamma",
    description: "Created an automated circuit testing rig using Python and SCPI-compatible test equipment. Reduced validation time for prototype boards by over 70%.",
    code: `import pyvisa
import time

rm = pyvisa.ResourceManager()
scope = rm.open_resource('USB0::0x1AB1::0x04CE::DS1ZA1234567::INSTR')

scope.write(':MEASure:VPP CHANnel1')
vpp = scope.query(':MEASure:ITEM? VPP,CHANnel1')
print(f"Vpp: {vpp}")`,
    filename: "test_rig.py",
  }
];
