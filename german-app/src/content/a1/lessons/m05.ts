import type { LessonContent } from "@/lib/types";

// Module 5 — Einkaufen (supermarket, prices, quantities, checkout)
export const M05: LessonContent[] = [
  {
    id: "l05-1",
    steps: [
      {
        say: {
          te: "సూపర్ మార్కెట్‌లో ఏదైనా దొరక్కపోతే ఎలా అడగాలో, సరుకుల పేర్లు నేర్చుకుందాం.",
          teLatn: "Super market lo edainaa dorakkapote elaa adagaalo, sarukula perlu nerchukundaam.",
          en: "Let's learn grocery words and how to ask when you can't find something.",
        },
      },
      {
        de: "Entschuldigung, wo finde ich Reis?",
        meaning: { te: "ఎక్స్‌క్యూజ్ మీ, రైస్ ఎక్కడ దొరుకుతుంది?", teLatn: "Excuse me, rice ekkada dorukutundi?", en: "Excuse me, where can I find rice?" },
      },
      {
        de: "Im Gang drei, ganz hinten.",
        meaning: { te: "మూడో లైన్‌లో, చివర్లో.", teLatn: "Moodo line lo, chivarlo.", en: "In aisle three, right at the back." },
      },
      {
        de: "Obst und Gemüse: Äpfel, Tomaten, Zwiebeln",
        meaning: { te: "ఫ్రూట్స్, వెజిటబుల్స్: యాపిల్స్, టొమాటోస్, ఉల్లిపాయలు.", teLatn: "Fruits, vegetables: apples, tomatoes, ullipaayalu.", en: "Fruit and vegetables: apples, tomatoes, onions." },
        tip: {
          te: "ప్లూరల్స్ చాలా రకాలు: {der Apfel} → {die Äpfel}, {die Tomate} → {die Tomaten}. ప్లూరల్ ఎప్పుడూ {die}.",
          teLatn: "Plurals chaalaa rakaalu: {der Apfel} → {die Äpfel}, {die Tomate} → {die Tomaten}. Plural eppudoo {die}.",
          en: "Plurals vary: der Apfel → die Äpfel, die Tomate → die Tomaten. Plural is always die.",
        },
      },
      {
        de: "Milch, Joghurt, Eier, Butter",
        meaning: { te: "మిల్క్, పెరుగు, ఎగ్స్, బటర్.", teLatn: "Milk, perugu, eggs, butter.", en: "milk, yoghurt, eggs, butter" },
      },
      {
        de: "Haben Sie auch Basmati-Reis?",
        meaning: { te: "మీ దగ్గర బాస్మతి రైస్ కూడా ఉందా?", teLatn: "Mee daggara Basmati rice kooda undaa?", en: "Do you also have basmati rice?" },
        tip: {
          te: "ఇండియన్ సరుకుల కోసం ఏషియా షాప్ కి వెళ్ళండి — జర్మన్‌లో {der Asia-Laden}.",
          teLatn: "Indian sarukula kosam Asia shop ki vellandi — German lo {der Asia-Laden}.",
          en: "For Indian groceries, go to an Asian shop — der Asia-Laden.",
        },
      },
    ],
  },
  {
    id: "l05-2",
    steps: [
      {
        say: {
          te: "ప్రైసెస్. జర్మనీలో యూరో, సెంట్. {zwei Euro fünfzig} అంటే టూ యూరో ఫిఫ్టీ — ఇంగ్లీష్ లాగే.",
          teLatn: "Prices. Germany lo euro, cent. {zwei Euro fünfzig} ante two euro fifty — English laage.",
          en: "Prices: euros and cents. zwei Euro fünfzig = €2.50, just like English.",
        },
      },
      {
        de: "Wie viel kostet das?",
        meaning: { te: "ఇది ఎంత?", teLatn: "Idi entha?", en: "How much is this?" },
      },
      {
        de: "Das kostet drei Euro neunundneunzig.",
        meaning: { te: "దీని ధర మూడు యూరో తొంభై తొమ్మిది.", teLatn: "Deeni dhara moodu euro tombhai tommidi.", en: "That costs €3.99." },
        tip: {
          te: "రివర్స్ నంబర్ మళ్ళీ: {neun-und-neunzig}.",
          teLatn: "Reverse number malli: {neun-und-neunzig}.",
          en: "Reversed number again: neun-und-neunzig.",
        },
      },
      {
        de: "Wie viel kosten die Tomaten?",
        meaning: { te: "టొమాటోస్ ఎంత?", teLatn: "Tomatoes entha?", en: "How much are the tomatoes?" },
        tip: {
          te: "ఒకటైతే {kostet}, చాలా అయితే {kosten}.",
          teLatn: "Okataite {kostet}, chaalaa aite {kosten}.",
          en: "One thing: kostet; several: kosten.",
        },
      },
      {
        de: "hundert, zweihundert, tausend",
        meaning: { te: "హండ్రెడ్, టూ హండ్రెడ్, థౌజెండ్.", teLatn: "Hundred, two hundred, thousand.", en: "a hundred, two hundred, a thousand" },
      },
      {
        de: "Das ist zu teuer. Das ist günstig.",
        meaning: { te: "ఇది చాలా కాస్ట్లీ. ఇది చీప్, మంచి ప్రైస్.", teLatn: "Idi chaalaa costly. Idi cheap, manchi price.", en: "That's too expensive. That's a good price." },
        tip: {
          te: "జర్మనీలో సూపర్ మార్కెట్‌లో బేరం ఆడరు. ఫ్లీ మార్కెట్‌లో అయితే ఓకే — {Flohmarkt}.",
          teLatn: "Germany lo super market lo beram aadaru. Flea market lo aite okay — {Flohmarkt}.",
          en: "No bargaining in German supermarkets — but it's fine at a flea market (Flohmarkt).",
        },
      },
    ],
  },
  {
    id: "l05-3",
    steps: [
      {
        say: {
          te: "ఎంత కావాలో చెప్పడం. కౌంట్ చేయగలిగేవాటికి {Wie viele?}, కౌంట్ చేయలేనివాటికి {Wie viel?}.",
          teLatn: "Entha kaavaalo cheppadam. Count cheyagaligevaatiki {Wie viele?}, count cheyalenivaatiki {Wie viel?}.",
          en: "Saying how much you need: Wie viele? for things you can count, Wie viel? for things you can't.",
        },
      },
      {
        de: "ein Kilo Kartoffeln",
        meaning: { te: "ఒక కిలో ఆలుగడ్డలు.", teLatn: "Oka kilo aalugaddalu.", en: "a kilo of potatoes" },
      },
      {
        de: "zweihundert Gramm Käse",
        meaning: { te: "రెండు వందల గ్రాముల చీజ్.", teLatn: "Rendu vandala graamula cheese.", en: "two hundred grams of cheese" },
        tip: {
          te: "జర్మన్‌లో 'ఆఫ్' అనరు: {ein Kilo Kartoffeln} — డైరెక్ట్‌గా.",
          teLatn: "German lo 'of' anaru: {ein Kilo Kartoffeln} — direct ga.",
          en: "No 'of' in German: ein Kilo Kartoffeln.",
        },
      },
      {
        de: "eine Flasche Wasser, eine Dose Cola",
        meaning: { te: "ఒక బాటిల్ వాటర్, ఒక కోలా టిన్.", teLatn: "Oka bottle water, oka cola tin.", en: "a bottle of water, a can of cola" },
        tip: {
          te: "జర్మనీలో బాటిల్స్‌కి {Pfand} ఉంటుంది — డిపాజిట్. ఖాళీ బాటిల్ తిరిగి ఇస్తే డబ్బులు వస్తాయి!",
          teLatn: "Germany lo bottles ki {Pfand} untundi — deposit. Khaalee bottle tirigi iste dabbulu vastaayi!",
          en: "Bottles have a deposit (Pfand) — return empties to get money back!",
        },
      },
      {
        de: "eine Packung Reis, ein Liter Milch",
        meaning: { te: "ఒక ప్యాకెట్ రైస్, ఒక లీటర్ మిల్క్.", teLatn: "Oka packet rice, oka litre milk.", en: "a packet of rice, a litre of milk" },
      },
      {
        de: "Wie viele Eier brauchen wir? — Zehn.",
        meaning: { te: "మనకి ఎన్ని ఎగ్స్ కావాలి? — పది.", teLatn: "Manaki enni eggs kaavaali? — Padi.", en: "How many eggs do we need? — Ten." },
      },
      {
        de: "Ich kaufe den Käse und einen Apfel.",
        meaning: { te: "నేను ఆ చీజ్, ఒక యాపిల్ కొంటాను.", teLatn: "Nenu aa cheese, oka apple kontaanu.", en: "I'm buying the cheese and an apple." },
        tip: {
          te: "కొనేటప్పుడు {der} పదాలు మారతాయి: {der} → {den}, {ein} → {einen}. {die}, {das} సేమ్.",
          teLatn: "Konetappudu {der} padaalu maarataayi: {der} → {den}, {ein} → {einen}. {die}, {das} same.",
          en: "When buying (accusative), der → den and ein → einen; die and das stay the same.",
        },
      },
    ],
  },
  {
    id: "l05-4",
    steps: [
      {
        say: {
          te: "బిల్లింగ్ కౌంటర్ దగ్గర జర్మన్ కౌంటర్ స్టాఫ్ చాలా ఫాస్ట్‌గా అడుగుతారు. ఇవి ఎప్పుడూ వచ్చే క్వశ్చన్స్.",
          teLatn: "Billing counter daggara German counter staff chaalaa fast ga adugutaaru. Ivi eppudoo vache questions.",
          en: "At the checkout, staff ask quickly. These questions always come up.",
        },
      },
      {
        de: "Haben Sie eine Payback-Karte?",
        meaning: { te: "మీ దగ్గర పేబ్యాక్ కార్డ్ ఉందా? — అంటే బోనస్ పాయింట్స్ కార్డ్.", teLatn: "Mee daggara Payback card undaa? — ante bonus points card.", en: "Do you have a Payback (loyalty) card?" },
        tip: {
          te: "లేకపోతే సింపుల్‌గా {Nein, danke.}",
          teLatn: "Lekapote simple ga {Nein, danke.}",
          en: "If not, simply: Nein, danke.",
        },
      },
      {
        de: "Brauchen Sie eine Tüte?",
        meaning: { te: "మీకు బ్యాగ్ కావాలా?", teLatn: "Meeku bag kaavaalaa?", en: "Do you need a bag?" },
        tip: {
          te: "జర్మనీలో బ్యాగ్స్‌కి డబ్బులు కట్టాలి. మీ బ్యాగ్ తీసుకెళ్ళడం బెటర్.",
          teLatn: "Germany lo bags ki dabbulu kattaali. Mee bag teesukelladam better.",
          en: "Bags cost money in Germany — bring your own.",
        },
      },
      {
        de: "Bar oder mit Karte?",
        meaning: { te: "క్యాష్‌తోనా, కార్డ్‌తోనా?", teLatn: "Cash thonaa, card thonaa?", en: "Cash or card?" },
      },
      {
        de: "Mit Karte, bitte.",
        meaning: { te: "కార్డ్‌తో ప్లీజ్.", teLatn: "Card tho please.", en: "By card, please." },
        tip: {
          te: "చిన్న షాప్స్, బేకరీల్లో కొన్నిసార్లు క్యాష్ మాత్రమే — ఎప్పుడూ కొంచెం క్యాష్ ఉంచుకోండి.",
          teLatn: "Chinna shops, bakeries lo konnisaarlu cash maatrame — eppudoo konchem cash unchukondi.",
          en: "Small shops and bakeries are sometimes cash only — always keep some cash.",
        },
      },
      {
        de: "Möchten Sie den Kassenbon?",
        meaning: { te: "మీకు రసీదు కావాలా?", teLatn: "Meeku raseedu kaavaalaa?", en: "Would you like the receipt?" },
      },
      {
        de: "Danke, schönen Tag noch!",
        meaning: { te: "థాంక్స్, మీ రోజు బాగుండాలి!", teLatn: "Thanks, mee rooju baagundaali!", en: "Thanks, have a nice day!" },
      },
    ],
  },
];
