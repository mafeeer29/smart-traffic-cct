
# 🚦 Smart Traffic | CCT-UNI

### Sistema inteligente de gestión vehicular mediante IoT

Proyecto desarrollado por el Grupo de IA/IoT de la Dirección de Proyectos e Investigación del Centro Cultural de Telecomunicaciones de la Universidad Nacional de Ingeniería (CCT-UNI).

## 📌 Descripción

Smart Traffic es un prototipo educativo de una intersección inteligente de cuatro accesos que utiliza sensores ultrasónicos, un ESP32 y comunicaciones MQTT para adaptar los tiempos de los semáforos según la presencia vehicular.

El sistema cuenta con un dashboard interactivo que permite visualizar el estado de los semáforos, monitorear la conectividad y cambiar el modo de funcionamiento.

## 🎯 Objetivos

- Detectar la presencia vehicular mediante sensores ultrasónicos.
- Implementar un sistema de semáforos sincronizados.
- Comparar el modo tradicional con el modo adaptativo.
- Implementar comunicaciones inalámbricas mediante Wi-Fi y MQTT.
- Visualizar la información del sistema en tiempo real.
- Enseñar conceptos de IoT y telecomunicaciones de manera interactiva.

## ⚙️ Tecnologías

### Hardware
- ESP32 DevKit WROOM
- 4 sensores ultrasónicos HC-SR04
- 12 LEDs
- Resistencias y protoboards

### Firmware
- Arduino IDE
- C/C++
- ArduinoJson
- PubSubClient
- WiFiManager
- Preferences

### Telecomunicaciones
- Wi-Fi de 2.4 GHz
- MQTT
- Eclipse Mosquitto
- TCP/IP
- WebSockets

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- MQTT.js
- Recharts
- Lucide React

## 🚦 Modos de funcionamiento

### Modo tradicional

Los semáforos funcionan con tiempos fijos de luz verde de 10 segundos por eje.

### Modo adaptativo

El ESP32 modifica los tiempos de luz verde según la presencia vehicular detectada en los ejes Norte-Sur y Este-Oeste.

La adaptación se realiza mediante reglas programadas, sin utilizar inteligencia artificial.

## 📡 Arquitectura

Sensores HC-SR04 → ESP32 → Semáforos

ESP32 ↔ Wi-Fi ↔ Broker MQTT ↔ Dashboard

El ESP32 mantiene el control local de los semáforos incluso si se pierde la conexión de red.

## 🤖 Telequito y Telequita

Las mascotas oficiales del CCT-UNI acompañan la experiencia interactiva mediante mensajes educativos asociados a los estados del sistema.

## 📁 Estructura prevista del repositorio

    smart-traffic-cct/
    ├── docs/
    ├── hardware/
    ├── firmware/
    ├── broker/
    ├── dashboard/
    ├── tests/
    ├── .gitignore
    └── README.md

## 👥 Organización del equipo

| Responsable | Módulo |
|---|---|
| P1 | Hardware y maqueta |
| P2 | Firmware del ESP32 |
| P3 | Telecomunicaciones y MQTT |
| P4 | Dashboard y experiencia interactiva |

## 📅 Cronograma

| Fecha | Actividad |
|---|---|
| 24 de noviembre | Planificación e inventario |
| 25-26 de noviembre | Desarrollo y pruebas individuales |
| 27 de noviembre | Validación de módulos |
| 28-29 de noviembre | Integración del sistema |
| 30 de noviembre | Validación final |
| 1 de diciembre | Ensayo de presentación |
| 2 de diciembre | Presentación del proyecto |

## 🔒 Seguridad y consideraciones

- No subir credenciales Wi-Fi ni MQTT al repositorio.
- Mantener el control de los semáforos en el ESP32.
- Evitar fases verdes incompatibles.
- Diferenciar los datos simulados de los datos reales.
- Smart Traffic es un prototipo educativo, no un sistema certificado de control vial.

## 📍 Estado del proyecto

En desarrollo — noviembre de 2026.

---

**CCT-UNI | Grupo de IA/IoT**

Universidad Nacional de Ingeniería — Lima, Perú.
