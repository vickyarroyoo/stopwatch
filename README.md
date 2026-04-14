# ⏱️ Stopwatch Web — Reto Técnico

## 📌 Descripción

Este proyecto consiste en la implementación de un **cronómetro web (stopwatch)** desarrollado con **HTML, CSS y JavaScript**, sin frameworks ni librerías externas.

El sistema está basado en un **modelo de estados dinámicos**, que controla la interacción del usuario y el comportamiento del cronómetro.

---

## 🚀 Funcionalidades

- Cronómetro digital en formato `HH:MM:SS.cc`
- Sistema de estados:
  - ▶ Start
  - ⏸ Pause
  - ▶ Continue
  - 🔄 Clear
- Botón dinámico según el estado actual
- Reinicio completo del sistema
- Interfaz simple, clara y responsive

---

## 🧠 Lógica del sistema

El cronómetro calcula el tiempo utilizando timestamps para asegurar precisión:

`elapsedTime + (Date.now() - startTime)`


Esto permite:
- Pausar sin perder el tiempo acumulado
- Continuar correctamente desde el último estado
- Evitar errores de sincronización

---

## ▶️ Cómo ejecutar

Clonar el repositorio: git clone https://github.com/vickyarroyoo/stopwatch.git

Abrir el archivo: index.html

👉 No requiere instalación, servidor ni dependencias.

---

## 📁 Estructura del proyecto
- index.html  → Estructura del cronómetro
- styles.css  → Estilos
- script.js  → Lógica del cronómetro
- IA-USO.md  → Documentación del uso de IA
- README.md  → Documentación del proyecto

---

## 🤖 Uso de Inteligencia Artificial

El desarrollo fue asistido por:

- ChatGPT (OpenAI — GPT-5.3) como herramienta principal
- Claude (Sonnet 4.6) para comparación puntual

📄 Ver detalle completo en: IA-USO.md

---

## 📌 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

---

## 📄 Notas

Este proyecto demuestra:

- Implementación de lógica basada en estados
- Manejo preciso del tiempo en JavaScript
- Uso de Inteligencia Artificial como herramienta de apoyo en desarrollo
- Separación clara entre lógica, presentación y estructura
