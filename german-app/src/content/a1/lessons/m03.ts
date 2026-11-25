import type { LessonContent } from "@/lib/types";

// Module 3 — Meine Familie (family, age, marital status, haben, mein/dein)
export const M03: LessonContent[] = [
  {
    id: "l03-1",
    steps: [
      {
        say: {
          te: "ఫ్యామిలీ మెంబర్స్ పేర్లు నేర్చుకుందాం. {mein} అంటే 'నా' — {die} పదాలకి {meine} అవుతుంది.",
          teLatn: "Family members perlu nerchukundaam. {mein} ante 'naa' — {die} padaalaki {meine} avutundi.",
          en: "Let's learn family words. mein = my; it becomes meine with die-words.",
        },
      },
      {
        de: "Das ist meine Familie.",
        meaning: { te: "ఇది నా ఫ్యామిలీ.", teLatn: "Idi naa family.", en: "This is my family." },
      },
      {
        de: "mein Vater, meine Mutter",
        meaning: { te: "నా నాన్న, నా అమ్మ.", teLatn: "Naa naanna, naa amma.", en: "my father, my mother" },
        tip: {
          te: "{der Vater} కాబట్టి {mein}, {die Mutter} కాబట్టి {meine}.",
          teLatn: "{der Vater} kaabatti {mein}, {die Mutter} kaabatti {meine}.",
          en: "der Vater → mein, die Mutter → meine.",
        },
      },
      {
        de: "mein Bruder, meine Schwester",
        meaning: { te: "నా బ్రదర్, నా సిస్టర్.", teLatn: "Naa brother, naa sister.", en: "my brother, my sister" },
        tip: {
          te: "జర్మన్‌లో అన్న, తమ్ముడు రెండూ {Bruder}. పెద్దవాడు అయితే {mein großer Bruder}.",
          teLatn: "German lo anna, tammudu rendoo {Bruder}. Peddavaadu aite {mein großer Bruder}.",
          en: "German has one word for older and younger brother; 'big brother' is mein großer Bruder.",
        },
      },
      {
        de: "meine Eltern, meine Geschwister",
        meaning: { te: "నా పేరెంట్స్, నా బ్రదర్స్ అండ్ సిస్టర్స్.", teLatn: "Naa parents, naa brothers and sisters.", en: "my parents, my siblings" },
      },
      {
        de: "mein Mann, meine Frau, meine Kinder",
        meaning: { te: "నా భర్త, నా భార్య, నా పిల్లలు.", teLatn: "Naa bharta, naa bhaarya, naa pillalu.", en: "my husband, my wife, my children" },
        tip: {
          te: "{Mann} అంటే మ్యాన్, హస్బెండ్ రెండూ. {Frau} అంటే వుమన్, వైఫ్ రెండూ.",
          teLatn: "{Mann} ante man, husband rendoo. {Frau} ante woman, wife rendoo.",
          en: "Mann = man and husband; Frau = woman and wife.",
        },
      },
      {
        de: "Ich habe einen Bruder und zwei Schwestern.",
        meaning: { te: "నాకు ఒక బ్రదర్, ఇద్దరు సిస్టర్స్ ఉన్నారు.", teLatn: "Naaku oka brother, iddaru sisters unnaaru.", en: "I have one brother and two sisters." },
        tip: {
          te: "{haben} అంటే 'ఉండటం, కలిగి ఉండటం': {ich habe}, {du hast}, {er hat}.",
          teLatn: "{haben} ante 'undatam, kaligi undatam': {ich habe}, {du hast}, {er hat}.",
          en: "haben = to have: ich habe, du hast, er hat.",
        },
      },
    ],
  },
  {
    id: "l03-2",
    steps: [
      {
        say: {
          te: "ఏజ్ అడగడం, చెప్పడం. జర్మన్‌లో ఇంగ్లీష్ లాగే 'ఐ యామ్ థర్టీ ఇయర్స్ ఓల్డ్' అని చెప్తారు — {Ich bin … Jahre alt}.",
          teLatn: "Age adagadam, cheppadam. German lo English laage 'I am thirty years old' ani cheptaaru — {Ich bin … Jahre alt}.",
          en: "Asking and saying your age. Germans say 'I am … years old' — Ich bin … Jahre alt.",
        },
      },
      {
        de: "Wie alt bist du?",
        meaning: { te: "నీ వయసు ఎంత?", teLatn: "Nee vayasu entha?", en: "How old are you?" },
        tip: {
          te: "{Sie} తో: {Wie alt sind Sie?} — కానీ పెద్దవాళ్ళని ఏజ్ అడగడం అంత పొలైట్ కాదు.",
          teLatn: "{Sie} tho: {Wie alt sind Sie?} — kaani peddavaallani age adagadam antha polite kaadu.",
          en: "With Sie: Wie alt sind Sie? — but asking adults their age isn't very polite.",
        },
      },
      {
        de: "Ich bin achtundzwanzig Jahre alt.",
        meaning: { te: "నా వయసు ఇరవై ఎనిమిది.", teLatn: "Naa vayasu iravai enimidi.", en: "I'm twenty-eight years old." },
        tip: {
          te: "మీ ఏజ్‌తో చెప్పండి. నంబర్ రివర్స్ గుర్తుందా? {acht} ముందు, {zwanzig} తర్వాత.",
          teLatn: "Mee age tho cheppandi. Number reverse gurthundaa? {acht} mundu, {zwanzig} tarvaata.",
          en: "Say your own age. Remember the reversed numbers: acht first, then zwanzig.",
        },
      },
      {
        de: "Mein Sohn ist fünf, meine Tochter ist drei.",
        meaning: { te: "నా కొడుకు వయసు ఐదు, నా కూతురు వయసు మూడు.", teLatn: "Naa koduku vayasu aidu, naa kooturu vayasu moodu.", en: "My son is five, my daughter is three." },
        tip: {
          te: "షార్ట్‌గా {Jahre alt} లేకుండా కూడా చెప్పొచ్చు.",
          teLatn: "Short ga {Jahre alt} lekundaa kooda cheppochu.",
          en: "You can leave out Jahre alt.",
        },
      },
      {
        de: "Wann hast du Geburtstag?",
        meaning: { te: "నీ బర్త్‌డే ఎప్పుడు?", teLatn: "Nee birthday eppudu?", en: "When is your birthday?" },
        tip: {
          te: "ఆన్సర్: {Im Mai.} — మేలో. జర్మనీలో బర్త్‌డే రోజు మీరే కేక్ తెచ్చి ఆఫీస్‌లో అందరికీ ఇస్తారు!",
          teLatn: "Answer: {Im Mai.} — May lo. Germany lo birthday roju meere cake techi office lo andarikee istaaru!",
          en: "Answer: Im Mai. Fun fact: in Germany you bring the cake to work on your own birthday!",
        },
      },
    ],
  },
  {
    id: "l03-3",
    steps: [
      {
        say: {
          te: "జర్మనీలో ఫామ్స్‌లో, ఆఫీసుల్లో పెళ్లి అయిందా లేదా అని అడుగుతారు. దీన్ని {Familienstand} అంటారు.",
          teLatn: "Germany lo forms lo, offices lo pelli ayindaa ledaa ani adugutaaru. Deenni {Familienstand} antaaru.",
          en: "Forms and offices in Germany ask your marital status — der Familienstand.",
        },
      },
      {
        de: "Ich bin ledig.",
        meaning: { te: "నాకు పెళ్లి కాలేదు. సింగిల్.", teLatn: "Naaku pelli kaaledu. Single.", en: "I'm single (not married)." },
      },
      {
        de: "Ich bin verheiratet.",
        meaning: { te: "నాకు పెళ్లి అయింది.", teLatn: "Naaku pelli ayindi.", en: "I'm married." },
      },
      {
        de: "Ich bin geschieden.",
        meaning: { te: "నాకు డైవోర్స్ అయింది.", teLatn: "Naaku divorce ayindi.", en: "I'm divorced." },
      },
      {
        de: "Haben Sie Kinder? — Nein, ich habe keine Kinder.",
        meaning: {
          te: "మీకు పిల్లలు ఉన్నారా? — లేదు, నాకు పిల్లలు లేరు.",
          teLatn: "Meeku pillalu unnaaraa? — Ledu, naaku pillalu leru.",
          en: "Do you have children? — No, I don't have children.",
        },
        tip: {
          te: "'లేదు' అని చెప్పడానికి నౌన్ ముందు {kein} లేదా {keine} వాడతారు.",
          teLatn: "'Ledu' ani cheppadaaniki noun mundu {kein} ledaa {keine} vaadataaru.",
          en: "To say 'no …' before a noun, use kein / keine.",
        },
      },
      {
        de: "Ich habe eine Freundin.",
        meaning: {
          te: "నాకు గర్ల్‌ఫ్రెండ్ ఉంది — లేదా ఒక ఫ్రెండ్ (అమ్మాయి).",
          teLatn: "Naaku girlfriend undi — ledaa oka friend (ammaayi).",
          en: "I have a girlfriend — or a (female) friend.",
        },
        tip: {
          te: "కేవలం ఫ్రెండ్ అని క్లియర్‌గా చెప్పాలంటే: {eine gute Freundin}, {ein guter Freund}.",
          teLatn: "Kevalam friend ani clear ga cheppaalante: {eine gute Freundin}, {ein guter Freund}.",
          en: "To make clear it's just a friend: eine gute Freundin / ein guter Freund.",
        },
      },
    ],
  },
  {
    id: "l03-4",
    steps: [
      {
        say: {
          te: "ఫోన్‌లో ఫ్యామిలీ ఫోటో చూపిస్తూ మాట్లాడటం ప్రాక్టీస్ చేద్దాం. {sein} అంటే 'అతని', {ihr} అంటే 'ఆమె'.",
          teLatn: "Phone lo family photo choopistoo maatlaadatam practice cheddaam. {sein} ante 'atani', {ihr} ante 'aame'.",
          en: "Let's practise talking about a family photo. sein = his, ihr = her.",
        },
      },
      {
        de: "Schau mal, das ist ein Foto von meiner Familie.",
        meaning: { te: "చూడు, ఇది నా ఫ్యామిలీ ఫోటో.", teLatn: "Choodu, idi naa family photo.", en: "Look, this is a photo of my family." },
      },
      {
        de: "Das ist mein Bruder. Seine Frau heißt Priya.",
        meaning: { te: "ఇతను నా బ్రదర్. అతని భార్య పేరు ప్రియ.", teLatn: "Itanu naa brother. Atani bhaarya peru Priya.", en: "This is my brother. His wife is called Priya." },
      },
      {
        de: "Das ist meine Schwester. Ihr Mann ist Arzt.",
        meaning: { te: "ఈవిడ నా సిస్టర్. ఆమె భర్త డాక్టర్.", teLatn: "Eevida naa sister. Aame bharta doctor.", en: "This is my sister. Her husband is a doctor." },
      },
      {
        de: "Wer ist das?",
        meaning: { te: "ఇది ఎవరు?", teLatn: "Idi evaru?", en: "Who is that?" },
      },
      {
        de: "Das sind meine Großeltern.",
        meaning: { te: "వీళ్ళు నా తాతయ్య, అమ్మమ్మ — గ్రాండ్ పేరెంట్స్.", teLatn: "Veellu naa thaathayya, ammamma — grandparents.", en: "These are my grandparents." },
        tip: {
          te: "ఒకరైతే {Das ist}, చాలామంది అయితే {Das sind}.",
          teLatn: "Okaraite {Das ist}, chaalaamandi aite {Das sind}.",
          en: "One person: Das ist… More than one: Das sind…",
        },
      },
      {
        de: "Sie sehen sehr nett aus!",
        meaning: { te: "వాళ్ళు చాలా నైస్‌గా ఉన్నారు!", teLatn: "Vaallu chaalaa nice ga unnaaru!", en: "They look very nice!" },
        tip: {
          te: "ఎవరైనా మీకు ఫోటో చూపిస్తే చెప్పే నైస్ కాంప్లిమెంట్.",
          teLatn: "Evarainaa meeku photo choopiste cheppe nice compliment.",
          en: "A nice compliment when someone shows you a photo.",
        },
      },
    ],
  },
];
