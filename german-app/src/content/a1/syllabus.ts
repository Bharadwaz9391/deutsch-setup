import type { CourseModule } from "@/lib/types";

/**
 * A1 syllabus — merged from:
 *  1. Goethe-Institut / telc "Start Deutsch 1" exam specification (topic areas + word groups)
 *  2. BAMF "Rahmencurriculum für Integrationskurse" (fields of action for life in Germany)
 *  3. DW "Nicos Weg" A1 and Ankommo A1 (lesson flow, pattern-based grammar)
 * Teaching-style references: Learn German with Anja, Benjamin – Der Deutschlehrer,
 * Easy German (real spoken German), german.net (graded practice).
 *
 * All text here is original. Only topic areas (not content) are taken from the references.
 * Telugu style: simple everyday Telugu with English words written in Telugu letters
 * (e.g. "లెటర్స్", not "అక్షరమాల"). German inside text goes in {curly braces}.
 * Telugu texts: please review and correct — the learner is a native speaker.
 */
export const A1_SYLLABUS: CourseModule[] = [
  {
    id: "m00-sounds",
    number: 0,
    part: "A1.1",
    titleDe: "Hallo, Deutsch!",
    title: {
      en: "German sounds and the alphabet",
      te: "జర్మన్ లెటర్స్, సౌండ్స్",
      teLatn: "German letters, sounds",
    },
    summary: {
      en: "Learn the German alphabet, the special letters ä, ö, ü, ß and the sounds that are new for Telugu speakers.",
      te: "జర్మన్ ఆల్ఫాబెట్, {ä}, {ö}, {ü}, {ß} లాంటి స్పెషల్ లెటర్స్, మన తెలుగులో లేని కొత్త సౌండ్స్ నేర్చుకుందాం.",
      teLatn: "German alphabet, {ä}, {ö}, {ü}, {ß} laanti special letters, mana Telugu lo leni kotha sounds nerchukundaam.",
    },
    canDo: [
      "Spell your name and email address",
      "Say the numbers 0–20",
      "Ask someone to repeat or speak slowly",
    ],
    lessons: [
      { id: "l00-1", titleDe: "Das Alphabet", titleEn: "The alphabet and spelling your name" },
      { id: "l00-2", titleDe: "Umlaute: ä, ö, ü und ß", titleEn: "Umlauts and the sharp s" },
      { id: "l00-3", titleDe: "Schwierige Laute: ch, r, z, w, v", titleEn: "Tricky sounds for Telugu speakers" },
      { id: "l00-4", titleDe: "Zahlen von 0 bis 20", titleEn: "Numbers 0–20" },
    ],
    grammar: [
      "Spelling rules: ei sounds like 'ai', ie like 'ee'",
      "w = 'v', v = 'f', z = 'ts', j = 'y'",
    ],
    vocabulary: ["Alphabet", "Numbers 0–20", "Classroom phrases: Wie bitte? Langsam, bitte."],
    roleplay: {
      situation: {
        en: "Spelling your name at a reception desk",
        te: "రిసెప్షన్‌లో మీ పేరు స్పెల్ చేయడం",
        teLatn: "Reception lo mee peru spell cheyadam",
      },
      partnerDe: "Rezeptionistin",
    },
    hours: 6,
    sources: { goethe: ["Person: Name", "Zahlen"], bamf: ["Unterricht"] },
  },
  {
    id: "m01-hallo",
    number: 1,
    part: "A1.1",
    titleDe: "Hallo! Ich bin …",
    title: {
      en: "Greetings and introducing yourself",
      te: "హలో చెప్పడం, మిమ్మల్ని మీరు ఇంట్రడ్యూస్ చేసుకోవడం",
      teLatn: "Hello cheppadam, mimmalni meeru introduce chesukovadam",
    },
    summary: {
      en: "Say hello and goodbye, introduce yourself, and know when to use 'du' (friends) and 'Sie' (formal).",
      te: "హలో, బై చెప్పడం, మీ గురించి చెప్పడం, ఫ్రెండ్స్‌తో {du}, తెలియని వాళ్ళతో {Sie} ఎప్పుడు వాడాలో నేర్చుకుందాం.",
      teLatn: "Hello, bye cheppadam, mee gurinchi cheppadam, friends tho {du}, teliyani vaallatho {Sie} eppudu vaadaalo nerchukundaam.",
    },
    canDo: [
      "Greet people formally and informally",
      "Say your name and ask for someone's name",
      "Ask how someone is and answer",
    ],
    lessons: [
      { id: "l01-1", titleDe: "Begrüßen und verabschieden", titleEn: "Hello and goodbye" },
      { id: "l01-2", titleDe: "Ich heiße …", titleEn: "My name is …" },
      { id: "l01-3", titleDe: "Du oder Sie?", titleEn: "Informal or formal 'you'" },
      { id: "l01-4", titleDe: "Wie geht's?", titleEn: "How are you?" },
    ],
    grammar: ["Personal pronouns: ich, du, er, sie, es, wir, ihr, Sie", "The verb sein (to be)", "The verb heißen", "W-questions: Wie? Wer?"],
    vocabulary: ["Greetings by time of day", "Answers to 'Wie geht's?'"],
    roleplay: {
      situation: {
        en: "Meeting your new neighbour in the stairwell",
        te: "మెట్ల దగ్గర మీ కొత్త నైబర్‌ని కలవడం",
        teLatn: "Metla daggara mee kotha neighbour ni kalavadam",
      },
      partnerDe: "Nachbarin",
    },
    hours: 8,
    sources: { goethe: ["Person", "Persönliche Beziehungen"], bamf: ["Kontakte knüpfen (übergreifend)"] },
  },
  {
    id: "m02-woher",
    number: 2,
    part: "A1.1",
    titleDe: "Woher kommst du?",
    title: {
      en: "Where are you from? Countries and languages",
      te: "మీది ఏ దేశం? కంట్రీస్, లాంగ్వేజెస్",
      teLatn: "Meedi e desham? Countries, languages",
    },
    summary: {
      en: "Talk about where you come from, where you live and which languages you speak. Count to 100.",
      te: "మీరు ఎక్కడి నుంచి వచ్చారు, ఎక్కడ ఉంటున్నారు, ఏ లాంగ్వేజెస్ మాట్లాడతారు అని చెప్పడం. 100 వరకు నంబర్స్.",
      teLatn: "Meeru ekkadi nunchi vachaaru, ekkada untunnaaru, e languages maatlaadataaru ani cheppadam. 100 varaku numbers.",
    },
    canDo: ["Say your country and city", "Say which languages you speak", "Give your phone number"],
    lessons: [
      { id: "l02-1", titleDe: "Ich komme aus Indien", titleEn: "I come from India" },
      { id: "l02-2", titleDe: "Ich wohne in Berlin", titleEn: "I live in Berlin" },
      { id: "l02-3", titleDe: "Sprachen", titleEn: "Languages" },
      { id: "l02-4", titleDe: "Zahlen bis 100 und Telefonnummern", titleEn: "Numbers to 100 and phone numbers" },
    ],
    grammar: ["Present tense of regular verbs: kommen, wohnen", "The verb is always in position 2", "Yes/no questions", "Prepositions aus and in"],
    vocabulary: ["Countries and nationalities", "Languages", "Numbers 21–100"],
    roleplay: {
      situation: {
        en: "Small talk with a classmate at the language course",
        te: "లాంగ్వేజ్ కోర్స్‌లో క్లాస్‌మేట్‌తో స్మాల్ టాక్",
        teLatn: "Language course lo classmate tho small talk",
      },
      partnerDe: "Kursteilnehmer",
    },
    hours: 8,
    sources: { goethe: ["Person: Adresse, Telefon", "Länder/Nationalitäten", "Zahlen"], bamf: ["Unterricht"] },
  },
  {
    id: "m03-familie",
    number: 3,
    part: "A1.1",
    titleDe: "Meine Familie",
    title: { en: "My family", te: "నా ఫ్యామిలీ", teLatn: "Naa family" },
    summary: {
      en: "Talk about your family, age and marital status, and say what belongs to whom.",
      te: "మీ ఫ్యామిలీ, మీ ఏజ్, పెళ్లి అయిందా లేదా అని చెప్పడం, ఏది ఎవరిదో చెప్పడం.",
      teLatn: "Mee family, mee age, pelli ayindaa ledaa ani cheppadam, edi evarido cheppadam.",
    },
    canDo: ["Introduce your family members", "Say your age", "Describe a family photo simply"],
    lessons: [
      { id: "l03-1", titleDe: "Das ist meine Familie", titleEn: "This is my family" },
      { id: "l03-2", titleDe: "Wie alt bist du?", titleEn: "How old are you?" },
      { id: "l03-3", titleDe: "Ledig, verheiratet …", titleEn: "Marital status" },
      { id: "l03-4", titleDe: "Fotos zeigen", titleEn: "Showing photos" },
    ],
    grammar: ["The verb haben (to have)", "Possessive articles: mein, dein, sein, ihr"],
    vocabulary: ["Family members", "Marital status", "Age"],
    roleplay: {
      situation: {
        en: "Showing family photos to a colleague",
        te: "కొలీగ్‌కి ఫ్యామిలీ ఫోటోలు చూపించడం",
        teLatn: "Colleague ki family photos choopinchadam",
      },
      partnerDe: "Kollegin",
    },
    hours: 7,
    sources: { goethe: ["Familienstand/Familie", "Person: Alter"], bamf: ["Kontakte knüpfen (übergreifend)"] },
  },
  {
    id: "m04-essen",
    number: 4,
    part: "A1.1",
    titleDe: "Essen und Trinken",
    title: { en: "Food and drinks", te: "ఫుడ్, డ్రింక్స్", teLatn: "Food, drinks" },
    summary: {
      en: "Order in a café, say what you like to eat, and learn der/die/das with smart patterns for guessing a noun's gender.",
      te: "కేఫ్‌లో ఆర్డర్ చేయడం, మీకు ఏ ఫుడ్ ఇష్టమో చెప్పడం, {der}/{die}/{das} ని ఈజీ ప్యాటర్న్స్‌తో నేర్చుకోవడం.",
      teLatn: "Café lo order cheyadam, meeku e food ishtamo cheppadam, {der}/{die}/{das} ni easy patterns tho nerchukovadam.",
    },
    canDo: ["Order food and drinks", "Say what you like and don't like", "Ask for the bill"],
    lessons: [
      { id: "l04-1", titleDe: "Der, die, das", titleEn: "Nouns and their articles" },
      { id: "l04-2", titleDe: "Im Café bestellen", titleEn: "Ordering in a café" },
      { id: "l04-3", titleDe: "Was isst du gern?", titleEn: "What do you like to eat?" },
      { id: "l04-4", titleDe: "Frühstück, Mittagessen, Abendessen", titleEn: "Meals of the day" },
    ],
    grammar: ["Definite and indefinite articles", "Gender patterns: -ung → die, -chen → das, …", "möchten (would like)", "ein / kein", "Accusative first steps: einen Kaffee"],
    vocabulary: ["Food", "Drinks", "Meals", "In the café"],
    roleplay: {
      situation: {
        en: "Ordering coffee and cake in a Berlin café",
        te: "బెర్లిన్ కేఫ్‌లో కాఫీ, కేక్ ఆర్డర్ చేయడం",
        teLatn: "Berlin café lo coffee, cake order cheyadam",
      },
      partnerDe: "Kellner",
    },
    hours: 9,
    sources: { goethe: ["Essen/Trinken", "Lokale"], bamf: ["Einkaufen"] },
  },
  {
    id: "m05-einkaufen",
    number: 5,
    part: "A1.1",
    titleDe: "Einkaufen",
    title: { en: "Shopping and prices", te: "షాపింగ్, ప్రైసెస్", teLatn: "Shopping, prices" },
    summary: {
      en: "Buy groceries at the supermarket or market, ask for prices and quantities, and pay.",
      te: "సూపర్ మార్కెట్‌లో సరుకులు కొనడం, ప్రైస్ అడగడం, ఎంత కావాలో చెప్పడం, పే చేయడం.",
      teLatn: "Super market lo sarukulu konadam, price adagadam, entha kaavaalo cheppadam, pay cheyadam.",
    },
    canDo: ["Ask where something is in a shop", "Understand prices", "Pay in cash or by card"],
    lessons: [
      { id: "l05-1", titleDe: "Im Supermarkt", titleEn: "At the supermarket" },
      { id: "l05-2", titleDe: "Wie viel kostet das?", titleEn: "How much is it?" },
      { id: "l05-3", titleDe: "Ein Kilo, eine Flasche", titleEn: "Quantities and packaging" },
      { id: "l05-4", titleDe: "An der Kasse", titleEn: "At the checkout: cash or card?" },
    ],
    grammar: ["Plural forms", "Accusative: den / einen", "Numbers to 1000 and prices in euro", "Wie viel? / Wie viele?"],
    vocabulary: ["Groceries", "Shops", "Weights and measures", "Money"],
    roleplay: {
      situation: {
        en: "At the supermarket checkout",
        te: "సూపర్ మార్కెట్ బిల్లింగ్ కౌంటర్ దగ్గర",
        teLatn: "Super market billing counter daggara",
      },
      partnerDe: "Kassierer",
    },
    hours: 8,
    sources: { goethe: ["Einkaufen: Geschäfte, Preis/Bezahlen, Lebensmittel", "Währungen", "Maße und Gewichte"], bamf: ["Einkaufen"] },
  },
  {
    id: "m06-tag",
    number: 6,
    part: "A1.1",
    titleDe: "Mein Tag",
    title: { en: "My day: time and daily routine", te: "నా డే: టైమ్, డైలీ రొటీన్", teLatn: "Naa day: time, daily routine" },
    summary: {
      en: "Tell the time, talk about your daily routine and the days of the week.",
      te: "టైమ్ చెప్పడం, మీ డైలీ రొటీన్, వీక్ డేస్ గురించి మాట్లాడటం.",
      teLatn: "Time cheppadam, mee daily routine, week days gurinchi maatlaadatam.",
    },
    canDo: ["Tell the time (formal and informal)", "Describe your daily routine", "Make a simple plan with someone"],
    lessons: [
      { id: "l06-1", titleDe: "Wie spät ist es?", titleEn: "What time is it?" },
      { id: "l06-2", titleDe: "Mein Tagesablauf", titleEn: "My daily routine" },
      { id: "l06-3", titleDe: "Die Wochentage", titleEn: "Days of the week" },
      { id: "l06-4", titleDe: "Wann hast du Zeit?", titleEn: "When are you free?" },
    ],
    grammar: ["Separable verbs: aufstehen, einkaufen", "Time prepositions: um, am, von … bis", "Time first, then verb: Am Montag arbeite ich."],
    vocabulary: ["Clock times", "Times of day", "Weekdays", "Daily activities"],
    roleplay: {
      situation: {
        en: "Arranging a time to meet a friend",
        te: "ఫ్రెండ్‌ని కలవడానికి టైమ్ ఫిక్స్ చేయడం",
        teLatn: "Friend ni kalavadaaniki time fix cheyadam",
      },
      partnerDe: "Freund",
    },
    hours: 8,
    sources: { goethe: ["Gewohnheiten/Tagesablauf", "Uhrzeit", "Wochentage", "Tageszeiten"], bamf: ["Arbeit"] },
  },
  {
    id: "m07-freizeit",
    number: 7,
    part: "A1.2",
    titleDe: "Freizeit",
    title: { en: "Free time and hobbies", te: "ఫ్రీ టైమ్, హాబీస్", teLatn: "Free time, hobbies" },
    summary: {
      en: "Talk about hobbies and sports, what you can do and what you want to do, and invite someone.",
      te: "హాబీస్, స్పోర్ట్స్ గురించి మాట్లాడటం, మీరు ఏం చేయగలరో, ఏం చేయాలనుకుంటున్నారో చెప్పడం, ఎవరినైనా ఇన్వైట్ చేయడం.",
      teLatn: "Hobbies, sports gurinchi maatlaadatam, meeru em cheyagalaro, em cheyaalanukuntunnaaro cheppadam, evarinainaa invite cheyadam.",
    },
    canDo: ["Talk about your hobbies", "Say what you can and can't do", "Accept or decline an invitation"],
    lessons: [
      { id: "l07-1", titleDe: "Hobbys und Sport", titleEn: "Hobbies and sport" },
      { id: "l07-2", titleDe: "Gern, lieber, am liebsten", titleEn: "Like, prefer, like most" },
      { id: "l07-3", titleDe: "Ich kann schwimmen", titleEn: "Can and want: können, wollen" },
      { id: "l07-4", titleDe: "Eine Einladung", titleEn: "Accepting and declining invitations" },
    ],
    grammar: ["Modal verbs: können, wollen, möchten", "gern / lieber / am liebsten", "Negation: nicht vs. kein"],
    vocabulary: ["Hobbies", "Sports", "Invitations"],
    roleplay: {
      situation: {
        en: "A colleague invites you to play football at the weekend",
        te: "వీకెండ్‌లో ఫుట్‌బాల్ ఆడటానికి కొలీగ్ పిలుస్తున్నారు",
        teLatn: "Weekend lo football aadataaniki colleague pilustunnaaru",
      },
      partnerDe: "Kollege",
    },
    hours: 8,
    sources: { goethe: ["Freizeit/Unterhaltung"], bamf: ["Mediennutzung"] },
  },
  {
    id: "m08-wohnen",
    number: 8,
    part: "A1.2",
    titleDe: "Wohnen",
    title: { en: "Living: flat, rooms and rent", te: "ఇల్లు: ఫ్లాట్, రూమ్స్, రెంట్", teLatn: "Illu: flat, rooms, rent" },
    summary: {
      en: "Describe your flat and rooms, read a simple flat advert, and talk to a landlord or flatmate.",
      te: "మీ ఫ్లాట్, రూమ్స్ గురించి చెప్పడం, ఫ్లాట్ యాడ్ చదవడం, ఓనర్ లేదా ఫ్లాట్‌మేట్‌తో మాట్లాడటం.",
      teLatn: "Mee flat, rooms gurinchi cheppadam, flat ad chadavadam, owner ledaa flatmate tho maatlaadatam.",
    },
    canDo: ["Describe your flat", "Understand a flat advert (Kaltmiete, Warmmiete)", "Report a problem to the landlord"],
    lessons: [
      { id: "l08-1", titleDe: "Meine Wohnung", titleEn: "My flat" },
      { id: "l08-2", titleDe: "Zimmer und Möbel", titleEn: "Rooms and furniture" },
      { id: "l08-3", titleDe: "Eine Wohnungsanzeige lesen", titleEn: "Reading a flat advert" },
      { id: "l08-4", titleDe: "Die Heizung ist kaputt!", titleEn: "Reporting problems in the flat" },
    ],
    grammar: ["Adjectives after sein: groß, hell, teuer", "es gibt + accusative", "Location prepositions with dative: in, auf, neben (Wo?)"],
    vocabulary: ["Rooms", "Furniture", "Rent and flat-ad words", "Household problems"],
    roleplay: {
      situation: {
        en: "Calling the landlord: the heating is broken",
        te: "ఓనర్‌కి ఫోన్: హీటింగ్ పని చేయట్లేదు",
        teLatn: "Owner ki phone: heating pani cheyatledu",
      },
      partnerDe: "Vermieter",
    },
    hours: 9,
    sources: { goethe: ["Wohnen: Wohnung, Räume, Miete, Einrichtung"], bamf: ["Wohnen"] },
  },
  {
    id: "m09-stadt",
    number: 9,
    part: "A1.2",
    titleDe: "In der Stadt",
    title: { en: "In the city: directions and transport", te: "సిటీలో: డైరెక్షన్స్, ట్రాన్స్‌పోర్ట్", teLatn: "City lo: directions, transport" },
    summary: {
      en: "Ask for and give directions, use the U-Bahn, S-Bahn and bus, and buy a ticket.",
      te: "దారి అడగడం, చెప్పడం, {U-Bahn}, {S-Bahn}, బస్ ఎక్కడం, టికెట్ కొనడం.",
      teLatn: "Daari adagadam, cheppadam, {U-Bahn}, {S-Bahn}, bus ekkadam, ticket konadam.",
    },
    canDo: ["Ask the way", "Understand simple directions", "Buy a public-transport ticket"],
    lessons: [
      { id: "l09-1", titleDe: "Wo ist …?", titleEn: "Asking for directions" },
      { id: "l09-2", titleDe: "Mit der U-Bahn fahren", titleEn: "Taking the U-Bahn" },
      { id: "l09-3", titleDe: "Ein Ticket kaufen", titleEn: "Buying a ticket" },
      { id: "l09-4", titleDe: "Orte in der Stadt", titleEn: "Places in the city" },
    ],
    grammar: ["Imperative (Sie-form): Gehen Sie geradeaus!", "Dative prepositions: mit, zu, von", "Wo? vs. Wohin?", "Ordinal numbers: die erste Straße links"],
    vocabulary: ["Places in town", "Transport", "Directions"],
    roleplay: {
      situation: {
        en: "Asking a stranger the way to the Bürgeramt",
        te: "{Bürgeramt} కి దారి ఎవరినైనా అడగడం",
        teLatn: "{Bürgeramt} ki daari evarinainaa adagadam",
      },
      partnerDe: "Passantin",
    },
    hours: 8,
    sources: { goethe: ["Reisen/Verkehr: öffentlicher Verkehr"], bamf: ["Mobilität"] },
  },
  {
    id: "m10-aemter",
    number: 10,
    part: "A1.2",
    titleDe: "Ämter und Termine",
    title: {
      en: "Offices and appointments: Bürgeramt, bank, post",
      te: "ఆఫీసులు, అపాయింట్‌మెంట్స్: {Bürgeramt}, బ్యాంక్, పోస్ట్",
      teLatn: "Offices, appointments: {Bürgeramt}, bank, post",
    },
    summary: {
      en: "Make an appointment, register your address (Anmeldung), fill in a form with your personal data, and open a bank account.",
      te: "అపాయింట్‌మెంట్ బుక్ చేయడం, మీ అడ్రస్ రిజిస్టర్ చేయడం ({Anmeldung}), ఫామ్ ఫిల్ చేయడం, బ్యాంక్ అకౌంట్ ఓపెన్ చేయడం.",
      teLatn: "Appointment book cheyadam, mee address register cheyadam ({Anmeldung}), form fill cheyadam, bank account open cheyadam.",
    },
    canDo: ["Book an appointment", "Give your personal details", "Understand which documents you need"],
    lessons: [
      { id: "l10-1", titleDe: "Einen Termin machen", titleEn: "Making an appointment" },
      { id: "l10-2", titleDe: "Beim Bürgeramt: die Anmeldung", titleEn: "Registering your address" },
      { id: "l10-3", titleDe: "Formulare ausfüllen", titleEn: "Filling in forms" },
      { id: "l10-4", titleDe: "Bei der Bank und bei der Post", titleEn: "At the bank and the post office" },
    ],
    grammar: ["Modal verbs: müssen, dürfen", "Dates with ordinal numbers: am dritten Mai", "Polite requests: Ich hätte gern … / Können Sie …?"],
    vocabulary: ["Personal data on forms", "Documents", "Bank and post"],
    roleplay: {
      situation: {
        en: "Your Anmeldung appointment at the Bürgeramt",
        te: "{Bürgeramt} లో మీ {Anmeldung} అపాయింట్‌మెంట్",
        teLatn: "{Bürgeramt} lo mee {Anmeldung} appointment",
      },
      partnerDe: "Sachbearbeiterin",
    },
    hours: 9,
    sources: { goethe: ["Dienstleistungen: Post, Banken", "Person"], bamf: ["Ämter und Behörden", "Banken und Versicherungen"] },
  },
  {
    id: "m11-gesundheit",
    number: 11,
    part: "A1.2",
    titleDe: "Gesundheit",
    title: { en: "Health: body, doctor and pharmacy", te: "హెల్త్: బాడీ, డాక్టర్, ఫార్మసీ", teLatn: "Health: body, doctor, pharmacy" },
    summary: {
      en: "Name parts of the body, say what hurts, make a doctor's appointment and understand simple instructions.",
      te: "బాడీ పార్ట్స్ పేర్లు, ఎక్కడ నొప్పిగా ఉందో చెప్పడం, డాక్టర్ అపాయింట్‌మెంట్ తీసుకోవడం, డాక్టర్ చెప్పింది అర్థం చేసుకోవడం.",
      teLatn: "Body parts perlu, ekkada noppiga undo cheppadam, doctor appointment teesukovadam, doctor cheppindi artham chesukovadam.",
    },
    canDo: ["Describe how you feel and what hurts", "Book a doctor's appointment by phone", "Call in sick at work"],
    lessons: [
      { id: "l11-1", titleDe: "Der Körper", titleEn: "The body" },
      { id: "l11-2", titleDe: "Beim Arzt", titleEn: "At the doctor's" },
      { id: "l11-3", titleDe: "In der Apotheke", titleEn: "At the pharmacy" },
      { id: "l11-4", titleDe: "Sich krankmelden", titleEn: "Calling in sick" },
    ],
    grammar: ["Mein Kopf tut weh / Ich habe Kopfschmerzen", "Imperative (du and Sie) for instructions", "Possessive articles in the accusative"],
    vocabulary: ["Body parts", "Symptoms", "At the doctor's and pharmacy"],
    roleplay: {
      situation: {
        en: "At the doctor's: you have a headache and a fever",
        te: "డాక్టర్ దగ్గర: మీకు తలనొప్పి, ఫీవర్ ఉంది",
        teLatn: "Doctor daggara: meeku talanoppi, fever undi",
      },
      partnerDe: "Ärztin",
    },
    hours: 8,
    sources: { goethe: ["Person: Aussehen"], bamf: ["Gesundheit"] },
  },
  {
    id: "m12-arbeit",
    number: 12,
    part: "A1.2",
    titleDe: "Arbeit und Beruf",
    title: { en: "Work and jobs", te: "వర్క్, జాబ్స్", teLatn: "Work, jobs" },
    summary: {
      en: "Talk about jobs and your workplace, say what you did yesterday, and introduce yourself professionally.",
      te: "జాబ్స్, మీ వర్క్‌ప్లేస్ గురించి మాట్లాడటం, నిన్న ఏం చేశారో చెప్పడం, ఆఫీస్‌లో మిమ్మల్ని మీరు ఇంట్రడ్యూస్ చేసుకోవడం.",
      teLatn: "Jobs, mee workplace gurinchi maatlaadatam, ninna em chesaaro cheppadam, office lo mimmalni meeru introduce chesukovadam.",
    },
    canDo: ["Say your job and where you work", "Say what you did yesterday", "Introduce yourself at work"],
    lessons: [
      { id: "l12-1", titleDe: "Berufe", titleEn: "Jobs and professions" },
      { id: "l12-2", titleDe: "Am Arbeitsplatz", titleEn: "At the workplace" },
      { id: "l12-3", titleDe: "Was hast du gestern gemacht?", titleEn: "Past tense with haben (Perfekt)" },
      { id: "l12-4", titleDe: "Ich war, ich hatte", titleEn: "Past of sein and haben" },
    ],
    grammar: ["Perfekt with haben: gemacht, gearbeitet", "Präteritum of sein and haben: war, hatte", "Job titles: -er / -erin"],
    vocabulary: ["Professions", "Office and workplace", "Working hours"],
    roleplay: {
      situation: {
        en: "Your first day at a new Werkstudent job",
        te: "కొత్త {Werkstudent} జాబ్‌లో మీ ఫస్ట్ డే",
        teLatn: "Kotha {Werkstudent} job lo mee first day",
      },
      partnerDe: "Teamleiterin",
    },
    hours: 9,
    sources: { goethe: ["Arbeit/Beruf: Arbeitsplatz, Urlaub"], bamf: ["Arbeit", "Arbeitssuche"] },
  },
  {
    id: "m13-kleidung",
    number: 13,
    part: "A1.2",
    titleDe: "Kleidung und Wetter",
    title: { en: "Clothes and weather", te: "బట్టలు, వెదర్", teLatn: "Battalu, weather" },
    summary: {
      en: "Buy clothes, talk about colours and sizes, and talk about the weather and seasons in Germany.",
      te: "బట్టలు కొనడం, కలర్స్, సైజెస్ గురించి మాట్లాడటం, జర్మనీలో వెదర్, సీజన్స్ గురించి మాట్లాడటం.",
      teLatn: "Battalu konadam, colours, sizes gurinchi maatlaadatam, Germany lo weather, seasons gurinchi maatlaadatam.",
    },
    canDo: ["Try on and buy clothes", "Describe the weather", "Name the months and seasons"],
    lessons: [
      { id: "l13-1", titleDe: "Kleidung kaufen", titleEn: "Buying clothes" },
      { id: "l13-2", titleDe: "Farben und Größen", titleEn: "Colours and sizes" },
      { id: "l13-3", titleDe: "Das Wetter", titleEn: "The weather" },
      { id: "l13-4", titleDe: "Jahreszeiten und Monate", titleEn: "Seasons and months" },
    ],
    grammar: ["welcher / dieser", "Personal pronouns in the accusative: ihn, sie, es", "Impersonal es: Es regnet."],
    vocabulary: ["Clothes", "Colours", "Weather", "Months and seasons"],
    roleplay: {
      situation: {
        en: "Buying a winter jacket",
        te: "వింటర్ జాకెట్ కొనడం",
        teLatn: "Winter jacket konadam",
      },
      partnerDe: "Verkäufer",
    },
    hours: 7,
    sources: { goethe: ["Einkaufen: Kleidung", "Umwelt: Klima/Wetter", "Farben", "Jahreszeiten", "Monatsnamen"], bamf: ["Einkaufen"] },
  },
  {
    id: "m14-reisen",
    number: 14,
    part: "A1.2",
    titleDe: "Reisen und Feiern",
    title: { en: "Travel and celebrations", te: "ట్రావెల్, పార్టీలు", teLatn: "Travel, parties" },
    summary: {
      en: "Book a train ticket or hotel, talk about a past trip, and write short messages and invitations.",
      te: "ట్రైన్ టికెట్ లేదా హోటల్ బుక్ చేయడం, మీరు వెళ్ళిన ట్రిప్ గురించి చెప్పడం, చిన్న మెసేజెస్, ఇన్విటేషన్స్ రాయడం.",
      teLatn: "Train ticket ledaa hotel book cheyadam, meeru vellina trip gurinchi cheppadam, chinna messages, invitations raayadam.",
    },
    canDo: ["Buy a train ticket", "Check in at a hotel", "Write a short message or invitation"],
    lessons: [
      { id: "l14-1", titleDe: "Am Bahnhof", titleEn: "At the train station" },
      { id: "l14-2", titleDe: "Im Hotel", titleEn: "At the hotel" },
      { id: "l14-3", titleDe: "Ich bin nach Hamburg gefahren", titleEn: "Past tense with sein (Perfekt)" },
      { id: "l14-4", titleDe: "Eine kurze Nachricht", titleEn: "Writing a short message" },
    ],
    grammar: ["Perfekt with sein: gefahren, gegangen", "Dates", "Structure of an informal message"],
    vocabulary: ["Train travel", "Hotel", "Holidays and celebrations"],
    roleplay: {
      situation: {
        en: "Buying a train ticket at the station counter",
        te: "స్టేషన్ కౌంటర్‌లో ట్రైన్ టికెట్ కొనడం",
        teLatn: "Station counter lo train ticket konadam",
      },
      partnerDe: "Bahnmitarbeiter",
    },
    hours: 8,
    sources: { goethe: ["Reisen/Verkehr: Reisen, Unterkunft, Gepäck"], bamf: ["Mobilität"] },
  },
  {
    id: "m15-pruefung",
    number: 15,
    part: "A1.2",
    titleDe: "Prüfungstraining A1",
    title: { en: "A1 exam training (Start Deutsch 1)", te: "A1 ఎగ్జామ్ ప్రాక్టీస్ ({Start Deutsch 1})", teLatn: "A1 exam practice ({Start Deutsch 1})" },
    summary: {
      en: "Practise all four parts of the Goethe / telc A1 exam — listening, reading, writing, speaking — and take a full mock test.",
      te: "{Goethe} / {telc} A1 ఎగ్జామ్‌లోని నాలుగు పార్ట్స్ — లిజనింగ్, రీడింగ్, రైటింగ్, స్పీకింగ్ — ప్రాక్టీస్ చేసి, ఫుల్ మాక్ టెస్ట్ రాయడం.",
      teLatn: "{Goethe} / {telc} A1 exam loni naalugu parts — listening, reading, writing, speaking — practice chesi, full mock test raayadam.",
    },
    canDo: ["Know the exam format", "Complete a timed mock test", "Feel ready to book the real exam"],
    lessons: [
      { id: "l15-1", titleDe: "Hören", titleEn: "Listening" },
      { id: "l15-2", titleDe: "Lesen", titleEn: "Reading" },
      { id: "l15-3", titleDe: "Schreiben", titleEn: "Writing: a form and a short message" },
      { id: "l15-4", titleDe: "Sprechen und Modelltest", titleEn: "Speaking and full mock test" },
    ],
    grammar: ["Review of all A1 grammar"],
    vocabulary: ["Review of all A1 vocabulary"],
    roleplay: {
      situation: {
        en: "Oral exam: introduce yourself and ask and answer questions",
        te: "స్పీకింగ్ ఎగ్జామ్: మీ ఇంట్రడక్షన్, క్వశ్చన్స్ అడగడం, ఆన్సర్స్ చెప్పడం",
        teLatn: "Speaking exam: mee introduction, questions adagadam, answers cheppadam",
      },
      partnerDe: "Prüferin",
    },
    hours: 10,
    sources: { goethe: ["All A1 topic areas"], bamf: ["Unterricht"] },
  },
];

export function getModule(id: string): CourseModule | undefined {
  return A1_SYLLABUS.find((m) => m.id === id);
}

export const A1_TOTAL_LESSONS = A1_SYLLABUS.reduce((n, m) => n + m.lessons.length, 0);
export const A1_TOTAL_HOURS = A1_SYLLABUS.reduce((n, m) => n + m.hours, 0);
