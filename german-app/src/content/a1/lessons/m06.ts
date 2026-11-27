import type { LessonContent } from "@/lib/types";

// Module 6 — Mein Tag (time, daily routine, weekdays, making plans)
export const M06: LessonContent[] = [
  {
    id: "l06-1",
    steps: [
      {
        say: {
          te: "టైమ్ చెప్పడానికి రెండు టైప్స్. అఫీషియల్: నంబర్స్‌తో, ట్రైన్ టైమ్స్ లాగా. రోజూ మాట్లాడేటప్పుడు: క్వార్టర్, హాఫ్‌తో.",
          teLatn: "Time cheppadaaniki rendu types. Official: numbers tho, train times laaga. Rooju maatlaadetappudu: quarter, half tho.",
          en: "Two ways to tell the time: official, with numbers like train times; and everyday, with quarter and half.",
        },
      },
      {
        de: "Wie spät ist es?",
        meaning: { te: "టైమ్ ఎంత అయింది?", teLatn: "Time entha ayindi?", en: "What time is it?" },
      },
      {
        de: "Es ist neun Uhr.",
        meaning: { te: "తొమ్మిది అయింది.", teLatn: "Tommidi ayindi.", en: "It's nine o'clock." },
      },
      {
        de: "Es ist Viertel nach neun.",
        meaning: { te: "తొమ్మిదింబావు — నైన్ ఫిఫ్టీన్.", teLatn: "Tommidimbaavu — nine fifteen.", en: "It's quarter past nine." },
      },
      {
        de: "Es ist halb zehn.",
        meaning: { te: "తొమ్మిదిన్నర — నైన్ థర్టీ!", teLatn: "Tommidinnara — nine thirty!", en: "It's half past nine (9:30)!" },
        tip: {
          te: "జాగ్రత్త, చాలా ఇంపార్టెంట్: {halb zehn} అంటే పదికి సగం దూరం — అంటే తొమ్మిదిన్నర, పదిన్నర కాదు!",
          teLatn: "Jaagratta, chaalaa important: {halb zehn} ante padiki sagam dooram — ante tommidinnara, padinnara kaadu!",
          en: "Very important: halb zehn means 'half to ten' = 9:30, not 10:30!",
        },
      },
      {
        de: "Es ist Viertel vor zehn.",
        meaning: { te: "పదికి పావు తక్కువ — నైన్ ఫార్టీ ఫైవ్.", teLatn: "Padiki paavu takkuva — nine forty five.", en: "It's quarter to ten (9:45)." },
      },
      {
        de: "Der Zug fährt um siebzehn Uhr dreißig.",
        meaning: { te: "ట్రైన్ సాయంత్రం ఐదున్నరకి — సెవెన్‌టీన్ థర్టీ.", teLatn: "Train saayantram aidunnaraki — seventeen thirty.", en: "The train leaves at 17:30." },
        tip: {
          te: "ట్రైన్స్, అపాయింట్‌మెంట్స్‌కి ట్వెంటీ ఫోర్ అవర్స్ టైమ్ వాడతారు. {um} అంటే 'కి' — 'ఎట్'.",
          teLatn: "Trains, appointments ki twenty four hours time vaadataaru. {um} ante 'ki' — 'at'.",
          en: "Trains and appointments use the 24-hour clock. um = at.",
        },
      },
    ],
  },
  {
    id: "l06-2",
    steps: [
      {
        say: {
          te: "డైలీ రొటీన్. జర్మన్‌లో కొన్ని వర్బ్స్ రెండు ముక్కలుగా విడిపోతాయి: {aufstehen} — నిద్ర లేవడం. వాక్యంలో {ich stehe … auf}.",
          teLatn: "Daily routine. German lo konni verbs rendu mukkaluga vidipotaayi: {aufstehen} — nidra levadam. Vaakyamlo {ich stehe … auf}.",
          en: "Daily routine. Some German verbs split in two: aufstehen (to get up) becomes ich stehe … auf.",
        },
      },
      {
        de: "Ich stehe um sechs Uhr auf.",
        meaning: { te: "నేను ఆరు గంటలకి లేస్తాను.", teLatn: "Nenu aaru gantalaki lestaanu.", en: "I get up at six." },
        tip: {
          te: "{stehe} రెండో ప్లేస్‌లో, {auf} ఎండ్‌లో. ఇవి 'సెపరబుల్ వర్బ్స్'.",
          teLatn: "{stehe} rendo place lo, {auf} end lo. Ivi 'separable verbs'.",
          en: "stehe in position 2, auf at the end — a separable verb.",
        },
      },
      {
        de: "Dann frühstücke ich.",
        meaning: { te: "తర్వాత నేను బ్రేక్‌ఫాస్ట్ చేస్తాను.", teLatn: "Tarvaata nenu breakfast chestaanu.", en: "Then I have breakfast." },
        tip: {
          te: "{Dann} ఫస్ట్ వస్తే, వర్బ్ రెండు, {ich} మూడు.",
          teLatn: "{Dann} first vaste, verb rendu, {ich} moodu.",
          en: "If dann comes first, the verb is second and ich third.",
        },
      },
      {
        de: "Ich arbeite von neun bis fünf.",
        meaning: { te: "నేను తొమ్మిది నుంచి ఐదు వరకు పని చేస్తాను.", teLatn: "Nenu tommidi nunchi aidu varaku pani chestaanu.", en: "I work from nine to five." },
      },
      {
        de: "Am Abend kaufe ich ein und koche.",
        meaning: { te: "సాయంత్రం నేను షాపింగ్ చేసి వంట చేస్తాను.", teLatn: "Saayantram nenu shopping chesi vanta chestaanu.", en: "In the evening I go shopping and cook." },
        tip: {
          te: "{einkaufen} కూడా విడిపోతుంది: {ich kaufe … ein}.",
          teLatn: "{einkaufen} kooda vidipotundi: {ich kaufe … ein}.",
          en: "einkaufen splits too: ich kaufe … ein.",
        },
      },
      {
        de: "Um elf Uhr gehe ich ins Bett.",
        meaning: { te: "పదకొండు గంటలకి నేను పడుకుంటాను.", teLatn: "Padakondu gantalaki nenu padukuntaanu.", en: "At eleven I go to bed." },
      },
    ],
  },
  {
    id: "l06-3",
    steps: [
      {
        say: {
          te: "వారంలో రోజులు. అన్నీ {der} — ఎందుకంటే {der Tag} అంటే డే. చాలా వాటి చివర {-tag} ఉంటుంది.",
          teLatn: "Vaaramlo rojulu. Annee {der} — endukante {der Tag} ante day. Chaalaa vaati chivara {-tag} untundi.",
          en: "Days of the week. All der, because der Tag = day — most end in -tag.",
        },
      },
      {
        de: "Montag, Dienstag, Mittwoch",
        meaning: { te: "మండే, ట్యూస్‌డే, వెడ్నెస్‌డే.", teLatn: "Monday, Tuesday, Wednesday.", en: "Monday, Tuesday, Wednesday" },
        tip: {
          te: "{Mittwoch} అంటే 'వారం మధ్య' — మిడ్ వీక్.",
          teLatn: "{Mittwoch} ante 'vaaram madhya' — mid week.",
          en: "Mittwoch literally means 'mid-week'.",
        },
      },
      {
        de: "Donnerstag, Freitag",
        meaning: { te: "థర్స్‌డే, ఫ్రైడే.", teLatn: "Thursday, Friday.", en: "Thursday, Friday" },
      },
      {
        de: "Samstag, Sonntag",
        meaning: { te: "శాటర్‌డే, సండే — వీకెండ్, {das Wochenende}.", teLatn: "Saturday, Sunday — weekend, {das Wochenende}.", en: "Saturday, Sunday — the weekend, das Wochenende" },
        tip: {
          te: "జర్మనీలో సండే దాదాపు అన్ని షాప్స్ క్లోజ్! శాటర్‌డేనే షాపింగ్ చేయండి.",
          teLatn: "Germany lo Sunday daadaapu anni shops close! Saturday ne shopping cheyandi.",
          en: "Almost all shops are closed on Sunday in Germany — shop on Saturday!",
        },
      },
      {
        de: "Am Montag arbeite ich.",
        meaning: { te: "మండే నాడు నేను పని చేస్తాను.", teLatn: "Monday naadu nenu pani chestaanu.", en: "On Monday I work." },
        tip: {
          te: "రోజుల ముందు {am}: {am Montag}, {am Wochenende}.",
          teLatn: "Rojula mundu {am}: {am Montag}, {am Wochenende}.",
          en: "Before days use am: am Montag, am Wochenende.",
        },
      },
      {
        de: "heute, morgen, gestern",
        meaning: { te: "ఈ రోజు, రేపు, నిన్న.", teLatn: "Ee rooju, repu, ninna.", en: "today, tomorrow, yesterday" },
        tip: {
          te: "{morgen} అంటే రేపు, కానీ {der Morgen} అంటే పొద్దున్న. {Guten Morgen} గుర్తుందా?",
          teLatn: "{morgen} ante repu, kaani {der Morgen} ante podduna. {Guten Morgen} gurthundaa?",
          en: "morgen = tomorrow, but der Morgen = the morning (Guten Morgen!).",
        },
      },
    ],
  },
  {
    id: "l06-4",
    steps: [
      {
        say: {
          te: "ఫ్రెండ్‌తో కలవడానికి టైమ్ ఫిక్స్ చేద్దాం. జర్మనీలో ప్లాన్స్ ముందే ఫిక్స్ చేస్తారు, టైమ్‌కి రావడం చాలా ఇంపార్టెంట్.",
          teLatn: "Friend tho kalavadaaniki time fix cheddaam. Germany lo plans munde fix chestaaru, time ki raavadam chaalaa important.",
          en: "Let's arrange to meet a friend. Germans plan ahead, and being on time matters a lot.",
        },
      },
      {
        de: "Hast du am Samstag Zeit?",
        meaning: { te: "శాటర్‌డే నీకు టైమ్ ఉందా? ఫ్రీగా ఉన్నావా?", teLatn: "Saturday neeku time undaa? Free ga unnaavaa?", en: "Are you free on Saturday?" },
      },
      {
        de: "Ja, da habe ich Zeit.",
        meaning: { te: "అవును, అప్పుడు నేను ఫ్రీ.", teLatn: "Avunu, appudu nenu free.", en: "Yes, I'm free then." },
      },
      {
        de: "Nein, leider nicht. Am Sonntag?",
        meaning: { te: "లేదు, సారీ. సండే ఓకేనా?", teLatn: "Ledu, sorry. Sunday okay naa?", en: "No, unfortunately not. Sunday?" },
        tip: {
          te: "{leider} అంటే 'సారీ' లాగా — మర్యాదగా 'నో' చెప్పడానికి.",
          teLatn: "{leider} ante 'sorry' laaga — polite ga 'no' cheppadaaniki.",
          en: "leider = unfortunately — the polite way to say no.",
        },
      },
      {
        de: "Wann? — Um drei Uhr.",
        meaning: { te: "ఎప్పుడు? — మూడు గంటలకి.", teLatn: "Eppudu? — Moodu gantalaki.", en: "When? — At three." },
      },
      {
        de: "Treffen wir uns am Bahnhof?",
        meaning: { te: "రైల్వే స్టేషన్ దగ్గర కలుద్దామా?", teLatn: "Railway station daggara kaluddaamaa?", en: "Shall we meet at the station?" },
      },
      {
        de: "Super, bis Sonntag!",
        meaning: { te: "సూపర్, సండే కలుద్దాం!", teLatn: "Super, Sunday kaluddaam!", en: "Great, see you Sunday!" },
        tip: {
          te: "{bis} అంటే 'వరకు'. {Bis morgen!}, {Bis später!} — రేపు కలుద్దాం, తర్వాత కలుద్దాం.",
          teLatn: "{bis} ante 'varaku'. {Bis morgen!}, {Bis später!} — repu kaluddaam, tarvaata kaluddaam.",
          en: "bis = until: Bis morgen! (see you tomorrow), Bis später! (see you later).",
        },
      },
    ],
  },
];
