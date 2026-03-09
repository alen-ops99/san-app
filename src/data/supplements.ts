export interface Supplement {
  id: string
  name: string
  mechanism: string
  evidenceRating: 1 | 2 | 3 | 4 | 5
  evidenceSummary: string
  dosing: string
  limitations: string
  icon: string
}

export const supplements: Supplement[] = [
  {
    id: 'melatonin',
    name: 'Melatonin',
    mechanism:
      'Melatonin je prirodni hormon koji proizvodi epifiza (pinealna žlijezda) u mozgu kao odgovor na tamu. Regulira cirkadijani ritam signalizirajući mozgu da je "vrijeme za san". Egzogeni melatonin aktivira MT1 i MT2 receptore u suprakijazmatskoj jezgri — glavnom biološkom satu.',
    evidenceRating: 3,
    evidenceSummary:
      'Umjereni dokazi. Meta-analize (Ferracioli-Oda, 2013; Auld, 2017) pokazuju da melatonin skraćuje latenciju usnivanja za prosječno 7–12 minuta i blago poboljšava subjektivnu kvalitetu sna. Najučinkovitiji je kod poremećaja cirkadijanog ritma (jet lag, smjenski rad) i kod starijih osoba (>55 g.) kod kojih je endogena produkcija smanjena. Za kroničnu primarnu nesanicu, učinak je skroman u usporedbi s KBT-I. Prolongirano oslobađanje (Circadin, 2 mg) jedini je melatoninski preparat odobren u EU.',
    dosing:
      '0,5–3 mg, 30–60 minuta prije željenog vremena spavanja. Počnite s najnižom dozom (0,5 mg) — više nije nužno bolje. Za jet lag: 0,5–5 mg navečer prema lokalnom vremenu odredišta, 2–5 dana. Prolongirano oslobađanje (2 mg) preporučuje se za starije od 55 godina.',
    limitations:
      'Nije reguliran kao lijek u svim zemljama — kvaliteta i čistoća komercijalnih proizvoda značajno varira (studija iz 2017. pokazala odstupanja do 478 % od deklarirane doze). Može uzrokovati jutarnju pospanost, živopisne snove, blagu glavobolju. Moguće interakcije s antikoagulansima (varfarin), antidijabetičkim lijekovima i imunosupresivima. Nije preporučen kod autoimunih bolesti. Konzultirajte liječnika prije uzimanja.',
    icon: 'Moon',
  },
  {
    id: 'magnezij',
    name: 'Magnezij',
    mechanism:
      'Magnezij je esencijalni mineral koji sudjeluje u više od 300 enzimskih reakcija u tijelu. Za san je važan jer potpomaže funkciju GABA receptora (glavni inhibitorni neurotransmiter u mozgu), sudjeluje u regulaciji melatonina, pomaže u relaksaciji mišića i smanjuje razinu kortizola. Nedostatak magnezija čest je u općoj populaciji (procjenjuje se da 50–80 % odraslih ima suboptimalni unos) i povezan je s lošijom kvalitetom sna.',
    evidenceRating: 2,
    evidenceSummary:
      'Slabi do umjereni dokazi. Nekoliko malih randomiziranih kontroliranih studija (Abbasi, 2012; Held, 2002) pokazuje poboljšanje subjektivne kvalitete sna, posebno kod starijih osoba i osoba s dokumentiranim nedostatkom magnezija. Studija Abbasija i suradnika (2012.) pokazala je značajno poboljšanje ISI rezultata, učinkovitosti sna i razina melatonina kod starijih ispitanika koji su primali 500 mg magnezija dnevno tijekom 8 tjedana. No nedostaju velike, visokokvalitetne studije s objektivnim mjerama sna.',
    dosing:
      'Magnezij glicinat ili bisglicinat: 200–400 mg elementarnog magnezija, 1–2 sata prije spavanja. Ovi oblici imaju bolju apsorpciju i manje gastrointestinalnih nuspojava od magnezij oksida ili citrata. Magnezij citrat može uzrokovati proljev pri višim dozama.',
    limitations:
      'Učinak na san najizraženiji je kod osoba s dokumentiranim nedostatkom magnezija — kod osoba s normalnim razinama, korist za san je upitna. Visoke doze mogu uzrokovati proljev, mučninu i abdominalne grčeve. Kontraindiciran kod teže bubrežne insuficijencije. Može smanjiti apsorpciju nekih antibiotika (tetraciklini, fluorokinoloni). Ne zamjenjuje KBT-I.',
    icon: 'Pill',
  },
  {
    id: 'valerijana',
    name: 'Valerijana',
    mechanism:
      'Valerijana (Valeriana officinalis) je biljni pripravak koji se koristi za san već tisućljećima. Sadrži valerenske kiseline i iridoide koji se pretpostavljeno vežu na GABA-A receptore u mozgu, slično mehanizmu benzodiazepina ali sa znatno slabijim učinkom. Također inhibira enzim koji razgrađuje GABA-u (GABA transaminaza), čime povećava razinu ovog umirujućeg neurotransmitera.',
    evidenceRating: 2,
    evidenceSummary:
      'Slabi dokazi. Meta-analize (Bent, 2006; Fernández-San-Martín, 2010) pokazuju nekonzistentne rezultate. Neke studije nalaze poboljšanje subjektivne kvalitete sna, ali bez značajnog utjecaja na objektivne mjere polisomnografije (latencija, ukupno trajanje sna, učinkovitost). Značajan je mogući placebo učinak — sama ritualizacija uzimanja biljnog pripravka može imati terapijski učinak. Cochrane sustavni pregled (2006.) zaključio je da su dokazi nedostatni za pouzdane zaključke.',
    dosing:
      '300–600 mg standardiziranog ekstrakta (s najmanje 0,8 % valerianske kiseline), 30–120 minuta prije spavanja. Može se uzimati i kao čaj (2–3 g sušenog korijena u vrućoj vodi, 10–15 minuta). Učinak se može razvijati postupno kroz 2–4 tjedna redovite uporabe.',
    limitations:
      'Nestandardizirana priprema — velika varijabilnost između komercijalnih proizvoda u sadržaju aktivnih tvari. Rijetke nuspojave uključuju glavobolju, probavne smetnje i jutarnju pospanost. Moguće interakcije sa sedativima, benzodiazepinima i alkoholom. Prestanite uzimati 2 tjedna prije planiranih kirurških zahvata (moguća interakcija s anestetičkim sredstvima). Ne preporučuje se u trudnoći i dojenju.',
    icon: 'Flower2',
  },
  {
    id: 'lavanda',
    name: 'Lavanda',
    mechanism:
      'Eterično ulje lavande (Lavandula angustifolia) sadrži linalol i linalil acetat koji djeluju na limbički sustav — emocionalni centar mozga. Aromaterapija lavandom smanjuje razinu kortizola, usporava rad simpatičkog živčanog sustava i potiče parasimpatičku aktivnost. Oralni preparat (Silexan/Lasea) inhibira voltažno ovisne kalcijeve kanale, čime smanjuje neuronalnu ekscitabilnost.',
    evidenceRating: 2,
    evidenceSummary:
      'Slabi do umjereni dokazi. Oralni preparat Silexan (80 mg) ima nekoliko randomiziranih kontroliranih studija (Kasper, 2010; 2015) koje pokazuju poboljšanje kvalitete sna i smanjenje anksioznosti. Aromaterapija (inhalacija) ima slabije dokaze ali je niskorizična — sustavni pregled (Hwang, 2015) nalaze umjereni učinak na subjektivnu kvalitetu sna. Većina studija ima metodološke ograničenosti (mali uzorci, kratak follow-up).',
    dosing:
      'Aromaterapija: 2–3 kapi lavandina ulja na jastuk ili u difuzor 30 minuta prije spavanja. Kupka: 5–7 kapi u toplu kupku 1 sat prije sna. Oralno: Silexan 80 mg dnevno (dostupnost u Hrvatskoj ograničena). Čaj: 1–2 žličice sušenih cvjetova u vrućoj vodi, 10 minuta.',
    limitations:
      'Oralni preparati mogu uzrokovati podrigivanje, mučninu i blagu dispepsiju. Topikalna primjena na kožu može uzrokovati kontaktni dermatitis kod osjetljivih osoba. Lavandino ulje može djelovati kao endokrini disruptor — postoje pojedinačna izvješća o prepubertalnoj ginekomastiji kod dječaka pri dugotrajnoj topikalnoj primjeni. Aromaterapija je općenito sigurna ali s vrlo skromnim učinkom.',
    icon: 'Leaf',
  },
  {
    id: 'kamilica',
    name: 'Kamilica',
    mechanism:
      'Kamilica (Matricaria chamomilla) jedna je od najstarijih ljekovitih biljaka. Sadrži apigenin — flavonoid koji se veže na benzodiazepinske receptore u mozgu i djeluje blago sedativno i anksiolitički. Također sadrži bisabolol i hamazulen s protuupalnim svojstvima. Sam ritual pripreme i ispijanja toplog čaja prije spavanja može imati umirujući učinak neovisno o farmakološkom djelovanju.',
    evidenceRating: 1,
    evidenceSummary:
      'Vrlo slabi dokazi. Malobrojne studije niske kvalitete. Randomizirana kontrolirana studija Adiba i suradnika (2017.) pokazala je blago poboljšanje kvalitete sna kod starijih osoba, ali bez utjecaja na latenciju usnivanja. Studija Zick i suradnika (2011.) s kamiličinim ekstraktom kod umjerene nesanice nije pokazala statistički značajnu razliku u usporedbi s placebom na primarnim mjerama ishoda. Kamilica je više "ugodna navika" i ritual koji signalizira tijelu da je vrijeme za smirivanje nego dokazano farmakološko sredstvo za nesanicu.',
    dosing:
      'Čaj: 1–2 šalice 30–60 minuta prije spavanja (1–2 vrećice ili 2–4 g sušenih cvjetova u vrućoj vodi, 5–10 minuta). Ekstrakt: 200–400 mg standardiziranog preparata. Nema utvrđene optimalne doze za nesanicu.',
    limitations:
      'Vrlo blagi farmakološki učinak — korist dolazi pretežno od rituala i placebo efekta. Može izazvati alergijsku reakciju kod osoba alergičnih na ambroziju, krizanteme ili druge biljke iz porodice Asteraceae. Može pojačati učinak antikoagulanasa (varfarin). Izbjegavajte 2 tjedna prije kirurških zahvata. Teoretski može pojačati učinak sedativa.',
    icon: 'Coffee',
  },
  {
    id: 'cbd',
    name: 'CBD (kanabidiol)',
    mechanism:
      'CBD je nepsihotropni kanabinoid iz biljke Cannabis sativa. Za razliku od THC-a, ne izaziva "high". Djeluje na endokanabinoidni sustav, serotoninergičke receptore (5-HT1A) i TRPV1 receptore. Pretpostavljeni mehanizmi djelovanja na san uključuju anksiolitički učinak (smanjenje anksioznosti), modulaciju cirkadijanog ritma i potencijalno izravno djelovanje na receptore uključene u regulaciju budnosti i sna.',
    evidenceRating: 1,
    evidenceSummary:
      'Vrlo slabi dokazi za nesanicu specifično. Većina studija istražuje CBD kod anksioznosti, a ne primarno nesanice. Jedna observacijska studija (Shannon, 2019; Permanente Journal) pokazala je poboljšanje sna kod 66,7 % ispitanika u prvom mjesecu, ali bez kontrolne skupine — što značajno ograničava interpretaciju (placebo učinak nije isključen). Randomizirana kontrolirana studija Soltesza i suradnika (2019.) s jednom dozom od 300 mg nije pokazala učinak na san kod zdravih ispitanika. Nedostaju kvalitetni RCT-ovi koji ciljano istražuju CBD za kroničnu nesanicu.',
    dosing:
      'Ako se odlučite koristiti: 25–75 mg ulja, 1–2 sata prije spavanja. Ne postoji znanstveni konsenzus o optimalnoj dozi za san. Počnite s niskom dozom (25 mg) i postupno povećavajte. Oblik: ulje za sublingvalnu primjenu ima bolju bioraspoloživost od kapsula.',
    limitations:
      'Nereguliran tržišni proizvod — kvaliteta, čistoća i točnost deklariranog sadržaja značajno variraju (studije pokazuju da mnogi proizvodi ne sadrže deklariranu količinu CBD-a, a neki sadrže THC). Moguće interakcije s brojnim lijekovima jer inhibira CYP3A4 i CYP2D6 enzime jetre (uključujući statine, antidepresive, antiepileptike). Pravni status varira ovisno o zemlji. Dugoročna sigurnost nije dobro istražena. Može uzrokovati proljev, umor i promjene apetita. Konzultirajte liječnika prije uzimanja, posebno ako uzimate druge lijekove.',
    icon: 'Droplets',
  },
  {
    id: 'l-teanin',
    name: 'L-teanin',
    mechanism:
      'L-teanin je aminokiselina prisutna u zelenom i crnom čaju (Camellia sinensis). Prolazi krvno-moždanu barijeru i povećava produkciju GABA-e, serotonina i dopamina u mozgu. Potiče alfa moždane valove — valne forme povezane s opuštenom budnošću i meditativnim stanjem. Za razliku od sedativa, L-teanin ne izaziva pospanost direktno, već smanjuje anksioznost i potiče opuštenost, čime olakšava prijelaz u san.',
    evidenceRating: 2,
    evidenceSummary:
      'Slabi do umjereni dokazi. Nekoliko malih randomiziranih kontroliranih studija pokazuje poboljšanje kvalitete sna i smanjenje anksioznosti. Studija Hidese i suradnika (2019.) na 30 ispitanika pokazala je poboljšanje latencije usnivanja i kvalitete sna pri dozi od 200 mg dnevno tijekom 4 tjedna. Kim i suradnici (2011.) našli su poboljšanje kvalitete sna kod dječaka s ADHD-om. Većina studija je male veličine uzorka. Sustavni pregled (Hidese, 2019) zaključuje da su potrebne veće, dulje studije.',
    dosing:
      '100–400 mg, 30–60 minuta prije spavanja. Može se uzimati i tijekom dana za smanjenje anksioznosti (ne uzrokuje pospanost). Jedna šalica zelenog čaja sadrži oko 25–60 mg L-teanina — daleko ispod terapijske doze, ali sam ritual ispijanja čaja može biti koristan.',
    limitations:
      'Većina studija ima mali uzorak i kratak period praćenja. Općenito siguran s malo nuspojava. Može blago sniziti krvni tlak — oprez kod osoba na antihipertenzivima ili s hipotenzijom. Zeleni čaj sadrži kofein koji može poništiti sedativni učinak L-teanina, pa je za san bolje koristiti izolirani L-teanin nego čaj.',
    icon: 'Leaf',
  },
  {
    id: 'glicin',
    name: 'Glicin',
    mechanism:
      'Glicin je inhibitorna aminokiselina koja djeluje na NMDA receptore u suprakijazmatskoj jezgri (glavni biološki sat mozga). Ključni mehanizam: glicin snižava tjelesnu temperaturu jezgre putem vazodilatacije perifernih krvnih žila (širenje krvnih žila u rukama i nogama), čime "simulira" prirodni pad temperature koji prethodi usnivanju. Također poboljšava periferni protok krvi i može djelovati na kvalitetu sna neovisno o latenciji usnivanja.',
    evidenceRating: 2,
    evidenceSummary:
      'Slabi do umjereni dokazi. Dvije japanske randomizirane kontrolirane studije (Yamadera, 2007; Bannai, 2012) pokazale su poboljšanje subjektivne kvalitete sna, smanjenje jutarnje pospanosti i poboljšanje kognitivnog funkcioniranja sljedećeg dana pri dozi od 3 g prije spavanja. Mehanizam (snižavanje tjelesne temperature) je biološki uvjerljiv i potkrijepljen mjerenjima tjelesne temperature u studijama. Studija Inagawe i suradnika (2006.) pokazala je da glicin skraćuje latenciju usnivanja i povećava udio dubokog sna u ranim ciklusima.',
    dosing:
      '3 g (3.000 mg), otopljeno u vodi ili u obliku praha, neposredno prije spavanja ili 1 sat ranije. Doza je konzistentna u svim studijama. Glicin je dostupan kao pojedinačni dodatak ili kao komponenta kolagenih preparata (kolagen je bogat glicinom).',
    limitations:
      'Relativno visoka doza (3 g) može izazvati blagu mučninu kod nekih osoba. Mali broj studija, uglavnom iz jedne istraživačke skupine (mogući bias). Potrebne su replikacije u većim, raznovrsnijim populacijama. Glicin se koristi i kao pomoćno sredstvo u liječenju shizofrenije — osobe na antipsihoticima trebaju konzultirati liječnika. Općenito siguran; glicin se prirodno nalazi u hrani (meso, riba, mliječni proizvodi).',
    icon: 'FlaskConical',
  },
]
