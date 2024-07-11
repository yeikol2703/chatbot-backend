const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://yeikolvillalobos27:njF0ZY92bKQncSVX@chatbot.otz5rfx.mongodb.net/?retryWrites=true&w=majority&appName=chatbot';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Question = mongoose.model('Question', QuestionSchema);

const questions = [
  { question: "¿Cuál es tu nombre?", answer: "Soy un chatbot creado para ayudarte." },
  { question: "¿Cómo estás?", answer: "Estoy aquí para ayudarte, siempre listo." },
  { question: "¿Qué puedes hacer?", answer: "Puedo responder preguntas, contar chistes, y ayudar con diversas tareas." },
  { question: "¿Cuál es la capital de Francia?", answer: "La capital de Francia es París." },
  { question: "¿Qué es el amor?", answer: "El amor es un sentimiento profundo de afecto hacia alguien o algo." },
  { question: "¿Cuál es el significado de la vida?", answer: "El significado de la vida es una pregunta profunda que cada persona debe descubrir por sí misma." },
  { question: "¿Cuál es tu color favorito?", answer: "No tengo preferencias de color, pero puedo decirte que muchos disfrutan del azul." },
  { question: "¿Cuál es tu comida favorita?", answer: "No como, pero sé que muchas personas disfrutan de la pizza." },
  { question: "¿Cuál es tu animal favorito?", answer: "Me gustan todos los animales, cada uno tiene algo especial." },
  { question: "¿Puedes contarme un chiste?", answer: "Claro, ¿por qué los pájaros no usan Facebook? Porque ya tienen Twitter." },
  { question: "¿Qué es la inteligencia artificial?", answer: "La inteligencia artificial es la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos." },
  { question: "¿Quién es el presidente de Estados Unidos?", answer: "El presidente de Estados Unidos es Joe Biden." },
  { question: "¿Cuál es el océano más grande del mundo?", answer: "El océano más grande del mundo es el Océano Pacífico." },
  { question: "¿Qué es el calentamiento global?", answer: "El calentamiento global es el aumento de la temperatura media del sistema climático de la Tierra." },
  { question: "¿Qué es el cambio climático?", answer: "El cambio climático es un cambio significativo y duradero en los patrones de clima en la Tierra." },
  { question: "¿Quién es el autor de 'Cien años de soledad'?", answer: "El autor de 'Cien años de soledad' es Gabriel García Márquez." },
  { question: "¿Qué es un agujero negro?", answer: "Un agujero negro es una región del espacio donde la fuerza de gravedad es tan fuerte que ni la luz puede escapar." },
  { question: "¿Qué es la Vía Láctea?", answer: "La Vía Láctea es la galaxia que contiene nuestro sistema solar." },
  { question: "¿Qué es la teoría de la relatividad?", answer: "La teoría de la relatividad es una teoría física propuesta por Albert Einstein que describe la relación entre espacio y tiempo." },
  { question: "¿Quién es el autor de 'Don Quijote de la Mancha'?", answer: "El autor de 'Don Quijote de la Mancha' es Miguel de Cervantes." },
  { question: "¿Cuál es el país más grande del mundo?", answer: "El país más grande del mundo por área es Rusia." },
  { question: "¿Qué es el Big Bang?", answer: "El Big Bang es la teoría que describe el origen del universo a partir de un estado extremadamente denso y caliente." },
  { question: "¿Cuál es el río más largo del mundo?", answer: "El río más largo del mundo es el río Amazonas." },
  { question: "¿Qué es la biodiversidad?", answer: "La biodiversidad es la variedad de formas de vida en la Tierra." },
  { question: "¿Quién fue Albert Einstein?", answer: "Albert Einstein fue un físico teórico conocido por desarrollar la teoría de la relatividad." },
  { question: "¿Qué es la inteligencia emocional?", answer: "La inteligencia emocional es la capacidad de reconocer, entender y gestionar nuestras propias emociones y las de los demás." },
  { question: "¿Cuál es la montaña más alta del mundo?", answer: "La montaña más alta del mundo es el Monte Everest." },
  { question: "¿Qué es un ecosistema?", answer: "Un ecosistema es una comunidad de organismos vivos y su entorno físico, interactuando como un sistema." },
  { question: "¿Quién fue Leonardo da Vinci?", answer: "Leonardo da Vinci fue un polímata italiano, conocido por su arte, inventos y estudios científicos." },
  { question: "¿Qué es el ADN?", answer: "El ADN es el ácido desoxirribonucleico, una molécula que contiene las instrucciones genéticas para el desarrollo y funcionamiento de los organismos vivos." },
  { question: "¿Qué es un algoritmo?", answer: "Un algoritmo es un conjunto de instrucciones paso a paso para realizar una tarea o resolver un problema." },
  { question: "¿Quién es el fundador de Microsoft?", answer: "El fundador de Microsoft es Bill Gates, junto con Paul Allen." },
  { question: "¿Qué es el Internet de las Cosas?", answer: "El Internet de las Cosas es la interconexión de dispositivos y objetos cotidianos a través de Internet, permitiendo que se comuniquen y compartan datos." },
  { question: "¿Qué es un virus informático?", answer: "Un virus informático es un programa malicioso que se replica y propaga infectando archivos y sistemas." },
  { question: "¿Qué es la nube informática?", answer: "La nube informática es el uso de servidores remotos en Internet para almacenar, gestionar y procesar datos, en lugar de hacerlo en servidores locales o computadoras personales." },
  { question: "¿Qué es la realidad virtual?", answer: "La realidad virtual es una simulación generada por computadora de un entorno tridimensional que puede ser interactivo y percibido como real." },
  { question: "¿Quién fue Marie Curie?", answer: "Marie Curie fue una científica polaca-francesa, conocida por sus investigaciones en radioactividad y por ser la primera persona en recibir dos premios Nobel en diferentes campos científicos." },
  { question: "¿Qué es la criptografía?", answer: "La criptografía es el estudio y la práctica de técnicas para asegurar la comunicación y los datos mediante la codificación." },
  { question: "¿Qué es el blockchain?", answer: "El blockchain es una tecnología de registro distribuido que permite llevar un registro seguro y transparente de transacciones." },
  { question: "¿Qué es la inteligencia artificial?", answer: "La inteligencia artificial es la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos." },
  { question: "¿Qué es el aprendizaje automático?", answer: "El aprendizaje automático es un subcampo de la inteligencia artificial que permite a los sistemas aprender y mejorar automáticamente a partir de la experiencia sin ser programados explícitamente." },
  { question: "¿Qué es el aprendizaje profundo?", answer: "El aprendizaje profundo es un subcampo del aprendizaje automático que utiliza redes neuronales artificiales con muchas capas para modelar y analizar datos complejos." },
  { question: "¿Qué es el Internet?", answer: "El Internet es una red global de redes informáticas que permite la comunicación y el intercambio de información a través de protocolos estándar." },
  { question: "¿Qué es un sistema operativo?", answer: "Un sistema operativo es un software que administra los recursos de hardware y proporciona servicios comunes a los programas informáticos." },
  { question: "¿Qué es la ciberseguridad?", answer: "La ciberseguridad es la práctica de proteger los sistemas informáticos, redes y datos de ataques, daños y acceso no autorizado." },
  { question: "¿Qué es un ataque de phishing?", answer: "El phishing es un tipo de ataque cibernético en el que un atacante se hace pasar por una entidad confiable para engañar a las personas y obtener información confidencial." },
  { question: "¿Qué es una contraseña segura?", answer: "Una contraseña segura es una contraseña que es difícil de adivinar y contiene una combinación de letras mayúsculas y minúsculas, números y símbolos." },
  { question: "¿Qué es el software de código abierto?", answer: "El software de código abierto es software cuyo código fuente está disponible públicamente y puede ser modificado y distribuido por cualquiera." },
  { question: "¿Qué es la realidad aumentada?", answer: "La realidad aumentada es una tecnología que superpone información generada por computadora sobre el mundo real, mejorando la percepción del usuario." },
  { question: "¿Qué es el big data?", answer: "El big data se refiere a conjuntos de datos extremadamente grandes y complejos que requieren técnicas avanzadas de análisis para extraer información valiosa." },
  { question: "¿Qué es una red neuronal?", answer: "Una red neuronal es un modelo computacional inspirado en la estructura del cerebro humano, compuesto por nodos interconectados que procesan información." },
  { question: "¿Qué es la computación cuántica?", answer: "La computación cuántica es un tipo de computación que utiliza principios de la mecánica cuántica para realizar cálculos a velocidades mucho mayores que las computadoras clásicas." },
  { question: "¿Qué es el machine learning?", answer: "El machine learning, o aprendizaje automático, es un subcampo de la inteligencia artificial que permite a las máquinas aprender y mejorar a partir de datos sin ser programadas explícitamente." },
  { question: "¿Qué es el lenguaje natural?", answer: "El lenguaje natural es el lenguaje que los humanos usan para comunicarse, como el español o el inglés, y su procesamiento implica que las computadoras entiendan y generen dicho lenguaje." },
  { question: "¿Qué es un chatbot?", answer: "Un chatbot es un programa informático diseñado para simular una conversación con usuarios humanos, especialmente a través de Internet." },
  { question: "¿Qué es la computación en la nube?", answer: "La computación en la nube es la entrega de servicios de computación a través de Internet, incluyendo almacenamiento, procesamiento y bases de datos." },
  { question: "¿Qué es la inteligencia artificial?", answer: "La inteligencia artificial es la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos." },
  { question: "¿Qué es un algoritmo?", answer: "Un algoritmo es un conjunto de instrucciones paso a paso para realizar una tarea o resolver un problema." },
  { question: "¿Qué es el aprendizaje supervisado?", answer: "El aprendizaje supervisado es un tipo de aprendizaje automático en el que el modelo se entrena con datos etiquetados para hacer predicciones o clasificaciones." },
  { question: "¿Qué es el aprendizaje no supervisado?", answer: "El aprendizaje no supervisado es un tipo de aprendizaje automático en el que el modelo encuentra patrones en datos no etiquetados." },
  { question: "¿Qué es el aprendizaje por refuerzo?", answer: "El aprendizaje por refuerzo es un tipo de aprendizaje automático en el que un agente aprende a tomar decisiones mediante ensayo y error, recibiendo recompensas o castigos." },
  { question: "¿Qué es la visión por computadora?", answer: "La visión por computadora es un campo de la inteligencia artificial que permite a las computadoras interpretar y entender imágenes y videos del mundo real." },
  { question: "¿Qué es el procesamiento de lenguaje natural?", answer: "El procesamiento de lenguaje natural es un campo de la inteligencia artificial que se centra en la interacción entre las computadoras y el lenguaje humano." },
  { question: "¿Qué es la robótica?", answer: "La robótica es un campo de la ingeniería y la ciencia que se dedica al diseño, construcción, operación y uso de robots." },
  { question: "¿Qué es la nanotecnología?", answer: "La nanotecnología es la manipulación de la materia a escala nanométrica para crear materiales y dispositivos con propiedades únicas." },
  { question: "¿Qué es la biotecnología?", answer: "La biotecnología es el uso de organismos vivos o sus componentes para desarrollar productos útiles, como medicamentos o alimentos." },
  { question: "¿Qué es la energía renovable?", answer: "La energía renovable es la energía que se obtiene de fuentes naturales que se regeneran, como la solar, eólica y hidroeléctrica." },
  { question: "¿Qué es el cambio climático?", answer: "El cambio climático es un cambio significativo y duradero en los patrones de clima en la Tierra." },
  { question: "¿Qué es el reciclaje?", answer: "El reciclaje es el proceso de convertir materiales desechados en nuevos productos para reducir el consumo de recursos naturales." },
  { question: "¿Qué es un motor de búsqueda?", answer: "Un motor de búsqueda es un sistema que permite a los usuarios buscar información en Internet utilizando palabras clave." },
  { question: "¿Qué es un navegador web?", answer: "Un navegador web es una aplicación que permite a los usuarios acceder y navegar por sitios web en Internet." },
  { question: "¿Qué es la inteligencia artificial?", answer: "La inteligencia artificial es la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos." },
  { question: "¿Qué es el aprendizaje profundo?", answer: "El aprendizaje profundo es un subcampo del aprendizaje automático que utiliza redes neuronales artificiales con muchas capas para modelar y analizar datos complejos." },
  { question: "¿Qué es el big data?", answer: "El big data se refiere a conjuntos de datos extremadamente grandes y complejos que requieren técnicas avanzadas de análisis para extraer información valiosa." },
  { question: "¿Qué es la nube informática?", answer: "La nube informática es el uso de servidores remotos en Internet para almacenar, gestionar y procesar datos, en lugar de hacerlo en servidores locales o computadoras personales." },
  { question: "¿Qué es un virus informático?", answer: "Un virus informático es un programa malicioso que se replica y propaga infectando archivos y sistemas." },
  { question: "¿Qué es el blockchain?", answer: "El blockchain es una tecnología de registro distribuido que permite llevar un registro seguro y transparente de transacciones." },
  { question: "¿Qué es la criptografía?", answer: "La criptografía es el estudio y la práctica de técnicas para asegurar la comunicación y los datos mediante la codificación." },
  { question: "¿Qué es la ciberseguridad?", answer: "La ciberseguridad es la práctica de proteger los sistemas informáticos, redes y datos de ataques, daños y acceso no autorizado." },
  { question: "¿Qué es el Internet de las Cosas?", answer: "El Internet de las Cosas es la interconexión de dispositivos y objetos cotidianos a través de Internet, permitiendo que se comuniquen y compartan datos." },
  { question: "¿Qué es un ataque de phishing?", answer: "El phishing es un tipo de ataque cibernético en el que un atacante se hace pasar por una entidad confiable para engañar a las personas y obtener información confidencial." },
  { question: "¿Qué es la realidad aumentada?", answer: "La realidad aumentada es una tecnología que superpone información generada por computadora sobre el mundo real, mejorando la percepción del usuario." },
  { question: "¿Qué es la realidad virtual?", answer: "La realidad virtual es una simulación generada por computadora de un entorno tridimensional que puede ser interactivo y percibido como real." },
  { question: "¿Qué es un ecosistema?", answer: "Un ecosistema es una comunidad de organismos vivos y su entorno físico, interactuando como un sistema." },
  { question: "¿Qué es la biodiversidad?", answer: "La biodiversidad es la variedad de formas de vida en la Tierra." },
  { question: "¿Qué es la energía solar?", answer: "La energía solar es la energía obtenida del sol mediante el uso de paneles solares y otras tecnologías." },
  { question: "¿Qué es la energía eólica?", answer: "La energía eólica es la energía obtenida del viento mediante el uso de aerogeneradores." },
  { question: "Hola", answer: "¡Hola! ¿Cómo puedo ayudarte hoy?" },
  { question: "¿Qué es la energía hidroeléctrica?", answer: "La energía hidroeléctrica es la energía obtenida del agua en movimiento mediante el uso de presas y otras infraestructuras." }
]

Question.insertMany(questions)
  .then(() => {
    console.log('Datos insertados correctamente');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error insertando datos:', error);
    mongoose.connection.close();
  });
