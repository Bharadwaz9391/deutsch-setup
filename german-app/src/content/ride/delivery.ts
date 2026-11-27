// Type-only import: erased when the audio script loads this file with plain Node.
import type { RidePack, Tri } from "@/lib/types";

/**
 * Ride mode — "Delivery German" audio pack.
 *
 * Phrases a food-delivery rider uses every shift in Germany: at the restaurant,
 * at the customer's door, and when something goes wrong. Each phrase is taught
 * as audio: German (slow) → Telugu meaning → where to use it → why → German twice
 * with a pause to repeat aloud.
 *
 * All text is original. Telugu texts: please review and correct — the learner is
 * a native speaker. After changing anything here, regenerate the audio:
 *   npm run ride:audio
 */

/** Spoken after each track's own intro sentence. */
export const RIDE_HOW_IT_WORKS: Tri = {
  te: "ప్రతి వాక్యం ముందు నెమ్మదిగా జర్మన్‌లో వింటారు, తర్వాత తెలుగులో అర్థం, ఎక్కడ వాడాలో. చివర్లో రెండు సార్లు వింటారు. ప్రతిసారీ మీరు కూడా గట్టిగా చెప్పండి.",
  teLatn:
    "Prati vaakyam mundu nemmadiga German lo vintaaru, tarvaata Telugu lo artham, ekkada vaadaalo. Chivarlo rendu saarlu vintaaru. Prati saari meeru kooda gattiga cheppandi.",
  en: "You hear each sentence slowly in German first, then the meaning in Telugu and where to use it. At the end you hear it twice — say it out loud each time.",
};

/** Spoken at the end of every track. */
export const RIDE_OUTRO: Tri = {
  te: "ఈ పాఠం అయిపోయింది. బాగా చేశారు! రోజూ ఒకసారి వింటే, ఈ వాక్యాలు మీకు అలవాటైపోతాయి.",
  teLatn: "Ee paatham ayipoyindi. Baaga chesaaru! Rooju okasaari vinte, ee vaakyaalu meeku alavaataipotaayi.",
  en: "This lesson is done. Well done! Listen once a day and these sentences will become a habit.",
};

export const DELIVERY_PACK: RidePack = {
  id: "delivery",
  title: { te: "డెలివరీ జర్మన్", teLatn: "Delivery German", en: "Delivery German" },
  tracks: [
    {
      id: "restaurant",
      titleDe: "Im Restaurant",
      title: {
        te: "రెస్టారెంట్‌లో: ఆర్డర్ తీసుకోవడం",
        teLatn: "Restaurant lo: order teesukovadam",
        en: "At the restaurant: picking up the order",
      },
      intro: {
        te: "రెస్టారెంట్‌లో ఆర్డర్ తీసుకునేటప్పుడు వాడే వాక్యాలు నేర్చుకుందాం.",
        teLatn: "Restaurant lo order teesukunetappudu vaade vaakyaalu nerchukundaam.",
        en: "Let's learn the sentences you use when picking up an order at the restaurant.",
      },
      phrases: [
        {
          id: "r1",
          de: "Hallo! Ich hole eine Bestellung ab.",
          meaning: {
            te: "హలో! నేను ఒక ఆర్డర్ తీసుకోవడానికి వచ్చాను.",
            teLatn: "Hello! Nenu oka order teesukovadaaniki vachaanu.",
            en: "Hello! I'm here to pick up an order.",
          },
          where: {
            te: "రెస్టారెంట్ కౌంటర్ దగ్గరకి వెళ్ళగానే మొదట ఇది చెప్పండి.",
            teLatn: "Restaurant counter daggaraki vellagaane modata idi cheppandi.",
            en: "Say this first when you reach the restaurant counter.",
          },
          why: {
            te: "abholen అంటే వచ్చి తీసుకోవడం. ఈ పదం రెండు ముక్కలుగా విడిపోతుంది: hole ముందు వస్తుంది, ab వాక్యం చివరికి వెళ్తుంది.",
            teLatn: "abholen ante vachi teesukovadam. Ee padam rendu mukkaluga vidipotundi: hole mundu vastundi, ab vaakyam chivariki veltundi.",
            en: "abholen means 'to pick up'. It splits in two: hole comes early, ab goes to the end of the sentence.",
          },
          whyAudio: [
            { de: "abholen" },
            { te: "అంటే వచ్చి తీసుకోవడం. ఈ పదం రెండు ముక్కలుగా విడిపోతుంది.", teLatn: "ante vachi teesukovadam. Ee padam rendu mukkaluga vidipotundi." },
            { de: "hole" },
            { te: "ముందు వస్తుంది.", teLatn: "mundu vastundi." },
            { de: "ab" },
            { te: "వాక్యం చివరికి వెళ్తుంది.", teLatn: "vaakyam chivariki veltundi." },
          ],
        },
        {
          id: "r2",
          de: "Die Bestellnummer ist vier, fünf, sieben.",
          meaning: {
            te: "ఆర్డర్ నంబర్ నాలుగు, ఐదు, ఏడు.",
            teLatn: "Order number naalugu, aidu, edu.",
            en: "The order number is four, five, seven.",
          },
          where: {
            te: "స్టాఫ్ ఏ ఆర్డర్ అని అడిగితే, యాప్‌లో ఉన్న నంబర్‌ని ఒక్కో అంకె విడిగా చెప్పండి.",
            teLatn: "Staff e order ani adigite, app lo unna number ni okko anke vidiga cheppandi.",
            en: "When the staff ask which order, read the number from the app one digit at a time.",
          },
          why: {
            te: "Bestellnummer = Bestellung (ఆర్డర్) + Nummer (నంబర్). జర్మన్‌లో రెండు పదాలు కలిపి ఒకే పెద్ద పదం చేస్తారు.",
            teLatn: "Bestellnummer = Bestellung (order) + Nummer (number). German lo rendu padaalu kalipi oke pedda padam chestaaru.",
            en: "Bestellnummer = Bestellung (order) + Nummer (number). German joins two words into one long word.",
          },
          whyAudio: [
            { de: "Bestellung" },
            { te: "అంటే ఆర్డర్.", teLatn: "ante order." },
            { de: "Nummer" },
            { te: "అంటే నంబర్. జర్మన్‌లో రెండు పదాలు కలిపి ఒకే పెద్ద పదం చేస్తారు.", teLatn: "ante number. German lo rendu padaalu kalipi oke pedda padam chestaaru." },
            { de: "Bestellnummer" },
          ],
        },
        {
          id: "r3",
          de: "Ist die Bestellung schon fertig?",
          meaning: {
            te: "ఆర్డర్ ఇప్పటికే రెడీ అయిందా?",
            teLatn: "Order ippatike ready ayindaa?",
            en: "Is the order ready yet?",
          },
          where: {
            te: "కౌంటర్ దగ్గర మీ ఆర్డర్ కనిపించకపోతే ఇలా అడగండి.",
            teLatn: "Counter daggara mee order kanipinchakapote ilaa adagandi.",
            en: "Ask this when you can't see your order at the counter.",
          },
          why: {
            te: "ప్రశ్నలో క్రియ (Ist) మొదట వస్తుంది. schon అంటే ఇప్పటికే.",
            teLatn: "Prashnalo kriya (Ist) modata vastundi. schon ante ippatike.",
            en: "In a question the verb (Ist) comes first. schon means 'already / yet'.",
          },
          whyAudio: [
            { te: "ప్రశ్నలో క్రియ మొదట వస్తుంది.", teLatn: "Prashnalo kriya modata vastundi." },
            { de: "Ist die Bestellung fertig?" },
            { de: "schon" },
            { te: "అంటే ఇప్పటికే.", teLatn: "ante ippatike." },
          ],
        },
        {
          id: "r4",
          de: "Wie lange dauert es noch?",
          meaning: {
            te: "ఇంకా ఎంత సేపు పడుతుంది?",
            teLatn: "Inka entha sepu padutundi?",
            en: "How much longer will it take?",
          },
          where: {
            te: "ఆర్డర్ ఇంకా తయారవుతుంటే, ఎంత సేపు వెయిట్ చేయాలో తెలుసుకోవడానికి.",
            teLatn: "Order inka tayaaravutunte, entha sepu wait cheyaalo telusukovadaaniki.",
            en: "When the order is still being made, to find out how long to wait.",
          },
          why: {
            te: "Wie lange = ఎంత సేపు. dauern = సమయం పట్టడం. noch = ఇంకా.",
            teLatn: "Wie lange = entha sepu. dauern = samayam pattadam. noch = inka.",
            en: "Wie lange = how long. dauern = to take (time). noch = still / more.",
          },
          whyAudio: [
            { de: "Wie lange" },
            { te: "అంటే ఎంత సేపు.", teLatn: "ante entha sepu." },
            { de: "noch" },
            { te: "అంటే ఇంకా.", teLatn: "ante inka." },
          ],
        },
        {
          id: "r5",
          de: "Kein Problem, ich warte hier.",
          meaning: {
            te: "పర్లేదు, నేను ఇక్కడే వెయిట్ చేస్తాను.",
            teLatn: "Parledu, nenu ikkade wait chestaanu.",
            en: "No problem, I'll wait here.",
          },
          where: {
            te: "ఇంకా కొంచెం టైం పడుతుందని స్టాఫ్ చెప్తే, మర్యాదగా ఇలా చెప్పండి.",
            teLatn: "Inka konchem time padutundani staff chepte, maryaadaga ilaa cheppandi.",
            en: "Say this politely when the staff tell you it will take a little longer.",
          },
          why: {
            te: "warten = వెయిట్ చేయడం. ich తో వాడితే చివర e వస్తుంది: ich warte.",
            teLatn: "warten = wait cheyadam. ich tho vaadite chivara e vastundi: ich warte.",
            en: "warten = to wait. With ich it ends in -e: ich warte.",
          },
          whyAudio: [
            { de: "warten" },
            { te: "అంటే వెయిట్ చేయడం. నేను అనాలంటే:", teLatn: "ante wait cheyadam. Nenu anaalante:" },
            { de: "ich warte" },
          ],
        },
        {
          id: "r6",
          de: "Sind die Getränke auch dabei?",
          meaning: {
            te: "డ్రింక్స్ కూడా ఇందులో ఉన్నాయా?",
            teLatn: "Drinks kooda indulo unnaayaa?",
            en: "Are the drinks in there too?",
          },
          where: {
            te: "యాప్‌లో డ్రింక్స్ ఉంటే, బ్యాగ్ తీసుకునే ముందు చెక్ చేయడానికి.",
            teLatn: "App lo drinks unte, bag teesukune mundu check cheyadaaniki.",
            en: "If the app lists drinks, to check before you take the bag.",
          },
          why: {
            te: "Getränke = డ్రింక్స్ (ఒకటి అయితే das Getränk). dabei = ఇందులోనే, దానితో పాటు.",
            teLatn: "Getränke = drinks (okati aite das Getränk). dabei = indulone, daanito paatu.",
            en: "Getränke = drinks (one drink: das Getränk). dabei = included / with it.",
          },
          whyAudio: [
            { de: "Getränke" },
            { te: "అంటే డ్రింక్స్.", teLatn: "ante drinks." },
            { de: "dabei" },
            { te: "అంటే ఇందులోనే, దానితో పాటు.", teLatn: "ante indulone, daanito paatu." },
          ],
        },
        {
          id: "r7",
          de: "Danke, schönen Tag noch!",
          meaning: {
            te: "థాంక్స్, మీ రోజు బాగా గడవాలి!",
            teLatn: "Thanks, mee rooju baaga gadavaali!",
            en: "Thanks, have a nice day!",
          },
          where: {
            te: "ఆర్డర్ తీసుకుని బయలుదేరేటప్పుడు.",
            teLatn: "Order teesukuni bayaluderetappudu.",
            en: "When you leave with the order.",
          },
          why: {
            te: "సాయంత్రం అయితే ఇలా చెప్పండి: Schönen Abend noch!",
            teLatn: "Saayantram aite ilaa cheppandi: Schönen Abend noch!",
            en: "In the evening say: Schönen Abend noch!",
          },
          whyAudio: [
            { te: "సాయంత్రం అయితే ఇలా చెప్పండి:", teLatn: "Saayantram aite ilaa cheppandi:" },
            { de: "Schönen Abend noch!" },
          ],
        },
      ],
    },
    {
      id: "door",
      titleDe: "An der Tür",
      title: {
        te: "కస్టమర్ తలుపు దగ్గర",
        teLatn: "Customer talupu daggara",
        en: "At the customer's door",
      },
      intro: {
        te: "ఇప్పుడు కస్టమర్ ఇంటి దగ్గర వాడే వాక్యాలు నేర్చుకుందాం.",
        teLatn: "Ippudu customer inti daggara vaade vaakyaalu nerchukundaam.",
        en: "Now let's learn the sentences you use at the customer's home.",
      },
      phrases: [
        {
          id: "d1",
          de: "Hallo, hier ist Ihre Bestellung.",
          meaning: {
            te: "హలో, ఇదిగోండి మీ ఆర్డర్.",
            teLatn: "Hello, idigondi mee order.",
            en: "Hello, here is your order.",
          },
          where: {
            te: "కస్టమర్ తలుపు తెరవగానే, బ్యాగ్ ఇస్తూ.",
            teLatn: "Customer talupu teravagaane, bag istoo.",
            en: "As soon as the customer opens the door, while handing over the bag.",
          },
          why: {
            te: "Ihre (పెద్ద I తో) అంటే మీ, గౌరవంగా. తెలియని వాళ్ళతో ఎప్పుడూ Sie, Ihre వాడండి.",
            teLatn: "Ihre (pedda I tho) ante mee, gauravamga. Teliyani vaallatho eppudoo Sie, Ihre vaadandi.",
            en: "Ihre (capital I) is the polite 'your'. Always use Sie / Ihre with people you don't know.",
          },
          whyAudio: [
            { de: "Ihre" },
            { te: "అంటే మీ, గౌరవంగా. తెలియని వాళ్ళతో ఎప్పుడూ ఈ గౌరవ రూపం వాడండి.", teLatn: "ante mee, gauravamga. Teliyani vaallatho eppudoo ee gaurava roopam vaadandi." },
          ],
        },
        {
          id: "d2",
          de: "Guten Appetit!",
          meaning: {
            te: "బాగా తినండి! ఎంజాయ్ చేయండి!",
            teLatn: "Baaga tinandi! Enjoy cheyandi!",
            en: "Enjoy your meal!",
          },
          where: {
            te: "ఫుడ్ ఇచ్చిన తర్వాత, చివరగా. కస్టమర్లు దీన్ని చాలా ఇష్టపడతారు.",
            teLatn: "Food ichina tarvaata, chivaraga. Customers deenni chaalaa ishtapadataaru.",
            en: "At the very end, after handing over the food. Customers really like it.",
          },
        },
        {
          id: "d3",
          de: "Ich stehe vor der Tür.",
          meaning: {
            te: "నేను తలుపు ముందు నిలబడి ఉన్నాను.",
            teLatn: "Nenu talupu mundu nilabadi unnaanu.",
            en: "I'm standing at the door.",
          },
          where: {
            te: "బెల్ కొట్టినా ఎవరూ రాకపోతే, ఫోన్ చేసి ఇలా చెప్పండి.",
            teLatn: "Bell kottinaa evaroo raakapote, phone chesi ilaa cheppandi.",
            en: "When you ring and nobody comes, call and say this.",
          },
          why: {
            te: "vor der Tür = తలుపు ముందు. ఇంటి ముందు అయితే: vor dem Haus.",
            teLatn: "vor der Tür = talupu mundu. Inti mundu aite: vor dem Haus.",
            en: "vor der Tür = in front of the door. In front of the house: vor dem Haus.",
          },
          whyAudio: [
            { de: "vor der Tür" },
            { te: "అంటే తలుపు ముందు. ఇంటి ముందు అయితే:", teLatn: "ante talupu mundu. Inti mundu aite:" },
            { de: "vor dem Haus" },
          ],
        },
        {
          id: "d4",
          de: "Welcher Name steht an der Klingel?",
          meaning: {
            te: "బెల్ దగ్గర ఏ పేరు ఉంది?",
            teLatn: "Bell daggara e peru undi?",
            en: "Which name is on the doorbell?",
          },
          where: {
            te: "బిల్డింగ్‌లో చాలా బెల్స్ ఉండి, ఏది నొక్కాలో తెలియకపోతే.",
            teLatn: "Building lo chaalaa bells undi, edi nokkaalo teliyakapote.",
            en: "When a building has many bells and you don't know which one to press.",
          },
          why: {
            te: "Klingel = డోర్ బెల్. జర్మనీలో బెల్ పక్కన ఫ్లాట్ నంబర్ కాదు, పేరు ఉంటుంది.",
            teLatn: "Klingel = door bell. Germany lo bell pakkana flat number kaadu, peru untundi.",
            en: "Klingel = doorbell. In Germany the bell shows a family name, not a flat number.",
          },
          whyAudio: [
            { de: "Klingel" },
            { te: "అంటే డోర్ బెల్. జర్మనీలో బెల్ పక్కన ఫ్లాట్ నంబర్ కాదు, పేరు ఉంటుంది.", teLatn: "ante door bell. Germany lo bell pakkana flat number kaadu, peru untundi." },
          ],
        },
        {
          id: "d5",
          de: "In welchem Stock wohnen Sie?",
          meaning: {
            te: "మీరు ఏ ఫ్లోర్‌లో ఉంటారు?",
            teLatn: "Meeru e floor lo untaaru?",
            en: "Which floor do you live on?",
          },
          where: {
            te: "బిల్డింగ్ లోపలికి వచ్చాక, ఏ ఫ్లోర్‌కి వెళ్ళాలో అడగడానికి.",
            teLatn: "Building lopaliki vachaaka, e floor ki vellaalo adagadaaniki.",
            en: "Once you're inside the building, to ask which floor to go to.",
          },
          why: {
            te: "Stock = ఫ్లోర్. గ్రౌండ్ ఫ్లోర్‌ని Erdgeschoss అంటారు.",
            teLatn: "Stock = floor. Ground floor ni Erdgeschoss antaaru.",
            en: "Stock = floor. The ground floor is called Erdgeschoss.",
          },
          whyAudio: [
            { de: "Stock" },
            { te: "అంటే ఫ్లోర్. గ్రౌండ్ ఫ్లోర్‌ని ఇలా అంటారు:", teLatn: "ante floor. Ground floor ni ilaa antaaru:" },
            { de: "Erdgeschoss" },
          ],
        },
        {
          id: "d6",
          de: "Können Sie bitte runterkommen?",
          meaning: {
            te: "దయచేసి మీరు కిందకి రాగలరా?",
            teLatn: "Dayachesi meeru kindaki raagalaraa?",
            en: "Could you please come down?",
          },
          where: {
            te: "బిల్డింగ్ తలుపు లాక్ అయి ఉంటే, లేదా లిఫ్ట్ లేకపోతే, ఫోన్‌లో అడగండి.",
            teLatn: "Building talupu lock ayi unte, ledaa lift lekapote, phone lo adagandi.",
            en: "Ask on the phone when the building door is locked or there's no lift.",
          },
          why: {
            te: "Können Sie bitte ...? = దయచేసి ... చేయగలరా? మర్యాదగా ఏదైనా అడగడానికి ఇదే బెస్ట్ ప్యాటర్న్. రెండో క్రియ చివరికి వెళ్తుంది.",
            teLatn: "Können Sie bitte ...? = dayachesi ... cheyagalaraa? Maryaadaga edainaa adagadaaniki ide best pattern. Rendo kriya chivariki veltundi.",
            en: "Können Sie bitte …? = could you please …? The best pattern for polite requests. The second verb goes to the end.",
          },
          whyAudio: [
            { de: "Können Sie bitte" },
            { te: "అంటే దయచేసి చేయగలరా. మర్యాదగా ఏదైనా అడగడానికి ఇదే బెస్ట్ ప్యాటర్న్.", teLatn: "ante dayachesi cheyagalaraa. Maryaadaga edainaa adagadaaniki ide best pattern." },
          ],
        },
        {
          id: "d7",
          de: "Einen schönen Abend noch!",
          meaning: {
            te: "మీ సాయంత్రం బాగా గడవాలి!",
            teLatn: "Mee saayantram baaga gadavaali!",
            en: "Have a nice evening!",
          },
          where: {
            te: "సాయంత్రం డెలివరీ ఇచ్చి వెళ్ళేటప్పుడు.",
            teLatn: "Saayantram delivery ichi velletappudu.",
            en: "When you leave after an evening delivery.",
          },
        },
      ],
    },
    {
      id: "problems",
      titleDe: "Wenn es Probleme gibt",
      title: {
        te: "ఏదైనా సమస్య వస్తే",
        teLatn: "Edainaa samasya vaste",
        en: "When something goes wrong",
      },
      intro: {
        te: "ఆలస్యం అయినప్పుడు, అడ్రస్ దొరకనప్పుడు, లేదా అర్థం కానప్పుడు వాడే వాక్యాలు నేర్చుకుందాం.",
        teLatn: "Aalasyam ayinappudu, address dorakanappudu, ledaa artham kaanappudu vaade vaakyaalu nerchukundaam.",
        en: "Let's learn the sentences for when you're late, can't find the address, or don't understand.",
      },
      phrases: [
        {
          id: "p1",
          de: "Entschuldigung, ich bin zehn Minuten zu spät.",
          meaning: {
            te: "క్షమించండి, నేను పది నిమిషాలు లేట్ అయ్యాను.",
            teLatn: "Kshaminchandi, nenu padi nimishaalu late ayyaanu.",
            en: "Sorry, I'm ten minutes late.",
          },
          where: {
            te: "ట్రాఫిక్ వల్ల లేదా రెస్టారెంట్ వల్ల లేట్ అయితే, కస్టమర్‌కి ముందు ఇది చెప్పండి.",
            teLatn: "Traffic valla ledaa restaurant valla late aite, customer ki mundu idi cheppandi.",
            en: "When traffic or the restaurant made you late, say this to the customer first.",
          },
          why: {
            te: "zu spät = లేట్. zehn = పది, fünf = ఐదు, fünfzehn = పదిహేను.",
            teLatn: "zu spät = late. zehn = padi, fünf = aidu, fünfzehn = padihenu.",
            en: "zu spät = too late. zehn = ten, fünf = five, fünfzehn = fifteen.",
          },
          whyAudio: [
            { de: "zu spät" },
            { te: "అంటే లేట్. ఐదు నిమిషాలు అయితే:", teLatn: "ante late. Aidu nimishaalu aite:" },
            { de: "fünf Minuten" },
          ],
        },
        {
          id: "p2",
          de: "Ich spreche nur ein bisschen Deutsch.",
          meaning: {
            te: "నాకు కొంచెం మాత్రమే జర్మన్ వచ్చు.",
            teLatn: "Naaku konchem maatrame German vachchu.",
            en: "I only speak a little German.",
          },
          where: {
            te: "ఎవరైనా వేగంగా మాట్లాడితే, ముందే ఇది చెప్పండి. అప్పుడు వాళ్ళు నెమ్మదిగా, సింపుల్‌గా మాట్లాడతారు.",
            teLatn: "Evarainaa vegamga maatlaadite, munde idi cheppandi. Appudu vaallu nemmadiga, simple ga maatlaadataaru.",
            en: "When someone talks fast, say this first. People will then speak slowly and simply.",
          },
          why: {
            te: "ein bisschen = కొంచెం. nur = మాత్రమే.",
            teLatn: "ein bisschen = konchem. nur = maatrame.",
            en: "ein bisschen = a little. nur = only.",
          },
          whyAudio: [
            { de: "ein bisschen" },
            { te: "అంటే కొంచెం.", teLatn: "ante konchem." },
            { de: "nur" },
            { te: "అంటే మాత్రమే.", teLatn: "ante maatrame." },
          ],
        },
        {
          id: "p3",
          de: "Können Sie das bitte langsamer sagen?",
          meaning: {
            te: "దయచేసి కొంచెం నెమ్మదిగా చెప్పగలరా?",
            teLatn: "Dayachesi konchem nemmadiga cheppagalaraa?",
            en: "Could you please say that more slowly?",
          },
          where: {
            te: "అర్థం కాకపోతే, సిగ్గు పడకుండా అడగండి.",
            teLatn: "Artham kaakapote, siggu padakundaa adagandi.",
            en: "When you don't understand — don't be shy to ask.",
          },
          why: {
            te: "langsam = నెమ్మదిగా. langsamer = ఇంకా నెమ్మదిగా.",
            teLatn: "langsam = nemmadiga. langsamer = inka nemmadiga.",
            en: "langsam = slow. langsamer = slower.",
          },
          whyAudio: [
            { de: "langsam" },
            { te: "అంటే నెమ్మదిగా.", teLatn: "ante nemmadiga." },
            { de: "langsamer" },
            { te: "అంటే ఇంకా నెమ్మదిగా.", teLatn: "ante inka nemmadiga." },
          ],
        },
        {
          id: "p4",
          de: "Können Sie das bitte wiederholen?",
          meaning: {
            te: "దయచేసి మళ్ళీ చెప్పగలరా?",
            teLatn: "Dayachesi malli cheppagalaraa?",
            en: "Could you please repeat that?",
          },
          where: {
            te: "ఒకసారి విన్నది అర్థం కాకపోతే.",
            teLatn: "Okasaari vinnadi artham kaakapote.",
            en: "When you didn't catch it the first time.",
          },
        },
        {
          id: "p5",
          de: "Ich rufe Sie gleich an.",
          meaning: {
            te: "నేను మీకు ఇప్పుడే ఫోన్ చేస్తాను.",
            teLatn: "Nenu meeku ippude phone chestaanu.",
            en: "I'll call you right away.",
          },
          where: {
            te: "చాట్‌లో టైప్ చేయడం కుదరకపోతే, లేదా అడ్రస్ దొరకకపోతే.",
            teLatn: "Chat lo type cheyadam kudarakapote, ledaa address dorakakapote.",
            en: "When you can't type in the chat, or can't find the address.",
          },
          why: {
            te: "anrufen = ఫోన్ చేయడం. abholen లాగే ఇది కూడా విడిపోతుంది: rufe ముందు, an చివర.",
            teLatn: "anrufen = phone cheyadam. abholen laage idi kooda vidipotundi: rufe mundu, an chivara.",
            en: "anrufen = to call. Like abholen it splits: rufe early, an at the end.",
          },
          whyAudio: [
            { de: "anrufen" },
            { te: "అంటే ఫోన్ చేయడం. ఇది కూడా రెండు ముక్కలుగా విడిపోతుంది.", teLatn: "ante phone cheyadam. Idi kooda rendu mukkaluga vidipotundi." },
            { de: "Ich rufe Sie an." },
          ],
        },
        {
          id: "p6",
          de: "Ich finde die Adresse nicht.",
          meaning: {
            te: "నాకు అడ్రస్ దొరకడం లేదు.",
            teLatn: "Naaku address dorakadam ledu.",
            en: "I can't find the address.",
          },
          where: {
            te: "మ్యాప్ తప్పుగా చూపిస్తే, కస్టమర్‌కి ఫోన్‌లో చెప్పండి.",
            teLatn: "Map tappuga choopiste, customer ki phone lo cheppandi.",
            en: "When the map is wrong, tell the customer on the phone.",
          },
          why: {
            te: "nicht = లేదు. ఇది సాధారణంగా వాక్యం చివర్లో వస్తుంది.",
            teLatn: "nicht = ledu. Idi saadhaaranamgaa vaakyam chivarlo vastundi.",
            en: "nicht = not. It usually comes at the end of the sentence.",
          },
          whyAudio: [
            { de: "nicht" },
            { te: "అంటే లేదు. ఇది సాధారణంగా వాక్యం చివర్లో వస్తుంది.", teLatn: "ante ledu. Idi saadhaaranamgaa vaakyam chivarlo vastundi." },
          ],
        },
        {
          id: "p7",
          de: "Alles klar, danke!",
          meaning: {
            te: "సరే, అర్థమైంది, థాంక్స్!",
            teLatn: "Sare, arthamaindi, thanks!",
            en: "All right, got it, thanks!",
          },
          where: {
            te: "ఎవరైనా దారి లేదా సమాచారం చెప్పిన తర్వాత.",
            teLatn: "Evarainaa daari ledaa samaachaaram cheppina tarvaata.",
            en: "After someone gives you directions or information.",
          },
        },
      ],
    },
  ],
};

export const RIDE_PACKS: RidePack[] = [DELIVERY_PACK];
