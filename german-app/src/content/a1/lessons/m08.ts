import type { LessonContent } from "@/lib/types";

// Module 8 — Wohnen (flat, rooms, furniture, flat adverts, problems)
export const M08: LessonContent[] = [
  {
    id: "l08-1",
    steps: [
      {
        say: {
          te: "మీ ఫ్లాట్ గురించి చెప్పడం. జర్మనీలో ఫ్లాట్‌ని {die Wohnung} అంటారు. ఇల్లు మొత్తం అయితే {das Haus}.",
          teLatn: "Mee flat gurinchi cheppadam. Germany lo flat ni {die Wohnung} antaaru. Illu mottham aite {das Haus}.",
          en: "Describing your flat. A flat is die Wohnung; a whole house is das Haus.",
        },
      },
      {
        de: "Ich wohne in einer Wohnung im dritten Stock.",
        meaning: { te: "నేను థర్డ్ ఫ్లోర్‌లో ఒక ఫ్లాట్‌లో ఉంటాను.", teLatn: "Nenu third floor lo oka flat lo untaanu.", en: "I live in a flat on the third floor." },
      },
      {
        de: "Die Wohnung ist klein, aber hell.",
        meaning: { te: "ఫ్లాట్ చిన్నది, కానీ బాగా వెలుతురు ఉంటుంది.", teLatn: "Flat chinnadi, kaani baagaa veluturu untundi.", en: "The flat is small but bright." },
        tip: {
          te: "{ist} తర్వాత అడ్జెక్టివ్ మారదు: {klein}, {groß}, {hell}, {dunkel}.",
          teLatn: "{ist} tarvaata adjective maaradu: {klein}, {groß}, {hell}, {dunkel}.",
          en: "After ist the adjective doesn't change: klein, groß, hell, dunkel.",
        },
      },
      {
        de: "Sie ist leider sehr teuer.",
        meaning: { te: "సారీ కానీ అది చాలా కాస్ట్లీ.", teLatn: "Sorry kaani adi chaalaa costly.", en: "Unfortunately it's very expensive." },
        tip: {
          te: "{die Wohnung} కాబట్టి 'ఇట్' కి {sie}. జర్మన్‌లో వస్తువులకి కూడా {er}, {sie}, {es}.",
          teLatn: "{die Wohnung} kaabatti 'it' ki {sie}. German lo vastuvulaki kooda {er}, {sie}, {es}.",
          en: "die Wohnung → 'it' is sie. Things are er, sie or es too.",
        },
      },
      {
        de: "Ich wohne in einer WG.",
        meaning: { te: "నేను షేర్డ్ ఫ్లాట్‌లో ఉంటాను — ఫ్లాట్‌మేట్స్‌తో.", teLatn: "Nenu shared flat lo untaanu — flatmates tho.", en: "I live in a shared flat." },
        tip: {
          te: "{WG} అంటే {Wohngemeinschaft}. స్టూడెంట్స్‌లో చాలా కామన్.",
          teLatn: "{WG} ante {Wohngemeinschaft}. Students lo chaalaa common.",
          en: "WG = Wohngemeinschaft, very common among students.",
        },
      },
      {
        de: "Die Wohnung hat zwei Zimmer, eine Küche und ein Bad.",
        meaning: { te: "ఫ్లాట్‌లో రెండు రూమ్స్, ఒక కిచెన్, ఒక బాత్రూమ్ ఉన్నాయి.", teLatn: "Flat lo rendu rooms, oka kitchen, oka bathroom unnaayi.", en: "The flat has two rooms, a kitchen and a bathroom." },
        tip: {
          te: "జర్మనీలో రూమ్స్ లెక్కపెట్టేటప్పుడు కిచెన్, బాత్రూమ్ కలపరు.",
          teLatn: "Germany lo rooms lekkapettetappudu kitchen, bathroom kalaparu.",
          en: "In Germany, the room count doesn't include kitchen and bathroom.",
        },
      },
    ],
  },
  {
    id: "l08-2",
    steps: [
      {
        say: {
          te: "రూమ్స్, ఫర్నిచర్. ఏదైనా ఎక్కడ ఉందో చెప్పడానికి {in}, {auf}, {neben} వాడతారు.",
          teLatn: "Rooms, furniture. Edainaa ekkada undo cheppadaaniki {in}, {auf}, {neben} vaadataaru.",
          en: "Rooms and furniture. To say where something is, use in, auf, neben.",
        },
      },
      {
        de: "das Schlafzimmer, das Wohnzimmer, die Küche",
        meaning: { te: "బెడ్‌రూమ్, లివింగ్ రూమ్, కిచెన్.", teLatn: "Bedroom, living room, kitchen.", en: "bedroom, living room, kitchen" },
      },
      {
        de: "das Bett, der Tisch, der Stuhl, der Schrank",
        meaning: { te: "బెడ్, టేబుల్, చెయిర్, కప్‌బోర్డ్.", teLatn: "Bed, table, chair, cupboard.", en: "bed, table, chair, wardrobe" },
      },
      {
        de: "Es gibt einen Balkon.",
        meaning: { te: "ఒక బాల్కనీ ఉంది.", teLatn: "Oka balcony undi.", en: "There's a balcony." },
        tip: {
          te: "{es gibt} అంటే 'దేర్ ఈజ్'. దీని తర్వాత {der} పదాలు {einen} అవుతాయి.",
          teLatn: "{es gibt} ante 'there is'. Deeni tarvaata {der} padaalu {einen} avutaayi.",
          en: "es gibt = there is; der-words become einen after it.",
        },
      },
      {
        de: "Der Laptop liegt auf dem Tisch.",
        meaning: { te: "ల్యాప్‌టాప్ టేబుల్ మీద ఉంది.", teLatn: "Laptop table meeda undi.", en: "The laptop is on the table." },
        tip: {
          te: "'ఎక్కడ' అని చెప్పేటప్పుడు {der} → {dem}, {die} → {der}, {das} → {dem}. మెల్లగా అలవాటవుతుంది.",
          teLatn: "'Ekkada' ani cheppetappudu {der} → {dem}, {die} → {der}, {das} → {dem}. Mellagaa alavaatavutundi.",
          en: "When saying where: der → dem, die → der, das → dem. It comes with practice.",
        },
      },
      {
        de: "Die Lampe steht neben dem Bett.",
        meaning: { te: "ల్యాంప్ బెడ్ పక్కన ఉంది.", teLatn: "Lamp bed pakkana undi.", en: "The lamp is next to the bed." },
      },
      {
        de: "Ich koche in der Küche.",
        meaning: { te: "నేను కిచెన్‌లో వంట చేస్తాను.", teLatn: "Nenu kitchen lo vanta chestaanu.", en: "I cook in the kitchen." },
      },
    ],
  },
  {
    id: "l08-3",
    steps: [
      {
        say: {
          te: "జర్మనీలో ఫ్లాట్ యాడ్స్‌లో చాలా షార్ట్ ఫామ్స్ ఉంటాయి. ముఖ్యంగా రెంట్ రెండు రకాలు — ఇది తెలియకపోతే మోసపోతారు!",
          teLatn: "Germany lo flat ads lo chaalaa short forms untaayi. Mukhyangaa rent rendu rakaalu — idi teliyakapote mosapotaaru!",
          en: "German flat adverts are full of abbreviations. There are two kinds of rent — know the difference!",
        },
      },
      {
        de: "die Kaltmiete",
        meaning: { te: "బేసిక్ రెంట్ మాత్రమే — హీటింగ్, వాటర్ లేకుండా.", teLatn: "Basic rent maatrame — heating, water lekundaa.", en: "Basic rent only — without heating and water." },
      },
      {
        de: "die Warmmiete",
        meaning: { te: "మొత్తం రెంట్ — హీటింగ్, వాటర్, బిల్డింగ్ ఖర్చులతో కలిపి.", teLatn: "Mottham rent — heating, water, building kharchulatho kalipi.", en: "Total rent including heating, water and building costs." },
        tip: {
          te: "మీరు నెలకి కట్టేది {Warmmiete}. ఎలక్ట్రిసిటీ, ఇంటర్నెట్ సాధారణంగా సెపరేట్.",
          teLatn: "Meeru nelaki kattedi {Warmmiete}. Electricity, internet saadhaaranamgaa separate.",
          en: "What you pay monthly is the Warmmiete. Electricity and internet are usually extra.",
        },
      },
      {
        de: "die Kaution: drei Monatsmieten",
        meaning: { te: "డిపాజిట్: మూడు నెలల రెంట్.", teLatn: "Deposit: moodu nelala rent.", en: "Deposit: three months' rent." },
      },
      {
        de: "2-Zimmer-Wohnung, 55 Quadratmeter, ab sofort frei",
        meaning: { te: "రెండు రూమ్స్ ఫ్లాట్, యాభై ఐదు స్క్వేర్ మీటర్స్, వెంటనే ఖాళీ.", teLatn: "Rendu rooms flat, yaabhai aidu square meters, ventane khaalee.", en: "2-room flat, 55 m², available now." },
      },
      {
        de: "Ist die Wohnung noch frei?",
        meaning: { te: "ఫ్లాట్ ఇంకా ఖాళీగా ఉందా?", teLatn: "Flat inka khaaleegaa undaa?", en: "Is the flat still available?" },
      },
      {
        de: "Wann kann ich die Wohnung besichtigen?",
        meaning: { te: "ఫ్లాట్ చూడటానికి ఎప్పుడు రావచ్చు?", teLatn: "Flat choodataaniki eppudu raavachu?", en: "When can I view the flat?" },
        tip: {
          te: "ఫ్లాట్ చూడటం అంటే {die Besichtigung}. చాలామంది వస్తారు, టైమ్‌కి వెళ్ళండి!",
          teLatn: "Flat choodatam ante {die Besichtigung}. Chaalaamandi vastaaru, time ki vellandi!",
          en: "A viewing is die Besichtigung — many people come, so be on time!",
        },
      },
    ],
  },
  {
    id: "l08-4",
    steps: [
      {
        say: {
          te: "ఫ్లాట్‌లో ఏదైనా పాడైతే ఓనర్‌కి చెప్పాలి. జర్మన్‌లో ఓనర్‌ని {der Vermieter} లేదా {die Vermieterin} అంటారు.",
          teLatn: "Flat lo edainaa paadaite owner ki cheppaali. German lo owner ni {der Vermieter} ledaa {die Vermieterin} antaaru.",
          en: "When something breaks, tell the landlord — der Vermieter / die Vermieterin.",
        },
      },
      {
        de: "Die Heizung ist kaputt.",
        meaning: { te: "హీటింగ్ పాడైపోయింది.", teLatn: "Heating paadaipoyindi.", en: "The heating is broken." },
        tip: {
          te: "{kaputt} అంటే బ్రోకెన్ — ఏదైనా పని చేయకపోతే ఈ ఒక్క పదం చాలు.",
          teLatn: "{kaputt} ante broken — edainaa pani cheyakapote ee okka padam chaalu.",
          en: "kaputt = broken — one word for anything that doesn't work.",
        },
      },
      {
        de: "Das Licht im Bad funktioniert nicht.",
        meaning: { te: "బాత్రూమ్‌లో లైట్ పని చేయట్లేదు.", teLatn: "Bathroom lo light pani cheyatledu.", en: "The light in the bathroom doesn't work." },
      },
      {
        de: "Es gibt kein warmes Wasser.",
        meaning: { te: "వేడి నీళ్ళు రావట్లేదు.", teLatn: "Vedi neellu raavatledu.", en: "There's no hot water." },
      },
      {
        de: "Können Sie bitte jemanden schicken?",
        meaning: { te: "దయచేసి ఎవరినైనా పంపిస్తారా?", teLatn: "Dayachesi evarinainaa pampistaaraa?", en: "Could you please send someone?" },
      },
      {
        de: "Wann kommt der Handwerker?",
        meaning: { te: "రిపేర్ మ్యాన్ ఎప్పుడు వస్తారు?", teLatn: "Repair man eppudu vastaaru?", en: "When will the repair person come?" },
      },
      {
        de: "Es ist dringend!",
        meaning: { te: "ఇది అర్జెంట్!", teLatn: "Idi urgent!", en: "It's urgent!" },
        tip: {
          te: "చలికాలంలో హీటింగ్ లేకపోతే ఇది తప్పకుండా చెప్పండి.",
          teLatn: "Chalikaalamlo heating lekapote idi tappakundaa cheppandi.",
          en: "Definitely say this if the heating fails in winter.",
        },
      },
    ],
  },
];
