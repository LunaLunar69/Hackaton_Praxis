# Hackaton_Praxis
repositorio para proyecto de hackaton praxis 2025
# Implementación de la Plataforma de Ciberseguridad con Design Thinking 

 

# 1. Empatizar (Comprender a los Usuarios y Stakeholders) 


Objetivo: 

- Comprender las necesidades, problemas y expectativas de los usuarios y otros stakeholders clave. 

Acciones: 

a. Investigación de usuarios: 

- Realizar encuestas y entrevistas con estudiantes, profesionales de TI, docentes y empresas para conocer sus areas de oportunidad y mejora en ciberseguridad. 

- Identificar qué métodos de aprendizaje prefieren (videos, simulaciones, chatbots, juegos, etc.). 

- Analizar qué problemas enfrentan al aprender sobre ciberseguridad (conceptos complejos, falta de práctica, etc.). 

b. Análisis de stakeholders: 

- Reuniones con universidades e institutos educativos para entender sus necesidades en formación en ciberseguridad. 

- Contacto con empresas para evaluar cómo capacitan a sus empleados en seguridad digital. 

 c. Benchmarking: 

- Analizar plataformas similares (como TryHackMe, Hack The Box, Udemy) para identificar sus fortalezas y debilidades. 

 d. Resultado: 

- Los usuarios necesitan una plataforma interactiva que no solo enseñe teoría, sino que permita practicar en entornos simulados. 

- Los estudiantes prefieren un sistema con gamificación y aprendizaje personalizado. 

- Las empresas requieren que los empleados puedan certificarse y hacer simulaciones de ataques reales. 

  
# 2. Definir (Plantear el Problema y Objetivos del Proyecto) 

Problema identificado: 

"Los estudiantes y profesionales de TI tienen dificultades para aprender y aplicar buenas prácticas de ciberseguridad debido a la falta de recursos interactivos y prácticos, además de que buscan plataformas mucho más dinámicas, más accesibles económicamente y contenido gratuito" 

Objetivo: 

Desarrollar una plataforma educativa interactiva basada en simulaciones y gamificación que enseñe ciberseguridad de forma práctica, accesible y personalizada con IA, además contara con un modelo de negocio freemium el cual ofrecerá contenido gratuito a los usuarios pero de cierta forma limitado, por otro lado, se les ofrecerá el poder adquirir una suscripción(aplicara términos y condiciones) mensual o anual la cual ofrecerá algunos veneficios como más contenido, acceso ilimitado a cursos y simuladores, certificado de cursos completados(no incluye certificaciones especializadas), descuentos en las certificaciones profesionales, el otro servicio que se ofrecerá a los usuarios específicamente a profesionales o empresas serian certificaciones profesionales especializadas las cuales no serían incluidas en el plan gratuito ni en el plan de suscripción si no que se cobrara por curso completo con certificación. 

  

# 3. Idear (Proponer Soluciones y Funcionalidades Clave) 

Características principales de la plataforma: 

   

a. Chatbot Inteligente (IA Conversacional): 

¿Qué haría? 

  - Resolver dudas de los usuarios en tiempo real acerca de conceptos de ciberseguridad, mejores prácticas y ejercicios. 

  - Guiar al usuario a través de módulos y cursos recomendados según su nivel de conocimiento. 

  - Ofrecer retroalimentación inmediata después de cada lección o prueba. 
 

¿Cómo implementarlo? 

  - Seleccionar la plataforma de chatbot: 

  - Google Dialogflow, IBM Watson Assistant o Azure Framework Composer ChatBot para una integración relativamente sencilla y rápida. 

  - O bien, usar frameworks de LLM (Modelos de Lenguaje Extenso), como GPT, para obtener un chatbot más avanzado(Todo esto ya involucra el uso de herramientas como langchain y alguna base de datos vectorial.). 

Diseñar la base de conocimiento: 

  - Crear una base de datos con información de los cursos, preguntas frecuentes y escenarios de ciberseguridad (phishing, malware, contraseñas seguras, etc.). 

  - Entrenar al chatbot con ejemplos de conversaciones y preguntas habituales(como ya había mencionado antes, usando BD vectoriales o NoSQL). 

Integración en la plataforma: 

  - Añadir el chatbot en un panel lateral o ventana emergente en la plataforma web (desarrollada en React, Angular, Vue, etc.)(Otra cosa es que para la demo podríamos primero implementarlo con alguna tecnología de prueba como Streamlit utilizando solamente Python pero si podemos implementar mas detalles pues ahí si tendríamos que hacer otro esfuerso). 
o  Conectar la API del chatbot con el LMS (Moodle, Canvas, Lanchain, etc.) para personalizar las respuestas según el progreso del estudiante. 


  

b. Motor de Recomendación Adaptativo (Machine Learning):  

¿Qué haría? 

- Recomendar el siguiente módulo, ejercicio o reto en función del desempeño del estudiante (tiempo de respuesta, aciertos en cuestionarios, participación en foros, etc.). 

- Ajustar la dificultad de los ejercicios y cuestionarios de acuerdo con el historial de aprendizaje de cada usuario. 

¿Cómo implementarlo? 

- Recopilación de datos: 

Registrar métricas de cada usuario: notas, tiempo de dedicación a cada módulo, número de intentos fallidos, etc. 

Utilizar servicios de tracking (por ejemplo, xAPI o SCORM) integrados con el LMS. 

- Modelo de recomendación: 

Entrenar un modelo de Collaborative Filtering o Content-Based Filtering con bibliotecas como Scikit-learn o TensorFlow. 

Combinar técnicas de clasificación o clustering para agrupar a los estudiantes por nivel de conocimiento. 

- Implementación: 

Desplegar el modelo en un servidor (por ejemplo, usando Flask o FastAPI para exponer endpoints REST) (recomiendo específicamente FastAPI para esta implementación ya que tengo un poco de experiencia con este framework y encima por la facilidad de crear API’s). 

Cada vez que un usuario finalice una actividad, la plataforma consulta el motor de recomendación para sugerir la siguiente.  
 

c. Detección de Comportamientos Sospechosos o Anómalos (Machine Learning/Automatización):  

¿Qué haría? 

- Monitorizar la actividad de los usuarios para detectar conductas que puedan indicar fraude en exámenes o prácticas, uso de scripts automatizados, o comportamientos fuera de lo común (por ejemplo, respuestas demasiado rápidas o repetitivas). 

- Alertar a los administradores de la plataforma cuando se detecten anomalías. 

¿Cómo implementarlo? 

- Análisis de datos en tiempo real: Utilizar herramientas como Apache Kafka o RabbitMQ(estas herramientas no las he utilizado, pero podrían ser de mucha utilidad al parecer) para recolectar eventos en tiempo real (clicks, inicios de sesión, respuestas a cuestionarios). 

- Entrenamiento de modelos de detección de anomalías: Emplear algoritmos de Isolation Forest o Autoencoders en TensorFlow/Scikit-learn para identificar patrones anómalos. 

- Alertas y panel de control: Diseñar un tablero (dashboard) que muestre alertas cuando un usuario presente un comportamiento fuera de lo normal. Enviar notificaciones a un canal de Slack/Discord o correo electrónico. 

 

d. Gamificación con IA Dinámica: 

¿Qué haría? 

- Ajustar la dificultad de los retos y juegos de ciberseguridad (ej. laboratorios virtuales de phishing o ataque/defensa) en función del desempeño de cada usuario. 

- Ofrecer recompensas (badges, puntos, niveles) basadas en logros y progreso real. 

¿Cómo implementarlo? 

- Integración con plataformas de simulación: 

- Conectar con servicios tipo TryHackMe, Hack The Box o una CyberRange propia. 

- Obtener la puntuación y estadísticas del usuario (tiempo en resolver retos, porcentaje de aciertos). 

Algoritmo adaptativo: 

- Un sistema de puntuación o rating ELO (similares a los usados en juegos online) para agrupar a usuarios por nivel. 

- Modelos de IA (regresión o clasificación) para predecir la probabilidad de que un usuario supere con éxito el siguiente reto. 

- Retroalimentación en tiempo real: 

Generar consejos o pistas automáticas cuando el modelo detecta que un usuario está estancado. 
 

e. Creación de Contenidos con Generación de Lenguaje (IA): 

¿Qué haría? 

- Generar explicaciones y resúmenes automáticos de los temas de ciberseguridad basados en un temario definido. 

- Crear cuestionarios y preguntas de práctica de manera dinámica. 

¿Cómo implementarlo? 

- Uso de modelos de lenguaje (LLMs): 

- Con OpenAI GPT, Hugging Face Transformers o modelos de código abierto (Todos estos ya los he implementado en proyectos por eso los menciono). 

Plantillas y prompts: 

- Diseñar “prompts” (instrucciones) para que el modelo genere contenido enfocado en ciberseguridad (por ejemplo: “Genera 5 preguntas de opción múltiple sobre contraseñas seguras”, o algo así por el estilo, habría que investigar plataformas similares para ver cómo funciona todo este pedo). 

- Validación del contenido: 

- Un proceso de curaduría para que instructores o expertos revisen el contenido generado. 

- Implementar filtros de calidad y detección de contenido inapropiado. 

  

f. Automatización de Evaluaciones y Seguimiento: 

¿Qué haría? 

- Calificar automáticamente los cuestionarios y proporcionar retroalimentación inmediata. 

- Programar recordatorios y tareas pendientes (vía correo o notificaciones PUSH, más que nada por la facilidad de implementación de estas) según la participación y el progreso de cada usuario. 

¿Cómo implementarlo? 

- Integración con LMS: 

Utilizar las APIs o plugins de Moodle, Canvas, Langchain, etc., para automatizar la calificación (como ya había mencionado antes). 

- Reglas de negocio: 

Definir triggers (por ejemplo, si el estudiante obtiene < 60% en el cuestionario, enviar un enlace a un módulo de repaso). 

- Automatización de comunicación: 

Usar Microsoft Power Automate, Zapier o n8n (estas tecnologías no las he utilizado pero al parecer sirven para estos pedos), para enviar notificaciones basadas en eventos (finalización de un módulo, puntuaciones bajas, etc.). 

 

g. Infraestructura y Seguridad:  

- Alojamiento en la nube (AWS, Azure, GCP) con escalabilidad para manejar picos de uso. 

- Seguridad de datos con cifrado (HTTPS, OAuth, JWT). 

- Mitigación de ataques DDoS y uso de WAF (Web Application Firewall)(Uso de Captacha). 

- Monitoreo de logs con herramientas como Splunk o Elastic Stack para detectar incidentes. 

 

# 4. Prototipar (Crear un MVP y Probarlo con Usuarios) 

a.  Desarrollo del prototipo inicial: 

Crear un MVP (Producto Mínimo Viable) con lo esencial: 

- Una plataforma web con registro de usuarios. 

Cursos básicos de ciberseguridad. 

- Un chatbot que responda preguntas sobre seguridad. 

- Un sistema de simulaciones de ataques y defensa. 

b.  Tecnologías utilizadas: 

 -Backend: React/Django/FastAPI con base de datos Firebase y ChromaDB(para las funciones con IA). 

 -Frontend: Streamlit o un LMS como Moodle. 

IA/ML: 

 -Chatbot: Watson Assistant, Dialogflow o Azure Framework Composser. 

 -Personalización: Modelos de recomendación con TensorFlow. 

 -Detección de amenazas: Splunk + modelos de IA para análisis de logs. 

c.  Pruebas con usuarios: 

- Se implementa el prototipo en un público voluntario. 

- Se recopila feedback sobre la usabilidad y efectividad. 




# 5. Testear (Mejorar el Producto Basado en Feedback y Lanzar la Plataforma) 


a.  Recopilar y analizar datos: 

- Se mide la tasa de finalización de cursos y participación en simulaciones. 

- Se analiza el rendimiento del chatbot y su capacidad para responder preguntas. 

- Se recopilan comentarios sobre la interfaz y experiencia del usuario. 

b.  Iteraciones y mejoras: 

- Actualizar la interfaz si los usuarios la encuentran difícil de usar. 

- Ajustar el chatbot con más datos para respuestas más precisas. 

- Implementar más niveles de dificultad en las simulaciones. 

- Actualizar la interfaz si los usuarios no se adecuan a su uso. 

c.  Lanzamiento oficial y escalabilidad: 

- Después de varias iteraciones, se lanza la plataforma al público. 

- Se busca financiamiento o alianzas con instituciones para expandir el proyecto. 

 
