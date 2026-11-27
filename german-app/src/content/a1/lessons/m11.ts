import type { LessonContent } from "@/lib/types";

// Module 11 — Gesundheit (body, doctor, pharmacy, calling in sick)
export const M11: LessonContent[] = [
  {
    id: "l11-1",
    steps: [
      {
        say: {
          te: "బాడీ పార్ట్స్. ఎక్కడైనా నొప్పిగా ఉంటే చెప్పడానికి ఈజీ వే: {… tut weh} — '… నొప్పిగా ఉంది'.",
          teLatn: "Body parts. Ekkadainaa noppigaa unte cheppadaaniki easy way: {… tut weh} — '… noppigaa undi'.",
          en: "Body parts. The easy way to say something hurts: … tut weh.",
        },
      },
      {
        de: "der Kopf, der Bauch, der Rücken",
        meaning: { te: "తల, పొట్ట, వీపు — బ్యాక్.", teLatn: "Tala, potta, veepu — back.", en: "head, stomach, back" },
      },
      {
        de: "der Arm, die Hand, das Bein, der Fuß",
        meaning: { te: "చెయ్యి — ఆర్మ్, హ్యాండ్, కాలు — లెగ్, ఫుట్.", teLatn: "Cheyyi — arm, hand, kaalu — leg, foot.", en: "arm, hand, leg, foot" },
      },
      {
        de: "das Auge, das Ohr, der Hals, der Zahn",
        meaning: { te: "కన్ను, చెవి, గొంతు, పన్ను.", teLatn: "Kannu, chevi, gontu, pannu.", en: "eye, ear, throat, tooth" },
      },
      {
        de: "Mein Kopf tut weh.",
        meaning: { te: "నా తల నొప్పిగా ఉంది.", teLatn: "Naa tala noppigaa undi.", en: "My head hurts." },
        tip: {
          te: "రెండు పాదాలు నొప్పిగా ఉంటే: {Meine Füße tun weh} — ప్లూరల్‌కి {tun}.",
          teLatn: "Rendu paadaalu noppigaa unte: {Meine Füße tun weh} — plural ki {tun}.",
          en: "Plural: Meine Füße tun weh — tun for plural.",
        },
      },
      {
        de: "Ich habe Kopfschmerzen. Ich habe Bauchschmerzen.",
        meaning: { te: "నాకు తలనొప్పిగా ఉంది. నాకు కడుపు నొప్పిగా ఉంది.", teLatn: "Naaku talanoppigaa undi. Naaku kadupu noppigaa undi.", en: "I have a headache. I have a stomach ache." },
        tip: {
          te: "సెకండ్ వే: బాడీ పార్ట్ ప్లస్ {Schmerzen} — నొప్పి.",
          teLatn: "Second way: body part plus {Schmerzen} — noppi.",
          en: "Second way: body part + Schmerzen (pain).",
        },
      },
    ],
  },
  {
    id: "l11-2",
    steps: [
      {
        say: {
          te: "డాక్టర్ దగ్గర. జర్మనీలో ముందు మీ ఫ్యామిలీ డాక్టర్ దగ్గరికి వెళ్తారు — {der Hausarzt}. హెల్త్ ఇన్సూరెన్స్ కార్డ్ ఎప్పుడూ తీసుకెళ్ళండి.",
          teLatn: "Doctor daggara. Germany lo mundu mee family doctor daggariki veltaaru — {der Hausarzt}. Health insurance card eppudoo teesukellandi.",
          en: "At the doctor's. In Germany you first see your family doctor — der Hausarzt. Always bring your health insurance card.",
        },
      },
      {
        de: "Ich brauche einen Termin. Es ist dringend.",
        meaning: { te: "నాకు అపాయింట్‌మెంట్ కావాలి. అర్జెంట్.", teLatn: "Naaku appointment kaavaali. Urgent.", en: "I need an appointment. It's urgent." },
      },
      {
        de: "Ihre Versichertenkarte, bitte.",
        meaning: { te: "మీ హెల్త్ ఇన్సూరెన్స్ కార్డ్ ఇవ్వండి.", teLatn: "Mee health insurance card ivvandi.", en: "Your health insurance card, please." },
      },
      {
        de: "Was fehlt Ihnen?",
        meaning: { te: "మీకు ఏమైంది? ప్రాబ్లమ్ ఏంటి?", teLatn: "Meeku emaindi? Problem enti?", en: "What's the matter?" },
      },
      {
        de: "Ich habe Fieber und Husten.",
        meaning: { te: "నాకు ఫీవర్, దగ్గు ఉన్నాయి.", teLatn: "Naaku fever, daggu unnaayi.", en: "I have a fever and a cough." },
      },
      {
        de: "Seit wann haben Sie das? — Seit drei Tagen.",
        meaning: { te: "ఇది ఎప్పటి నుంచి? — మూడు రోజుల నుంచి.", teLatn: "Idi eppati nunchi? — Moodu rojula nunchi.", en: "Since when have you had this? — For three days." },
      },
      {
        de: "Nehmen Sie die Tabletten dreimal täglich.",
        meaning: { te: "ఈ టాబ్లెట్స్ రోజుకి మూడు సార్లు వేసుకోండి.", teLatn: "Ee tablets rojuki moodu saarlu vesukondi.", en: "Take the tablets three times a day." },
        tip: {
          te: "డాక్టర్ ఇన్‌స్ట్రక్షన్స్ ఎప్పుడూ {Sie} ఆర్డర్ ఫామ్‌లో: {Nehmen Sie…}, {Trinken Sie viel Wasser}.",
          teLatn: "Doctor instructions eppudoo {Sie} order form lo: {Nehmen Sie…}, {Trinken Sie viel Wasser}.",
          en: "Doctors give instructions as Sie-commands: Nehmen Sie…, Trinken Sie viel Wasser.",
        },
      },
      {
        de: "Im Notfall: eins, eins, zwei.",
        meaning: { te: "ఎమర్జెన్సీలో: వన్ వన్ టూ కి ఫోన్ చేయండి.", teLatn: "Emergency lo: one one two ki phone cheyandi.", en: "In an emergency: call 112." },
        tip: {
          te: "రాత్రి లేదా వీకెండ్ డాక్టర్ కావాలంటే {116117} — అర్జెంట్ కానీ ఎమర్జెన్సీ కాకపోతే.",
          teLatn: "Raatri ledaa weekend doctor kaavaalante {116117} — urgent kaani emergency kaakapote.",
          en: "For a doctor at night or at weekends (urgent, not an emergency): 116117.",
        },
      },
    ],
  },
  {
    id: "l11-3",
    steps: [
      {
        say: {
          te: "జర్మనీలో మందులు మెడికల్ షాప్‌లోనే దొరుకుతాయి — {die Apotheke}. చాలా మందులకి డాక్టర్ ప్రిస్క్రిప్షన్ కావాలి — {das Rezept}.",
          teLatn: "Germany lo mandulu medical shop lone dorukutaayi — {die Apotheke}. Chaalaa mandulaki doctor prescription kaavaali — {das Rezept}.",
          en: "Medicine is sold only in pharmacies — die Apotheke. Many medicines need a prescription — das Rezept.",
        },
      },
      {
        de: "Ich habe ein Rezept vom Arzt.",
        meaning: { te: "నా దగ్గర డాక్టర్ ప్రిస్క్రిప్షన్ ఉంది.", teLatn: "Naa daggara doctor prescription undi.", en: "I have a prescription from the doctor." },
      },
      {
        de: "Haben Sie etwas gegen Kopfschmerzen?",
        meaning: { te: "తలనొప్పికి ఏదైనా మందు ఉందా?", teLatn: "Talanoppiki edainaa mandu undaa?", en: "Do you have something for a headache?" },
        tip: {
          te: "{gegen} అంటే 'అగైనెస్ట్' — మందుల కోసం 'ఫర్' లాగా: {etwas gegen Husten}.",
          teLatn: "{gegen} ante 'against' — mandula kosam 'for': {etwas gegen Husten}.",
          en: "gegen = against — used like 'for' with medicine: etwas gegen Husten.",
        },
      },
      {
        de: "Wie oft muss ich das nehmen?",
        meaning: { te: "ఇది ఎన్ని సార్లు వేసుకోవాలి?", teLatn: "Idi enni saarlu vesukovaali?", en: "How often do I have to take this?" },
      },
      {
        de: "vor dem Essen, nach dem Essen",
        meaning: { te: "తినే ముందు, తిన్న తర్వాత.", teLatn: "Tine mundu, tinna tarvaata.", en: "before meals, after meals" },
      },
      {
        de: "Gute Besserung!",
        meaning: { te: "త్వరగా కోలుకోండి! గెట్ వెల్ సూన్!", teLatn: "Twaragaa kolukondi! Get well soon!", en: "Get well soon!" },
      },
    ],
  },
  {
    id: "l11-4",
    steps: [
      {
        say: {
          te: "సిక్ అయితే, వర్క్ స్టార్ట్ అయ్యే ముందే బాస్‌కి చెప్పాలి. చాలా కంపెనీల్లో మూడు రోజుల కంటే ఎక్కువ సిక్ అయితే డాక్టర్ సర్టిఫికెట్ కావాలి — కొన్ని ఫస్ట్ డే నుంచే అడుగుతాయి.",
          teLatn: "Sick aite, work start ayye munde boss ki cheppaali. Chaalaa companies lo moodu rojula kante ekkuva sick aite doctor certificate kaavaali — konni first day nunche adugutaayi.",
          en: "If you're sick, tell your boss before work starts. Most companies need a doctor's note after three days — some from day one.",
        },
      },
      {
        de: "Ich bin krank. Ich kann heute nicht arbeiten.",
        meaning: { te: "నాకు ఒంట్లో బాలేదు. ఈ రోజు నేను వర్క్ చేయలేను.", teLatn: "Naaku ontlo baaledu. Ee rooju nenu work cheyalenu.", en: "I'm sick. I can't work today." },
      },
      {
        de: "Ich melde mich krank.",
        meaning: { te: "నేను సిక్ లీవ్ తీసుకుంటున్నాను.", teLatn: "Nenu sick leave teesukuntunnaanu.", en: "I'm calling in sick." },
      },
      {
        de: "Ich gehe heute zum Arzt.",
        meaning: { te: "ఈ రోజు నేను డాక్టర్ దగ్గరికి వెళ్తాను.", teLatn: "Ee rooju nenu doctor daggariki veltaanu.", en: "I'm going to the doctor today." },
      },
      {
        de: "die Krankmeldung",
        meaning: { te: "సిక్ సర్టిఫికెట్ — డాక్టర్ ఇచ్చేది.", teLatn: "Sick certificate — doctor ichedi.", en: "sick note from the doctor" },
        tip: {
          te: "ఇప్పుడు చాలాసార్లు డాక్టర్ దీన్ని డైరెక్ట్‌గా ఆన్‌లైన్‌లో పంపిస్తారు. మీరు బాస్‌కి చెప్తే చాలు.",
          teLatn: "Ippudu chaalaasaarlu doctor deenni direct ga online lo pampistaaru. Meeru boss ki chepte chaalu.",
          en: "Nowadays doctors often send it electronically — you just need to inform your boss.",
        },
      },
      {
        de: "Ich komme wahrscheinlich am Donnerstag wieder.",
        meaning: { te: "బహుశా నేను థర్స్‌డే తిరిగి వస్తాను.", teLatn: "Bahusaa nenu Thursday tirigi vastaanu.", en: "I'll probably be back on Thursday." },
      },
    ],
  },
];
