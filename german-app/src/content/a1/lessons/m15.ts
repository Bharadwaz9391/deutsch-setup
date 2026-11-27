import type { LessonContent } from "@/lib/types";

// Module 15 — Prüfungstraining A1 (Goethe / telc Start Deutsch 1)
// Exam format details: verify on the official Goethe / telc pages before booking — formats can change.
export const M15: LessonContent[] = [
  {
    id: "l15-1",
    steps: [
      {
        say: {
          te: "A1 ఎగ్జామ్‌లో నాలుగు పార్ట్స్: లిజనింగ్, రీడింగ్, రైటింగ్, స్పీకింగ్. పాస్ అవ్వడానికి సుమారు సిక్స్‌టీ పర్సెంట్ కావాలి. ముందు లిజనింగ్ — {Hören}.",
          teLatn: "A1 exam lo naalugu parts: listening, reading, writing, speaking. Pass avvadaaniki sumaaru sixty percent kaavaali. Mundu listening — {Hören}.",
          en: "The A1 exam has four parts: listening, reading, writing, speaking. You need about 60 percent to pass. First: listening — Hören.",
        },
      },
      {
        say: {
          te: "లిజనింగ్‌లో చిన్న కాన్వర్సేషన్స్, అనౌన్స్‌మెంట్స్, ఫోన్ మెసేజెస్ వింటారు. టిప్: ముందు క్వశ్చన్ చదవండి — ఏం వినాలో తెలిస్తే ఈజీ.",
          teLatn: "Listening lo chinna conversations, announcements, phone messages vintaaru. Tip: mundu question chadavandi — em vinaalo teliste easy.",
          en: "You hear short conversations, announcements and phone messages. Tip: read the question first — it's easier when you know what to listen for.",
        },
      },
      {
        de: "Der Zug nach Berlin fährt heute von Gleis sieben.",
        meaning: { te: "బెర్లిన్ ట్రైన్ ఈ రోజు ప్లాట్‌ఫామ్ సెవెన్ నుంచి వెళ్తుంది.", teLatn: "Berlin train ee rooju platform seven nunchi veltundi.", en: "The train to Berlin leaves from platform seven today." },
        tip: {
          te: "ఎగ్జామ్‌లో ఇలాంటి అనౌన్స్‌మెంట్స్‌లో నంబర్స్, టైమ్స్, డేస్ జాగ్రత్తగా వినండి.",
          teLatn: "Exam lo ilaanti announcements lo numbers, times, days jaagrattagaa vinandi.",
          en: "In announcements like this, listen carefully for numbers, times and days.",
        },
      },
      {
        de: "Hallo Ravi, hier ist Anna. Wir treffen uns nicht um drei, sondern um vier Uhr.",
        meaning: {
          te: "హలో రవి, నేను అన్నా. మనం మూడు గంటలకి కాదు, నాలుగు గంటలకి కలుద్దాం.",
          teLatn: "Hello Ravi, nenu Anna. Manam moodu gantalaki kaadu, naalugu gantalaki kaluddaam.",
          en: "Hi Ravi, it's Anna. We're not meeting at three, but at four.",
        },
        tip: {
          te: "ట్రిక్ వర్డ్: {nicht …, sondern …} — 'ఇది కాదు, అది'. కరెక్ట్ ఆన్సర్ {sondern} తర్వాత వస్తుంది!",
          teLatn: "Trick word: {nicht …, sondern …} — 'idi kaadu, adi'. Correct answer {sondern} tarvaata vastundi!",
          en: "Trap: nicht …, sondern … — 'not this, but that'. The right answer comes after sondern!",
        },
      },
      {
        de: "Das Geschäft ist am Samstag von neun bis vierzehn Uhr geöffnet.",
        meaning: { te: "షాప్ శాటర్‌డే తొమ్మిది నుంచి రెండు వరకు ఓపెన్.", teLatn: "Shop Saturday tommidi nunchi rendu varaku open.", en: "The shop is open on Saturday from 9 to 2." },
      },
    ],
  },
  {
    id: "l15-2",
    steps: [
      {
        say: {
          te: "రీడింగ్ — {Lesen}. చిన్న ఈమెయిల్స్, యాడ్స్, షాప్ బోర్డ్స్ చదువుతారు. ప్రతి పదం అర్థం అవ్వక్కర్లేదు — ఇంపార్టెంట్ ఇన్ఫర్మేషన్ మాత్రమే వెతకండి.",
          teLatn: "Reading — {Lesen}. Chinna emails, ads, shop boards chaduvutaaru. Prati padam artham avvakkarledu — important information maatrame vetakandi.",
          en: "Reading — Lesen. Short emails, adverts and signs. You don't need every word — look for the key information.",
        },
      },
      {
        de: "Geöffnet, geschlossen",
        meaning: { te: "ఓపెన్, క్లోజ్డ్.", teLatn: "Open, closed.", en: "open, closed" },
      },
      {
        de: "Eingang, Ausgang",
        meaning: { te: "ఎంట్రెన్స్, ఎగ్జిట్.", teLatn: "Entrance, exit.", en: "entrance, exit" },
      },
      {
        de: "Bitte nicht rauchen. Rauchen verboten.",
        meaning: { te: "దయచేసి స్మోక్ చేయకండి. స్మోకింగ్ అలౌడ్ కాదు.", teLatn: "Dayachesi smoke cheyakandi. Smoking allowed kaadu.", en: "Please don't smoke. Smoking prohibited." },
      },
      {
        de: "Sonderangebot: Äpfel nur ein Euro neunundneunzig",
        meaning: { te: "స్పెషల్ ఆఫర్: యాపిల్స్ ఒక యూరో తొంభై తొమ్మిది మాత్రమే.", teLatn: "Special offer: apples oka euro tombhai tommidi maatrame.", en: "Special offer: apples only €1.99" },
      },
      {
        de: "Die Praxis bleibt vom ersten bis zum fünfzehnten August geschlossen.",
        meaning: { te: "క్లినిక్ ఆగస్ట్ ఒకటి నుంచి పదిహేను వరకు క్లోజ్.", teLatn: "Clinic August okati nunchi padihenu varaku close.", en: "The practice is closed from 1 to 15 August." },
        tip: {
          te: "డేట్స్, టైమ్స్ ఉన్న వాక్యాలు ఎగ్జామ్‌లో ఎక్కువగా వస్తాయి.",
          teLatn: "Dates, times unna vaakyaalu exam lo ekkuvagaa vastaayi.",
          en: "Sentences with dates and times come up a lot in the exam.",
        },
      },
    ],
  },
  {
    id: "l15-3",
    steps: [
      {
        say: {
          te: "రైటింగ్ — {Schreiben}. రెండు పార్ట్స్: ఒక ఫామ్ ఫిల్ చేయడం, ఒక చిన్న మెసేజ్ — సుమారు ముప్పై వర్డ్స్ — రాయడం. మాడ్యూల్ టెన్, ఫోర్టీన్ గుర్తుందా?",
          teLatn: "Writing — {Schreiben}. Rendu parts: oka form fill cheyadam, oka chinna message — sumaaru muppai words — raayadam. Module ten, fourteen gurthundaa?",
          en: "Writing — Schreiben. Two parts: filling in a form, and a short message of about 30 words. Remember modules 10 and 14?",
        },
      },
      {
        say: {
          te: "మెసేజ్‌లో టాస్క్‌లో ఇచ్చిన మూడు పాయింట్స్ తప్పకుండా రాయాలి. హలో, బై మర్చిపోకండి — వాటికి కూడా మార్క్స్ ఉన్నాయి!",
          teLatn: "Message lo task lo ichina moodu points tappakundaa raayaali. Hello, bye marchipokandi — vaatiki kooda marks unnaayi!",
          en: "Your message must cover all three points in the task. Don't forget the greeting and closing — they earn marks too!",
        },
      },
      {
        de: "Liebe Frau Weber, ich bin leider krank und kann morgen nicht kommen.",
        meaning: {
          te: "డియర్ మిసెస్ వెబర్, సారీ నాకు ఒంట్లో బాలేదు, రేపు రాలేను.",
          teLatn: "Dear Mrs Weber, sorry naaku ontlo baaledu, repu raalenu.",
          en: "Dear Ms Weber, unfortunately I'm ill and can't come tomorrow.",
        },
      },
      {
        de: "Können wir einen neuen Termin machen?",
        meaning: { te: "మనం కొత్త అపాయింట్‌మెంట్ ఫిక్స్ చేద్దామా?", teLatn: "Manam kotha appointment fix cheddaamaa?", en: "Can we make a new appointment?" },
      },
      {
        de: "Ich habe am Freitag Zeit.",
        meaning: { te: "నాకు ఫ్రైడే టైమ్ ఉంది.", teLatn: "Naaku Friday time undi.", en: "I'm free on Friday." },
      },
      {
        de: "Viele Grüße, Ravi Kumar",
        meaning: { te: "బెస్ట్ విషెస్, రవి కుమార్.", teLatn: "Best wishes, Ravi Kumar.", en: "Best wishes, Ravi Kumar" },
        tip: {
          te: "ఈ నాలుగు లైన్స్‌తో ఒక పర్ఫెక్ట్ A1 మెసేజ్ రెడీ! రీజన్ మార్చి ఎన్నైనా రాయొచ్చు.",
          teLatn: "Ee naalugu lines tho oka perfect A1 message ready! Reason maarchi ennainaa raayochu.",
          en: "These four lines make a perfect A1 message — change the reason to write many more.",
        },
      },
    ],
  },
  {
    id: "l15-4",
    steps: [
      {
        say: {
          te: "స్పీకింగ్ — {Sprechen}. గ్రూప్‌లో జరుగుతుంది. ఫస్ట్ పార్ట్: మిమ్మల్ని మీరు ఇంట్రడ్యూస్ చేసుకోవడం. ఇది ప్రాక్టీస్ చేసి రెడీగా ఉంచుకోండి!",
          teLatn: "Speaking — {Sprechen}. Group lo jarugutundi. First part: mimmalni meeru introduce chesukovadam. Idi practice chesi ready gaa unchukondi!",
          en: "Speaking — Sprechen, in a group. Part one: introduce yourself. Have this ready!",
        },
      },
      {
        de: "Ich heiße Ravi Kumar. Ich bin achtundzwanzig Jahre alt.",
        meaning: { te: "నా పేరు రవి కుమార్. నా వయసు ఇరవై ఎనిమిది.", teLatn: "Naa peru Ravi Kumar. Naa vayasu iravai enimidi.", en: "My name is Ravi Kumar. I'm twenty-eight." },
      },
      {
        de: "Ich komme aus Indien und wohne jetzt in Berlin.",
        meaning: { te: "నేను ఇండియా నుంచి వచ్చాను, ఇప్పుడు బెర్లిన్‌లో ఉంటున్నాను.", teLatn: "Nenu India nunchi vachaanu, ippudu Berlin lo untunnaanu.", en: "I'm from India and now live in Berlin." },
      },
      {
        de: "Ich spreche Telugu, Englisch und ein bisschen Deutsch.",
        meaning: { te: "నేను తెలుగు, ఇంగ్లీష్, కొంచెం జర్మన్ మాట్లాడతాను.", teLatn: "Nenu Telugu, English, konchem German maatlaadataanu.", en: "I speak Telugu, English and a little German." },
      },
      {
        de: "Ich bin Fahrer von Beruf. Mein Hobby ist Kricket.",
        meaning: { te: "నేను డ్రైవర్‌గా పని చేస్తాను. నా హాబీ క్రికెట్.", teLatn: "Nenu driver gaa pani chestaanu. Naa hobby cricket.", en: "I'm a driver by profession. My hobby is cricket." },
        tip: {
          te: "మీ రియల్ డీటెయిల్స్‌తో ఈ ఐదు లైన్స్ బై హార్ట్ చేయండి.",
          teLatn: "Mee real details tho ee aidu lines by heart cheyandi.",
          en: "Learn these five lines by heart with your real details.",
        },
      },
      {
        say: {
          te: "సెకండ్ పార్ట్: కార్డ్ మీద ఒక పదం ఉంటుంది — ఎగ్జాంపుల్‌కి {Wohnen} — దాంతో ఒక క్వశ్చన్ అడగాలి: {Wo wohnst du?} థర్డ్ పార్ట్: పిక్చర్ చూసి రిక్వెస్ట్ చేయాలి: {Gib mir bitte das Wasser.}",
          teLatn: "Second part: card meeda oka padam untundi — example ki {Wohnen} — daantho oka question adagaali: {Wo wohnst du?} Third part: picture choosi request cheyaali: {Gib mir bitte das Wasser.}",
          en: "Part two: a card shows a word like Wohnen — ask a question with it: Wo wohnst du? Part three: make a request from a picture: Gib mir bitte das Wasser.",
        },
      },
      {
        say: {
          te: "కంగ్రాట్స్! మీరు మొత్తం A1 కోర్స్ విన్నారు. ఇప్పుడు ఫుల్ మాక్ టెస్ట్ ట్రై చేసి, రియల్ ఎగ్జామ్ బుక్ చేయండి. మీరు చేయగలరు!",
          teLatn: "Congrats! Meeru mottham A1 course vinnaaru. Ippudu full mock test try chesi, real exam book cheyandi. Meeru cheyagalaru!",
          en: "Congratulations! You've heard the whole A1 course. Now try a full mock test and book the real exam. You can do it!",
        },
      },
    ],
  },
];
