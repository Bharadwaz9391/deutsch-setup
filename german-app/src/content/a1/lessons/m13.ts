import type { LessonContent } from "@/lib/types";

// Module 13 — Kleidung und Wetter (clothes, colours, sizes, weather, months)
export const M13: LessonContent[] = [
  {
    id: "l13-1",
    steps: [
      {
        say: {
          te: "బట్టలు కొనడం. షాప్‌లో ట్రై చేయడానికి రూమ్‌ని {die Umkleidekabine} అంటారు — ట్రయల్ రూమ్.",
          teLatn: "Battalu konadam. Shop lo try cheyadaaniki room ni {die Umkleidekabine} antaaru — trial room.",
          en: "Buying clothes. The fitting room is die Umkleidekabine.",
        },
      },
      {
        de: "die Jacke, die Hose, das Hemd, der Pullover",
        meaning: { te: "జాకెట్, ప్యాంట్, షర్ట్, స్వెటర్.", teLatn: "Jacket, pant, shirt, sweater.", en: "jacket, trousers, shirt, jumper" },
      },
      {
        de: "die Schuhe, die Socken, der Schal, die Mütze",
        meaning: { te: "షూస్, సాక్స్, స్కార్ఫ్, వింటర్ క్యాప్.", teLatn: "Shoes, socks, scarf, winter cap.", en: "shoes, socks, scarf, woolly hat" },
      },
      {
        de: "Ich suche eine Winterjacke.",
        meaning: { te: "నేను వింటర్ జాకెట్ వెతుకుతున్నాను.", teLatn: "Nenu winter jacket vetukutunnaanu.", en: "I'm looking for a winter jacket." },
      },
      {
        de: "Kann ich die Jacke anprobieren?",
        meaning: { te: "ఈ జాకెట్ ట్రై చేయొచ్చా?", teLatn: "Ee jacket try cheyochaa?", en: "Can I try the jacket on?" },
      },
      {
        de: "Die Jacke ist zu klein. Haben Sie sie in Größe L?",
        meaning: { te: "ఈ జాకెట్ చాలా చిన్నది. ఇది L సైజ్‌లో ఉందా?", teLatn: "Ee jacket chaalaa chinnadi. Idi L size lo undaa?", en: "The jacket is too small. Do you have it in size L?" },
        tip: {
          te: "{die Jacke} → 'ఇట్' {sie}. {der Pullover} → {ihn}. {das Hemd} → {es}.",
          teLatn: "{die Jacke} → 'it' {sie}. {der Pullover} → {ihn}. {das Hemd} → {es}.",
          en: "'it' depends on the gender: die Jacke → sie, der Pullover → ihn, das Hemd → es.",
        },
      },
      {
        de: "Ich nehme sie.",
        meaning: { te: "నేను ఇది తీసుకుంటాను.", teLatn: "Nenu idi teesukuntaanu.", en: "I'll take it." },
      },
    ],
  },
  {
    id: "l13-2",
    steps: [
      {
        say: {
          te: "కలర్స్, సైజెస్. ఏది అని అడగడానికి {welcher}, {welche}, {welches}. 'ఇది' అని చూపించడానికి {dieser}, {diese}, {dieses}.",
          teLatn: "Colours, sizes. Edi ani adagadaaniki {welcher}, {welche}, {welches}. 'Idi' ani choopinchadaaniki {dieser}, {diese}, {dieses}.",
          en: "Colours and sizes. 'Which' is welcher/welche/welches; 'this' is dieser/diese/dieses.",
        },
      },
      {
        de: "rot, blau, grün, gelb, schwarz, weiß",
        meaning: { te: "రెడ్, బ్లూ, గ్రీన్, యెల్లో, బ్లాక్, వైట్.", teLatn: "Red, blue, green, yellow, black, white.", en: "red, blue, green, yellow, black, white" },
      },
      {
        de: "grau, braun, rosa, orange",
        meaning: { te: "గ్రే, బ్రౌన్, పింక్, ఆరెంజ్.", teLatn: "Grey, brown, pink, orange.", en: "grey, brown, pink, orange" },
      },
      {
        de: "Welche Farbe möchten Sie? — Schwarz, bitte.",
        meaning: { te: "మీకు ఏ కలర్ కావాలి? — బ్లాక్ ప్లీజ్.", teLatn: "Meeku e colour kaavaali? — Black please.", en: "Which colour would you like? — Black, please." },
      },
      {
        de: "Welche Größe haben Sie? — Größe M.",
        meaning: { te: "మీ సైజ్ ఏంటి? — M సైజ్.", teLatn: "Mee size enti? — M size.", en: "What size are you? — Size M." },
        tip: {
          te: "షూస్ సైజ్ యూరోపియన్: ఇండియన్ సైజ్ ఎయిట్ సుమారు జర్మన్ ఫార్టీ టూ.",
          teLatn: "Shoes size European: Indian size eight sumaaru German forty two.",
          en: "Shoe sizes are European: Indian/UK 8 is roughly 42.",
        },
      },
      {
        de: "Dieser Pullover gefällt mir.",
        meaning: { te: "ఈ స్వెటర్ నాకు నచ్చింది.", teLatn: "Ee sweater naaku nachindi.", en: "I like this jumper." },
        tip: {
          te: "వస్తువు నచ్చితే {gefällt mir} — ఇది చాలా కామన్.",
          teLatn: "Vastuvu nachite {gefällt mir} — idi chaalaa common.",
          en: "For liking a thing: … gefällt mir — very common.",
        },
      },
    ],
  },
  {
    id: "l13-3",
    steps: [
      {
        say: {
          te: "జర్మన్లు వెదర్ గురించి చాలా మాట్లాడతారు — స్మాల్ టాక్‌కి బెస్ట్. వెదర్‌కి ఎప్పుడూ {es}: {Es regnet} — వర్షం పడుతోంది.",
          teLatn: "Germans weather gurinchi chaalaa maatlaadataaru — small talk ki best. Weather ki eppudoo {es}: {Es regnet} — varsham padutondi.",
          en: "Germans talk about the weather a lot — perfect small talk. Weather always uses es: Es regnet.",
        },
      },
      {
        de: "Wie ist das Wetter heute?",
        meaning: { te: "ఈ రోజు వెదర్ ఎలా ఉంది?", teLatn: "Ee rooju weather elaa undi?", en: "What's the weather like today?" },
      },
      {
        de: "Die Sonne scheint. Es ist warm.",
        meaning: { te: "ఎండ కాస్తోంది. వెచ్చగా ఉంది.", teLatn: "Enda kaastondi. Vechagaa undi.", en: "The sun is shining. It's warm." },
      },
      {
        de: "Es regnet. Es ist kalt und windig.",
        meaning: { te: "వర్షం పడుతోంది. చలిగా, గాలిగా ఉంది.", teLatn: "Varsham padutondi. Chaligaa, gaaligaa undi.", en: "It's raining. It's cold and windy." },
      },
      {
        de: "Es schneit!",
        meaning: { te: "స్నో పడుతోంది!", teLatn: "Snow padutondi!", en: "It's snowing!" },
      },
      {
        de: "Es sind minus fünf Grad.",
        meaning: { te: "మైనస్ ఐదు డిగ్రీలు ఉంది.", teLatn: "Minus aidu degrees undi.", en: "It's minus five degrees." },
        tip: {
          te: "జర్మన్ వింటర్‌లో లేయర్స్ వేసుకోండి — జాకెట్, స్కార్ఫ్, గ్లోవ్స్: {Handschuhe}.",
          teLatn: "German winter lo layers vesukondi — jacket, scarf, gloves: {Handschuhe}.",
          en: "Wear layers in a German winter — jacket, scarf and gloves (Handschuhe).",
        },
      },
      {
        de: "Nimm einen Regenschirm mit!",
        meaning: { te: "గొడుగు తీసుకెళ్ళు!", teLatn: "Godugu teesukellu!", en: "Take an umbrella!" },
      },
    ],
  },
  {
    id: "l13-4",
    steps: [
      {
        say: {
          te: "జర్మనీలో నాలుగు సీజన్స్ క్లియర్‌గా ఉంటాయి. నెలలు దాదాపు ఇంగ్లీష్ లాగే — ఈజీ!",
          teLatn: "Germany lo naalugu seasons clear ga untaayi. Nelalu daadaapu English laage — easy!",
          en: "Germany has four clear seasons. The months are almost like English — easy!",
        },
      },
      {
        de: "der Frühling, der Sommer, der Herbst, der Winter",
        meaning: { te: "స్ప్రింగ్, సమ్మర్, ఆటమ్, వింటర్.", teLatn: "Spring, summer, autumn, winter.", en: "spring, summer, autumn, winter" },
      },
      {
        de: "Januar, Februar, März, April, Mai, Juni",
        meaning: { te: "జనవరి నుంచి జూన్.", teLatn: "January nunchi June.", en: "January to June" },
        tip: {
          te: "{J} గుర్తుందా? 'య': {Januar} — 'యానువార్', {Juni} — 'యూని'.",
          teLatn: "{J} gurthundaa? 'ya': {Januar} — 'yaanuvaar', {Juni} — 'yooni'.",
          en: "Remember J = 'y': Januar is 'yanuar', Juni is 'yooni'.",
        },
      },
      {
        de: "Juli, August, September, Oktober, November, Dezember",
        meaning: { te: "జూలై నుంచి డిసెంబర్.", teLatn: "July nunchi December.", en: "July to December" },
      },
      {
        de: "Im Winter ist es früh dunkel.",
        meaning: { te: "వింటర్‌లో త్వరగా చీకటి పడుతుంది.", teLatn: "Winter lo twaragaa cheekati padutundi.", en: "In winter it gets dark early." },
        tip: {
          te: "నెలలు, సీజన్స్ ముందు {im}: {im Mai}, {im Sommer}.",
          teLatn: "Nelalu, seasons mundu {im}: {im Mai}, {im Sommer}.",
          en: "Before months and seasons use im: im Mai, im Sommer.",
        },
      },
      {
        de: "Mein Geburtstag ist im Oktober.",
        meaning: { te: "నా బర్త్‌డే అక్టోబర్‌లో.", teLatn: "Naa birthday October lo.", en: "My birthday is in October." },
      },
    ],
  },
];
