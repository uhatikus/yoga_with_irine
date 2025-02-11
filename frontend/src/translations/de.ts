import { TranslationContent } from "./types";

export const de: TranslationContent = {
  header: {
    about: "Über",
    schedule: "Stundenplan",
    q_and_a: "Q & A",
    reviews: "Bewertungen",
    contacts: "Kontakte",
    certificate: "Zertifikat",
  },
  transparent: {
    first: "Willkommen",
    second: "Hatha Flow",
    third: "Fühle das Universum",
  },
  about: {
    quote:
      "« Ich bin Irina Malyants, eine zertifizierte Yogalehrerin mit über 10 Jahren Erfahrung im Yoga. Ich lade dich ein, an meinen Kursen in Barcelona teilzunehmen. Die Yogakurse finden auf Englisch statt und die Gruppe ist international. Die Praxis führt zu einem ruhigen Geist, einem gesteigerten Körperbewusstsein, einer tieferen Verbindung zu dir selbst und der Welt um dich herum sowie zu mehr Flexibilität und Ausdauer! »",
    auther: "— Deine Yogalehrerin, Irina",
  },
  schedule: {
    schedule: "Stundenplan",
    address: "Adresse",
    classSchedule: "Kursplan",
    sessions: [
      {
        day: "Dienstag",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Freitag",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Sonntag",
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
      description: "Gemütliches Yogastudio für 10 Schüler",
      address: "Carrer de Sepúlveda, 57, L'Eixample, 08015 Barcelona",
      schedule: "Sonntag: 12:15 - 13:45",
      link: "https://maps.app.goo.gl/LPucXx7Rv1Jqc74w6",
    },
    {
      name: "Yoga Club Barcelona",
      position: { lat: 41.3988579, lng: 2.1596346 },
      description: "Neues Yogastudio für 20 Schüler",
      address: "Carrer de Francisco Giner, 14, Gràcia, 08012 Barcelona",
      schedule: "Dienstag & Freitag: 19:30 - 21:00",
      link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
    },
  ],
  questionAnswers: [
    {
      question: "Was ist Hatha Flow Yoga?",
      answers: [
        "Hatha Flow Yoga kombiniert statische Asanas mit dynamischen Übungen, synchronisiert mit der Atmung, um Kraft, Flexibilität und Gleichgewicht aufzubauen :)",
      ],
    },
    {
      question: "Wie ist der Kurs aufgebaut?",
      answers: [
        "Der Kurs dauert 1,5 Stunden und umfasst:",
        "- Den ersten Teil mit Atemübungen und Meditation, um den Geist zu beruhigen und sich zu zentrieren.",
        "- Danach folgt eine Abfolge von Asanas, die alle Muskelgruppen ansprechen, wobei dynamische Bewegungen mit statischen Posen kombiniert werden und der Fokus auf den Zielzonen liegt.",
        "- Am Ende der Praxis entspannen wir uns vollständig in Shavasana.",
      ],
    },
    {
      question: "Welches Niveau hat der Kurs?",
      answers: [
        "Das Niveau ist offen. Es ist perfekt für Anfänger, und ich biete auch Variationen für das mittlere Niveau an.",
      ],
    },
    {
      question: "Kann ich teilnehmen, wenn ich noch nie Yoga gemacht habe?",
      answers: [
        "Ja, natürlich. Viele Menschen ohne Yoga-Erfahrung kommen zu meinen Kursen :) Und tatsächlich genießen sie es sehr und beginnen ihre Yoga-Reise.",
      ],
    },
  ],
  reviews: [
    {
      author: "Maria",
      stars: 5,
      text: "Ich habe zum ersten Mal an Irinas Yogakurs teilgenommen und war absolut beeindruckt von der freundlichen und angenehmen Atmosphäre, der Professionalität der Lehrerin und dem positiven Gefühl von Veränderungen im Körper und Geist nach dem Kurs ❤️ Irina bot Übungen sowohl für Anfänger als auch für erfahrene Yogis an, was den Kurs für alle Teilnehmer bequem und produktiv machte 🌿",
    },
    {
      author: "Ekaterina",
      stars: 5,
      text: "Vielen Dank, Irina, für meine erste Yogastunde. Ich habe die Atmosphäre sehr genossen – wir, die Matten, das grüne Gras, der Sonnenuntergang, der Gitarrist, deine Stimme. So friedlich ❤️❤️❤️ Und eine tolle Gesellschaft🫂",
    },
    {
      author: "Tatjana",
      stars: 5,
      text: "Es war ein erfrischender Moment in der Hektik des Arbeitsalltags, der nie endet. Ich mochte besonders die Aufmerksamkeit auf das Atmen zu Beginn und am Ende der Praxis, den vorsichtigen Ansatz, die Atmosphäre und die Fürsorge. Es war ein sehr angenehmer Zustand — es gab eine nützliche körperliche Aktivität, aber es war keine Last, sondern Freude. Ich fühlte, wie sich jede Muskelgruppe in meinem Körper dehnte und ich danach erfrischt und erholt war. Vielen Dank für diese anderthalb Stunden der Selbstfürsorge 💜",
    },
    {
      author: "Tatjana",
      stars: 5,
      text: "Ich möchte Irina für unsere herzlichen Sonntagskurse danken. Ich kam mit unterschiedlichen Stimmungen ins Studio, aber ging immer mit einer tollen Einstellung nach Hause. Eine tolle Lehrerin, eine positive Atmosphäre. Mein Körper ist begeistert. Sehr empfehlenswert ❤️",
    },
    {
      author: "Evgeniy",
      stars: 5,
      text: "Ich bin sehr froh, dass ich mit Irina angefangen habe, Yoga zu praktizieren. Sie ist eine großartige Lehrerin, die den Unterricht sehr interessant und motivierend gestaltet. Sie schafft immer eine gemütliche Atmosphäre, die mir hilft, mich zu entspannen und vollständig in die Praxis einzutauchen. Ich habe eine deutliche Verbesserung meiner Flexibilität, Balance und Kraft bemerkt und fühle mich nach dem Unterricht viel energiegeladener. Ich kann Irina als Yogalehrerin nur empfehlen.",
    },
    {
      author: "Sofia",
      stars: 5,
      text: "Nach dem Yoga fühle ich mich wie nach einer therapeutischen Massage. Zwei Stunden fühlen sich nicht lang an, wenn man sich darauf einstellt, es fühlt sich wie ein vollständiger Mittagsschlaf an. Mein Nacken und Rücken fühlen sich jetzt wunderbar an, einige Übungen mache ich zu Hause, wenn ich merke, dass mein Nacken schmerzt. Es ist ein angenehmer Sport, beruhigende Atmosphäre, gutes Wohlbefinden und ein erholsamer Schlaf nach dem Kurs. Ich liebe die Atemübungen zu Beginn des Unterrichts, sie haben sogar meinen Schnupfen geheilt. Insgesamt sehr zu empfehlen! Eine angenehme Gesellschaft macht es noch attraktiver :)",
    },
    {
      author: "Alexander",
      stars: 5,
      text: "Ich gehe jetzt schon mehr als ein Jahr zum Yoga bei Irina. Jede Stunde ist erfüllt von den bereits bekannten Asanas, die meinen Körper mit vertrauter Energie durchströmen, aber auch von völlig neuen Bewegungen, die mich dazu bringen, über die Möglichkeiten meines Körpers nachzudenken. Ich spüre eine deutliche Verbesserung der Flexibilität, Lebensqualität und Schlafqualität, sowie ein stärkeres Bewusstsein für mich selbst und die Natur um mich herum. Wenn du glücklich, gesund und ruhig sein möchtest, solltest du unbedingt Irinas Kurse besuchen.",
    },
    {
      author: "Kirill",
      stars: 5,
      text: "Ich habe vorher nie Yoga gemacht. Ich kam zu Irinas Gruppenkurs auf Empfehlung von Freunden und wusste sofort, dass ich weitermachen würde. Schon nach der ersten Stunde fühlte ich, wie ungleichmäßig mein Körper entwickelt war, und ich merkte, welche Muskelgruppen bearbeitet werden mussten und worauf ich achten sollte. Bei Irina kann man den Kopf von allen Gedanken befreien und sich auf sich selbst konzentrieren, auf seine Gefühle und Empfindungen im Moment. Nach ein paar Stunden hat sich mein körperliches Wohlbefinden deutlich verbessert. Jetzt versuche ich, keine Stunde zu verpassen und empfehle es jedem.",
    },
    {
      author: "Anton",
      stars: 5,
      text: "Am Anfang war es schwierig für mich, da ich keine Dehnung hatte. Aber nach zwei Monaten hat sich die Situation dank der regelmäßigen Teilnahme deutlich verbessert. Jetzt, wenn ich eine Stunde verpasse, verlangt mein Körper nach Yoga :) Ich liebe die entspannende Atmosphäre während des Unterrichts und das angenehme Gefühl der Erschöpfung danach. Während des Unterrichts fühlt man sich nicht besonders erschöpft, aber danach merkt man, dass es trotzdem Sport ist!",
    },
    {
      author: "Anastasia",
      stars: 5,
      text: "Hallo! Ich liebe Yoga wirklich! Und deinen Unterrichtsstil. Der Mix aus statischen, kräftigenden Übungen und Dehnung ist perfekt für mich, dabei gibt es keine langen, langweiligen Wiederholungen. Nach dem Yoga fühle ich mich innerlich entspannt, ruhig, aber meine Muskeln sind dennoch straff.",
    },
    {
      author: "Alexandra",
      stars: 5,
      text: "Hallo Irina! Wir möchten eine positive Bewertung für deinen Unterricht hinterlassen 🤗 Das ist meine erste Erfahrung mit so langer Yoga-Praxis, aber es fühlt sich einfach perfekt an) langsam und in Ruhe jede Muskelgruppe dehnen, mit der Atmung — das ist wahre Yoga. Irina ist eine sehr aufmerksame und positive Lehrerin, die jede Asana gut erklärt. Insgesamt fühle ich mich während des Unterrichts immer sehr wohl und natürlich auch danach! Der wichtigste Indikator für mich ist mein Mann, der gerne mit mir zusammen an den Kursen teilnimmt 👍🏻",
    },
    {
      author: "Zhanna",
      stars: 5,
      text: "Ich möchte dir ganz herzlich danken! Ich habe mit Yoga angefangen, weil ich oft Rückenschmerzen hatte. Ich finde es wirklich toll, dass meine Rückenschmerzen viel seltener geworden sind. Der Unterricht hat eine sehr freundliche und angenehme Atmosphäre) Ich kann es nur empfehlen ☺️❤️",
    },
    {
      author: "Maxim",
      stars: 5,
      text: "Hallo zusammen! Ich möchte eine sehr positive Bewertung für Irina abgeben. Ich weiß, dass sie schon mehr als 10 Jahre Yoga praktiziert und habe auch einige ihrer Kurse besucht. Eines Tages ergab sich die Gelegenheit, an einem ihrer Kurse teilzunehmen und sie als meine Lehrerin zu erleben. Obwohl ich nicht regelmäßig Yoga mache, habe ich etwas Erfahrung. Ich muss sagen, der Effekt nach dem Unterricht mit Irina war erstaunlich. Während des Kurses gab es viele interessante Asanas, die mir halfen, Muskeln zu dehnen, von denen ich nicht einmal wusste, dass ich sie habe. Es war ein Gruppenkurs, aber Irina konnte dennoch auf jeden Teilnehmer achten und alle Fehler korrigieren, damit jeder die Position sicher und korrekt ausführt. Nach dem Kurs fühlte ich mich tagelang leicht und voller Energie. Es ist schade, dass ich aufgrund der Entfernung nicht mehr teilnehmen kann, aber ich kann jedem nur empfehlen, es mit Irina zu versuchen — ich denke, nach einer Stunde wirst du nicht aufhören wollen 😉",
    },
    {
      author: "Nastya",
      stars: 5,
      text: "Was soll ich sagen, ich habe nicht so oft Yoga gemacht, aber ich kann es vergleichen) Mit dir war es sehr angenehm, du strahlst Offenheit und Freundlichkeit aus, was für einen Yogalehrer sehr wichtig ist) Leider war ich nicht oft da, aber wenn es nicht die Entfernung wäre, würde ich mit Freude weiterhin kommen) Es gefällt mir, dass du jedes Mal die Übungen änderst, außerdem habe ich gesehen, dass du auf jeden achtest, was wirklich nett ist😊 Und deine Stimme ist super entspannend, was in diesem Kontext auch sehr wichtig ist) Vielen Dank für diese Begegnung 🙏",
    },
  ],
  footer: {
    phrase1: "Danke für dein Interesse an meinen Yogakursen!",
    phrase2: "Ich hoffe, dich bald zu sehen!",
  },
};
