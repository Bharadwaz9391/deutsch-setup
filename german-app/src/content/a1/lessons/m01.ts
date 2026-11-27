import type { LessonContent } from "@/lib/types";

// Module 1 — Hallo! Ich bin … (greetings, introducing yourself, du/Sie)
export const M01: LessonContent[] = [
  {
    id: "l01-1",
    steps: [
      {
        say: {
          te: "జర్మనీలో రోజులో టైమ్‌ని బట్టి డిఫరెంట్ గ్రీటింగ్స్ వాడతారు. ఇవి రోజూ వాడేవి.",
          teLatn: "Germany lo rojulo time ni batti different greetings vaadataaru. Ivi rooju vaadevi.",
          en: "In Germany, greetings change with the time of day. These are the ones you use every day.",
        },
      },
      {
        de: "Guten Morgen!",
        meaning: { te: "గుడ్ మార్నింగ్!", teLatn: "Good morning!", en: "Good morning!" },
        tip: {
          te: "పొద్దున్న సుమారు పదకొండు గంటల వరకు.",
          teLatn: "Podduna sumaaru padakondu gantala varaku.",
          en: "Until about 11 in the morning.",
        },
      },
      {
        de: "Guten Tag!",
        meaning: { te: "హలో, నమస్కారం — పగలు చెప్పేది.", teLatn: "Hello, namaskaaram — pagalu cheppedi.", en: "Hello / good day — used during the day." },
        tip: {
          te: "ఆఫీస్, షాప్, డాక్టర్ దగ్గర — తెలియని వాళ్ళతో మర్యాదగా ఇదే.",
          teLatn: "Office, shop, doctor daggara — teliyani vaallatho maryaadaga ide.",
          en: "The polite choice at the office, in shops or at the doctor's.",
        },
      },
      {
        de: "Guten Abend!",
        meaning: { te: "గుడ్ ఈవెనింగ్!", teLatn: "Good evening!", en: "Good evening!" },
        tip: {
          te: "సాయంత్రం ఆరు తర్వాత.",
          teLatn: "Saayantram aaru tarvaata.",
          en: "From about 6 pm.",
        },
      },
      {
        de: "Hallo!",
        meaning: { te: "హాయ్, హలో.", teLatn: "Hi, hello.", en: "Hi, hello." },
        tip: {
          te: "ఫ్రెండ్స్, కొలీగ్స్‌తో ఎప్పుడైనా వాడొచ్చు.",
          teLatn: "Friends, colleagues tho eppudainaa vaadochu.",
          en: "Fine with friends and colleagues at any time.",
        },
      },
      {
        de: "Auf Wiedersehen!",
        meaning: { te: "మళ్ళీ కలుద్దాం, బై — మర్యాదగా.", teLatn: "Malli kaluddaam, bye — maryaadaga.", en: "Goodbye (polite)." },
        tip: {
          te: "ఫ్రెండ్స్‌తో అయితే {Tschüss!} చాలు.",
          teLatn: "Friends tho aite {Tschüss!} chaalu.",
          en: "With friends, Tschüss! is enough.",
        },
      },
      {
        de: "Gute Nacht!",
        meaning: { te: "గుడ్ నైట్!", teLatn: "Good night!", en: "Good night!" },
        tip: {
          te: "పడుకునే ముందు మాత్రమే. సాయంత్రం కలిసినప్పుడు {Guten Abend} అనండి.",
          teLatn: "Padukune mundu maatrame. Saayantram kalisinappudu {Guten Abend} anandi.",
          en: "Only before going to sleep. When you meet someone in the evening, say Guten Abend.",
        },
      },
    ],
  },
  {
    id: "l01-2",
    steps: [
      {
        say: {
          te: "ఇప్పుడు మీ పేరు చెప్పడం, ఇంకొకరి పేరు అడగడం నేర్చుకుందాం.",
          teLatn: "Ippudu mee peru cheppadam, inkokari peru adagadam nerchukundaam.",
          en: "Now let's learn to say your name and ask someone else's.",
        },
      },
      {
        de: "Ich heiße Ravi.",
        meaning: { te: "నా పేరు రవి.", teLatn: "Naa peru Ravi.", en: "My name is Ravi." },
        tip: {
          te: "{heißen} అంటే 'పేరు ఉండటం'. {ich} తో: {ich heiße}.",
          teLatn: "{heißen} ante 'peru undatam'. {ich} tho: {ich heiße}.",
          en: "heißen means 'to be called'. With ich: ich heiße.",
        },
      },
      {
        de: "Ich bin Ravi.",
        meaning: { te: "నేను రవిని.", teLatn: "Nenu Ravini.", en: "I am Ravi." },
        tip: {
          te: "ఇది ఇంకా సింపుల్. {ich bin} అంటే 'నేను … ని'.",
          teLatn: "Idi inka simple. {ich bin} ante 'nenu … ni'.",
          en: "Even simpler. ich bin means 'I am'.",
        },
      },
      {
        de: "Wie heißen Sie?",
        meaning: { te: "మీ పేరు ఏంటి? — మర్యాదగా.", teLatn: "Mee peru enti? — maryaadaga.", en: "What's your name? (polite)" },
      },
      {
        de: "Wie heißt du?",
        meaning: { te: "నీ పేరు ఏంటి? — ఫ్రెండ్లీగా.", teLatn: "Nee peru enti? — friendly ga.", en: "What's your name? (informal)" },
        tip: {
          te: "చూడండి: {Sie} తో {heißen}, {du} తో {heißt}. వర్బ్ ఎండింగ్ మారుతుంది.",
          teLatn: "Choodandi: {Sie} tho {heißen}, {du} tho {heißt}. Verb ending maarutundi.",
          en: "Notice: Sie heißen, du heißt — the verb ending changes.",
        },
      },
      {
        de: "Freut mich!",
        meaning: { te: "మిమ్మల్ని కలవడం హ్యాపీ! నైస్ టు మీట్ యూ.", teLatn: "Mimmalni kalavadam happy! Nice to meet you.", en: "Nice to meet you!" },
      },
      {
        de: "Woher kommst du?",
        meaning: { te: "నువ్వు ఎక్కడి నుంచి వచ్చావు?", teLatn: "Nuvvu ekkadi nunchi vachaavu?", en: "Where are you from?" },
        tip: {
          te: "ఆన్సర్: {Ich komme aus Indien.} — నేను ఇండియా నుంచి వచ్చాను.",
          teLatn: "Answer: {Ich komme aus Indien.} — nenu India nunchi vachaanu.",
          en: "Answer: Ich komme aus Indien. — I come from India.",
        },
      },
    ],
  },
  {
    id: "l01-3",
    steps: [
      {
        say: {
          te: "జర్మన్‌లో 'యూ' కి రెండు పదాలు ఉన్నాయి. {du} — మన 'నువ్వు' లాగా. {Sie} — మన 'మీరు' లాగా, గౌరవంగా.",
          teLatn: "German lo 'you' ki rendu padaalu unnaayi. {du} — mana 'nuvvu' laaga. {Sie} — mana 'meeru' laaga, gauravamga.",
          en: "German has two words for 'you': du is informal, like 'nuvvu'; Sie is polite, like 'meeru'.",
        },
      },
      {
        say: {
          te: "రూల్ సింపుల్: ఫ్రెండ్స్, ఫ్యామిలీ, పిల్లలు, క్లాస్‌మేట్స్‌తో {du}. ఆఫీస్‌లో, షాప్‌లో, డాక్టర్‌తో, తెలియని పెద్దవాళ్ళతో {Sie}. డౌట్ ఉంటే {Sie} వాడండి.",
          teLatn: "Rule simple: friends, family, pillalu, classmates tho {du}. Office lo, shop lo, doctor tho, teliyani peddavaallatho {Sie}. Doubt unte {Sie} vaadandi.",
          en: "Simple rule: du with friends, family, children and classmates. Sie at the office, in shops, with doctors and adults you don't know. When in doubt, use Sie.",
        },
      },
      {
        de: "Wie geht es Ihnen?",
        meaning: { te: "మీరు ఎలా ఉన్నారు? — {Sie} తో.", teLatn: "Meeru elaa unnaaru? — {Sie} tho.", en: "How are you? (polite)" },
      },
      {
        de: "Wie geht es dir?",
        meaning: { te: "నువ్వు ఎలా ఉన్నావు? — {du} తో.", teLatn: "Nuvvu elaa unnaavu? — {du} tho.", en: "How are you? (informal)" },
      },
      {
        de: "Können wir uns duzen?",
        meaning: {
          te: "మనం ఒకరినొకరు {du} అని పిలుచుకుందామా?",
          teLatn: "Manam okarinokaru {du} ani piluchukundaamaa?",
          en: "Shall we use du with each other?",
        },
        tip: {
          te: "సాధారణంగా పెద్దవాళ్ళు లేదా బాస్ ముందు ఇది అడుగుతారు. వాళ్ళు అడిగితే {Ja, gern!} అనండి.",
          teLatn: "Saadhaaranamgaa peddavaallu ledaa boss mundu idi adugutaaru. Vaallu adigite {Ja, gern!} anandi.",
          en: "Usually the older person or the boss offers this. If they ask, say Ja, gern! (Yes, gladly!)",
        },
      },
      {
        de: "Ich bin Ravi und das ist Frau Schmidt.",
        meaning: {
          te: "నేను రవి, ఈవిడ మిసెస్ ష్మిట్.",
          teLatn: "Nenu Ravi, eevida Mrs Schmidt.",
          en: "I'm Ravi and this is Ms Schmidt.",
        },
        tip: {
          te: "{Frau} అంటే మిసెస్ లేదా మిస్, {Herr} అంటే మిస్టర్. {Sie} తో మాట్లాడేవాళ్ళని {Frau Schmidt}, {Herr Müller} అని పిలుస్తారు.",
          teLatn: "{Frau} ante Mrs ledaa Ms, {Herr} ante Mr. {Sie} tho maatlaadevaallani {Frau Schmidt}, {Herr Müller} ani pilustaaru.",
          en: "Frau = Ms/Mrs, Herr = Mr. People you call Sie are addressed as Frau Schmidt, Herr Müller.",
        },
      },
    ],
  },
  {
    id: "l01-4",
    steps: [
      {
        say: {
          te: "జర్మన్లు {Wie geht's?} అని అడిగితే, నిజంగానే ఎలా ఉన్నారో చెప్తారు. ఆన్సర్స్ నేర్చుకుందాం.",
          teLatn: "Germans {Wie geht's?} ani adigite, nijangaane elaa unnaaro cheptaaru. Answers nerchukundaam.",
          en: "When Germans ask Wie geht's?, they often answer honestly. Let's learn the answers.",
        },
      },
      {
        de: "Wie geht's?",
        meaning: { te: "ఎలా ఉన్నావు? ఎలా ఉంది?", teLatn: "Elaa unnaavu? Elaa undi?", en: "How's it going?" },
        tip: {
          te: "ఇది {Wie geht es?} కి షార్ట్ ఫామ్. ఫ్రెండ్స్‌తో వాడతారు.",
          teLatn: "Idi {Wie geht es?} ki short form. Friends tho vaadataaru.",
          en: "Short for Wie geht es? — used with friends.",
        },
      },
      {
        de: "Gut, danke! Und dir?",
        meaning: { te: "బాగున్నాను, థాంక్స్! నువ్వు?", teLatn: "Baagunnaanu, thanks! Nuvvu?", en: "Good, thanks! And you?" },
        tip: {
          te: "{Sie} తో అయితే: {Und Ihnen?}",
          teLatn: "{Sie} tho aite: {Und Ihnen?}",
          en: "With Sie: Und Ihnen?",
        },
      },
      {
        de: "Sehr gut!",
        meaning: { te: "చాలా బాగున్నాను!", teLatn: "Chaalaa baagunnaanu!", en: "Very good!" },
      },
      {
        de: "Es geht.",
        meaning: { te: "పర్లేదు, ఓకే.", teLatn: "Parledu, okay.", en: "So-so. It's okay." },
      },
      {
        de: "Nicht so gut. Ich bin müde.",
        meaning: { te: "అంత బాలేదు. నాకు టైర్డ్‌గా ఉంది.", teLatn: "Antha baaledu. Naaku tired ga undi.", en: "Not so good. I'm tired." },
        tip: {
          te: "{müde} అంటే టైర్డ్. {ü} గుర్తుందా? పెదాలు గుండ్రంగా.",
          teLatn: "{müde} ante tired. {ü} gurthundaa? Pedaalu gundranga.",
          en: "müde = tired. Remember the ü: round lips.",
        },
      },
      {
        de: "Hallo, ich bin Ravi. Wie heißt du? Wie geht's?",
        meaning: {
          te: "హలో, నేను రవి. నీ పేరు ఏంటి? ఎలా ఉన్నావు?",
          teLatn: "Hello, nenu Ravi. Nee peru enti? Elaa unnaavu?",
          en: "Hi, I'm Ravi. What's your name? How are you?",
        },
        tip: {
          te: "ఈ మాడ్యూల్ మొత్తం ఒక్క లైన్‌లో! మీ పేరుతో చెప్పి ప్రాక్టీస్ చేయండి.",
          teLatn: "Ee module mottham okka line lo! Mee peruto cheppi practice cheyandi.",
          en: "The whole module in one line! Practise it with your own name.",
        },
      },
    ],
  },
];
