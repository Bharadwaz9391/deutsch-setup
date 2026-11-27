import type { LessonContent } from "@/lib/types";

// Module 4 — Essen und Trinken (der/die/das, café, likes, meals)
export const M04: LessonContent[] = [
  {
    id: "l04-1",
    steps: [
      {
        say: {
          te: "జర్మన్‌లో ప్రతి నౌన్‌కి ఒక జెండర్ ఉంటుంది: {der}, {die} లేదా {das}. ఇంగ్లీష్‌లో అన్నిటికీ 'ది' ఒక్కటే. అందుకే ప్రతి కొత్త పదాన్ని {der}, {die}, {das} తో కలిపే నేర్చుకోండి.",
          teLatn: "German lo prati noun ki oka gender untundi: {der}, {die} ledaa {das}. English lo annitikee 'the' okkate. Anduke prati kotha padaanni {der}, {die}, {das} tho kalipe nerchukondi.",
          en: "Every German noun has a gender: der, die or das. English has only 'the'. So always learn new nouns together with der, die or das.",
        },
      },
      {
        de: "der Kaffee, der Tee, der Saft",
        meaning: { te: "కాఫీ, టీ, జ్యూస్ — మూడూ {der}.", teLatn: "Coffee, tea, juice — moodoo {der}.", en: "coffee, tea, juice — all der" },
      },
      {
        de: "die Milch, die Pizza, die Banane",
        meaning: { te: "మిల్క్, పిజ్జా, బనానా — మూడూ {die}.", teLatn: "Milk, pizza, banana — moodoo {die}.", en: "milk, pizza, banana — all die" },
        tip: {
          te: "ట్రిక్: {-e} తో ఎండ్ అయ్యే చాలా పదాలు {die}.",
          teLatn: "Trick: {-e} tho end ayye chaalaa padaalu {die}.",
          en: "Trick: many words ending in -e are die.",
        },
      },
      {
        de: "das Wasser, das Brot, das Ei",
        meaning: { te: "వాటర్, బ్రెడ్, ఎగ్ — మూడూ {das}.", teLatn: "Water, bread, egg — moodoo {das}.", en: "water, bread, egg — all das" },
      },
      {
        de: "die Zeitung, das Mädchen",
        meaning: { te: "న్యూస్‌పేపర్, అమ్మాయి.", teLatn: "Newspaper, ammaayi.", en: "newspaper, girl" },
        tip: {
          te: "రెండు స్ట్రాంగ్ రూల్స్: {-ung} తో ఎండ్ అయితే ఎప్పుడూ {die}. {-chen} తో ఎండ్ అయితే ఎప్పుడూ {das}.",
          teLatn: "Rendu strong rules: {-ung} tho end aite eppudoo {die}. {-chen} tho end aite eppudoo {das}.",
          en: "Two strong rules: -ung is always die; -chen is always das.",
        },
      },
      {
        de: "ein Kaffee, eine Pizza, ein Brot",
        meaning: { te: "ఒక కాఫీ, ఒక పిజ్జా, ఒక బ్రెడ్.", teLatn: "Oka coffee, oka pizza, oka bread.", en: "a coffee, a pizza, a bread" },
        tip: {
          te: "'ఎ' లేదా 'ఒక' కి: {der}, {das} పదాలకి {ein}, {die} పదాలకి {eine}.",
          teLatn: "'A' ledaa 'oka' ki: {der}, {das} padaalaki {ein}, {die} padaalaki {eine}.",
          en: "For 'a': ein with der/das words, eine with die words.",
        },
      },
    ],
  },
  {
    id: "l04-2",
    steps: [
      {
        say: {
          te: "కేఫ్‌లో ఆర్డర్ చేయడానికి మ్యాజిక్ వర్డ్: {Ich möchte} — అంటే 'నాకు … కావాలి', మర్యాదగా.",
          teLatn: "Café lo order cheyadaaniki magic word: {Ich möchte} — ante 'naaku … kaavaali', maryaadaga.",
          en: "The magic phrase for ordering: Ich möchte — 'I would like', politely.",
        },
      },
      {
        de: "Was möchten Sie?",
        meaning: { te: "మీకు ఏం కావాలి?", teLatn: "Meeku em kaavaali?", en: "What would you like?" },
        tip: {
          te: "వెయిటర్ ఇది అడుగుతారు.",
          teLatn: "Waiter idi adugutaaru.",
          en: "The waiter asks this.",
        },
      },
      {
        de: "Ich möchte einen Kaffee, bitte.",
        meaning: { te: "నాకు ఒక కాఫీ కావాలి, ప్లీజ్.", teLatn: "Naaku oka coffee kaavaali, please.", en: "I'd like a coffee, please." },
        tip: {
          te: "చూడండి: {ein Kaffee} కాదు, {einen Kaffee}. ఆర్డర్ చేసేటప్పుడు {der} పదాలకి {einen} అవుతుంది. {die}, {das} మారవు.",
          teLatn: "Choodandi: {ein Kaffee} kaadu, {einen Kaffee}. Order chesetappudu {der} padaalaki {einen} avutundi. {die}, {das} maaravu.",
          en: "Note: einen Kaffee, not ein Kaffee. When you order, der-words take einen; die and das words don't change.",
        },
      },
      {
        de: "Ich nehme ein Stück Kuchen.",
        meaning: { te: "నేను ఒక పీస్ కేక్ తీసుకుంటాను.", teLatn: "Nenu oka piece cake teesukuntaanu.", en: "I'll have a piece of cake." },
      },
      {
        de: "Noch ein Wasser, bitte.",
        meaning: { te: "ఇంకో వాటర్ ప్లీజ్.", teLatn: "Inko water please.", en: "Another water, please." },
      },
      {
        de: "Die Rechnung, bitte. — Zusammen oder getrennt?",
        meaning: {
          te: "బిల్ ప్లీజ్. — కలిపి కడతారా లేక సెపరేట్‌గానా?",
          teLatn: "Bill please. — Kalipi kadataaraa leka separate gaanaa?",
          en: "The bill, please. — Together or separately?",
        },
        tip: {
          te: "జర్మనీలో ఫ్రెండ్స్ ఎవరి బిల్ వాళ్ళు కట్టడం నార్మల్. {Getrennt, bitte.}",
          teLatn: "Germany lo friends evari bill vaallu kattadam normal. {Getrennt, bitte.}",
          en: "In Germany it's normal for friends to pay separately: Getrennt, bitte.",
        },
      },
      {
        de: "Das macht zwölf Euro. — Vierzehn, bitte.",
        meaning: {
          te: "మొత్తం పన్నెండు యూరోలు. — పద్నాలుగు తీసుకోండి.",
          teLatn: "Mottham pannendu euros. — Padnaalugu teesukondi.",
          en: "That's twelve euros. — Make it fourteen.",
        },
        tip: {
          te: "టిప్ ఇవ్వాలంటే, కట్టేటప్పుడే రౌండ్ ఫిగర్ చెప్పండి. సుమారు టెన్ పర్సెంట్ నార్మల్.",
          teLatn: "Tip ivvaalante, kattetappude round figure cheppandi. Sumaaru ten percent normal.",
          en: "To tip, say the rounded total when you pay. About ten percent is normal.",
        },
      },
    ],
  },
  {
    id: "l04-3",
    steps: [
      {
        say: {
          te: "ఇష్టం అని చెప్పడానికి జర్మన్‌లో వర్బ్ తర్వాత {gern} పెడతారు. {gern} అంటే 'ఇష్టంగా'.",
          teLatn: "Ishtam ani cheppadaaniki German lo verb tarvaata {gern} pedataaru. {gern} ante 'ishtamgaa'.",
          en: "To say you like doing something, add gern after the verb. gern means 'gladly'.",
        },
      },
      {
        de: "Ich esse gern Reis.",
        meaning: { te: "నాకు రైస్ తినడం ఇష్టం.", teLatn: "Naaku rice tinadam ishtam.", en: "I like eating rice." },
      },
      {
        de: "Ich trinke gern Tee.",
        meaning: { te: "నాకు టీ తాగడం ఇష్టం.", teLatn: "Naaku tea taagadam ishtam.", en: "I like drinking tea." },
      },
      {
        de: "Ich esse nicht gern Fleisch.",
        meaning: { te: "నాకు మీట్ తినడం ఇష్టం లేదు.", teLatn: "Naaku meat tinadam ishtam ledu.", en: "I don't like eating meat." },
        tip: {
          te: "ఇష్టం లేదు అంటే {nicht gern}.",
          teLatn: "Ishtam ledu ante {nicht gern}.",
          en: "Don't like = nicht gern.",
        },
      },
      {
        de: "Was isst du gern?",
        meaning: { te: "నీకు ఏం తినడం ఇష్టం?", teLatn: "Neeku em tinadam ishtam?", en: "What do you like to eat?" },
        tip: {
          te: "{essen} లో కూడా {e} మారి {i} అవుతుంది: {ich esse}, {du isst}.",
          teLatn: "{essen} lo kooda {e} maari {i} avutundi: {ich esse}, {du isst}.",
          en: "essen changes e to i too: ich esse, du isst.",
        },
      },
      {
        de: "Ich bin Vegetarier. Ist da Fleisch drin?",
        meaning: { te: "నేను వెజిటేరియన్. ఇందులో మీట్ ఉందా?", teLatn: "Nenu vegetarian. Indulo meat undaa?", en: "I'm vegetarian. Is there meat in it?" },
        tip: {
          te: "ఆడవాళ్ళు అయితే {Vegetarierin}. చాలా ఉపయోగపడే క్వశ్చన్!",
          teLatn: "Aadavaallu aite {Vegetarierin}. Chaalaa upayogapade question!",
          en: "For a woman: Vegetarierin. A very useful question!",
        },
      },
      {
        de: "Das schmeckt lecker!",
        meaning: { te: "ఇది చాలా టేస్టీగా ఉంది!", teLatn: "Idi chaalaa tasty ga undi!", en: "This tastes delicious!" },
      },
    ],
  },
  {
    id: "l04-4",
    steps: [
      {
        say: {
          te: "జర్మనీలో రోజుకి మూడు మీల్స్. చాలామంది ఇంట్లో రాత్రి సింపుల్‌గా బ్రెడ్ తింటారు — దాన్ని {Abendbrot} అంటారు.",
          teLatn: "Germany lo rojuki moodu meals. Chaalaamandi intlo raatri simple ga bread tintaaru — daanni {Abendbrot} antaaru.",
          en: "Germans have three meals a day. Many eat a simple bread dinner at home — das Abendbrot.",
        },
      },
      {
        de: "das Frühstück",
        meaning: { te: "బ్రేక్‌ఫాస్ట్, టిఫిన్.", teLatn: "Breakfast, tiffin.", en: "breakfast" },
      },
      {
        de: "das Mittagessen",
        meaning: { te: "లంచ్, మధ్యాహ్నం భోజనం.", teLatn: "Lunch, madhyaahnam bhojanam.", en: "lunch" },
      },
      {
        de: "das Abendessen",
        meaning: { te: "డిన్నర్.", teLatn: "Dinner.", en: "dinner" },
        tip: {
          te: "మూడూ {das} — ఎందుకంటే {Essen} అంటే ఫుడ్, అది {das}. చివరి పదం జెండర్ డిసైడ్ చేస్తుంది.",
          teLatn: "Moodoo {das} — endukante {Essen} ante food, adi {das}. Chivari padam gender decide chestundi.",
          en: "All three are das, because the last part, das Essen, decides the gender.",
        },
      },
      {
        de: "Zum Frühstück esse ich Brot mit Käse.",
        meaning: { te: "బ్రేక్‌ఫాస్ట్‌కి నేను చీజ్‌తో బ్రెడ్ తింటాను.", teLatn: "Breakfast ki nenu cheese tho bread tintaanu.", en: "For breakfast I eat bread with cheese." },
        tip: {
          te: "వర్బ్ రెండో ప్లేస్ రూల్: {Zum Frühstück} ఒకటి, {esse} రెండు, తర్వాత {ich}.",
          teLatn: "Verb rendo place rule: {Zum Frühstück} okati, {esse} rendu, tarvaata {ich}.",
          en: "Verb-second rule: Zum Frühstück (1), esse (2), then ich.",
        },
      },
      {
        de: "Mittags esse ich in der Kantine.",
        meaning: { te: "మధ్యాహ్నం నేను ఆఫీస్ కాంటీన్‌లో తింటాను.", teLatn: "Madhyaahnam nenu office canteen lo tintaanu.", en: "At lunchtime I eat in the canteen." },
      },
      {
        de: "Guten Appetit!",
        meaning: { te: "బాగా తినండి! ఎంజాయ్ యువర్ మీల్!", teLatn: "Baagaa tinandi! Enjoy your meal!", en: "Enjoy your meal!" },
        tip: {
          te: "తినడం స్టార్ట్ చేసే ముందు జర్మన్లు ఇది చెప్తారు.",
          teLatn: "Tinadam start chese mundu Germans idi cheptaaru.",
          en: "Germans say this before starting to eat.",
        },
      },
    ],
  },
];
