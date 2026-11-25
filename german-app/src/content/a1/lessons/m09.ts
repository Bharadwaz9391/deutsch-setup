import type { LessonContent } from "@/lib/types";

// Module 9 — In der Stadt (directions, U-Bahn, tickets, places)
export const M09: LessonContent[] = [
  {
    id: "l09-1",
    steps: [
      {
        say: {
          te: "దారి అడగడం, అర్థం చేసుకోవడం. జర్మన్లు దారి చెప్పేటప్పుడు ఆర్డర్ లాగా చెప్తారు: {Gehen Sie…} — 'మీరు వెళ్ళండి'. ఇది రూడ్ కాదు, మర్యాదే.",
          teLatn: "Daari adagadam, artham chesukovadam. Germans daari cheppetappudu order laaga cheptaaru: {Gehen Sie…} — 'meeru vellandi'. Idi rude kaadu, maryaade.",
          en: "Asking the way and understanding the answer. Germans give directions as commands — Gehen Sie… That's polite, not rude.",
        },
      },
      {
        de: "Entschuldigung, wo ist der Bahnhof?",
        meaning: { te: "ఎక్స్‌క్యూజ్ మీ, రైల్వే స్టేషన్ ఎక్కడ?", teLatn: "Excuse me, railway station ekkada?", en: "Excuse me, where is the station?" },
      },
      {
        de: "Gehen Sie geradeaus.",
        meaning: { te: "స్ట్రెయిట్‌గా వెళ్ళండి.", teLatn: "Straight ga vellandi.", en: "Go straight ahead." },
      },
      {
        de: "Dann die erste Straße links.",
        meaning: { te: "తర్వాత ఫస్ట్ రోడ్ లెఫ్ట్.", teLatn: "Tarvaata first road left.", en: "Then the first street on the left." },
      },
      {
        de: "Die zweite Straße rechts.",
        meaning: { te: "సెకండ్ రోడ్ రైట్.", teLatn: "Second road right.", en: "The second street on the right." },
        tip: {
          te: "{links} లెఫ్ట్, {rechts} రైట్. గుర్తుపెట్టుకోవడానికి: {rechts} లో {r} — రైట్ లో {r}.",
          teLatn: "{links} left, {rechts} right. Gurthupettukovadaaniki: {rechts} lo {r} — right lo {r}.",
          en: "links = left, rechts = right. Memory trick: rechts and right both start with r.",
        },
      },
      {
        de: "Ist das weit? — Nein, nur fünf Minuten zu Fuß.",
        meaning: { te: "ఇది దూరమా? — లేదు, నడిస్తే ఐదు నిమిషాలే.", teLatn: "Idi dooramaa? — Ledu, nadiste aidu nimishaale.", en: "Is it far? — No, only five minutes on foot." },
      },
      {
        de: "Können Sie das bitte wiederholen?",
        meaning: { te: "దయచేసి మళ్ళీ చెప్తారా?", teLatn: "Dayachesi malli cheptaaraa?", en: "Could you please repeat that?" },
      },
    ],
  },
  {
    id: "l09-2",
    steps: [
      {
        say: {
          te: "జర్మన్ సిటీల్లో ట్రాన్స్‌పోర్ట్ చాలా బాగుంటుంది. {U-Bahn} అంటే మెట్రో, అండర్‌గ్రౌండ్. {S-Bahn} అంటే సిటీ ట్రైన్. ఇంకా బస్, ట్రామ్.",
          teLatn: "German cities lo transport chaalaa baaguntundi. {U-Bahn} ante metro, underground. {S-Bahn} ante city train. Inka bus, tram.",
          en: "German cities have great public transport: U-Bahn (underground metro), S-Bahn (city train), buses and trams.",
        },
      },
      {
        de: "Ich fahre mit der U-Bahn zur Arbeit.",
        meaning: { te: "నేను మెట్రోలో ఆఫీస్‌కి వెళ్తాను.", teLatn: "Nenu metro lo office ki veltaanu.", en: "I take the U-Bahn to work." },
        tip: {
          te: "వెహికల్‌తో వెళ్తే {fahren}, నడిచి వెళ్తే {gehen}. వెహికల్ ముందు {mit}.",
          teLatn: "Vehicle tho velte {fahren}, nadichi velte {gehen}. Vehicle mundu {mit}.",
          en: "fahren with a vehicle, gehen on foot. Use mit before the vehicle.",
        },
      },
      {
        de: "Welche Linie fährt zum Hauptbahnhof?",
        meaning: { te: "మెయిన్ స్టేషన్‌కి ఏ లైన్ వెళ్తుంది?", teLatn: "Main station ki e line veltundi?", en: "Which line goes to the main station?" },
      },
      {
        de: "Nehmen Sie die U2 Richtung Pankow.",
        meaning: { te: "పాంకో డైరెక్షన్‌లో U2 తీసుకోండి.", teLatn: "Pankow direction lo U2 teesukondi.", en: "Take the U2 towards Pankow." },
        tip: {
          te: "స్టేషన్ బోర్డ్‌లో {Richtung} చూడండి — అది లైన్ చివరి స్టాప్.",
          teLatn: "Station board lo {Richtung} choodandi — adi line chivari stop.",
          en: "Look for Richtung on the signs — it's the line's last stop.",
        },
      },
      {
        de: "Wo muss ich umsteigen?",
        meaning: { te: "నేను ఎక్కడ ట్రైన్ మారాలి?", teLatn: "Nenu ekkada train maaraali?", en: "Where do I have to change?" },
      },
      {
        de: "Nächster Halt: Alexanderplatz.",
        meaning: { te: "నెక్స్ట్ స్టాప్: అలెగ్జాండర్‌ప్లాట్జ్.", teLatn: "Next stop: Alexanderplatz.", en: "Next stop: Alexanderplatz." },
        tip: {
          te: "ట్రైన్‌లో ఈ అనౌన్స్‌మెంట్ వింటారు. {Ausstieg links} అంటే లెఫ్ట్ సైడ్ దిగాలి.",
          teLatn: "Train lo ee announcement vintaaru. {Ausstieg links} ante left side digaali.",
          en: "You'll hear this on board. Ausstieg links = exit on the left.",
        },
      },
    ],
  },
  {
    id: "l09-3",
    steps: [
      {
        say: {
          te: "జర్మనీలో టికెట్ లేకుండా ట్రావెల్ చేస్తే పెద్ద ఫైన్! టికెట్ కొనడం, వాలిడేట్ చేయడం నేర్చుకుందాం.",
          teLatn: "Germany lo ticket lekundaa travel cheste pedda fine! Ticket konadam, validate cheyadam nerchukundaam.",
          en: "Riding without a ticket means a big fine in Germany! Let's learn to buy one.",
        },
      },
      {
        de: "Eine Fahrkarte nach Potsdam, bitte.",
        meaning: { te: "పోట్స్‌డామ్‌కి ఒక టికెట్ ప్లీజ్.", teLatn: "Potsdam ki oka ticket please.", en: "A ticket to Potsdam, please." },
        tip: {
          te: "సిటీకి వెళ్తుంటే {nach}. టికెట్‌ని {die Fahrkarte} లేదా {das Ticket} అంటారు.",
          teLatn: "City ki veltunte {nach}. Ticket ni {die Fahrkarte} ledaa {das Ticket} antaaru.",
          en: "Use nach for going to a city. A ticket is die Fahrkarte or das Ticket.",
        },
      },
      {
        de: "Einfach oder hin und zurück?",
        meaning: { te: "వన్ వేనా, రిటర్న్ టికెట్టా?", teLatn: "One way naa, return ticket aa?", en: "Single or return?" },
      },
      {
        de: "Ich habe das Deutschlandticket.",
        meaning: { te: "నా దగ్గర డాయిచ్‌లాండ్ టికెట్ ఉంది — మంత్లీ టికెట్.", teLatn: "Naa daggara Deutschlandticket undi — monthly ticket.", en: "I have the Deutschlandticket (monthly pass)." },
        tip: {
          te: "ఈ మంత్లీ టికెట్‌తో జర్మనీ మొత్తం లోకల్ ట్రైన్స్, బస్సుల్లో వెళ్ళొచ్చు. ICE లాంటి ఫాస్ట్ ట్రైన్స్‌లో కాదు.",
          teLatn: "Ee monthly ticket tho Germany mottham local trains, bussullo vellochu. ICE laanti fast trains lo kaadu.",
          en: "This monthly pass covers local transport all over Germany — not fast trains like the ICE.",
        },
      },
      {
        de: "Die Fahrkarte bitte! — Fahrkartenkontrolle.",
        meaning: { te: "టికెట్ చూపించండి! — టికెట్ చెకింగ్.", teLatn: "Ticket choopinchandi! — Ticket checking.", en: "Tickets please! — Ticket inspection." },
      },
      {
        de: "Wo ist der Fahrkartenautomat?",
        meaning: { te: "టికెట్ మెషిన్ ఎక్కడ?", teLatn: "Ticket machine ekkada?", en: "Where is the ticket machine?" },
      },
    ],
  },
  {
    id: "l09-4",
    steps: [
      {
        say: {
          te: "సిటీలో ముఖ్యమైన ప్లేసెస్. 'ఎక్కడ ఉంది' అంటే {Wo?}, 'ఎక్కడికి వెళ్తున్నారు' అంటే {Wohin?}.",
          teLatn: "City lo mukhyamaina places. 'Ekkada undi' ante {Wo?}, 'ekkadiki veltunnaaru' ante {Wohin?}.",
          en: "Important places in town. Wo? = where (location); Wohin? = where to (direction).",
        },
      },
      {
        de: "die Apotheke, die Bank, die Post",
        meaning: { te: "మెడికల్ షాప్, బ్యాంక్, పోస్ట్ ఆఫీస్.", teLatn: "Medical shop, bank, post office.", en: "pharmacy, bank, post office" },
      },
      {
        de: "das Krankenhaus, der Supermarkt, der Park",
        meaning: { te: "హాస్పిటల్, సూపర్ మార్కెట్, పార్క్.", teLatn: "Hospital, super market, park.", en: "hospital, supermarket, park" },
      },
      {
        de: "Wohin gehst du? — Ich gehe zur Bank.",
        meaning: { te: "ఎక్కడికి వెళ్తున్నావు? — బ్యాంక్‌కి వెళ్తున్నాను.", teLatn: "Ekkadiki veltunnaavu? — Bank ki veltunnaanu.", en: "Where are you going? — I'm going to the bank." },
        tip: {
          te: "ప్లేస్‌కి వెళ్తుంటే {zu}: {zur} = {zu der}, {zum} = {zu dem}.",
          teLatn: "Place ki veltunte {zu}: {zur} = {zu der}, {zum} = {zu dem}.",
          en: "Going to a place: zu. zur = zu der, zum = zu dem.",
        },
      },
      {
        de: "Ich gehe zum Arzt.",
        meaning: { te: "నేను డాక్టర్ దగ్గరికి వెళ్తున్నాను.", teLatn: "Nenu doctor daggariki veltunnaanu.", en: "I'm going to the doctor's." },
      },
      {
        de: "Gibt es hier in der Nähe eine Apotheke?",
        meaning: { te: "ఇక్కడ దగ్గర్లో మెడికల్ షాప్ ఉందా?", teLatn: "Ikkada daggarlo medical shop undaa?", en: "Is there a pharmacy near here?" },
        tip: {
          te: "{in der Nähe} అంటే దగ్గర్లో — చాలా ఉపయోగపడే పదం.",
          teLatn: "{in der Nähe} ante daggarlo — chaalaa upayogapade padam.",
          en: "in der Nähe = nearby — very useful.",
        },
      },
    ],
  },
];
