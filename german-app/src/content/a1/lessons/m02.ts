import type { LessonContent } from "@/lib/types";

// Module 2 — Woher kommst du? (countries, living, languages, numbers to 100)
export const M02: LessonContent[] = [
  {
    id: "l02-1",
    steps: [
      {
        say: {
          te: "ఎక్కడి నుంచి వచ్చారు అని చెప్పడానికి {kommen aus} వాడతారు. {kommen} అంటే రావడం, {aus} అంటే 'నుంచి'.",
          teLatn: "Ekkadi nunchi vachaaru ani cheppadaaniki {kommen aus} vaadataaru. {kommen} ante raavadam, {aus} ante 'nunchi'.",
          en: "To say where you're from, use kommen aus. kommen = to come, aus = from.",
        },
      },
      {
        de: "Ich komme aus Indien.",
        meaning: { te: "నేను ఇండియా నుంచి వచ్చాను.", teLatn: "Nenu India nunchi vachaanu.", en: "I come from India." },
      },
      {
        de: "Ich komme aus Hyderabad.",
        meaning: { te: "నేను హైదరాబాద్ నుంచి వచ్చాను.", teLatn: "Nenu Hyderabad nunchi vachaanu.", en: "I come from Hyderabad." },
        tip: {
          te: "మీ సిటీ పేరు పెట్టి ప్రాక్టీస్ చేయండి: విజయవాడ, వైజాగ్, వరంగల్…",
          teLatn: "Mee city peru petti practice cheyandi: Vijayawada, Vizag, Warangal…",
          en: "Practise with your own city name.",
        },
      },
      {
        de: "Woher kommen Sie?",
        meaning: { te: "మీరు ఎక్కడి నుంచి వచ్చారు? — మర్యాదగా.", teLatn: "Meeru ekkadi nunchi vachaaru? — maryaadaga.", en: "Where are you from? (polite)" },
      },
      {
        de: "Ich bin Inder. Ich bin Inderin.",
        meaning: {
          te: "నేను ఇండియన్ — మగవాళ్ళు {Inder}, ఆడవాళ్ళు {Inderin}.",
          teLatn: "Nenu Indian — magavaallu {Inder}, aadavaallu {Inderin}.",
          en: "I'm Indian — Inder for a man, Inderin for a woman.",
        },
        tip: {
          te: "జర్మన్‌లో ఆడవాళ్ళకి చాలా పదాలకి చివర {-in} వస్తుంది.",
          teLatn: "German lo aadavaallaki chaalaa padaalaki chivara {-in} vastundi.",
          en: "In German, many words get -in at the end for women.",
        },
      },
      {
        say: {
          te: "ఇంపార్టెంట్ రూల్: జర్మన్ వాక్యంలో వర్బ్ ఎప్పుడూ రెండో ప్లేస్‌లో ఉంటుంది. {Ich} ఒకటి, {komme} రెండు, {aus Indien} తర్వాత.",
          teLatn: "Important rule: German vaakyamlo verb eppudoo rendo place lo untundi. {Ich} okati, {komme} rendu, {aus Indien} tarvaata.",
          en: "Important rule: in a German sentence the verb is always in position 2. Ich (1), komme (2), aus Indien after.",
        },
      },
    ],
  },
  {
    id: "l02-2",
    steps: [
      {
        say: {
          te: "ఇప్పుడు మీరు ఎక్కడ ఉంటున్నారో చెప్పడం. దానికి {wohnen in} — అంటే 'లో ఉండటం'.",
          teLatn: "Ippudu meeru ekkada untunnaaro cheppadam. Daaniki {wohnen in} — ante 'lo undatam'.",
          en: "Now saying where you live: wohnen in — to live in.",
        },
      },
      {
        de: "Ich wohne in Berlin.",
        meaning: { te: "నేను బెర్లిన్‌లో ఉంటున్నాను.", teLatn: "Nenu Berlin lo untunnaanu.", en: "I live in Berlin." },
      },
      {
        de: "Wo wohnst du?",
        meaning: { te: "నువ్వు ఎక్కడ ఉంటావు?", teLatn: "Nuvvu ekkada untaavu?", en: "Where do you live?" },
        tip: {
          te: "{wo} అంటే ఎక్కడ. {du} తో వర్బ్ చివర {-st}: {du wohnst}.",
          teLatn: "{wo} ante ekkada. {du} tho verb chivara {-st}: {du wohnst}.",
          en: "wo = where. With du the verb ends in -st: du wohnst.",
        },
      },
      {
        de: "Ich wohne, du wohnst, er wohnt.",
        meaning: {
          te: "నేను ఉంటాను, నువ్వు ఉంటావు, అతను ఉంటాడు.",
          teLatn: "Nenu untaanu, nuvvu untaavu, atanu untaadu.",
          en: "I live, you live, he lives.",
        },
        tip: {
          te: "ఎండింగ్స్ గుర్తుపెట్టుకోండి: {ich} తో {-e}, {du} తో {-st}, {er}, {sie} తో {-t}.",
          teLatn: "Endings gurthupettukondi: {ich} tho {-e}, {du} tho {-st}, {er}, {sie} tho {-t}.",
          en: "Remember the endings: ich -e, du -st, er/sie -t.",
        },
      },
      {
        de: "Wohnst du in Berlin? — Ja. / Nein, in Hamburg.",
        meaning: {
          te: "నువ్వు బెర్లిన్‌లో ఉంటావా? — అవును. / లేదు, హాంబర్గ్‌లో.",
          teLatn: "Nuvvu Berlin lo untaavaa? — Avunu. / Ledu, Hamburg lo.",
          en: "Do you live in Berlin? — Yes. / No, in Hamburg.",
        },
        tip: {
          te: "అవును-కాదు క్వశ్చన్‌లో వర్బ్ ఫస్ట్ వస్తుంది: {Wohnst du…?}",
          teLatn: "Avunu-kaadu question lo verb first vastundi: {Wohnst du…?}",
          en: "In yes/no questions the verb comes first: Wohnst du…?",
        },
      },
      {
        de: "Ich wohne seit zwei Jahren in Deutschland.",
        meaning: {
          te: "నేను రెండేళ్ళుగా జర్మనీలో ఉంటున్నాను.",
          teLatn: "Nenu rendellugaa Germany lo untunnaanu.",
          en: "I've been living in Germany for two years.",
        },
        tip: {
          te: "{seit} అంటే 'నుంచి, గా'. ఇంకా కంటిన్యూ అవుతుంటే {seit} వాడతారు.",
          teLatn: "{seit} ante 'nunchi, gaa'. Inka continue avutunte {seit} vaadataaru.",
          en: "seit = since / for — for something still going on.",
        },
      },
    ],
  },
  {
    id: "l02-3",
    steps: [
      {
        say: {
          te: "లాంగ్వేజెస్. జర్మన్‌లో లాంగ్వేజ్ అంటే {Sprache}. మాట్లాడటం అంటే {sprechen}.",
          teLatn: "Languages. German lo language ante {Sprache}. Maatlaadatam ante {sprechen}.",
          en: "Languages. In German a language is die Sprache; to speak is sprechen.",
        },
      },
      {
        de: "Ich spreche Telugu, Englisch und ein bisschen Deutsch.",
        meaning: {
          te: "నేను తెలుగు, ఇంగ్లీష్, కొంచెం జర్మన్ మాట్లాడతాను.",
          teLatn: "Nenu Telugu, English, konchem German maatlaadataanu.",
          en: "I speak Telugu, English and a little German.",
        },
      },
      {
        de: "Welche Sprachen sprichst du?",
        meaning: { te: "నువ్వు ఏ లాంగ్వేజెస్ మాట్లాడతావు?", teLatn: "Nuvvu e languages maatlaadataavu?", en: "Which languages do you speak?" },
        tip: {
          te: "జాగ్రత్త: {ich spreche}, కానీ {du sprichst}. ఈ వర్బ్‌లో {e} మారి {i} అవుతుంది.",
          teLatn: "Jaagratta: {ich spreche}, kaani {du sprichst}. Ee verb lo {e} maari {i} avutundi.",
          en: "Careful: ich spreche but du sprichst — the e changes to i.",
        },
      },
      {
        de: "Hindi, Tamil, Deutsch, Englisch",
        meaning: { te: "హిందీ, తమిళ్, జర్మన్, ఇంగ్లీష్.", teLatn: "Hindi, Tamil, German, English.", en: "Hindi, Tamil, German, English." },
        tip: {
          te: "లాంగ్వేజెస్‌కి ముందు {der}, {die} అవసరం లేదు: {Ich spreche Hindi.}",
          teLatn: "Languages ki mundu {der}, {die} avasaram ledu: {Ich spreche Hindi.}",
          en: "No article before languages: Ich spreche Hindi.",
        },
      },
      {
        de: "Ich lerne Deutsch.",
        meaning: { te: "నేను జర్మన్ నేర్చుకుంటున్నాను.", teLatn: "Nenu German nerchukuntunnaanu.", en: "I'm learning German." },
      },
      {
        de: "Sprechen Sie Englisch?",
        meaning: { te: "మీరు ఇంగ్లీష్ మాట్లాడతారా?", teLatn: "Meeru English maatlaadataaraa?", en: "Do you speak English?" },
        tip: {
          te: "చాలా అవసరం అయినప్పుడు మాత్రమే — ముందు జర్మన్‌లో ట్రై చేయండి!",
          teLatn: "Chaalaa avasaram ayinappudu maatrame — mundu German lo try cheyandi!",
          en: "Only when you really need it — try German first!",
        },
      },
    ],
  },
  {
    id: "l02-4",
    steps: [
      {
        say: {
          te: "ట్వెంటీ తర్వాత జర్మన్ నంబర్స్ రివర్స్‌లో చెప్తారు: ముందు చిన్న నంబర్, తర్వాత టెన్స్. మనం 'ఇరవై ఒకటి' అంటాం, జర్మన్లు 'ఒకటి-ఇరవై' అంటారు.",
          teLatn: "Twenty tarvaata German numbers reverse lo cheptaaru: mundu chinna number, tarvaata tens. Manam 'iravai okati' antaam, Germans 'okati-iravai' antaaru.",
          en: "After twenty, German numbers are said backwards: first the ones, then the tens.",
        },
      },
      {
        de: "einundzwanzig",
        meaning: {
          te: "ట్వెంటీ వన్. వర్డ్ బై వర్డ్: ఒకటి-అండ్-ఇరవై.",
          teLatn: "Twenty one. Word by word: okati-and-iravai.",
          en: "Twenty-one — literally 'one-and-twenty'.",
        },
        tip: {
          te: "{ein} ప్లస్ {und} ప్లస్ {zwanzig}.",
          teLatn: "{ein} plus {und} plus {zwanzig}.",
          en: "ein + und + zwanzig.",
        },
      },
      {
        de: "dreißig, vierzig, fünfzig",
        meaning: { te: "థర్టీ, ఫార్టీ, ఫిఫ్టీ.", teLatn: "Thirty, forty, fifty.", en: "Thirty, forty, fifty." },
        tip: {
          te: "{dreißig} లో {ß} — జాగ్రత్త, మిగతావి అన్నీ {-zig}.",
          teLatn: "{dreißig} lo {ß} — jaagratta, migataavi annee {-zig}.",
          en: "dreißig has ß; the others all end in -zig.",
        },
      },
      {
        de: "sechzig, siebzig, achtzig, neunzig, hundert",
        meaning: { te: "సిక్స్‌టీ, సెవెంటీ, ఎయిటీ, నైంటీ, హండ్రెడ్.", teLatn: "Sixty, seventy, eighty, ninety, hundred.", en: "Sixty, seventy, eighty, ninety, a hundred." },
      },
      {
        de: "siebenundvierzig",
        meaning: { te: "ఫార్టీ సెవెన్.", teLatn: "Forty seven.", en: "Forty-seven." },
        tip: {
          te: "ముందు {sieben}, తర్వాత {vierzig}. ప్రైసెస్, ఏజ్ చెప్పడానికి ఇది చాలా అవసరం.",
          teLatn: "Mundu {sieben}, tarvaata {vierzig}. Prices, age cheppadaaniki idi chaalaa avasaram.",
          en: "First sieben, then vierzig. You need this for prices and ages.",
        },
      },
      {
        de: "Meine Telefonnummer ist null, eins, sieben, sechs …",
        meaning: { te: "నా ఫోన్ నంబర్ జీరో, వన్, సెవెన్, సిక్స్…", teLatn: "Naa phone number zero, one, seven, six…", en: "My phone number is zero, one, seven, six…" },
        tip: {
          te: "ఫోన్ నంబర్‌ని ఒక్కో అంకె విడిగా చెప్తే అందరికీ ఈజీ.",
          teLatn: "Phone number ni okko anke vidiga chepte andarikee easy.",
          en: "Saying a phone number digit by digit is easiest for everyone.",
        },
      },
      {
        de: "Wie ist Ihre Telefonnummer?",
        meaning: { te: "మీ ఫోన్ నంబర్ ఏంటి?", teLatn: "Mee phone number enti?", en: "What's your phone number?" },
      },
    ],
  },
];
