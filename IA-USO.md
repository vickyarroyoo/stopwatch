## 🤖 Uso de Inteligencia Artificial en el desarrollo

Durante el desarrollo del proyecto se utilizó **Inteligencia Artificial** como herramienta de apoyo, principalmente para acelerar la implementación, validar decisiones técnicas y mejorar la calidad del código.

---

## 1. Modelos utilizados

Se utilizaron los siguientes modelos:

- **ChatGPT (OpenAI — GPT-5.3)** → herramienta principal  
- **Claude (Sonnet 4.6)** → utilizado como comparación y validación secundaria  

ChatGPT fue el asistente principal durante todo el desarrollo, mientras que Claude se utilizó puntualmente para contrastar soluciones y evaluar alternativas.

---

## 2. Prompts clave utilizados

A continuación se detallan los prompts más relevantes, redactados con foco en precisión y control del resultado.

---

### 🧩 Prompt 1 — Generación base del cronómetro

> Necesito implementar un cronómetro (stopwatch) en JavaScript, sin frameworks ni librerías externas.  
>
> **Requisitos:**  
> - Debe iniciar en `00:00:00`  
> - Debe incrementar el tiempo (no countdown)  
> - Debe permitir pausar y continuar sin perder el tiempo acumulado  
> - Debe usar timestamps (`Date.now`) para evitar problemas de precisión  
> - Debe separar la lógica del display  
>
> Quiero una solución clara, mantenible y basada en buenas prácticas.

**Resultado:**  
Se obtuvo una base sólida del cronómetro, con una estructura correcta para manejar el tiempo acumulado.

---

### 🔄 Prompt 2 — Modelado del flujo de estados

> Quiero que el cronómetro funcione con un modelo de estados claro.  
>
> **Estados:**  
> - Idle  
> - Running  
> - Paused  
>
> **Requisitos:**  
> - Un único botón principal que cambie entre Start / Pause / Continue  
> - Un botón secundario Clear que funcione en cualquier estado  
> - El comportamiento debe estar completamente controlado por el estado actual  
>
> Evitar lógica duplicada y mantener el flujo lo más simple posible.

**Resultado:**  
Se definió correctamente el flujo de interacción y se simplificó el control del botón principal.

---

### 🛠️ Prompt 3 — Corrección conceptual

> La solución anterior implementa un countdown, pero necesito un stopwatch.  
>
> **Requisitos:**  
> - El tiempo debe comenzar en `0`  
> - Debe acumularse progresivamente  
> - No debe depender de un tiempo inicial  
> - Debe poder pausarse y continuar correctamente  
>
> Ajustar la lógica para que sea un cronómetro real.

**Resultado:**  
Se corrigió el enfoque del sistema, alineándolo con el requerimiento funcional.

---

### 🎨 Prompt 4 — Mejora de interfaz

> Mejorar el diseño del cronómetro con los siguientes criterios:  
>
> - Fondo oscuro  
> - Display grande tipo digital (monospace)  
> - Números bien legibles  
> - Botones modernos con hover  
> - Estados visuales claros (Start, Pause, Continue)  
> - Layout centrado vertical y horizontalmente  
> - Diseño responsive  
>
> No usar frameworks ni librerías externas.

**Resultado:**  
Se logró una interfaz moderna, clara y consistente.

---

### 📐 Prompt 5 — Ajuste de layout

> El display del cronómetro y los botones no están alineados correctamente.  
>
> **Requisitos:**  
> - Ambos deben tener el mismo ancho visual  
> - Los botones deben alinearse con el display  
> - El layout debe ser responsive  
> - Evitar hacks de posicionamiento absoluto  
> - Preferir soluciones con flexbox o grid  
>
> Proponer una solución limpia y mantenible.

**Resultado:**  
Se corrigieron problemas de alineación logrando un layout consistente.

---


## 3. Evaluación de respuestas de la IA

### ✅ Respuesta utilizada 

La lógica de cálculo del tiempo:

`elapsedTime + (Date.now() - startTime)`

**Motivo:**

- Es una solución estándar para cronómetros  
- Permite pausar y continuar sin pérdida de precisión  
- Evita acumulación de errores  
- Es simple y mantenible  

---

### ❌ Respuesta rechazada 

En una etapa inicial, la IA propuso un **countdown timer**.

**Problema:**

- No cumplía con el requerimiento funcional  
- Dependía de un tiempo inicial  
- No representaba un cronómetro real  

**Acción tomada:**

- Se refinó el prompt  
- Se redefinió la lógica hacia un modelo incremental (**stopwatch**)  

---

## 4. Comparación entre modelos (ChatGPT vs Claude)

Durante el desarrollo se realizaron pruebas puntuales utilizando **Claude** para comparar resultados con **ChatGPT**.

### Observaciones

#### ChatGPT

- Mejor desempeño en generación de código estructurado  
- Respuestas más completas en lógica JavaScript  
- Mayor velocidad de iteración  

#### Claude

- Buen nivel de explicación conceptual  
- Respuestas más descriptivas  
- En algunos casos, menor precisión técnica  

**Conclusión:**  
ChatGPT resultó más efectivo para la implementación práctica, mientras que Claude fue útil como apoyo conceptual.

---

## 5. Mejora en el uso de prompts

Se identificó que la calidad de los prompts impacta directamente en los resultados.

### Ejemplo

**Prompt inicial:**

crear un timer

**Prompt mejorado:**

crear un stopwatch (no countdown) con:

- estados idle, running, paused  
- control mediante un botón dinámico  
- acumulación de tiempo usando timestamps  
- separación entre lógica y UI  

**Beneficio:**

- Reduce ambigüedad  
- Mejora la precisión  
- Disminuye retrabajo  

---

## 6. Reflexión sobre el uso de IA

### ✔ Aportes

- Aceleró la implementación inicial  
- Permitió iterar rápidamente  
- Ayudó a estructurar la lógica  
- Mejoró la interfaz visual  

### ❌ Limitaciones

- Interpretaciones incorrectas en etapas iniciales  
- Inclusión de funcionalidades fuera de alcance  
- Necesidad de validación constante  

---

### 🧠 Rol del desarrollador

El desarrollador tuvo un rol clave en:

- Definir claramente los requisitos  
- Evaluar críticamente cada respuesta  
- Ajustar y refinar soluciones  
- Validar el comportamiento final  

---

## 7. Conclusión

La Inteligencia Artificial fue una herramienta clave en el desarrollo, actuando como acelerador del proceso.

Sin embargo, el resultado final depende de:

- La calidad de los prompts  
- La validación del desarrollador  
- La capacidad de adaptación  

La combinación de **IA + criterio propio** permitió lograr una solución funcional, clara y alineada con los objetivos del proyecto.
