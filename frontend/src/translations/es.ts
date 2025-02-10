import { TranslationContent } from "./types";

export const es: TranslationContent = {
  header: {
    about: "Sobre",
    schedule: "Horario",
    q_and_a: "Q & A",
    reviews: "Reseñas",
    contacts: "Contactos",
    certificate: "Certificado",
  },
  transparent: {
    first: "Bienvenidos",
    second: "Hatha Flow",
    third: "Siente el universo",
  },
  about: {
    quote:
      "«Soy Irina Malyants, instructora de yoga certificada con más de 10 años de experiencia en yoga, y te invito a mis clases en Barcelona. La práctica te ayudará a lograr una mente tranquila, mayor conciencia corporal, una conexión más profunda contigo mismo y con el mundo que te rodea, además de mejorar tu flexibilidad y resistencia. Las clases se imparten en inglés y el grupo es internacional.»",
    auther: "— Tu profesora de yoga, Irina Malyants",
  },
  schedule: {
    schedule: "Horario",
    address: "Dirección",
    classSchedule: "Horario de clases",
    sessions: [
      {
        day: "Martes",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Viernes",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Domingo",
        time: "12:15 - 13:45",
        metro: "Rocafort",
        link: "https://maps.app.goo.gl/LPucXx7Rv1Jqc74w6",
      },
    ],
  },
  locations: [
    {
      name: "ACADEMIA M",
      position: { lat: 41.377603, lng: 2.155058 },
      description: "Acogedor estudio de yoga para 10 alumnos",
      address: "Carrer de Sepúlveda, 57, L'Eixample, 08015 Barcelona",
      schedule: "Domingo: 12:15 - 13:45",
      link: "https://maps.app.goo.gl/LPucXx7Rv1Jqc74w6",
    },
    {
      name: "Yoga Club Barcelona",
      position: { lat: 41.3988579, lng: 2.1596346 },
      description: "Nuevo estudio de yoga para 20 alumnos",
      address: "Carrer de Francisco Giner, 14, Grácia, 08012 Barcelona",
      schedule: "Martes y viernes: 19:30 - 21:00",
      link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
    },
  ],
  questionAnswers: [
    {
      question: "¿Qué es el Hatha Flow Yoga?",
      answers: [
        "El Hatha Flow yoga combina asanas estáticas con ejercicios dinámicos sincronizados con la respiración para desarrollar fuerza, flexibilidad y equilibrio :)",
      ],
    },
    {
      question: "¿Cuáles son las partes de la clase?",
      answers: [
        "La clase dura 1,5 horas e incluye:",
        "Primera parte: ejercicios de respiración y meditación para calmar la mente y centrarse.",
        "Luego, seguimos con una secuencia de asanas que trabajan todos los grupos musculares, combinando movimientos dinámicos con posturas estáticas, siempre enfocándonos en las zonas objetivo.",
        "Al final de la práctica, nos relajamos completamente en Shavasana.",
      ],
    },
    {
      question: "¿Cuál es el nivel de la práctica?",
      answers: [
        "El nivel es abierto. Es perfecto para principiantes, y también ofrezco variaciones para nivel intermedio.",
      ],
    },
    {
      question: "¿Puedo asistir si nunca he hecho yoga antes?",
      answers: [
        "Sí, por supuesto. Muchas personas sin experiencia en yoga vienen a mis clases :) De hecho, les encanta y comienzan su camino en el yoga.",
      ],
    },
  ],
  reviews: [
    {
      author: "María",
      stars: 5,
      text: "Asistí por primera vez a una clase de yoga con Irina y quedé absolutamente impresionada por la atmósfera amigable y cómoda, el nivel profesional de la profesora y los cambios positivos en el cuerpo y la mente después de la clase ❤️ Irina ofrece opciones de movimientos para principiantes y para personas con experiencia, lo que hace que cada participante se sienta cómodo y logre los objetivos del curso 🌿",
    },
    {
      author: "Ekaterina",
      stars: 5,
      text: "Muchas gracias Irina por mi primera clase de yoga. Me encantó la atmósfera: nosotros, las esterillas, la hierba verde, la puesta de sol, el guitarrista, tu voz. Todo tan tranquilo ❤️❤️❤️ ¡Y un equipo estupendo! 🫂",
    },
    {
      author: "Tatyana",
      stars: 5,
      text: "Este fue un respiro en medio de la ajetreada rutina de trabajo. Me encantó especialmente la atención que se le dio a la respiración al inicio y al final de la práctica, el enfoque suave, la atmósfera y el cuidado. Fue un estado muy agradable: hubo un ejercicio útil para el cuerpo, pero no fue agotador, sino más bien una fuente de alegría. Sentí cómo se estiraban todos mis músculos y me fui completamente restaurada. Gracias por esta hora y media de cuidado personal 💜",
    },
    {
      author: "Tatyana",
      stars: 5,
      text: "Quiero agradecer a Irina por nuestras clases de yoga para el alma los domingos. Siempre llego con diferentes estados de ánimo, pero siempre me voy con una sensación de felicidad. Es una gran profesora y la atmósfera es muy positiva. Mi cuerpo también lo agradece. ¡Recomiendo con todo mi corazón! ❤️",
    },
    {
      author: "Evgeniy",
      stars: 5,
      text: "Estoy muy contento de haber empezado a practicar yoga con Irina. Es una excelente profesora, hace que cada clase sea interesante y motivadora. Siempre crea una atmósfera acogedora que me ayuda a relajarme y a concentrarme completamente en la práctica. He notado una mejora significativa en mi flexibilidad, equilibrio y fuerza, y después de las clases me siento mucho más lleno de energía. La recomiendo sinceramente como profesora de yoga.",
    },
    {
      author: "Sofia",
      stars: 5,
      text: "Después del yoga, me siento como después de un masaje terapéutico. Dos horas no parecen largas si te concentras, se siente como una siesta completa. Mi cuello y espalda ahora están mucho mejor, y cuando siento dolor en el cuello, hago algunos movimientos en casa. Es un ejercicio agradable, con una atmósfera relajante, bienestar corporal y una buena noche de sueño después de la clase. Me encanta el ejercicio de respiración al comienzo de la clase, incluso me curó un resfriado. ¡Muy recomendable! ¡Y el equipo es estupendo, lo hace aún más atractivo! :)",
    },
    {
      author: "Alexander",
      stars: 5,
      text: "He estado practicando yoga con Irina durante más de un año. Cada clase está llena de posturas conocidas que aportan energía a mi cuerpo, y también incluye nuevos movimientos que me hacen pensar en las infinitas posibilidades de mi cuerpo. He experimentado una mejora significativa en mi flexibilidad, calidad de vida y calidad del sueño, y también soy más consciente de mi conexión con la naturaleza. Si deseas ser feliz, saludable y tranquilo, debes asistir a las clases de Irina.",
    },
    {
      author: "Kirill",
      stars: 5,
      text: "Nunca había practicado yoga antes. Asistí a la clase grupal de Irina por recomendación de un amigo y supe de inmediato que seguiría practicando yoga. Después de la primera clase, me di cuenta de que mi cuerpo estaba desequilibrado y supe qué músculos necesitaban trabajo y qué debía enfocarme. A través de las clases de Irina, puedo concentrarme en mí mismo, desconectar mi mente y conectar con el momento presente. Después de unas clases, mi condición física mejoró notablemente. Ahora intento no perder ninguna clase y lo recomiendo mucho.",
    },
    {
      author: "Anton",
      stars: 5,
      text: "Al principio me costaba porque no tenía mucha flexibilidad, pero después de dos meses, la situación mejoró mucho gracias a la práctica constante. Ahora, si me pierdo una clase, mi cuerpo me lo pide :) Me encanta la atmósfera relajante en clase y la sensación de bienestar después de la clase. Durante la clase no te sientes agotado, pero después sabes que es un ejercicio efectivo.",
    },
    {
      author: "Anastasia",
      stars: 5,
      text: "¡Hola! Me encanta el yoga, ¡y también tu estilo de enseñanza! El enfoque de combinar posturas estáticas con estiramientos y fuerza es perfecto para mí, sin repeticiones largas y aburridas. Después de hacer yoga, me siento relajada y tranquila, pero mis músculos se mantienen tonificados.",
    },
    {
      author: "Alexandra",
      stars: 5,
      text: "Hola Irina! Queremos dejar una reseña positiva de tus clases 🤗 Es mi primera experiencia con yoga largo, pero fue simplemente perfecto) Estirar cada grupo muscular lentamente, combinando con la respiración, eso es yoga real. Irina es una profesora muy atenta y positiva, explica muy bien cada postura. En general, me siento muy cómoda en sus clases y, por supuesto, me siento muy bien después. Lo más importante para mí es que mi marido también disfruta mucho de las clases conmigo👍🏻",
    },
    {
      author: "Zhanna",
      stars: 5,
      text: "Quiero agradecerte mucho. Comencé a hacer yoga porque tenía dolor de espalda. Realmente me está gustando y el dolor ha disminuido considerablemente. La atmósfera en las clases es muy amigable y agradable) ¡Lo recomiendo mucho! ☺️❤️",
    },
    {
      author: "Maxim",
      stars: 5,
      text: "¡Hola a todos! Quiero agradecer mucho a Irina, ella es una profesora increíble. Sé que ha estado practicando yoga por más de 10 años, incluso tomé algunas clases con ella. Un día tuve la oportunidad de participar en sus clases como alumno y, aunque no practico yoga regularmente, tengo algo de experiencia. Debo decir que la clase con Irina fue sorprendente. Hice muchas nuevas posturas que me ayudaron a activar músculos que no sabía que tenía. Era una clase grupal, pero Irina se preocupó de corregir las posturas de todos para que las hiciéramos correctamente. Después de la clase, me sentí relajado y lleno de energía durante varios días. Es una pena que no pueda asistir más por distancia, pero recomiendo mucho que todos prueben sus clases de yoga, ¡no se arrepentirán! 😉",
    },
    {
      author: "Nastya",
      stars: 5,
      text: "Quiero decir que no practico yoga muy a menudo, pero sí puedo compararlo) Con Irina, todo fue muy agradable, su apertura y amabilidad se notan, y eso es muy importante para un instructor de yoga) Lamentablemente, no pude asistir mucho, pero si no fuera por la distancia, seguiría viniendo con mucho gusto) Me gusta que cada vez cambies las posturas, y también vi que prestas atención a cada estudiante, lo cual es muy cálido😊 Además, tu voz es increíblemente relajante, lo cual también es muy importante en una clase de yoga) Gracias por esta experiencia 🙏",
    },
  ],
  footer: {
    phrase1: "¡Gracias por tu interés en mis clases de yoga!",
    phrase2: "¡Espero verte pronto!",
  },
};
