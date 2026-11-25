import type { LessonContent } from "@/lib/types";

// Module 10 — Ämter und Termine (appointments, Anmeldung, forms, bank, post)
export const M10: LessonContent[] = [
  {
    id: "l10-1",
    steps: [
      {
        say: {
          te: "జర్మనీలో దాదాపు అన్నిటికీ అపాయింట్‌మెంట్ కావాలి — {der Termin}. ఆఫీస్, డాక్టర్, బ్యాంక్ — అన్నీ.",
          teLatn: "Germany lo daadaapu annitikee appointment kaavaali — {der Termin}. Office, doctor, bank — annee.",
          en: "In Germany you need an appointment for almost everything — der Termin.",
        },
      },
      {
        de: "Ich möchte einen Termin machen.",
        meaning: { te: "నాకు అపాయింట్‌మెంట్ కావాలి.", teLatn: "Naaku appointment kaavaali.", en: "I'd like to make an appointment." },
      },
      {
        de: "Haben Sie am Dienstag Zeit? — Ja, das passt.",
        meaning: { te: "మీకు ట్యూస్‌డే టైమ్ ఉందా? — అవును, అది ఓకే.", teLatn: "Meeku Tuesday time undaa? — Avunu, adi okay.", en: "Are you free on Tuesday? — Yes, that works." },
        tip: {
          te: "{Das passt} అంటే 'అది సూట్ అవుతుంది'. కుదరకపోతే {Das passt leider nicht.}",
          teLatn: "{Das passt} ante 'adi suit avutundi'. Kudarakapote {Das passt leider nicht.}",
          en: "Das passt = that suits me. If not: Das passt leider nicht.",
        },
      },
      {
        de: "am dritten Mai um zehn Uhr",
        meaning: { te: "మే మూడున పది గంటలకి.", teLatn: "May moodu na padi gantalaki.", en: "on the third of May at ten" },
        tip: {
          te: "డేట్స్‌కి: {am ersten}, {am zweiten}, {am dritten}, {am vierten}… ఫస్ట్, సెకండ్, థర్డ్ లాగా.",
          teLatn: "Dates ki: {am ersten}, {am zweiten}, {am dritten}, {am vierten}… first, second, third laaga.",
          en: "Dates: am ersten, am zweiten, am dritten, am vierten…",
        },
      },
      {
        de: "Ich muss den Termin leider absagen.",
        meaning: { te: "సారీ, నేను అపాయింట్‌మెంట్ క్యాన్సిల్ చేయాలి.", teLatn: "Sorry, nenu appointment cancel cheyaali.", en: "Unfortunately I have to cancel the appointment." },
        tip: {
          te: "{müssen} అంటే 'తప్పకుండా చేయాలి'. రాలేకపోతే ఎప్పుడూ ముందే క్యాన్సిల్ చేయండి.",
          teLatn: "{müssen} ante 'tappakundaa cheyaali'. Raalekapote eppudoo munde cancel cheyandi.",
          en: "müssen = must / have to. Always cancel in advance if you can't come.",
        },
      },
      {
        de: "Kann ich den Termin verschieben?",
        meaning: { te: "అపాయింట్‌మెంట్ వేరే రోజుకి మార్చొచ్చా?", teLatn: "Appointment vere rojuki maarchochaa?", en: "Can I reschedule the appointment?" },
      },
    ],
  },
  {
    id: "l10-2",
    steps: [
      {
        say: {
          te: "జర్మనీలో కొత్త ఫ్లాట్‌లోకి మారిన తర్వాత రెండు వారాల్లో మీ అడ్రస్ రిజిస్టర్ చేయాలి. దీన్ని {die Anmeldung} అంటారు, {Bürgeramt} లో చేస్తారు.",
          teLatn: "Germany lo kotha flat loki maarina tarvaata rendu vaaraallo mee address register cheyaali. Deenni {die Anmeldung} antaaru, {Bürgeramt} lo chestaaru.",
          en: "After moving into a new flat, you must register your address within two weeks — die Anmeldung, at the Bürgeramt.",
        },
      },
      {
        de: "Ich möchte mich anmelden.",
        meaning: { te: "నేను నా అడ్రస్ రిజిస్టర్ చేసుకోవాలి.", teLatn: "Nenu naa address register chesukovaali.", en: "I'd like to register my address." },
      },
      {
        de: "Ihren Pass, bitte.",
        meaning: { te: "మీ పాస్‌పోర్ట్ ఇవ్వండి.", teLatn: "Mee passport ivvandi.", en: "Your passport, please." },
      },
      {
        de: "Haben Sie die Wohnungsgeberbestätigung?",
        meaning: { te: "ఓనర్ ఇచ్చిన కన్ఫర్మేషన్ లెటర్ ఉందా?", teLatn: "Owner ichina confirmation letter undaa?", en: "Do you have the landlord's confirmation?" },
        tip: {
          te: "చాలా పెద్ద పదం! ఇది మీ ఓనర్ ఇచ్చే లెటర్ — మీరు అక్కడ ఉంటున్నారని. ఇది లేకుండా {Anmeldung} అవ్వదు.",
          teLatn: "Chaalaa pedda padam! Idi mee owner iche letter — meeru akkada untunnaarani. Idi lekundaa {Anmeldung} avvadu.",
          en: "A long word! It's the letter from your landlord confirming you live there. No Anmeldung without it.",
        },
      },
      {
        de: "Hier ist Ihre Meldebescheinigung.",
        meaning: { te: "ఇదిగోండి మీ రిజిస్ట్రేషన్ సర్టిఫికెట్.", teLatn: "Idigondi mee registration certificate.", en: "Here is your registration certificate." },
        tip: {
          te: "దీన్ని జాగ్రత్తగా ఉంచుకోండి — బ్యాంక్ అకౌంట్, టాక్స్ ఐడీ అన్నిటికీ కావాలి.",
          teLatn: "Deenni jaagrattagaa unchukondi — bank account, tax ID annitikee kaavaali.",
          en: "Keep it safe — you need it for a bank account, tax ID and more.",
        },
      },
      {
        de: "Darf ich hier warten?",
        meaning: { te: "నేను ఇక్కడ వెయిట్ చేయొచ్చా?", teLatn: "Nenu ikkada wait cheyochaa?", en: "May I wait here?" },
        tip: {
          te: "{dürfen} అంటే 'పర్మిషన్ ఉండటం'. {Hier darf man nicht rauchen.} — ఇక్కడ స్మోకింగ్ అలౌడ్ కాదు.",
          teLatn: "{dürfen} ante 'permission undatam'. {Hier darf man nicht rauchen.} — ikkada smoking allowed kaadu.",
          en: "dürfen = may / be allowed. Hier darf man nicht rauchen — no smoking here.",
        },
      },
    ],
  },
  {
    id: "l10-3",
    steps: [
      {
        say: {
          te: "జర్మనీలో ఫామ్స్ చాలా ఎక్కువ! ఫామ్‌లో ఎప్పుడూ వచ్చే పదాలు నేర్చుకుంటే సగం పని అయిపోయినట్టే.",
          teLatn: "Germany lo forms chaalaa ekkuva! Form lo eppudoo vache padaalu nerchukunte sagam pani ayipoyinatte.",
          en: "Germany loves forms! Learn the words that always appear and you're halfway there.",
        },
      },
      {
        de: "Vorname, Nachname",
        meaning: { te: "ఫస్ట్ నేమ్, సర్‌నేమ్.", teLatn: "First name, surname.", en: "first name, surname" },
        tip: {
          te: "మన ఇంటి పేరు ముందు వచ్చినా, జర్మన్ ఫామ్‌లో {Nachname} బాక్స్‌లోనే రాయండి — పాస్‌పోర్ట్‌లో ఉన్నట్టు.",
          teLatn: "Mana inti peru mundu vachinaa, German form lo {Nachname} box lone raayandi — passport lo unnattu.",
          en: "Even if your family name comes first at home, write it in the Nachname box — as in your passport.",
        },
      },
      {
        de: "Geburtsdatum, Geburtsort",
        meaning: { te: "డేట్ ఆఫ్ బర్త్, ప్లేస్ ఆఫ్ బర్త్.", teLatn: "Date of birth, place of birth.", en: "date of birth, place of birth" },
      },
      {
        de: "Staatsangehörigkeit: indisch",
        meaning: { te: "నేషనాలిటీ: ఇండియన్.", teLatn: "Nationality: Indian.", en: "Nationality: Indian" },
      },
      {
        de: "Adresse: Straße, Hausnummer, Postleitzahl, Ort",
        meaning: { te: "అడ్రస్: స్ట్రీట్, హౌస్ నంబర్, పిన్ కోడ్, సిటీ.", teLatn: "Address: street, house number, pin code, city.", en: "Address: street, house number, postcode, town" },
        tip: {
          te: "జర్మనీలో హౌస్ నంబర్ స్ట్రీట్ తర్వాత రాస్తారు: {Hauptstraße 12}.",
          teLatn: "Germany lo house number street tarvaata raastaaru: {Hauptstraße 12}.",
          en: "In Germany the house number comes after the street: Hauptstraße 12.",
        },
      },
      {
        de: "Unterschrift, Datum",
        meaning: { te: "సంతకం — సిగ్నేచర్, డేట్.", teLatn: "Santakam — signature, date.", en: "signature, date" },
      },
      {
        de: "Können Sie mir bitte helfen? Ich verstehe das Formular nicht.",
        meaning: { te: "దయచేసి హెల్ప్ చేస్తారా? నాకు ఈ ఫామ్ అర్థం కావట్లేదు.", teLatn: "Dayachesi help chestaaraa? Naaku ee form artham kaavatledu.", en: "Could you please help me? I don't understand the form." },
      },
    ],
  },
  {
    id: "l10-4",
    steps: [
      {
        say: {
          te: "బ్యాంక్‌లో, పోస్ట్ ఆఫీస్‌లో. మర్యాదగా ఏదైనా అడగడానికి {Ich hätte gern…} — 'నాకు … కావాలి' — ఇది చాలా పొలైట్.",
          teLatn: "Bank lo, post office lo. Maryaadaga edainaa adagadaaniki {Ich hätte gern…} — 'naaku … kaavaali' — idi chaalaa polite.",
          en: "At the bank and post office. For polite requests: Ich hätte gern… — 'I would like…'.",
        },
      },
      {
        de: "Ich möchte ein Konto eröffnen.",
        meaning: { te: "నేను బ్యాంక్ అకౌంట్ ఓపెన్ చేయాలనుకుంటున్నాను.", teLatn: "Nenu bank account open cheyaalanukuntunnaanu.", en: "I'd like to open an account." },
      },
      {
        de: "Ich hätte gern eine Bankkarte.",
        meaning: { te: "నాకు ఒక బ్యాంక్ కార్డ్ కావాలి.", teLatn: "Naaku oka bank card kaavaali.", en: "I'd like a bank card." },
      },
      {
        de: "Wie ist Ihre IBAN?",
        meaning: { te: "మీ ఐబ్యాన్ ఏంటి? — అంటే అకౌంట్ నంబర్.", teLatn: "Mee IBAN enti? — ante account number.", en: "What's your IBAN (account number)?" },
      },
      {
        de: "Ich möchte dieses Paket nach Indien schicken.",
        meaning: { te: "నేను ఈ పార్సెల్ ఇండియాకి పంపాలి.", teLatn: "Nenu ee parcel India ki pampaali.", en: "I'd like to send this parcel to India." },
      },
      {
        de: "Eine Briefmarke für einen Brief nach Indien, bitte.",
        meaning: { te: "ఇండియాకి ఒక లెటర్ కోసం స్టాంప్ ప్లీజ్.", teLatn: "India ki oka letter kosam stamp please.", en: "A stamp for a letter to India, please." },
      },
      {
        de: "Ich habe eine Benachrichtigung. Mein Paket ist hier.",
        meaning: { te: "నాకు నోటీస్ వచ్చింది. నా పార్సెల్ ఇక్కడ ఉంది.", teLatn: "Naaku notice vachindi. Naa parcel ikkada undi.", en: "I got a notice card. My parcel is here." },
        tip: {
          te: "మీరు ఇంట్లో లేనప్పుడు పార్సెల్ వస్తే, పోస్ట్ ఆఫీస్ నుంచి తీసుకోవడానికి ఈ కార్డ్ వదిలి వెళ్తారు.",
          teLatn: "Meeru intlo lenappudu parcel vaste, post office nunchi teesukovadaaniki ee card vadili veltaaru.",
          en: "If you're out when a parcel arrives, they leave this card so you can collect it.",
        },
      },
    ],
  },
];
