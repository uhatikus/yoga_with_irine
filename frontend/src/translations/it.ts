import { TranslationContent } from "./types";

export const it: TranslationContent = {
  header: {
    about: "Chi siamo",
    schedule: "Orario",
    q_and_a: "Q & A",
    reviews: "Recensioni",
    contacts: "Contatti",
    certificate: "Certificato",
  },
  transparent: {
    first: "Benvenuti",
    second: "Hatha Flow",
    third: "Senti l'universo",
  },
  about: {
    quote:
      "« Sono Irina Malyants, insegnante di yoga certificata con più di 10 anni di esperienza. Ti invito alle mie lezioni a Barcellona. Le lezioni si svolgono in inglese e il gruppo è internazionale. La pratica ti aiuterà a calmare la mente, aumentare la consapevolezza del corpo, connetterti più profondamente con te stesso e con il mondo che ti circonda, oltre a migliorare la tua flessibilità e resistenza. »",
    auther: "— La tua insegnante di yoga, Irina",
  },
  schedule: {
    schedule: "Orario",
    address: "Indirizzo",
    classSchedule: "Orario delle lezioni",
    sessions: [
      {
        day: "Martedì",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Venerdì",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Domenica",
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
      description: "Accogliente studio di yoga per 10 studenti",
      address: "Carrer de Sepúlveda, 57, L'Eixample, 08015 Barcellona",
      schedule: "Domenica: 12:15 - 13:45",
      link: "https://maps.app.goo.gl/LPucXx7Rv1Jqc74w6",
    },
    {
      name: "Yoga Club Barcelona",
      position: { lat: 41.3988579, lng: 2.1596346 },
      description: "Nuovo studio di yoga per 20 studenti",
      address: "Carrer de Francisco Giner, 14, Gràcia, 08012 Barcellona",
      schedule: "Martedì e venerdì: 19:30 - 21:00",
      link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
    },
  ],
  questionAnswers: [
    {
      question: "Cos'è l'Hatha Flow Yoga?",
      answers: [
        "L'Hatha Flow yoga combina asana statiche con esercizi dinamici sincronizzati con la respirazione per sviluppare forza, flessibilità ed equilibrio :)",
      ],
    },
    {
      question: "Quali sono le fasi della lezione?",
      answers: [
        "La lezione dura 1,5 ore e include:",
        "- Prima parte: esercizi di respirazione e meditazione per calmare la mente e concentrarsi.",
        "- Poi, seguiamo una sequenza di asana che lavorano su tutti i gruppi muscolari, combinando movimenti dinamici con posizioni statiche, sempre concentrandoci sulle zone target.",
        "- Alla fine della pratica, ci rilassiamo completamente in Shavasana.",
      ],
    },
    {
      question: "Qual è il livello della pratica?",
      answers: [
        "Il livello è aperto. È perfetto per principianti, e offro anche variazioni per il livello intermedio.",
      ],
    },
    {
      question: "Posso partecipare se non ho mai fatto yoga prima?",
      answers: [
        "Sì, certo. Molte persone senza esperienza di yoga partecipano alle mie lezioni :) In effetti, lo adorano e iniziano il loro percorso nello yoga.",
      ],
    },
  ],
  reviews: [
    {
      author: "Maria",
      stars: 5,
      text: "Ho partecipato alla mia prima lezione di yoga con Irina e sono rimasta assolutamente impressionata dall'atmosfera amichevole e confortevole, dal livello professionale dell'insegnante e dai cambiamenti positivi nel corpo e nella mente dopo la lezione ❤️ Irina offre movimenti adatti sia ai principianti che a chi ha più esperienza, permettendo a ogni partecipante di sentirsi a proprio agio e di raggiungere gli obiettivi del corso 🌿",
    },
    {
      author: "Ekaterina",
      stars: 5,
      text: "Grazie mille Irina per la mia prima lezione di yoga. Ho adorato l'atmosfera: noi, i tappetini, l'erba verde, il tramonto, il chitarrista, la tua voce. È stato tutto così rilassante ❤️❤️❤️ E una squadra fantastica 🫂",
    },
    {
      author: "Tatyana",
      stars: 5,
      text: "È stata una boccata d'aria fresca nella mia vita frenetica. Mi è piaciuta particolarmente l'attenzione dedicata alla respirazione all'inizio e alla fine della pratica, l'approccio dolce, l'atmosfera e le cure. È stato uno stato molto piacevole: un esercizio utile per il corpo, ma non esagerato, piuttosto una fonte di gioia. Ho sentito ogni muscolo distendersi e sono uscita completamente restaurata. Grazie per quest'ora e mezza di cura personale 💜",
    },
    {
      author: "Tatyana",
      stars: 5,
      text: "Voglio ringraziare Irina per le nostre lezioni di yoga la domenica. Arrivo sempre con stati d'animo diversi, ma me ne vado sempre felice. È un'insegnante fantastica e l'atmosfera è molto positiva. Il mio corpo ne ha davvero beneficiato. Raccomando con tutto il cuore ❤️",
    },
    {
      author: "Evgeniy",
      stars: 5,
      text: "Sono davvero felice di aver iniziato a fare yoga con Irina. È un'insegnante fantastica, ogni lezione è interessante e motivante. Crea sempre un'atmosfera accogliente che mi aiuta a rilassarmi e a concentrarmi completamente sulla pratica. Ho notato un miglioramento significativo nella mia flessibilità, nel mio equilibrio e nella mia forza, e dopo le lezioni mi sento molto più energico. La consiglio vivamente come insegnante di yoga.",
    },
    {
      author: "Sofia",
      stars: 5,
      text: "Dopo lo yoga mi sento come dopo un massaggio terapeutico. Due ore non sembrano mai lunghe quando ti concentri, è come una vera e propria siesta. Il mio collo e la mia schiena stanno molto meglio, e quando sento dolore al collo faccio alcuni movimenti a casa. È un esercizio piacevole, con un'atmosfera rilassante, un benessere corporeo e una buona notte di sonno dopo la lezione. Adoro l'esercizio di respirazione all'inizio della lezione, mi ha anche curato un raffreddore. Molto consigliato! E il gruppo è fantastico, lo rende ancora più attraente :)",
    },
    {
      author: "Alexander",
      stars: 5,
      text: "Faccio yoga con Irina da più di un anno. Ogni lezione è piena di posizioni familiari che danno energia al mio corpo, ma anche di nuovi movimenti che mi fanno riflettere sulle infinite possibilità del mio corpo. Ho notato un miglioramento significativo nella mia flessibilità, nella qualità della vita e nella qualità del sonno, e sono anche più consapevole della mia connessione con la natura. Se vuoi essere felice, sano e sereno, devi partecipare alle lezioni di Irina.",
    },
    {
      author: "Kirill",
      stars: 5,
      text: "Non avevo mai praticato yoga prima. Sono andato alla lezione di gruppo di Irina su consiglio di un amico e ho capito subito che avrei continuato a fare yoga. Dopo la prima lezione mi sono accorto che il mio corpo era squilibrato e ho capito quali muscoli avevano bisogno di essere lavorati e su cosa concentrarmi. Grazie alle lezioni di Irina posso concentrarmi su me stesso, svuotare la mente e sentire il momento presente. Dopo alcune lezioni, la mia condizione fisica è migliorata notevolmente. Ora cerco di non perdere nessuna lezione e la consiglio vivamente.",
    },
    {
      author: "Anton",
      stars: 5,
      text: "All'inizio mi era difficile perché non avevo molta flessibilità, ma dopo due mesi la situazione è migliorata tantissimo grazie alla pratica costante. Ora, se perdo una lezione, il mio corpo me lo chiede :) Mi piace l'atmosfera rilassante durante la lezione e la sensazione di benessere dopo. Durante la lezione non ci si sente mai esausti, ma dopo si sa che è stato un esercizio efficace.",
    },
    {
      author: "Anastasia",
      stars: 5,
      text: "Ciao! Adoro lo yoga, e adoro anche il tuo stile di insegnamento! Il mix di posizioni statiche con forza e stretching è perfetto per me, senza ripetizioni lunghe e noiose. Dopo lo yoga mi sento rilassata e serena, ma i miei muscoli sono tonificati.",
    },
    {
      author: "Alexandra",
      stars: 5,
      text: "Ciao Irina! Vogliamo lasciare una recensione positiva sulle tue lezioni 🤗 È la mia prima esperienza con lo yoga lungo, ma è stato semplicemente perfetto) Allungare ogni gruppo muscolare lentamente, combinando con la respirazione, questo è il vero yoga. Irina è un'insegnante molto attenta e positiva, spiega ogni postura molto bene. In generale, mi sento molto a mio agio nelle sue lezioni e, naturalmente, mi sento molto bene dopo. La cosa più importante per me è che anche mio marito ama molto venire alle lezioni con me👍🏻",
    },
    {
      author: "Zhanna",
      stars: 5,
      text: "Voglio ringraziarti molto. Ho iniziato a fare yoga perché avevo dolore alla schiena. Mi sta piacendo molto e il dolore è diminuito notevolmente. L'atmosfera nelle lezioni è molto amichevole e piacevole) Lo consiglio tantissimo! ☺️❤️",
    },
    {
      author: "Maxim",
      stars: 5,
      text: "Ciao a tutti! Voglio fare un commento molto positivo su Irina. So che pratica yoga da più di 10 anni e ho anche seguito alcune lezioni con lei. Un giorno ho avuto l'opportunità di partecipare alle sue lezioni come allievo e, sebbene non pratichi yoga regolarmente, ho un po' di esperienza. Devo dire che la lezione con Irina è stata sorprendente. Ho fatto molte nuove posizioni che mi hanno permesso di attivare muscoli che non sapevo di avere. Era una lezione di gruppo, ma Irina si è preoccupata di correggere le posture di tutti per fare in modo che le eseguissero correttamente. Dopo la lezione mi sono sentito rilassato e pieno di energia per diversi giorni. Peccato che non possa partecipare più spesso a causa della distanza, ma consiglio vivamente a tutti di provare le sue lezioni, non se ne pentiranno! 😉",
    },
    {
      author: "Nastya",
      stars: 5,
      text: "Voglio dire che non pratico yoga molto spesso, ma posso fare un confronto) Con Irina è stato tutto molto piacevole, la sua apertura e gentilezza si notano, ed è una cosa molto importante per un insegnante di yoga) Purtroppo non sono riuscita ad andare spesso, ma se non fosse per la distanza, verrei con molto piacere) Mi piace che cambi sempre gli esercizi, e ho visto anche che fai attenzione a ciascuno studente, cosa che fa sentire molto bene😊 Inoltre, la tua voce è incredibilmente rilassante, il che è molto importante in una lezione di yoga) Grazie per questa esperienza 🙏",
    },
  ],
  footer: {
    phrase1: "Grazie per il tuo interesse per le mie lezioni di yoga!",
    phrase2: "Spero di vederti presto!",
  },
};
