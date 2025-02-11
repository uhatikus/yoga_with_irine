import { TranslationContent } from "./types";

export const cat: TranslationContent = {
  header: {
    about: "Sobre",
    schedule: "Horari",
    q_and_a: "Q & A",
    reviews: "Ressenyes",
    contacts: "Contactes",
    certificate: "Certificat",
  },
  transparent: {
    first: "Benvinguts",
    second: "Hatha Flow",
    third: "Sent l'univers",
  },
  about: {
    quote:
      "« Soc Irina Malyants, professora de ioga certificada amb més de 10 anys d'experiència. Et convido a les meves classes a Barcelona. Les classes s'imparteixen en anglès i el grup és internacional. La pràctica t'ajudarà a calmar la ment, augmentar la consciència corporal, connectar més profundament amb tu mateix i amb el món que t'envolta, a més de millorar la teva flexibilitat i resistència. »",
    auther: "— La teva professora de ioga, Irina",
  },
  schedule: {
    schedule: "Horari",
    address: "Adreça",
    classSchedule: "Horari de classes",
    sessions: [
      {
        day: "Dimarts",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Divendres",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Diumenge",
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
      description: "Acollidor estudi de ioga per a 10 alumnes",
      address: "Carrer de Sepúlveda, 57, L'Eixample, 08015 Barcelona",
      schedule: "Diumenge: 12:15 - 13:45",
      link: "https://maps.app.goo.gl/LPucXx7Rv1Jqc74w6",
    },
    {
      name: "Yoga Club Barcelona",
      position: { lat: 41.3988579, lng: 2.1596346 },
      description: "Nou estudi de ioga per a 20 alumnes",
      address: "Carrer de Francisco Giner, 14, Gràcia, 08012 Barcelona",
      schedule: "Dimarts i divendres: 19:30 - 21:00",
      link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
    },
  ],
  questionAnswers: [
    {
      question: "Què és el Hatha Flow Yoga?",
      answers: [
        "El Hatha Flow ioga combina asanes estàtiques amb exercicis dinàmics sincronitzats amb la respiració per desenvolupar força, flexibilitat i equilibri :)",
      ],
    },
    {
      question: "Quines són les parts de la classe?",
      answers: [
        "La classe dura 1,5 hores i inclou:",
        "- Primera part: exercicis de respiració i meditació per calmar la ment i centrar-se.",
        "- Després, seguim amb una seqüència d’asanes que treballen tots els grups musculars, combinant moviments dinàmics amb postures estàtiques, sempre enfocant-nos en les zones objectiu.",
        "- Al final de la pràctica, ens relaxem completament en Shavasana.",
      ],
    },
    {
      question: "Quin és el nivell de la pràctica?",
      answers: [
        "El nivell és obert. És perfecte per a principiants, i també ofereixo variacions per a nivell intermedi.",
      ],
    },
    {
      question: "Puc assistir si mai he fet ioga abans?",
      answers: [
        "Sí, per descomptat. Moltes persones sense experiència en ioga venen a les meves classes :) De fet, els encanta i comencen el seu camí en el ioga.",
      ],
    },
  ],
  reviews: [
    {
      author: "Maria",
      stars: 5,
      text: "Vaig visitar la classe de ioga d'Irina per primera vegada i vaig quedar absolutament impressionada per l'atmosfera amigable i còmoda, la competència de la professora i la sensació de canvis positius al cos i a la ment després de la classe ❤️ Irina va proporcionar opcions d'exercicis tant per a principiants com per a aquells amb experiència en ioga, la qual cosa va fer que la classe fos còmoda i productiva per a tot el grup 🌿",
    },
    {
      author: "Ekaterina",
      stars: 5,
      text: "Moltes gràcies, Irina, pel meu primer classe de ioga. M'ha agradat molt l'atmosfera — nosaltres, els matalassos, l'herba verda, la posta de sol, el guitarrista, la teva veu. Tan tranquil·lament ❤️❤️❤️ I una molt bona companyia🫂",
    },
    {
      author: "Tatiana",
      stars: 5,
      text: "Va ser un alè d'aire fresc enmig de la rutina laboral sense fi. M'ha agradat molt l'atenció a la respiració al principi i al final de la pràctica, l'acostament càlid, l'atmosfera i la cura. Un estat molt còmode — hi ha activitat física beneficiosa i, a més, es fa amb alegria, no amb càrrega. He sentit tots els músculs del meu cos estirats i relaxats, sortint renovada. Gràcies per aquestes hora i mitja de cura 💜",
    },
    {
      author: "Tatiana",
      stars: 5,
      text: "Vull deixar un comentari d'agraïment a Irina pels nostres sessions d'alma cada diumenge. Venia al gimnàs en diferents estats d'ànim i sempre sortia amb una gran disposició d'esperit. Una gran professora i una atmosfera positiva. El meu cos està en encant. Recomano de tot cor ❤️",
    },
    {
      author: "Evgeniy",
      stars: 5,
      text: "Estic molt content de començar a practicar ioga amb Irina. És una professora excel·lent que fa les classes molt interessants i motivadores. Sempre crea una atmosfera acollidora que em permet relaxar-me i submergir-me completament en la pràctica. He notat una millora significativa en la meva flexibilitat, equilibri i força, i em sento més enèrgic després de les classes. Recomano Irina amb gust com a professora de ioga.",
    },
    {
      author: "Sofia",
      stars: 5,
      text: "Després de la classe de ioga, el meu cos se sent com després d'un massatge terapèutic. Les dues hores no semblen llargues si et concentres i et sents com si haguessis tingut una migdiada completa. El meu coll i esquena se senten fantàsticament bé, i faig algunes de les postures a casa quan sento que el meu coll em fa mal. És un esport agradable amb una atmosfera relaxant i un benestar generalitzat i un bon son després de la classe. M'agraden molt els exercicis de respiració al començament, fins i tot el meu refredat es va desaparèixer gràcies a això. En general, recomano! La bona companyia també afegeix atractiu :)",
    },
    {
      author: "Alexander",
      stars: 5,
      text: "Fa més d'un any que vaig començar a fer ioga amb Irina. Cada classe està plena tant d'Asanas conegudes que omplen el cos amb una energia familiar, com de moviments nous que em fan pensar i adonar-me de les possibilitats del meu cos. He notat millores significatives en la flexibilitat, la qualitat de la meva vida i del meu son, i la meva percepció de mi mateix i de la natura. Si voleu ser feliços, sans i tranquils, heu de participar en les classes d'Irina.",
    },
    {
      author: "Kirill",
      stars: 5,
      text: "Mai havia fet ioga abans. Vaig anar a una classe grupal amb Irina per recomanació d'amics i vaig adonar-me immediatament que continuaria practicant. Ja a la primera classe vaig sentir quant estava descompensat el meu cos, vaig entendre quins músculs necessitava treballar i en què havia de fixar-me. A més, amb Irina, en ioga, és possible alliberar la ment de tots els pensaments i centrar-se en un mateix, els seus sentiments i la percepció del moment. Després de diverses classes, el meu estat físic ha millorat notablement. Ara intento no perdre cap classe i ho recomano a tothom.",
    },
    {
      author: "Anton",
      stars: 5,
      text: "Em va costar al principi perquè no tenia gaire flexibilitat. Però en dos mesos, la situació ha millorat molt gràcies a la pràctica constant. Ara, si em perdo una classe, el meu cos em demana ioga :) M'agrada molt l'atmosfera relaxant durant la classe i la sensació agradable de fatiga després. Sembla que no es fa molta feina durant la classe, però després es nota que ha estat un esport de veritat!",
    },
    {
      author: "Anastasia",
      stars: 5,
      text: "Hola! M'encanta el ioga! I la teva manera de fer-ho. M'agrada molt el format d'exercicis estàtics amb una mica de força i flexibilitat, però sense repeticions llargues i avorrides de les mateixes postures. Després del ioga, sento una relaxació interior, calma, però els meus músculs estan en tensió.",
    },
    {
      author: "Alexandra",
      stars: 5,
      text: "Bon dia, Irina! Volem deixar un comentari positiu sobre les teves classes🤗 És la primera experiència amb ioga de llarga durada per a mi, però sembla absolutament perfecte) Pausada, treballant cada grup muscular, la respiració — el que es necessita per al ioga real. Irina és una persona molt atenta i positiva, explica molt bé les postures, i en general em sento molt còmoda a les classes i, per descomptat, després d'elles! El principal indicador per a mi és el meu marit, que va amb molt de gust a les classes amb mi👍🏻",
    },
    {
      author: "Zhanna",
      stars: 5,
      text: "Vull dir-te moltes gràcies! Vaig decidir provar el ioga per les meves dolors d'esquena. M'agrada molt, ara la meva esquena fa molt menys mal. La classe té una atmosfera molt amistosa i agradable) Ho recomano molt ☺️❤️",
    },
    {
      author: "Maxim",
      stars: 5,
      text: "Hola a tots! Vull deixar un comentari molt positiu sobre Irina, una gran mestra. Sé que porta més de 10 anys fent ioga, fins i tot he anat amb ella a algunes classes. Un bon dia vaig poder assistir a la seva classe on ella era la instructora. Tot i que faig ioga de tant en tant, tinc experiència. El resultat de la classe amb Irina va ser espectacular. Vaig fer moltes postures noves que em van ajudar a activar músculs que no sabia que tenia. Era una classe grupal, però Irina va seguir cada participant per corregir petites faltes i assegurar-se que tothom fes les postures de forma segura. Després de la classe, vaig sentir-me lleuger i enèrgic durant diversos dies, cosa que no havia aconseguit fent ioga a casa. Desafortunadament, no puc anar-hi ara, però recomano que tothom provi fer ioga amb Irina, segur que no us en penedireu 😉",
    },
    {
      author: "Nastya",
      stars: 5,
      text: "Què vull dir, no vaig fer ioga massa sovint, però puc comparar) amb tu em vaig sentir molt còmoda, des de tu es nota l'obertura i la bondat, la qual cosa és molt important per a un instructor de ioga) malauradament vaig anar poc, però si no fos per la distància, hi continuaria anant amb molt de gust) em va agradar que algunes postures canviaven cada vegada, també vaig veure que estaves atenta a tots, això és molt agradable😊 i també tens una veu super relaxant, cosa que també és molt important en aquest context) gràcies per aquest encontre🙏",
    },
  ],
  footer: {
    phrase1: "Gràcies pel teu interès en les meves classes de ioga!",
    phrase2: "Espero veure't aviat!",
  },
};
