import type { LessonContent } from "@/lib/types";

// Module 0 — Hallo, Deutsch! (letters, sounds, numbers 0–20)
export const M00: LessonContent[] = [
  {
    id: "l00-1",
    steps: [
      {
        say: {
          te: "జర్మన్ ఆల్ఫాబెట్‌లో ఇంగ్లీష్ లాగే 26 లెటర్స్ ఉంటాయి. కానీ కొన్ని లెటర్స్‌ని డిఫరెంట్‌గా పలుకుతారు. ముఖ్యమైనవి ఇప్పుడు విందాం.",
          teLatn: "German alphabet lo English laage 26 letters untaayi. Kaani konni letters ni different ga palukutaaru. Mukhyamainavi ippudu vindaam.",
          en: "The German alphabet has 26 letters, just like English. But some letters are said differently. Let's hear the important ones.",
        },
      },
      {
        de: "A, B, C, D, E",
        meaning: {
          te: "ఇవి ఫస్ట్ లెటర్స్. {A} ని 'ఆ' అని, {E} ని 'ఏ' అని పలుకుతారు. ఇంగ్లీష్‌లో లాగా 'ఎ', 'ఈ' కాదు.",
          teLatn: "Ivi first letters. {A} ni 'aa' ani, {E} ni 'ay' ani palukutaaru. English lo laaga 'a', 'ee' kaadu.",
          en: "These are the first letters. A sounds like 'aa' and E like 'ay' — not like in English.",
        },
      },
      {
        de: "I, J, U",
        meaning: {
          te: "{I} అంటే 'ఈ', {U} అంటే 'ఊ'. {J} ని 'యోట్' అంటారు, వర్డ్స్‌లో 'య' లాగా వినిపిస్తుంది.",
          teLatn: "{I} ante 'ee', {U} ante 'oo'. {J} ni 'yot' antaaru, words lo 'ya' laaga vinipistundi.",
          en: "I sounds like 'ee', U like 'oo'. J is called 'yot' and sounds like 'y' in words.",
        },
        tip: {
          te: "అందుకే {Ja} అంటే 'యా' — అంటే ఎస్.",
          teLatn: "Anduke {Ja} ante 'yaa' — ante yes.",
          en: "That's why Ja is said 'yaa' — it means yes.",
        },
      },
      {
        de: "V, W, Z",
        meaning: {
          te: "ఈ మూడూ చాలా ఇంపార్టెంట్. {V} ని 'ఫౌ' అంటారు, సౌండ్ 'ఫ'. {W} ని 'వే' అంటారు, సౌండ్ 'వ'. {Z} ని 'ట్సెట్' అంటారు, సౌండ్ 'ట్స'.",
          teLatn: "Ee moodoo chaalaa important. {V} ni 'fau' antaaru, sound 'fa'. {W} ni 'vay' antaaru, sound 'va'. {Z} ni 'tset' antaaru, sound 'ts'.",
          en: "These three are very important. V is called 'fow' and sounds like 'f'. W is called 'vay' and sounds like 'v'. Z is called 'tset' and sounds like 'ts'.",
        },
      },
      {
        de: "Wie schreibt man das?",
        meaning: {
          te: "దీన్ని ఎలా రాస్తారు? అంటే స్పెల్లింగ్ ఏంటి?",
          teLatn: "Deenni elaa raastaaru? Ante spelling enti?",
          en: "How do you write that? — i.e. how do you spell it?",
        },
        tip: {
          te: "ఆఫీస్‌లో ఎవరైనా మీ పేరు స్పెల్లింగ్ అడిగితే ఈ క్వశ్చన్ వింటారు.",
          teLatn: "Office lo evarainaa mee peru spelling adigite ee question vintaaru.",
          en: "You'll hear this question whenever someone needs to write down your name.",
        },
      },
      {
        de: "Mein Name ist Ravi. R, A, V, I.",
        meaning: {
          te: "నా పేరు రవి. ఆర్, ఆ, ఫౌ, ఈ.",
          teLatn: "Naa peru Ravi. Er, aa, fau, ee.",
          en: "My name is Ravi. R, A, V, I.",
        },
        tip: {
          te: "మీ పేరుని కూడా ఇలాగే లెటర్ బై లెటర్ జర్మన్‌లో స్పెల్ చేసి ప్రాక్టీస్ చేయండి.",
          teLatn: "Mee peruni kooda ilaage letter by letter German lo spell chesi practice cheyandi.",
          en: "Practise spelling your own name letter by letter in German too.",
        },
      },
    ],
  },
  {
    id: "l00-2",
    steps: [
      {
        say: {
          te: "జర్మన్‌లో నాలుగు స్పెషల్ లెటర్స్ ఉంటాయి: {ä}, {ö}, {ü}, {ß}. ఇవి ఇంగ్లీష్‌లో ఉండవు. ఒక్కొక్కటి నేర్చుకుందాం.",
          teLatn: "German lo naalugu special letters untaayi: {ä}, {ö}, {ü}, {ß}. Ivi English lo undavu. Okkokkati nerchukundaam.",
          en: "German has four special letters: ä, ö, ü and ß. They don't exist in English. Let's learn them one by one.",
        },
      },
      {
        de: "Käse",
        meaning: {
          te: "చీజ్. ఇందులో {ä} సౌండ్ మన 'ఏ' లాగా ఉంటుంది.",
          teLatn: "Cheese. Indulo {ä} sound mana 'ae' laaga untundi.",
          en: "Cheese. The ä sounds like the 'e' in 'bed', but longer.",
        },
      },
      {
        de: "schön",
        meaning: {
          te: "బాగుంది, బ్యూటిఫుల్. {ö} సౌండ్ మన తెలుగులో లేదు: 'ఏ' అనండి, కానీ పెదాలు 'ఓ' లాగా గుండ్రంగా పెట్టండి.",
          teLatn: "Baagundi, beautiful. {ö} sound mana Telugu lo ledu: 'ae' anandi, kaani pedaalu 'o' laaga gundranga pettandi.",
          en: "Nice, beautiful. Telugu has no ö sound: say 'ay', but round your lips as for 'o'.",
        },
      },
      {
        de: "Tür",
        meaning: {
          te: "డోర్, తలుపు. {ü} కోసం 'ఈ' అనండి, పెదాలు 'ఊ' లాగా గుండ్రంగా పెట్టండి.",
          teLatn: "Door, talupu. {ü} kosam 'ee' anandi, pedaalu 'oo' laaga gundranga pettandi.",
          en: "Door. For ü, say 'ee' while rounding your lips as for 'oo'.",
        },
      },
      {
        de: "Straße",
        meaning: {
          te: "రోడ్, స్ట్రీట్. {ß} అంటే డబుల్ 'స్' — అంతే, ఈజీ.",
          teLatn: "Road, street. {ß} ante double 's' — ante, easy.",
          en: "Street. ß is simply a double 's'.",
        },
      },
      {
        de: "Tschüss!",
        meaning: {
          te: "బై!",
          teLatn: "Bye!",
          en: "Bye!",
        },
        tip: {
          te: "ఫ్రెండ్స్‌కి, షాప్‌లో బై చెప్పడానికి వాడతారు. ఇందులో {ü} ఉంది — పెదాలు గుండ్రంగా!",
          teLatn: "Friends ki, shop lo bye cheppadaaniki vaadataaru. Indulo {ü} undi — pedaalu gundranga!",
          en: "Used with friends and in shops. It has an ü — round your lips!",
        },
      },
      {
        say: {
          te: "ఈ సౌండ్స్ మొదట్లో కొంచెం టఫ్‌గా అనిపిస్తాయి. రిపీట్ చేస్తూ ఉంటే ఈజీ అయిపోతాయి.",
          teLatn: "Ee sounds modatlo konchem tough ga anipistaayi. Repeat chestoo unte easy ayipotaayi.",
          en: "These sounds feel a bit hard at first. Keep repeating and they'll get easy.",
        },
      },
    ],
  },
  {
    id: "l00-3",
    steps: [
      {
        say: {
          te: "ఇప్పుడు తెలుగు వాళ్ళకి కొంచెం కొత్తగా ఉండే సౌండ్స్ ప్రాక్టీస్ చేద్దాం.",
          teLatn: "Ippudu Telugu vaallaki konchem kothaga unde sounds practice cheddaam.",
          en: "Now let's practise the sounds that are new for Telugu speakers.",
        },
      },
      {
        de: "Wasser",
        meaning: {
          te: "వాటర్, నీళ్ళు. జర్మన్‌లో {W} ఎప్పుడూ క్లియర్‌గా 'వ' సౌండ్.",
          teLatn: "Water, neellu. German lo {W} eppudoo clear ga 'va' sound.",
          en: "Water. In German, W is always a clear 'v' sound.",
        },
      },
      {
        de: "Vater",
        meaning: {
          te: "ఫాదర్, నాన్న. ఇక్కడ {V} ని 'ఫ' లాగా పలుకుతారు.",
          teLatn: "Father, naanna. Ikkada {V} ni 'fa' laaga palukutaaru.",
          en: "Father. Here V is said like 'f'.",
        },
      },
      {
        de: "Zeit",
        meaning: {
          te: "టైమ్. {Z} అంటే 'ట్స', {ei} అంటే 'ఐ'. కలిపితే 'ట్సైట్'.",
          teLatn: "Time. {Z} ante 'ts', {ei} ante 'ai'. Kalipite 'tsait'.",
          en: "Time. Z is 'ts' and ei is 'ai' — together 'tsite'.",
        },
        tip: {
          te: "గుర్తు పెట్టుకోండి: {ei} ఎప్పుడూ 'ఐ', {ie} ఎప్పుడూ 'ఈ'.",
          teLatn: "Gurthu pettukondi: {ei} eppudoo 'ai', {ie} eppudoo 'ee'.",
          en: "Remember: ei is always 'ai', ie is always 'ee'.",
        },
      },
      {
        de: "ich",
        meaning: {
          te: "నేను. ఈ {ch} సాఫ్ట్‌గా ఉంటుంది — 'ఇష్' కి దగ్గరగా, కానీ ఇంకా మెల్లగా గాలి వదలండి.",
          teLatn: "Nenu. Ee {ch} soft ga untundi — 'ish' ki daggaraga, kaani inka mellaga gaali vadalandi.",
          en: "I. This ch is soft — close to 'ish', but breathier.",
        },
      },
      {
        de: "Buch",
        meaning: {
          te: "బుక్. {a}, {o}, {u} తర్వాత వచ్చే {ch} గొంతు వెనకాల నుంచి వస్తుంది — 'ఖ' లాగా: 'బూఖ్'.",
          teLatn: "Book. {a}, {o}, {u} tarvaata vache {ch} gontu venakaala nunchi vastundi — 'kha' laaga: 'bookh'.",
          en: "Book. After a, o, u the ch comes from the back of the throat, like a rough 'kh'.",
        },
      },
      {
        de: "rot",
        meaning: {
          te: "రెడ్ కలర్. జర్మన్ {R} గొంతు దగ్గర నుంచి వస్తుంది, గార్గిల్ చేసినట్టు. మన 'ర' లాగా నాలుకతో కాదు.",
          teLatn: "Red colour. German {R} gontu daggara nunchi vastundi, gargle chesinattu. Mana 'ra' laaga naalukatho kaadu.",
          en: "Red. The German R comes from the throat, a bit like gargling — not rolled with the tongue.",
        },
      },
      {
        say: {
          te: "ఈ సౌండ్స్ పర్ఫెక్ట్‌గా రాకపోయినా పర్లేదు. జర్మన్లు అర్థం చేసుకుంటారు. ప్రాక్టీస్ చేస్తూ ఉండండి.",
          teLatn: "Ee sounds perfect ga raakapoyinaa parledu. Germans artham chesukuntaaru. Practice chestoo undandi.",
          en: "It's fine if these sounds aren't perfect yet — Germans will understand you. Keep practising.",
        },
      },
    ],
  },
  {
    id: "l00-4",
    steps: [
      {
        say: {
          te: "ఇప్పుడు జీరో నుంచి ట్వెంటీ వరకు నంబర్స్. ఫోన్ నంబర్స్, ప్రైసెస్, టైమ్ — అన్నిటికీ ఇవి కావాలి.",
          teLatn: "Ippudu zero nunchi twenty varaku numbers. Phone numbers, prices, time — annitikee ivi kaavaali.",
          en: "Now the numbers from zero to twenty. You need them for phone numbers, prices and the time.",
        },
      },
      {
        de: "null, eins, zwei, drei, vier, fünf",
        meaning: {
          te: "జీరో, వన్, టూ, త్రీ, ఫోర్, ఫైవ్.",
          teLatn: "Zero, one, two, three, four, five.",
          en: "Zero, one, two, three, four, five.",
        },
        tip: {
          te: "{zwei} లో {Z} గుర్తుందా? 'ట్స్వై' అనండి.",
          teLatn: "{zwei} lo {Z} gurthundaa? 'tsvai' anandi.",
          en: "Remember the Z in zwei: say 'tsvai'.",
        },
      },
      {
        de: "sechs, sieben, acht, neun, zehn",
        meaning: {
          te: "సిక్స్, సెవెన్, ఎయిట్, నైన్, టెన్.",
          teLatn: "Six, seven, eight, nine, ten.",
          en: "Six, seven, eight, nine, ten.",
        },
        tip: {
          te: "{acht} లో {ch} గొంతు నుంచి వస్తుంది — 'ఆఖ్ట్'.",
          teLatn: "{acht} lo {ch} gontu nunchi vastundi — 'aakht'.",
          en: "The ch in acht comes from the throat — 'akht'.",
        },
      },
      {
        de: "elf, zwölf, dreizehn, vierzehn, fünfzehn",
        meaning: {
          te: "ఎలెవెన్, ట్వెల్వ్, థర్టీన్, ఫోర్టీన్, ఫిఫ్టీన్.",
          teLatn: "Eleven, twelve, thirteen, fourteen, fifteen.",
          en: "Eleven, twelve, thirteen, fourteen, fifteen.",
        },
        tip: {
          te: "థర్టీన్ నుంచి ఈజీ: నంబర్, తర్వాత {zehn}. {drei} ప్లస్ {zehn} అంటే {dreizehn}.",
          teLatn: "Thirteen nunchi easy: number, tarvaata {zehn}. {drei} plus {zehn} ante {dreizehn}.",
          en: "From thirteen it's easy: the number, then zehn. drei + zehn = dreizehn.",
        },
      },
      {
        de: "sechzehn, siebzehn, achtzehn, neunzehn, zwanzig",
        meaning: {
          te: "సిక్స్‌టీన్, సెవెన్‌టీన్, ఎయిటీన్, నైన్‌టీన్, ట్వెంటీ.",
          teLatn: "Sixteen, seventeen, eighteen, nineteen, twenty.",
          en: "Sixteen, seventeen, eighteen, nineteen, twenty.",
        },
        tip: {
          te: "చిన్న ట్రిక్: {sechzehn} లో {s} పోతుంది, {siebzehn} లో {en} పోతుంది.",
          teLatn: "Chinna trick: {sechzehn} lo {s} potundi, {siebzehn} lo {en} potundi.",
          en: "Small trick: sechzehn drops the s, siebzehn drops the en.",
        },
      },
      {
        de: "Wie bitte?",
        meaning: {
          te: "ఏంటి? మళ్ళీ చెప్పండి ప్లీజ్?",
          teLatn: "Enti? Malli cheppandi please?",
          en: "Sorry? Could you say that again?",
        },
        tip: {
          te: "వినిపించకపోతే లేదా అర్థం కాకపోతే మర్యాదగా ఇలా అడగండి.",
          teLatn: "Vinipinchakapote ledaa artham kaakapote maryaadaga ilaa adagandi.",
          en: "Ask this politely when you didn't hear or understand.",
        },
      },
      {
        de: "Langsam, bitte.",
        meaning: {
          te: "కొంచెం స్లోగా ప్లీజ్.",
          teLatn: "Konchem slow ga please.",
          en: "Slowly, please.",
        },
        tip: {
          te: "జర్మన్లు ఫాస్ట్‌గా మాట్లాడితే ఇది చెప్పండి. ఎవరూ ఫీల్ అవ్వరు.",
          teLatn: "Germans fast ga maatlaadite idi cheppandi. Evaroo feel avvaru.",
          en: "Say this when people speak fast. Nobody will mind.",
        },
      },
    ],
  },
];
