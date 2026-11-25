import type { LessonContent } from "@/lib/types";

// Module 12 — Arbeit und Beruf (jobs, workplace, Perfekt with haben, war/hatte)
export const M12: LessonContent[] = [
  {
    id: "l12-1",
    steps: [
      {
        say: {
          te: "జాబ్స్ పేర్లు. జర్మన్‌లో మగవాళ్ళకి, ఆడవాళ్ళకి డిఫరెంట్: {Ingenieur}, {Ingenieurin}. జాబ్ చెప్పేటప్పుడు {ein}, {eine} వాడరు.",
          teLatn: "Jobs perlu. German lo magavaallaki, aadavaallaki different: {Ingenieur}, {Ingenieurin}. Job cheppetappudu {ein}, {eine} vaadaru.",
          en: "Job titles differ for men and women: Ingenieur, Ingenieurin. No 'a' before the job: Ich bin Ingenieur.",
        },
      },
      {
        de: "Was sind Sie von Beruf?",
        meaning: { te: "మీరు ఏ జాబ్ చేస్తారు?", teLatn: "Meeru e job chestaaru?", en: "What do you do for a living?" },
      },
      {
        de: "Ich bin Softwareentwickler. Ich bin Softwareentwicklerin.",
        meaning: { te: "నేను సాఫ్ట్‌వేర్ డెవలపర్ — మగవాళ్ళు, ఆడవాళ్ళు.", teLatn: "Nenu software developer — magavaallu, aadavaallu.", en: "I'm a software developer (man / woman)." },
      },
      {
        de: "Arzt, Krankenpfleger, Koch, Fahrer, Verkäufer",
        meaning: { te: "డాక్టర్, నర్స్, కుక్, డ్రైవర్, సేల్స్ పర్సన్.", teLatn: "Doctor, nurse, cook, driver, sales person.", en: "doctor, nurse, cook, driver, salesperson" },
        tip: {
          te: "ఆడవాళ్ళకి: {Ärztin}, {Krankenpflegerin}, {Köchin}, {Fahrerin}, {Verkäuferin}.",
          teLatn: "Aadavaallaki: {Ärztin}, {Krankenpflegerin}, {Köchin}, {Fahrerin}, {Verkäuferin}.",
          en: "For women: Ärztin, Krankenpflegerin, Köchin, Fahrerin, Verkäuferin.",
        },
      },
      {
        de: "Ich arbeite bei Siemens. Ich arbeite als Fahrer.",
        meaning: { te: "నేను సీమెన్స్‌లో పని చేస్తాను. నేను డ్రైవర్‌గా పని చేస్తాను.", teLatn: "Nenu Siemens lo pani chestaanu. Nenu driver ga pani chestaanu.", en: "I work at Siemens. I work as a driver." },
        tip: {
          te: "కంపెనీ పేరు ముందు {bei}, జాబ్ ముందు {als}.",
          teLatn: "Company peru mundu {bei}, job mundu {als}.",
          en: "bei before the company, als before the job.",
        },
      },
      {
        de: "Ich studiere Informatik. Ich bin Werkstudent.",
        meaning: { te: "నేను కంప్యూటర్ సైన్స్ చదువుతున్నాను. పార్ట్ టైమ్ స్టూడెంట్ జాబ్ చేస్తున్నాను.", teLatn: "Nenu computer science chaduvutunnaanu. Part time student job chestunnaanu.", en: "I study computer science. I'm a working student." },
      },
      {
        de: "Ich suche Arbeit.",
        meaning: { te: "నేను జాబ్ వెతుకుతున్నాను.", teLatn: "Nenu job vetukutunnaanu.", en: "I'm looking for work." },
      },
    ],
  },
  {
    id: "l12-2",
    steps: [
      {
        say: {
          te: "ఆఫీస్‌లో. జర్మన్ ఆఫీసుల్లో పంక్చువాలిటీ, క్లియర్ కమ్యూనికేషన్ చాలా ఇంపార్టెంట్.",
          teLatn: "Office lo. German offices lo punctuality, clear communication chaalaa important.",
          en: "At work. Punctuality and clear communication matter a lot in German offices.",
        },
      },
      {
        de: "Guten Morgen! Ich bin der Neue. Ich bin die Neue.",
        meaning: { te: "గుడ్ మార్నింగ్! నేను కొత్తగా జాయిన్ అయ్యాను.", teLatn: "Good morning! Nenu kothagaa join ayyaanu.", en: "Good morning! I'm the new one here." },
        tip: {
          te: "మగవాళ్ళు {der Neue}, ఆడవాళ్ళు {die Neue}.",
          teLatn: "Magavaallu {der Neue}, aadavaallu {die Neue}.",
          en: "der Neue for a man, die Neue for a woman.",
        },
      },
      {
        de: "der Kollege, die Kollegin, der Chef, die Chefin",
        meaning: { te: "కొలీగ్ — మగ, ఆడ; బాస్ — మగ, ఆడ.", teLatn: "Colleague — maga, aada; boss — maga, aada.", en: "colleague (m/f), boss (m/f)" },
      },
      {
        de: "Ich habe ein Meeting um zehn.",
        meaning: { te: "నాకు పదింటికి మీటింగ్ ఉంది.", teLatn: "Naaku padintiki meeting undi.", en: "I have a meeting at ten." },
        tip: {
          te: "జర్మన్ ఆఫీసుల్లో చాలా ఇంగ్లీష్ పదాలు వాడతారు: {Meeting}, {Laptop}, {E-Mail}.",
          teLatn: "German offices lo chaalaa English padaalu vaadataaru: {Meeting}, {Laptop}, {E-Mail}.",
          en: "German offices use many English words: Meeting, Laptop, E-Mail.",
        },
      },
      {
        de: "Ich arbeite Vollzeit, vierzig Stunden pro Woche.",
        meaning: { te: "నేను ఫుల్ టైమ్, వారానికి నలభై గంటలు పని చేస్తాను.", teLatn: "Nenu full time, vaaraaniki nalabhai gantalu pani chestaanu.", en: "I work full time, forty hours a week." },
        tip: {
          te: "పార్ట్ టైమ్ అంటే {Teilzeit}. హాలిడేస్ అంటే {der Urlaub}.",
          teLatn: "Part time ante {Teilzeit}. Holidays ante {der Urlaub}.",
          en: "Part time = Teilzeit. Holiday leave = der Urlaub.",
        },
      },
      {
        de: "Können Sie mir das bitte erklären?",
        meaning: { te: "దయచేసి ఇది నాకు ఎక్స్‌ప్లెయిన్ చేస్తారా?", teLatn: "Dayachesi idi naaku explain chestaaraa?", en: "Could you please explain that to me?" },
      },
      {
        de: "Ich mache jetzt Mittagspause.",
        meaning: { te: "నేను ఇప్పుడు లంచ్ బ్రేక్ తీసుకుంటున్నాను.", teLatn: "Nenu ippudu lunch break teesukuntunnaanu.", en: "I'm taking my lunch break now." },
      },
    ],
  },
  {
    id: "l12-3",
    steps: [
      {
        say: {
          te: "జరిగిపోయినది చెప్పడానికి జర్మన్లు మాట్లాడేటప్పుడు {Perfekt} వాడతారు: {haben} ప్లస్ చివర్లో {ge…t} పదం. {machen} → {gemacht}.",
          teLatn: "Jarigipoyinadi cheppadaaniki Germans maatlaadetappudu {Perfekt} vaadataaru: {haben} plus chivarlo {ge…t} padam. {machen} → {gemacht}.",
          en: "To talk about the past, spoken German uses the Perfekt: haben + a ge…t word at the end. machen → gemacht.",
        },
      },
      {
        de: "Was hast du gestern gemacht?",
        meaning: { te: "నిన్న నువ్వు ఏం చేశావు?", teLatn: "Ninna nuvvu em chesaavu?", en: "What did you do yesterday?" },
      },
      {
        de: "Ich habe gearbeitet.",
        meaning: { te: "నేను పని చేశాను.", teLatn: "Nenu pani chesaanu.", en: "I worked." },
        tip: {
          te: "{arbeiten} → {gearbeitet}. {habe} రెండో ప్లేస్, {gearbeitet} చివర.",
          teLatn: "{arbeiten} → {gearbeitet}. {habe} rendo place, {gearbeitet} chivara.",
          en: "arbeiten → gearbeitet. habe in position 2, gearbeitet at the end.",
        },
      },
      {
        de: "Ich habe Deutsch gelernt und gekocht.",
        meaning: { te: "నేను జర్మన్ నేర్చుకున్నాను, వంట చేశాను.", teLatn: "Nenu German nerchukunnaanu, vanta chesaanu.", en: "I studied German and cooked." },
      },
      {
        de: "Ich habe meine Mutter angerufen.",
        meaning: { te: "నేను మా అమ్మకి ఫోన్ చేశాను.", teLatn: "Nenu maa ammaki phone chesaanu.", en: "I called my mother." },
        tip: {
          te: "సెపరబుల్ వర్బ్స్‌లో {ge} మధ్యలో వస్తుంది: {anrufen} → {angerufen}.",
          teLatn: "Separable verbs lo {ge} madhyalo vastundi: {anrufen} → {angerufen}.",
          en: "In separable verbs, ge goes in the middle: anrufen → angerufen.",
        },
      },
      {
        de: "Ich habe Pizza gegessen und einen Film gesehen.",
        meaning: { te: "నేను పిజ్జా తిన్నాను, ఒక సినిమా చూశాను.", teLatn: "Nenu pizza tinnaanu, oka cinema choosaanu.", en: "I ate pizza and watched a film." },
        tip: {
          te: "కొన్ని వర్బ్స్ {-en} తో ఎండ్ అవుతాయి: {gegessen}, {gesehen}, {getrunken}. వీటిని అలాగే గుర్తుపెట్టుకోవాలి.",
          teLatn: "Konni verbs {-en} tho end avutaayi: {gegessen}, {gesehen}, {getrunken}. Veetini alaage gurthupettukovaali.",
          en: "Some verbs end in -en: gegessen, gesehen, getrunken — learn them by heart.",
        },
      },
    ],
  },
  {
    id: "l12-4",
    steps: [
      {
        say: {
          te: "{sein}, {haben} కి పాస్ట్‌లో షార్ట్ ఫామ్ వాడతారు: {war} అంటే 'ఉన్నాను', {hatte} అంటే 'నాకు ఉండేది'.",
          teLatn: "{sein}, {haben} ki past lo short form vaadataaru: {war} ante 'unnaanu', {hatte} ante 'naaku undedi'.",
          en: "For sein and haben, the past uses short forms: war (was) and hatte (had).",
        },
      },
      {
        de: "Ich war gestern krank.",
        meaning: { te: "నిన్న నాకు ఒంట్లో బాలేదు.", teLatn: "Ninna naaku ontlo baaledu.", en: "I was sick yesterday." },
      },
      {
        de: "Wo warst du? — Ich war in Hamburg.",
        meaning: { te: "నువ్వు ఎక్కడ ఉన్నావు? — నేను హాంబర్గ్‌లో ఉన్నాను.", teLatn: "Nuvvu ekkada unnaavu? — Nenu Hamburg lo unnaanu.", en: "Where were you? — I was in Hamburg." },
      },
      {
        de: "Ich hatte keine Zeit.",
        meaning: { te: "నాకు టైమ్ లేదు — అప్పుడు.", teLatn: "Naaku time ledu — appudu.", en: "I didn't have time." },
      },
      {
        de: "Wir hatten ein Meeting. Es war sehr lang.",
        meaning: { te: "మాకు మీటింగ్ ఉండింది. అది చాలా లాంగ్‌గా ఉంది.", teLatn: "Maaku meeting undindi. Adi chaalaa long ga undi.", en: "We had a meeting. It was very long." },
      },
      {
        de: "Früher war ich Student in Indien. Jetzt arbeite ich in Deutschland.",
        meaning: { te: "ఇంతకు ముందు నేను ఇండియాలో స్టూడెంట్‌ని. ఇప్పుడు జర్మనీలో పని చేస్తున్నాను.", teLatn: "Intaku mundu nenu India lo student ni. Ippudu Germany lo pani chestunnaanu.", en: "I used to be a student in India. Now I work in Germany." },
        tip: {
          te: "ఇంటర్వ్యూల్లో మీ గురించి చెప్పడానికి పర్ఫెక్ట్ వాక్యం. మీ కథతో మార్చి ప్రాక్టీస్ చేయండి.",
          teLatn: "Interviews lo mee gurinchi cheppadaaniki perfect vaakyam. Mee kathatho maarchi practice cheyandi.",
          en: "A perfect sentence for interviews — adapt it to your own story.",
        },
      },
    ],
  },
];
