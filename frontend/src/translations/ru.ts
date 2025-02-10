import { TranslationContent } from "./types";

export const ru: TranslationContent = {
  header: {
    about: "О нас",
    schedule: "Расписание",
    q_and_a: "Q & A",
    reviews: "Отзывы",
    contacts: "Контакты",
    certificate: "Сертификат",
  },
  transparent: {
    first: "Добро пожаловать",
    second: "Хатха Флоу",
    third: "Почувствуй Вселенную",
  },
  about: {
    quote:
      "« Я Ирина Малянц, сертифицированный инструктор по йоге с более чем 10-летним опытом. Приглашаю вас на занятия в Барселоне. Практика поможет обрести спокойствие ума, осознанность тела, более глубокую связь с собой и окружающим миром, а также гибкость и выносливость! Занятия проходят на английском языке, группа интернациональная »",
    auther: "— Ваш учитель йоги, Ирина",
  },
  schedule: {
    schedule: "Расписание",
    address: "Адрес",
    classSchedule: "Расписание классов",
    sessions: [
      {
        day: "Вторник",
        time: "19:30 - 21:00",
        metro: "Диагональ",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Пятница",
        time: "19:30 - 21:00",
        metro: "Диагональ",
        link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
      },
      {
        day: "Воскресенье",
        time: "12:15 - 13:45",
        metro: "Роккафорт",
        link: "https://maps.app.goo.gl/LPucXx7Rv1Jqc74w6",
      },
    ],
  },
  locations: [
    {
      name: "ACADEMIA M",
      position: { lat: 41.377603, lng: 2.155058 },
      description: "Уютная студия для 10 человек",
      address: "Carrer de Sepúlveda, 57, L'Eixample, 08015 Барселона",
      schedule: "Воскресенье: 12:15 - 13:45",
      link: "https://maps.app.goo.gl/LPucXx7Rv1Jqc74w6",
    },
    {
      name: "Yoga Club Barcelona",
      position: { lat: 41.3988579, lng: 2.1596346 },
      description: "Новая студия для 20 человек",
      address: "Carrer de Francisco Giner, 14, Grácia, 08012 Барселона",
      schedule: "Вторник и пятница: 19:30 - 21:00",
      link: "https://maps.app.goo.gl/7WBFC6pGSf6DVFkT8",
    },
  ],
  questionAnswers: [
    {
      question: "Что такое Хатха Флоу йога?",
      answers: [
        "Хатха Флоу сочетает в себе статические асаны и динамические упражнения, синхронизированные с дыханием, что помогает развивать силу, гибкость и равновесие :)",
      ],
    },
    {
      question: "Из чего состоит занятие?",
      answers: [
        "Занятие длится 1,5 часа и включает в себя:",
        "Первая часть – дыхательные упражнения и медитация, чтобы настроиться на спокойный лад и сосредоточить ум.",
        "Затем мы переходим к последовательности асан, воздействующих на все группы мышц, сочетая динамичные движения со статическими позами и фокусируясь на целевых зонах.",
        "В конце занятия мы полностью расслабляемся в Шавасане.",
      ],
    },
    {
      question: "Какой уровень подготовки требуется?",
      answers: [
        "Уровень открытый. Класс отлично подходит для начинающих, но также предлагаются варианты для среднего уровня.",
      ],
    },
    {
      question: "Можно ли прийти, если у меня нет опыта в йоге?",
      answers: [
        "Да, конечно. Многие люди без опыта приходят на мои занятия :) Им очень нравится, и они начинают свой путь в йоге.",
      ],
    },
  ],
  reviews: [
    {
      author: "Мария",
      stars: 5,
      text: "Впервые посетила занятие йогой у Ирины и была абсолютно впечатлена дружелюбной и комфортной атмосферой, профессионализмом тренера и ощущением позитивных изменений в теле и разуме после класса❤️ Ирина предлагала варианты упражнений как для начинающих, так и для тех, у кого уже есть опыт в йоге, что сделало занятие удобным и продуктивным для всей группы🌿",
    },
    {
      author: "Екатерина",
      stars: 5,
      text: "Спасибо большое, Ирина, за мой первый класс йоги. Мне понравилась атмосфера очень — мы, коврики, зелёная трава, закат, гитарист, твой голос. Так спокойно ❤️❤️❤️ И очень хорошая компания🫂",
    },
    {
      author: "Татьяна",
      stars: 5,
      text: "Это был глоток воздуха в суете рабочих будней, которым нет конца. Мне очень понравилось внимание дыханию в начале и конце практики, бережность подхода, атмосфера и забота. Очень комфортное состояние — есть полезная физическая активность и при этом она в радость, а не в тягость. Я прочувствовала как будто все мышцы в организме и растянулась, размялась и вышла обновлённой. Спасибо за эти полтора часа внимания и заботы о себе💜",
    },
    {
      author: "Татьяна",
      stars: 5,
      text: "Хочу оставить отзыв благодарности Ирине за наши душевные занятия по воскресеньям. Я приходила в зал в разном настроении, а уходила всегда в прекрасном расположении духа. Отличный преподаватель, позитивная атмосфера. Мое тело в восторге. От души рекомендую ❤️",
    },
    {
      author: "Евгений",
      stars: 5,
      text: "Я очень рад, что начал заниматься йогой с Ириной. Она отличный учитель, который делает занятия очень интересными и мотивирующими. Она всегда создает уютную атмосферу, что помогает мне расслабиться и полностью погрузиться в практику. Я заметил значительное улучшение своей гибкости, баланса и силы, и ощущаю себя более энергичным после занятий. Я с удовольствием рекомендую Ирину в качестве учителя йоги.",
    },
    {
      author: "София",
      stars: 5,
      text: "После йоги ощущения в теле, как будто ты сходил на лечебный массаж. Два часа не ощущаются, как что-то долгое, если настроиться, то ощущается как полноценный дневной сон. Шея и спина прекрасно себя чувствуют теперь, некоторые упражнения я делаю дома, когда чувствую, что шея болит. Приятный спорт, успокаивающая атмосфера, хорошее самочувствие и полноценный сон после занятия. Очень нравятся дыхательные упражнения вначале занятия, у меня как-то даже насморк прошёл от этого. В общем, рекомендую! Приятная компания добавляет привлекательности :)",
    },
    {
      author: "Александр",
      stars: 5,
      text: "Я хожу на классы по йоге к Ирине уже более года. Каждое занятие наполнено как всем известными Асанами, пронизывающими тело уже знакомой мне энергией; так и абсолютно новыми движениями, заставляющими задуматься и по-иному осознать возможности своего тела. Чувствую значительные улучшения в растяжке, в качестве жизни и сна, в ощущении себя и природы вокруг. Если вы хотите быть счастливыми, здоровыми и спокойными, вам необходимо посетить уроки Ирины.",
    },
    {
      author: "Кирилл",
      stars: 5,
      text: "Раньше никогда не занимался йогой. На групповое занятие к Ирине пришёл по рекомендации друзей и сразу понял, что буду продолжать заниматься. Уже на первом занятии почувствовал насколько асимметрично развито тело, стало понятно, какие группы мышц нужно прорабатывать и на что обращать внимание. Так же на йоге с Ириной получается освободить голову от всех мыслей и сосредоточиться на себе, своих чувствах и ощущениях в моменте. После нескольких занятий физическое состояние заметно улучшилось. Стараюсь теперь не пропускать сеансов и всем рекомендую.",
    },
    {
      author: "Антон",
      stars: 5,
      text: "Мне было тяжело сначала, потому что не было никакой растяжки. Но за два месяца ситуация значительно улучшилась благодаря постоянным посещениям. Теперь если пропускаю, то тело начинает хотеть йоги :) Мне очень нравится расслабляющая атмосфера на занятии, и приятная усталость после. Вроде как и не сильно устаёшь во время занятия, зато потом чувствуешь, что это все равно спорт!",
    },
    {
      author: "Анастасия",
      stars: 5,
      text: "Привет! Мне очень нравится йога! И твоя подача. Мне идеально подходит формат со статичными в меру силовыми упражнениями и растяжкой, при этом нет долгих и нудных повторений одного и того же. После йоги я чувствую внутреннее расслабление, спокойствие, но мои мышцы в тонусе.",
    },
    {
      author: "Александра",
      stars: 5,
      text: "Добрый день, Ирина! Хотим оставить положительный отзыв о ваших занятиях🤗 Это первый опыт такой длительной йоги для меня, но кажется это совершенно идеально) неспешно, прорабатывая каждую группу мышц, дыхание — то что нужно от настоящей йоги. Тренер Ирина очень внимательный, позитивный человек, хорошо объясняет все асаны, в целом чувствую себя всегда на занятиях очень комфортно, и конечно после них! Главный показатель для меня — муж, который с удовольствием посещал занятия вместе со мной 👍🏻",
    },
    {
      author: "Жанна",
      stars: 5,
      text: "Хотела бы сказать тебе большое спасибо! Решила пойти на йогу из-за частой боли в спине. Очень нравится, спина стала болеть намного реже. На занятиях очень дружелюбная и приятная атмосфера) Очень рекомендую ☺️❤️",
    },
    {
      author: "Максим",
      stars: 5,
      text: "Всем привет! Хочу оставить крайне положительный отзыв о таком крутом мастере как Ирина. Знаю, что она занимается йогой уже более 10 лет, даже ходил с ней вместе на некоторые занятия. И вот в один прекрасный день так сложились обстоятельства, что я смог попасть к ней на занятие, где она предстала передо мной в качестве инструктора. Йогой я занимаюсь нечасто, но некоторый опыт у меня всë же есть. И вот что хочу сказать, эффект после занятия с Ириной был потрясающий. Во время сеанса было множество интересных поз, которые позволили мне размять мышцы, о которых я даже не подозревал. Я был на групповом сеансе, но Ирина смогла проследить за каждым участником и поправить все недочеты, чтобы безопасно и правильно принять каждую позу. После занятия несколько дней чувствовал легкость и эмоциональный подъем, которого добиться в самостоятельных домашних занятиях у меня не получалось. Очень жаль, что сейчас чисто из-за территориальной удаленности нет возможности посещать еë занятия. Поэтому всем советую хотя бы попробовать познать йогу с Ириной, но думаю на одном занятии вы не сможете остановиться😉",
    },
    {
      author: "Настя",
      stars: 5,
      text: "Что хочется сказать, я не очень часто ходила на йогу, но мне есть с чем сравнить) с тобой было очень уютно, от тебя чувствуется открытость и доброта, что безумно важно для преподавателя йоги) к сожалению, я ходила к тебе мало, но если бы не расстояние продолжила обязательно) круто что некоторые упражнения меняются каждый раз, ещё видно что ты следишь за всеми- это очень мило😊 а ещё у тебя супер успокаивающий голос что так же очень важно в этом деле) благодарю за знакомство🙏",
    },
  ],
  footer: {
    phrase1: "Спасибо вам за проявленный интерес к занятиям йогой!",
    phrase2: "Надеюсь, скоро увидимся!",
  },
};
