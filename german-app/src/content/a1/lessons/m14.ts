import type { LessonContent } from "@/lib/types";

// Module 14 — Reisen und Feiern (train station, hotel, Perfekt with sein, messages)
export const M14: LessonContent[] = [
  {
    id: "l14-1",
    steps: [
      {
        say: {
          te: "రైల్వే స్టేషన్‌లో. జర్మన్ ట్రైన్స్‌ని {die Bahn} అంటారు. ఫాస్ట్ ట్రైన్ {ICE}. ఆప్‌లో లేదా కౌంటర్‌లో టికెట్ కొనొచ్చు.",
          teLatn: "Railway station lo. German trains ni {die Bahn} antaaru. Fast train {ICE}. App lo ledaa counter lo ticket konochu.",
          en: "At the station. German trains are 'die Bahn'; the fast train is the ICE. Buy tickets in the app or at the counter.",
        },
      },
      {
        de: "Wann fährt der nächste Zug nach München?",
        meaning: { te: "మ్యూనిక్‌కి నెక్స్ట్ ట్రైన్ ఎప్పుడు?", teLatn: "Munich ki next train eppudu?", en: "When is the next train to Munich?" },
      },
      {
        de: "Um vierzehn Uhr zehn von Gleis acht.",
        meaning: { te: "పద్నాలుగు పది కి, ప్లాట్‌ఫామ్ ఎనిమిది నుంచి.", teLatn: "Padnaalugu padi ki, platform enimidi nunchi.", en: "At 14:10 from platform eight." },
        tip: {
          te: "{das Gleis} అంటే ప్లాట్‌ఫామ్.",
          teLatn: "{das Gleis} ante platform.",
          en: "das Gleis = platform / track.",
        },
      },
      {
        de: "Muss ich umsteigen?",
        meaning: { te: "నేను ట్రైన్ మారాలా?", teLatn: "Nenu train maaraalaa?", en: "Do I have to change trains?" },
      },
      {
        de: "Der Zug hat zwanzig Minuten Verspätung.",
        meaning: { te: "ట్రైన్ ఇరవై నిమిషాలు లేట్.", teLatn: "Train iravai nimishaalu late.", en: "The train is twenty minutes late." },
        tip: {
          te: "ఈ అనౌన్స్‌మెంట్ మీరు చాలా సార్లు వింటారు! {Verspätung} అంటే డిలే.",
          teLatn: "Ee announcement meeru chaalaa saarlu vintaaru! {Verspätung} ante delay.",
          en: "You'll hear this announcement a lot! Verspätung = delay.",
        },
      },
      {
        de: "Ist dieser Platz frei?",
        meaning: { te: "ఈ సీట్ ఖాళీగా ఉందా?", teLatn: "Ee seat khaaleegaa undaa?", en: "Is this seat free?" },
      },
    ],
  },
  {
    id: "l14-2",
    steps: [
      {
        say: {
          te: "హోటల్‌లో చెక్ ఇన్ చేయడం. ఇక్కడ కూడా మర్యాదగా {Ich hätte gern…}, {Ich möchte…} వాడండి.",
          teLatn: "Hotel lo check in cheyadam. Ikkada kooda maryaadaga {Ich hätte gern…}, {Ich möchte…} vaadandi.",
          en: "Checking in at a hotel. Use Ich hätte gern… and Ich möchte… to be polite.",
        },
      },
      {
        de: "Ich habe ein Zimmer reserviert. Mein Name ist Ravi Kumar.",
        meaning: { te: "నేను ఒక రూమ్ బుక్ చేశాను. నా పేరు రవి కుమార్.", teLatn: "Nenu oka room book chesaanu. Naa peru Ravi Kumar.", en: "I've booked a room. My name is Ravi Kumar." },
      },
      {
        de: "Ein Einzelzimmer für zwei Nächte, bitte.",
        meaning: { te: "రెండు రాత్రులకి సింగిల్ రూమ్ ప్లీజ్.", teLatn: "Rendu raatrulaki single room please.", en: "A single room for two nights, please." },
        tip: {
          te: "ఇద్దరికి అయితే {ein Doppelzimmer}.",
          teLatn: "Iddariki aite {ein Doppelzimmer}.",
          en: "For two people: ein Doppelzimmer.",
        },
      },
      {
        de: "Ist das Frühstück inklusive?",
        meaning: { te: "బ్రేక్‌ఫాస్ట్ కలిపేనా?", teLatn: "Breakfast kalipenaa?", en: "Is breakfast included?" },
      },
      {
        de: "Wie ist das WLAN-Passwort?",
        meaning: { te: "వైఫై పాస్‌వర్డ్ ఏంటి?", teLatn: "WiFi password enti?", en: "What's the Wi-Fi password?" },
        tip: {
          te: "జర్మన్‌లో వైఫైని {WLAN} అంటారు — 'వే-లాన్'.",
          teLatn: "German lo WiFi ni {WLAN} antaaru — 've-laan'.",
          en: "Germans call Wi-Fi WLAN — 'vay-lahn'.",
        },
      },
      {
        de: "Bis wann muss ich auschecken?",
        meaning: { te: "ఎన్ని గంటల లోపు చెక్ అవుట్ చేయాలి?", teLatn: "Enni gantala lopu check out cheyaali?", en: "By what time do I have to check out?" },
      },
    ],
  },
  {
    id: "l14-3",
    steps: [
      {
        say: {
          te: "గుర్తుందా, పాస్ట్‌కి {haben} ప్లస్ {ge…t}? కానీ ఒక చోటు నుంచి ఇంకో చోటుకి వెళ్ళే వర్బ్స్‌కి {haben} కాదు, {sein} వాడతారు: {Ich bin gefahren}.",
          teLatn: "Gurthundaa, past ki {haben} plus {ge…t}? Kaani oka chotu nunchi inko chotuki velle verbs ki {haben} kaadu, {sein} vaadataaru: {Ich bin gefahren}.",
          en: "Remember the past with haben? Verbs of moving from one place to another use sein instead: Ich bin gefahren.",
        },
      },
      {
        de: "Ich bin nach Hamburg gefahren.",
        meaning: { te: "నేను హాంబర్గ్‌కి వెళ్ళాను — వెహికల్‌లో.", teLatn: "Nenu Hamburg ki vellaanu — vehicle lo.", en: "I went to Hamburg (by transport)." },
      },
      {
        de: "Wir sind ins Kino gegangen.",
        meaning: { te: "మేము సినిమాకి వెళ్ళాము.", teLatn: "Memu cinema ki vellaamu.", en: "We went to the cinema." },
      },
      {
        de: "Ich bin um sieben Uhr aufgestanden.",
        meaning: { te: "నేను ఏడు గంటలకి లేచాను.", teLatn: "Nenu edu gantalaki lechaanu.", en: "I got up at seven." },
      },
      {
        de: "Wann bist du nach Deutschland gekommen?",
        meaning: { te: "నువ్వు జర్మనీకి ఎప్పుడు వచ్చావు?", teLatn: "Nuvvu Germany ki eppudu vachaavu?", en: "When did you come to Germany?" },
        tip: {
          te: "చాలా కామన్ క్వశ్చన్! ఆన్సర్: {Ich bin 2024 nach Deutschland gekommen.}",
          teLatn: "Chaalaa common question! Answer: {Ich bin 2024 nach Deutschland gekommen.}",
          en: "A very common question! Answer: Ich bin 2024 nach Deutschland gekommen.",
        },
      },
      {
        de: "Am Wochenende bin ich zu Hause geblieben.",
        meaning: { te: "వీకెండ్ నేను ఇంట్లోనే ఉన్నాను.", teLatn: "Weekend nenu intlone unnaanu.", en: "At the weekend I stayed at home." },
        tip: {
          te: "{bleiben} — ఉండిపోవడం — కూడా {sein} తో: {ich bin geblieben}.",
          teLatn: "{bleiben} — undipovadam — kooda {sein} tho: {ich bin geblieben}.",
          en: "bleiben (to stay) also takes sein: ich bin geblieben.",
        },
      },
    ],
  },
  {
    id: "l14-4",
    steps: [
      {
        say: {
          te: "చిన్న మెసేజ్ రాయడం — ఎగ్జామ్‌లో కూడా వస్తుంది. స్ట్రక్చర్: హలో, రీజన్, క్వశ్చన్ లేదా ఇన్ఫర్మేషన్, బై.",
          teLatn: "Chinna message raayadam — exam lo kooda vastundi. Structure: hello, reason, question ledaa information, bye.",
          en: "Writing a short message — it's in the exam too. Structure: greeting, reason, question or info, goodbye.",
        },
      },
      {
        de: "Liebe Anna,",
        meaning: { te: "డియర్ అన్నా,", teLatn: "Dear Anna,", en: "Dear Anna," },
        tip: {
          te: "అమ్మాయికి {Liebe}, అబ్బాయికి {Lieber}: {Lieber Tom}. ఫార్మల్ అయితే {Sehr geehrte Frau Schmidt}.",
          teLatn: "Ammaayiki {Liebe}, abbaayiki {Lieber}: {Lieber Tom}. Formal aite {Sehr geehrte Frau Schmidt}.",
          en: "Liebe for a woman, Lieber for a man. Formal: Sehr geehrte Frau Schmidt.",
        },
      },
      {
        de: "ich mache am Samstag eine Party.",
        meaning: { te: "నేను శాటర్‌డే ఒక పార్టీ ఇస్తున్నాను.", teLatn: "Nenu Saturday oka party istunnaanu.", en: "I'm having a party on Saturday." },
        tip: {
          te: "కామా తర్వాత మెసేజ్ చిన్న లెటర్‌తో స్టార్ట్ అవుతుంది: {ich}.",
          teLatn: "Comma tarvaata message chinna letter tho start avutundi: {ich}.",
          en: "After the comma, the message starts with a small letter: ich.",
        },
      },
      {
        de: "Hast du Zeit? Bitte antworte bis Mittwoch.",
        meaning: { te: "నీకు టైమ్ ఉందా? దయచేసి వెడ్నెస్‌డే లోపు రిప్లై ఇవ్వు.", teLatn: "Neeku time undaa? Dayachesi Wednesday lopu reply ivvu.", en: "Are you free? Please reply by Wednesday." },
      },
      {
        de: "Viele Grüße, Ravi",
        meaning: { te: "బెస్ట్ విషెస్, రవి.", teLatn: "Best wishes, Ravi.", en: "Best wishes, Ravi" },
        tip: {
          te: "ఫ్రెండ్స్‌కి {Liebe Grüße}, ఫార్మల్ అయితే {Mit freundlichen Grüßen}.",
          teLatn: "Friends ki {Liebe Grüße}, formal aite {Mit freundlichen Grüßen}.",
          en: "Friends: Liebe Grüße. Formal: Mit freundlichen Grüßen.",
        },
      },
      {
        de: "Frohe Weihnachten! Alles Gute zum Geburtstag!",
        meaning: { te: "హ్యాపీ క్రిస్మస్! హ్యాపీ బర్త్‌డే!", teLatn: "Happy Christmas! Happy birthday!", en: "Merry Christmas! Happy birthday!" },
        tip: {
          te: "న్యూ ఇయర్‌కి {Frohes neues Jahr!}",
          teLatn: "New year ki {Frohes neues Jahr!}",
          en: "For New Year: Frohes neues Jahr!",
        },
      },
    ],
  },
];
