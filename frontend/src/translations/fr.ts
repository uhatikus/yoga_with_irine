import { TranslationContent } from "./types";

export const fr: TranslationContent = {
  header: {
    about: "À propos",
    schedule: "Horaire",
    q_and_a: "Q & A",
    reviews: "Avis",
    contacts: "Contacts",
    certificate: "Certificat",
  },
  transparent: {
    first: "Bienvenue",
    second: "Hatha Flow",
    third: "Ressens l'univers",
  },
  about: {
    quote:
      "« Je suis Irina Malyants, professeure de yoga certifiée avec plus de 10 ans d'expérience. Je t'invite à mes cours à Barcelone. Les cours sont donnés en anglais et le groupe est international. La pratique t’aidera à calmer l’esprit, accroître la conscience corporelle, te connecter plus profondément à toi-même et au monde qui t’entoure, ainsi qu'à améliorer ta flexibilité et ton endurance. »",
    auther: "— Ta professeure de yoga, Irina",
  },
  schedule: {
    schedule: "Horaire",
    address: "Adresse",
    classSchedule: "Emploi du temps des cours",
    sessions: [
      {
        day: "Mardi",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Vendredi",
        time: "19:30 - 21:00",
        metro: "Diagonal",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Dimanche",
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
      description: "Studio de yoga chaleureux pour 10 élèves",
      address: "Carrer de Sepúlveda, 57, L'Eixample, 08015 Barcelone",
      schedule: "Dimanche: 12:15 - 13:45",
      link: "https://maps.app.goo.gl/LPucXx7Rv1Jqc74w6",
    },
    {
      name: "Yoga Club Barcelona",
      position: { lat: 41.3988579, lng: 2.1596346 },
      description: "Nouveau studio de yoga pour 20 élèves",
      address: "Carrer de Francisco Giner, 14, Gràcia, 08012 Barcelone",
      schedule: "Mardi et vendredi: 19:30 - 21:00",
      link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
    },
  ],
  questionAnswers: [
    {
      question: "Qu'est-ce que le Hatha Flow Yoga ?",
      answers: [
        "Le Hatha Flow yoga combine des asanas statiques avec des exercices dynamiques synchronisés avec la respiration pour développer la force, la flexibilité et l’équilibre :)",
      ],
    },
    {
      question: "Comment se déroule un cours ?",
      answers: [
        "Le cours dure 1h30 et comprend :",
        "- Première partie : exercices de respiration et méditation pour calmer l'esprit et se recentrer.",
        "- Ensuite, nous pratiquons une séquence d’asanas qui sollicitent tous les groupes musculaires, combinant mouvements dynamiques et postures statiques, tout en se concentrant sur les zones cibles.",
        "- À la fin de la pratique, nous nous détendons complètement en Shavasana.",
      ],
    },
    {
      question: "Quel est le niveau du cours ?",
      answers: [
        "Le niveau est ouvert. C'est parfait pour les débutants, et je propose aussi des variations pour le niveau intermédiaire.",
      ],
    },
    {
      question: "Puis-je venir si je n'ai jamais fait de yoga ?",
      answers: [
        "Oui, bien sûr. Beaucoup de personnes sans expérience en yoga participent à mes cours :) En fait, elles adorent et commencent leur parcours dans le yoga.",
      ],
    },
  ],
  reviews: [
    {
      author: "Maria",
      stars: 5,
      text: "J'ai assisté à mon premier cours de yoga avec Irina et j'ai été absolument impressionnée par l'atmosphère amicale et confortable, le niveau professionnel de l'instructrice et les changements positifs dans mon corps et mon esprit après le cours ❤️ Irina propose des mouvements adaptés aussi bien aux débutants qu'aux personnes expérimentées, ce qui permet à chaque participant de se sentir à l'aise et de réaliser ses objectifs 🌿",
    },
    {
      author: "Ekaterina",
      stars: 5,
      text: "Merci beaucoup Irina pour mon premier cours de yoga. J'ai adoré l'atmosphère : nous, les tapis, l'herbe verte, le coucher du soleil, le guitariste, ta voix. C'était tellement calme ❤️❤️❤️ Et une super équipe 🫂",
    },
    {
      author: "Tatyana",
      stars: 5,
      text: "Cela a été une bouffée d'air frais dans mon emploi du temps bien rempli. J'ai particulièrement aimé l'attention portée à la respiration au début et à la fin de la pratique, l'approche douce, l'atmosphère et les soins. C'était un état très agréable : un exercice bénéfique pour le corps, mais sans être épuisant, plutôt une source de joie. J'ai ressenti chaque muscle s'étirer et je me suis sentie complètement restaurée. Merci pour cette heure et demie de soin personnel 💜",
    },
    {
      author: "Tatyana",
      stars: 5,
      text: "Je tiens à remercier Irina pour nos cours de yoga du dimanche. Je viens avec des états d'âme différents, mais je repars toujours heureuse. C'est une excellente professeure et l'atmosphère est très positive. Mon corps en profite également. Je recommande vivement ❤️",
    },
    {
      author: "Evgeniy",
      stars: 5,
      text: "Je suis très heureux d'avoir commencé à pratiquer le yoga avec Irina. C'est une excellente professeure, chaque cours est intéressant et motivant. Elle crée toujours une atmosphère chaleureuse qui m'aide à me détendre et à me concentrer complètement sur la pratique. J'ai remarqué une amélioration significative de ma flexibilité, mon équilibre et ma force, et après les cours, je me sens beaucoup plus énergisé. Je la recommande sincèrement comme professeure de yoga.",
    },
    {
      author: "Sofia",
      stars: 5,
      text: "Après le yoga, je me sens comme après un massage thérapeutique. Deux heures ne semblent pas longues quand on se concentre, c'est comme une sieste complète. Mon cou et mon dos sont beaucoup mieux, et quand j'ai mal au cou, je fais quelques mouvements à la maison. C'est un sport agréable, avec une ambiance relaxante, un bien-être physique et une bonne nuit de sommeil après le cours. J'adore l'exercice de respiration au début du cours, il a même guéri mon rhume. Très recommandé ! Et l'équipe est géniale, ça le rend encore plus attractif :)",
    },
    {
      author: "Alexander",
      stars: 5,
      text: "Je pratique le yoga avec Irina depuis plus d'un an. Chaque cours est rempli de postures familières qui apportent de l'énergie à mon corps, mais aussi de nouveaux mouvements qui me font réfléchir aux possibilités infinies de mon corps. J'ai remarqué une amélioration significative de ma flexibilité, de ma qualité de vie et de mon sommeil, et je suis aussi plus conscient de ma connexion avec la nature. Si tu veux être heureux, en bonne santé et calme, tu dois participer aux cours d'Irina.",
    },
    {
      author: "Kirill",
      stars: 5,
      text: "Je n'avais jamais pratiqué le yoga auparavant. Je suis allé au cours de groupe d'Irina sur recommandation d'un ami et j'ai tout de suite su que je continuerais à pratiquer le yoga. Dès la première leçon, j'ai senti que mon corps était déséquilibré et j'ai compris quels muscles devaient être travaillés et sur quoi me concentrer. Grâce aux cours d'Irina, je peux me concentrer sur moi-même, vider mon esprit et ressentir l'instant présent. Après quelques cours, ma condition physique s'est nettement améliorée. Maintenant, je m'efforce de ne manquer aucun cours et je le recommande vivement.",
    },
    {
      author: "Anton",
      stars: 5,
      text: "Au début, c'était difficile car je n'avais pas beaucoup de flexibilité, mais après deux mois, la situation a beaucoup évolué grâce à la pratique régulière. Maintenant, si je manque un cours, mon corps me le demande :) J'aime l'atmosphère relaxante du cours et la sensation de bien-être après. Pendant le cours, on ne se sent pas épuisé, mais après, on sait que c'était un exercice efficace !",
    },
    {
      author: "Anastasia",
      stars: 5,
      text: "Salut ! J'adore le yoga, et j'adore aussi ton style d'enseignement ! Le mélange de postures statiques avec de la force et des étirements est parfait pour moi, sans répétitions longues et ennuyeuses. Après le yoga, je me sens détendue et calme, mais mes muscles restent tonifiés.",
    },
    {
      author: "Alexandra",
      stars: 5,
      text: "Salut Irina ! Nous voulons laisser un commentaire positif sur tes cours 🤗 C'est ma première expérience avec du yoga long, mais c'était juste parfait) Étendre chaque groupe musculaire lentement, en combinant avec la respiration, c'est ça le vrai yoga. Irina est une professeure très attentive et positive, elle explique chaque posture très bien. En général, je me sens toujours très bien pendant ses cours et, bien sûr, je me sens très bien après ! Le plus important pour moi est que mon mari aime aussi beaucoup les cours avec moi 👍🏻",
    },
    {
      author: "Zhanna",
      stars: 5,
      text: "Je tiens à te remercier beaucoup. J'ai commencé à faire du yoga car j'avais souvent mal au dos. J'apprécie vraiment que mes douleurs dorsales soient devenues beaucoup moins fréquentes. L'ambiance des cours est très conviviale et agréable) Je recommande vivement ☺️❤️",
    },
    {
      author: "Maxim",
      stars: 5,
      text: "Salut à tous ! Je tiens à faire un commentaire très positif sur Irina. Je sais qu'elle pratique le yoga depuis plus de 10 ans et j'ai aussi suivi quelques-uns de ses cours. Un jour, j'ai eu l'occasion de participer à l'un de ses cours et de la découvrir en tant qu'instructrice. Bien que je ne pratique pas le yoga régulièrement, j'ai un peu d'expérience. Je dois dire que l'effet après le cours avec Irina était incroyable. Il y avait de nombreuses postures intéressantes qui m'ont permis d'étirer des muscles que je ne savais même pas que j'avais. C'était un cours en groupe, mais Irina a réussi à prêter attention à chaque participant et à corriger les erreurs pour que chacun fasse les positions de manière correcte et sécuritaire. Après le cours, je me suis senti léger et plein d'énergie pendant plusieurs jours. C'est dommage que je ne puisse pas participer davantage à cause de la distance, mais je recommande à tout le monde d'essayer — je pense qu'après une heure, vous ne voudrez plus arrêter 😉",
    },
    {
      author: "Nastya",
      stars: 5,
      text: "Je ne pratique pas souvent le yoga, mais je peux le comparer) Avec Irina, c'était vraiment agréable, elle rayonne d'ouverture et de gentillesse, ce qui est très important pour un professeur de yoga) Malheureusement, je n'étais pas présente très souvent, mais si ce n'était pas pour la distance, je viendrais avec grand plaisir) J'aime le fait que tu changes les exercices à chaque fois, et j'ai aussi remarqué que tu fais attention à chacun, ce qui est vraiment agréable😊 Et ta voix est super relaxante, ce qui est également très important dans ce contexte) Merci pour cette expérience 🙏",
    },
  ],
  footer: {
    phrase1: "Merci pour votre intérêt pour mes cours de yoga !",
    phrase2: "J'espère vous voir bientôt !",
  },
};
