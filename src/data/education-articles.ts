export interface Article {
  id: string
  title: string
  subtitle: string
  readTime: string
  icon: string
  content: string
  sources?: string[]
}

export const articles: Article[] = [
  // ────────────────────────────────────────────
  // 1. San i kardiovaskularne bolesti
  // ────────────────────────────────────────────
  {
    id: 'sleep-heart',
    title: 'Kako loš san utječe na srce i krvne žile',
    subtitle: 'Veza između nesanice i kardiovaskularnog zdravlja',
    readTime: '5 min',
    icon: 'Heart',
    content: `Vaše srce radi bez prestanka — otprilike 100.000 otkucaja dnevno. No što se događa sa srcem kada ne spavate dovoljno? Istraživanja zadnjih dvadesetak godina jasno pokazuju: nedovoljan i nekvalitetan san značajno povećava rizik od kardiovaskularnih bolesti.

## Visoki krvni tlak (hipertenzija)

Tijekom normalnog sna, krvni tlak pada za 10–20 % u odnosu na dnevne vrijednosti — fenomen poznat kao "noćno uranjanje" (nocturnal dipping). Ovaj pad je ključan za oporavak srca i krvnih žila. Kod osoba s kroničnom nesanicom ili nedovoljnim snom, noćno uranjanje je smanjeno ili odsutno, što izlaže kardiovaskularni sustav kontinuiranom stresu.

Velika meta-analiza objavljena u časopisu Hypertension (2015.) koja je uključila više od 200.000 ispitanika pokazala je da osobe koje spavaju manje od 6 sati imaju 20 % veći rizik od razvoja hipertenzije u usporedbi s onima koji spavaju 7–8 sati.

## Srčani udar i moždani udar

Prospektivna studija objavljena u European Heart Journal (2011.) koja je pratila gotovo 475.000 sudionika pokazala je da kratak san (manje od 6 sati) povećava rizik od koronarne bolesti srca za 48 % i moždanog udara za 15 %. Mehanizmi uključuju povišene razine upale (C-reaktivni protein, IL-6), poremećenu regulaciju glukoze i povećanu aktivnost simpatičkog živčanog sustava.

## Ateroskleroza

Fascinantno istraživanje objavljeno u Journal of the American College of Cardiology (2019.) koristilo je napredne tehnike oslikavanja krvnih žila i pokazalo da fragmentirani san ubrzava razvoj ateroskleroze — nakupljanja masnih naslaga u stijenkama arterija. Čak i kod mladih, inače zdravih odraslih osoba, nedostatak sna potiče upalne procese koji oštećuju krvne žile.

## Atrijalna fibrilacija

San i srčani ritam usko su povezani. Osobe s neliječenim poremećajima disanja u snu (poput opstruktivne apneje) imaju značajno veći rizik od atrijalne fibrilacije — najčešće srčane aritmije. No i sama nesanica, neovisno o apneji, povezana je s povećanim rizikom poremećaja ritma.

## Što možete učiniti?

Dobra vijest je da je ovaj odnos dvosmjeran: poboljšanje sna može poboljšati kardiovaskularno zdravlje. Istraživanja pokazuju da uspješno liječenje nesanice kognitivno-bihevioralnom terapijom (KBT-I) dovodi do sniženja krvnog tlaka i poboljšanja markera kardiovaskularnog zdravlja.

Svaka noć kvalitetnog sna ulaganje je u zdravlje Vašeg srca. Program San temelji se upravo na KBT-I — pristupu koji štiti ne samo Vaš san, nego i Vaše srce.`,
    sources: [
      'Cappuccio FP et al. Sleep duration and all-cause mortality: a systematic review and meta-analysis. Sleep. 2010;33(5):585-592.',
      'Cappuccio FP et al. Sleep duration predicts cardiovascular outcomes. Eur Heart J. 2011;32(12):1484-1492.',
      'Domínguez F et al. Association of sleep duration and quality with subclinical atherosclerosis. J Am Coll Cardiol. 2019;73(2):134-144.',
      'Meng L et al. An updated meta-analysis of short sleep duration and risk of hypertension. Hypertension. 2015;65(5):1471-1479.',
    ],
  },

  // ────────────────────────────────────────────
  // 2. San i mentalno zdravlje
  // ────────────────────────────────────────────
  {
    id: 'sleep-mental-health',
    title: 'San i mentalno zdravlje',
    subtitle: 'Kako nesanica i mentalne poteškoće jedno drugo pojačavaju',
    readTime: '5 min',
    icon: 'Brain',
    content: `San i mentalno zdravlje povezani su u oba smjera: loš san pogoršava psihičke tegobe, a psihičke tegobe pogoršavaju san. Razumijevanje ove veze ključno je za prekidanje začaranog kruga.

## Nesanica i depresija

Dugo se smatralo da je nesanica "samo simptom" depresije. No moderna istraživanja pokazuju da je odnos složeniji — nesanica je i faktor rizika za razvoj depresije. Velika meta-analiza objavljena u časopisu Sleep (2011.) pokazala je da osobe s nesanicom imaju dvostruko veći rizik od razvoja depresije.

Što je još važnije, liječenje nesanice KBT-I pristupom ne samo da poboljšava san, nego značajno smanjuje i simptome depresije. Randomizirano kontrolirano ispitivanje objavljeno u JAMA Psychiatry (2021.) pokazalo je da je KBT-I jednako učinkovit u smanjenju depresivnih simptoma kao i dodavanje antidepresiva.

## Anksioznost

Anksioznost i nesanica imaju zajedničku jezgru: prekomjernu pobuđenost (hyperarousal). Kada ste anksiozni, Vaš sustav "borba ili bijeg" je hiperaktivan — srce brže kuca, mišići su napeti, um juri. Upravo to stanje onemogućava usnivanje.

Istraživanja pokazuju da 70–80 % osoba s anksioznim poremećajima ima značajne probleme sa spavanjem, a 50 % osoba s kroničnom nesanicom ima klinički značajnu anksioznost. Tehnike koje učite u ovom programu — progresivna mišićna relaksacija, tehnike disanja, upravljanje brigama — izravno ciljaju na ovu vezu.

## Emocionalna regulacija

Što se događa s emocijama nakon loše noći? Istraživanje Walkera i suradnika s UC Berkeley pokazalo je da nakon samo jedne noći nedovoljnog sna, amigdala (emocionalni centar mozga) reagira 60 % snažnije na negativne podražaje. Istovremeno, prefrontalni korteks (centar za racionalnu kontrolu) je manje aktivan. Rezultat: pojačane emocionalne reakcije s manje sposobnosti za njihovu regulaciju.

To objašnjava zašto smo nakon loše noći razdražljiviji, osjetljiviji i skloniji pretjeranim reakcijama. I zašto stvari koje se danju čine upravljivima, noću postaju zastrašujuće.

## PTSP i traume

Osobe s posttraumatskim stresnim poremećajem (PTSP) često imaju teške poremećaje sna, uključujući noćne more i nesanicu. Istraživanja pokazuju da je nesanica ne samo simptom PTSP-a, nego i faktor koji ga održava — jer san igra ključnu ulogu u procesuiranju emocionalnih sjećanja. Liječenje nesanice može značajno poboljšati ukupne simptome PTSP-a.

## Pozitivna spirala

Ista veza koja stvara začarani krug može raditi i u Vašu korist: poboljšanje sna poboljšava raspoloženje, smanjuje anksioznost, jača emocionalnu otpornost i poboljšava kognitivno funkcioniranje. Upravo zato je ovaj program tako vrijedan — ne poboljšavate samo san, nego i cjelokupno mentalno zdravlje.

Ako uz nesanicu imate i značajne simptome depresije ili anksioznosti, ne oklijevajte potražiti profesionalnu pomoć. KBT-I i psihoterapija zajedno mogu biti izuzetno učinkovita kombinacija.`,
    sources: [
      'Baglioni C et al. Insomnia as a predictor of depression: a meta-analytic evaluation. J Affect Disord. 2011;135(1-3):10-19.',
      'Irwin MR et al. Cognitive behavioral therapy vs. tai chi for late insomnia and inflammatory risk. JAMA Psychiatry. 2021;78(7):784.',
      'Yoo SS et al. The human emotional brain without sleep — a prefrontal amygdala disconnect. Curr Biol. 2007;17(20):R877-R878.',
      'Harvey AG et al. The relationship between insomnia and psychiatric disorders. J Psychiatr Res. 2011;45(8):1027-1035.',
    ],
  },

  // ────────────────────────────────────────────
  // 3. San i imunološki sustav
  // ────────────────────────────────────────────
  {
    id: 'sleep-immune',
    title: 'San i imunološki sustav',
    subtitle: 'Kako san štiti Vaše tijelo od bolesti',
    readTime: '5 min',
    icon: 'Shield',
    content: `Jeste li primijetili da se lakše razbolite kada ste neispavani? To nije slučajnost — san je jedan od najvažnijih faktora za pravilno funkcioniranje imunološkog sustava.

## San i otpornost na infekcije

Jedno od najelegantnijih istraživanja u ovom području proveli su Prather i suradnici (2015.) na Carnegie Mellon sveučilištu. Istraživači su zdravim dobrovoljcima kapnuli virus prehlade u nos i pratili tko se razboli. Rezultat: osobe koje su spavale manje od 6 sati imale su 4,2 puta veću vjerojatnost da razviju prehladu u usporedbi s onima koje su spavale 7 ili više sati. Čak i nakon kontroliranja svih drugih faktora (stres, dob, pušenje, BMI), kratki san ostao je najjači prediktor podložnosti infekciji.

## San i cjepiva

San utječe i na to koliko dobro Vaše tijelo reagira na cijepljenje. Istraživanje objavljeno u časopisu Sleep (2012.) pokazalo je da su osobe koje su spavale samo 4 sata na noć u tjednu nakon cijepljenja protiv gripe proizvele manje od 50 % protutijela u usporedbi s onima koji su spavali normalno. Jednostavno: nedovoljan san smanjuje učinkovitost cjepiva.

## Upala i kronične bolesti

Kronični nedostatak sna potiče stanje kroničnog upalnog odgovora niske razine (low-grade systemic inflammation). To znači da su razine upalnih markera — poput C-reaktivnog proteina (CRP), interleukina-6 (IL-6) i tumor nekroza faktora alfa (TNF-alfa) — trajno povišene.

Kronična upala niske razine povezana je s nizom ozbiljnih bolesti: kardiovaskularne bolesti, dijabetes tipa 2, Alzheimerova bolest, pa čak i neki oblici karcinoma. San je, dakle, protuupalni proces — svaka noć dobrog sna pomaže držati upalu pod kontrolom.

## Prirodne stanice ubojice (NK stanice)

Prirodne stanice ubojice (natural killer cells) prva su linija obrane Vašeg tijela protiv virusno zaraženih stanica i stanica karcinoma. Istraživanje Irwina i suradnika (1996.) pokazalo je da nakon samo jedne noći ograničenog sna (4 sata) aktivnost NK stanica pada za čak 70 %. Srećom, već jedna noć normalnog sna vraća tu aktivnost na normalnu razinu.

## Glimfatički sustav

Jedno od najuzbudljivijih otkrića u neuroznanosti zadnjih godina jest otkriće glimfatičkog sustava — sustava za "čišćenje" mozga koji je aktivan pretežno tijekom dubokog sna. Tijekom sna, glimfatički sustav uklanja metaboličke nusprodukte, uključujući beta-amiloid — protein čije nakupljanje je povezano s Alzheimerovom bolešću. Nedovoljan san smanjuje učinkovitost ovog sustava čišćenja.

## Što ovo znači za Vas?

Svaka noć dobrog sna ojačava Vašu imunološku obranu, smanjuje upalu i pomaže mozgu u samočišćenju. San nije luksuz — to je biološka nužnost za zdravlje. Ulaganje u kvalitetan san jedno je od najvažnijih ulaganja u Vaše cjelokupno zdravlje.`,
    sources: [
      'Prather AA et al. Behaviorally assessed sleep and susceptibility to the common cold. Sleep. 2015;38(9):1353-1359.',
      'Spiegel K et al. Effect of sleep deprivation on response to immunization. JAMA. 2002;288(12):1471-1472.',
      'Irwin M et al. Partial night sleep deprivation reduces natural killer cell activity. Psychosom Med. 1996;58(5):493-498.',
      'Xie L et al. Sleep drives metabolite clearance from the adult brain. Science. 2013;342(6156):373-377.',
    ],
  },

  // ────────────────────────────────────────────
  // 4. San i tjelesna težina
  // ────────────────────────────────────────────
  {
    id: 'sleep-weight',
    title: 'San i tjelesna težina',
    subtitle: 'Zašto nedostatak sna otežava održavanje zdrave težine',
    readTime: '5 min',
    icon: 'Scale',
    content: `Ako pokušavate smršavjeti ili održati zdravu tjelesnu težinu, kvaliteta i trajanje sna mogu biti jednako važni kao prehrana i tjelovježba. Evo što znanost kaže o vezi između sna i tjelesne težine.

## Hormoni gladi

San regulira dva ključna hormona koji kontroliraju apetit:

**Leptin** — hormon sitosti, proizvode ga masne stanice i šalje signal mozgu: "Siti smo, ne trebamo jesti." Nedostatak sna SMANJUJE razinu leptina.

**Grelin** — hormon gladi, proizvodi ga želudac i šalje signal mozgu: "Gladni smo, treba nam hrana." Nedostatak sna POVEĆAVA razinu grelina.

Istraživanje Spiegela i suradnika objavljeno u Annals of Internal Medicine (2004.) pokazalo je da su nakon samo dva dana ograničenog sna (4 sata) razine leptina pale za 18 %, a razine grelina porasle za 28 %. Rezultat: sudionici su izvijestili o 24 % većem apetitu, posebno za ugljikohidrate i slatkiše.

## Kalorijski unos

Kada ste neispavani, ne samo da osjećate veću glad — birate i drugu hranu. Studija objavljena u American Journal of Clinical Nutrition (2011.) pokazala je da neispavane osobe unose u prosjeku 300–400 kalorija dnevno više, pri čemu preferiraju visokokaloričnu, masnu i slatku hranu. Tijekom tjedna, to predstavlja 2.100–2.800 dodatnih kalorija — dovoljno za dobitak od oko 300–400 grama tjelesne mase.

## Metabolizam i inzulinska rezistencija

Nedostatak sna ne utječe samo na to koliko jedete, nego i na to kako Vaše tijelo prerađuje hranu. Već nakon četiri noći ograničenog sna, osjetljivost na inzulin pada za 30 % — razina slična onoj kod predijabetičara. To znači da Vaše tijelo manje učinkovito prerađuje šećer iz krvi, čime se povećava rizik od dijabetesa tipa 2.

## Mišićna masa

Ako vježbate i pokušavate izgraditi ili očuvati mišićnu masu, san je ključan. Tijekom dubokog sna, hipofiza luči hormon rasta koji je neophodan za oporavak i izgradnju mišića. Nedostatak dubokog sna smanjuje lučenje hormona rasta, čime se usporava mišićni oporavak.

Istraživanje objavljeno u Annals of Internal Medicine (2010.) pokazalo je da su osobe na dijeti koje su spavale 5,5 sati izgubile 55 % manje masnog tkiva i 60 % više mišićne mase u usporedbi s onima koje su spavale 8,5 sati — unatoč identičnom kalorijskom unosu.

## Praktične implikacije

Ovo ne znači da je san "čarobni lijek" za mršavljenje. Ali znači da bez dovoljno kvalitetnog sna, sve ostale intervencije (zdrava prehrana, tjelovježba) daju manje rezultate. San treba biti treći stup zdravog životnog stila — uz prehranu i tjelesnu aktivnost.

Poboljšanjem sna kroz KBT-I tehnike iz ovog programa, pomažete svom tijelu da bolje regulira apetit, učinkovitije prerađuje hranu i efikasnije gradi mišiće.`,
    sources: [
      'Spiegel K et al. Brief communication: sleep curtailment in healthy young men is associated with decreased leptin levels. Ann Intern Med. 2004;141(11):846-850.',
      'St-Onge MP et al. Short sleep duration increases energy intakes but does not change energy expenditure in normal-weight individuals. Am J Clin Nutr. 2011;94(2):410-416.',
      'Nedeltcheva AV et al. Insufficient sleep undermines dietary efforts to reduce adiposity. Ann Intern Med. 2010;153(7):435-441.',
      'Reutrakul S, Van Cauter E. Sleep influences on obesity, insulin resistance, and risk of type 2 diabetes. Metabolism. 2018;84:56-66.',
    ],
  },

  // ────────────────────────────────────────────
  // 5. San i pamćenje
  // ────────────────────────────────────────────
  {
    id: 'sleep-memory',
    title: 'San i pamćenje',
    subtitle: 'Kako san pomaže mozgu u učenju i pamćenju',
    readTime: '5 min',
    icon: 'BookOpen',
    content: `Jeste li ikad primijetili da nakon dobre noći sna lakše rješavate probleme? Ili da nakon učenja i sna materijal bolje pamtite? To nije slučajnost — san igra ključnu ulogu u procesuiranju, konsolidaciji i pohrani informacija.

## Konsolidacija pamćenja

Pamćenje se odvija u tri faze: usvajanje (encoding), konsolidacija (consolidation) i prisjećanje (retrieval). San je ključan za drugi korak — konsolidaciju, proces u kojem se kratkoročna sjećanja pretvaraju u dugoročna.

Tijekom sna, mozak "ponavlja" (replay) iskustva iz dana — neuronske mreže koje su bile aktivne tijekom učenja ponovo se aktiviraju, ali ubrzano. Ovaj proces, otkriven u hipokampusu, omogućava prijenos informacija iz kratkoročnog u dugoročno spremište pamćenja u neokorteksu.

## Različite faze sna, različite funkcije pamćenja

**Duboki san (N3)** posebno je važan za deklarativno pamćenje — pamćenje činjenica i događaja. Tijekom sporovalne aktivnosti (slow-wave activity), mozak konsolidira ono što ste naučili tijekom dana. Istraživanja Borna i suradnika (2006.) pokazala su da je količina dubokog sna izravno proporcionalna poboljšanju deklarativnog pamćenja.

**REM san** ključan je za proceduralno pamćenje (vještine poput sviranja instrumenta ili vožnje biciklom), emocionalno pamćenje i kreativno rješavanje problema. Poznata anegdota o Kekuleovom snu u kojem je otkrio strukturu benzena ilustrira ulogu REM sna u kreativnosti.

## Učenje i san

Elegantno istraživanje Walkera i suradnika (2002.) pokazalo je da osobe koje su nakon učenja motoričke vještine spavale 8 sati poboljšale izvedbu za 20 % — bez dodatnog vježbanja. Grupa koja nije spavala nije pokazala nikakvo poboljšanje.

Dodatno, san prije učenja jednako je važan kao san poslije. Nedostatak sna smanjuje sposobnost hipokampusa da usvaja nove informacije za čak 40 %. To je kao pokušaj snimanja na već pun USB stick — nema mjesta za nove podatke.

## Čišćenje i održavanje mozga

Kako smo spomenuli u članku o imunološkom sustavu, glimfatički sustav tijekom sna "ispire" metaboličke nusprodukte iz mozga, uključujući beta-amiloid i tau protein — supstance povezane s Alzheimerovom bolešću. Kronični nedostatak sna dopušta nakupljanje ovih proteina i može ubrzati kognitivno propadanje.

## Starenje i kognitivno zdravlje

Longitudinalne studije pokazuju da osobe s kroničnom nesanicom u srednjoj životnoj dobi imaju veći rizik od razvoja demencije u starijoj dobi. No, ohrabrujuće, studije također pokazuju da je liječenje nesanice povezano sa smanjenim kognitivnim propadanjem.

## Praktični savjeti

Ako učite ili radite na kognitivno zahtjevnim zadacima, iskoristite san kao saveznika:
- Ponovite ključne informacije neposredno prije spavanja
- Osigurajte dovoljno dubokog sna (izbjegavajte alkohol koji ga smanjuje)
- Ne žrtvujte san za "još sat učenja" — to je kontraproduktivno
- Kratki "power nap" od 20 minuta može poboljšati kognitivne funkcije tijekom dana

Vaš mozak radi za Vas dok spavate. Omogućite mu da taj posao obavi kvalitetno.`,
    sources: [
      'Diekelmann S, Born J. The memory function of sleep. Nat Rev Neurosci. 2010;11(2):114-126.',
      'Walker MP et al. Practice with sleep makes perfect. Neuron. 2002;35(1):205-211.',
      'Yoo SS et al. A deficit in the ability to form new human memories without sleep. Nat Neurosci. 2007;10(3):385-392.',
      'Mander BA et al. Sleep and human aging. Neuron. 2017;94(1):19-36.',
    ],
  },

  // ────────────────────────────────────────────
  // 6. Koliko sna nam zaista treba?
  // ────────────────────────────────────────────
  {
    id: 'how-much-sleep',
    title: 'Koliko sna nam zaista treba?',
    subtitle: 'Individualne razlike i preporuke po dobi',
    readTime: '5 min',
    icon: 'Clock',
    content: `"Moram spavati 8 sati" — jedno je od najčešćih uvjerenja o snu. Ali je li to zaista tako? Odgovor je nijansiraniji nego što većina ljudi misli.

## Službene preporuke

Nacionalna zaklada za san (National Sleep Foundation) i Američka akademija za medicinu spavanja preporučuju sljedeće trajanje sna po dobnim skupinama:

- **Novorođenčad (0–3 mj.):** 14–17 sati
- **Dojenčad (4–11 mj.):** 12–15 sati
- **Mala djeca (1–2 g.):** 11–14 sati
- **Predškolska djeca (3–5 g.):** 10–13 sati
- **Školska djeca (6–13 g.):** 9–11 sati
- **Adolescenti (14–17 g.):** 8–10 sati
- **Mladi odrasli (18–25 g.):** 7–9 sati
- **Odrasli (26–64 g.):** 7–9 sati
- **Stariji odrasli (65+ g.):** 7–8 sati

## Individualne razlike

Ove preporuke su rasponi, ne fiksni brojevi — i to s dobrim razlogom. Potreba za snom varira od osobe do osobe, djelomično genetski uvjetovano.

**Kratki spavači:** Maleni postotak populacije (oko 1–3 %) ima genetsku mutaciju (u DEC2 genu) koja im omogućava normalno funkcioniranje s manje od 6 sati sna. Ovi "pravi" kratki spavači su izuzetno rijetki — većina ljudi koja tvrdi da im treba malo sna zapravo je kronično neispavana i navikla na taj osjećaj.

**Dugi spavači:** Na drugom kraju spektra, neki ljudi trebaju 9+ sati za optimalno funkcioniranje, i to je za njih potpuno normalno.

## Kako odrediti svoju idealnu količinu sna?

Najbolji test je tzv. "odmor test": na odmoru (bez alarma, bez obaveza), koliko dugo prirodno spavate nakon 3–4 dana prilagodbe? To vrijeme — obično 7–9 sati za većinu odraslih — vjerojatno je Vaša biološka potreba.

Znakovi da NE spavate dovoljno:
- Trebate alarm da se probudite
- Osjećate se pospano tijekom dana
- Zasipate u roku od 5 minuta nakon odlaska u krevet (paradoksalno, ovo može značiti kroničnu deprivaciju sna — zdravo usnivanje traje 10–20 minuta)
- Vikendom spavate značajno duže ("socijalni jet lag")
- Trebate kofein za normalno funkcioniranje ujutro

## Kvaliteta vs. kvantiteta

Jednako važno pitanje je: koliko DOBAR je Vaš san? 6 sati konsolidiranog, dubokog sna može biti restorativnije od 9 sati fragmentiranog sna punog buđenja.

Znakovi kvalitetnog sna:
- Zaspite u roku od 15–20 minuta
- Rijetko se budite (ili se brzo ponovo uspavate)
- Osjećate se odmorno ujutro
- Imate stabilnu energiju tijekom dana

## Opasnosti i od previše i premalo sna

Istraživanja dosljedno pokazuju U-oblik odnosa između trajanja sna i zdravstvenih rizika: i prekratak (manje od 6 sati) i predug san (više od 9 sati za odrasle koji nisu bolesni) povezani su s povećanim rizikom od kardiovaskularnih bolesti, dijabetesa i smrtnosti. Optimalan raspon za većinu odraslih je 7–8 sati.

## Umjesto brojanja sati

Umjesto da budete opsjednuti "magičnim brojem", fokusirajte se na:
1. **Konzistentnost** — isti raspored svaki dan
2. **Kvalitetu** — konsolidirani san bez čestih buđenja
3. **Subjektivan osjećaj** — osjećate li se odmorno ujutro?

Ovaj program pomoći će Vam optimizirati i kvantitetu i kvalitetu sna — bez pretjerane fiksacije na broj sati.`,
    sources: [
      'Hirshkowitz M et al. National Sleep Foundation sleep time duration recommendations. Sleep Health. 2015;1(1):40-43.',
      'He Y et al. The transcriptional repressor DEC2 regulates sleep length in mammals. Science. 2009;325(5942):866-870.',
      'Cappuccio FP et al. Sleep duration and all-cause mortality: a systematic review and meta-analysis. Sleep. 2010;33(5):585-592.',
      'Watson NF et al. Recommended amount of sleep for a healthy adult. Sleep. 2015;38(6):843-844.',
    ],
  },

  // ────────────────────────────────────────────
  // 7. Što se događa dok spavamo?
  // ────────────────────────────────────────────
  {
    id: 'what-happens-during-sleep',
    title: 'Što se događa dok spavamo?',
    subtitle: 'Fascinantno putovanje kroz noć sna',
    readTime: '6 min',
    icon: 'Moon',
    content: `San nije pasivno "gašenje" mozga — dapače, u nekim fazama sna mozak je aktivniji nego tijekom budnosti. Zavirimo u ono što se događa od trenutka kada zatvorite oči do trenutka kada se probudite.

## Usnivanje — prijelaz u san

Kada legnete i zatvorite oči, počinje prijelaz iz budnosti u san. EEG (elektroencefalogram) bilježi usporavanje moždanih valova s brzih beta valova (budnost) na sporije alfa valove (opuštena budnost). U ovoj fazi možete doživjeti hipnagogne fenomene — kratke vizualne slike, osjećaj padanja ili mišićne trzaje (hipnički trzaji). Sve je to potpuno normalno.

## N1 — lagani san (5 % noći)

Prva faza sna traje svega nekoliko minuta. Mozak proizvodi theta valove, mišići se opuštaju, disanje se usporava. U ovoj fazi lako se budite — mnogi ljudi u N1 fazi ne osjećaju da su uopće spavali. To je ona poznata situacija: "Nisam spavao/la, samo sam odmarao/la oči!" — a zapravo ste bili u N1 snu.

## N2 — srednji san (50 % noći)

N2 čini gotovo polovicu Vašeg ukupnog sna. Karakteriziraju ga dvije specifične EEG značajke:

**Vretena spavanja (sleep spindles)** — kratki naleti brze aktivnosti koji traju 0,5–2 sekunde. Istraživanja pokazuju da su vretena ključna za konsolidaciju pamćenja i zaštitu sna od vanjskih podražaja (zvukova).

**K-kompleksi** — visoke, oštre valne forme koje se javljaju spontano ili kao odgovor na zvuk. Smatra se da pomažu u "filtriranju" zvukova — mozak procjenjuje je li zvuk opasan (buđenje) ili bezopasan (nastavak sna).

## N3 — duboki san (20–25 % noći)

Duboki san (ili spori valovi, slow-wave sleep) najrestorativnija je faza sna. Karakteriziraju ga velike, spore delta valne forme. U ovoj fazi:

- **Tjelesni oporavak:** Lučenje hormona rasta doseže vrhunac. Mišići se obnavljaju, tkiva se popravljaju.
- **Imunološki sustav:** Pojačava se aktivnost imunološkog sustava; citokini — proteini važni za imunološki odgovor — proizvode se pretežno tijekom dubokog sna.
- **Glimfatičko čišćenje:** Mozak se čisti od metaboličkih nusprodukata, uključujući beta-amiloid.
- **Energetsko punjenje:** Zalihe glikogena u mozgu se obnavljaju.

Duboki san dominira u prvoj trećini noći. Ako ste ikad imali osjećaj da je "prvi dio sna najdublji", imali ste pravo.

Iz dubokog sna teško je probuditi se — ako Vas netko probudi iz N3, osjećat ćete se dezorijentirano i "mamurno" (sleep inertia). To je normalno i prolazi za 15–30 minuta.

## REM san (20–25 % noći)

REM (Rapid Eye Movement) san fascinantna je faza u kojoj se oči brzo pomiču ispod zatvorenih kapaka, a mozak je gotovo jednako aktivan kao u budnosti. No tijelo je paralizirano — mozak aktivno blokira motoričke signale prema mišićima (atonija). Ovo je zaštitni mehanizam koji sprječava izvođenje pokreta iz snova.

U REM-u sanjamo najživlje i narativno najsloženije snove. Ali uloga REM sna nadilazi snove:

- **Emocionalno procesuiranje:** REM san pomaže u procesuiranju emocionalnih iskustava iz dana. Walker opisuje REM san kao "noćnu terapiju" — obrađuje emocionalna sjećanja i smanjuje njihov emocionalni naboj.
- **Kreativnost:** Tijekom REM-a, mozak stvara neočekivane asocijacije između naizgled nepovezanih informacija. Mnoga kreativna otkrića pripisuju se REM snu.
- **Proceduralno pamćenje:** Motoričke vještine konsolidiraju se pretežno tijekom REM faze.

REM san dominira u drugoj polovici noći. Zato rani jutarnji alarm može "ukrasti" značajan dio REM sna.

## Ciklusi sna

Ove faze ne odvijaju se jednom — ponavljaju se u ciklusima od 90–110 minuta, 4–6 puta tijekom noći. Rano u noći, ciklusi sadrže više dubokog sna; kasnije u noći, više REM sna.

## Normalna buđenja

Između ciklusa, kratka buđenja su potpuno normalna — zdrav spavač ima 10–20 kratkih buđenja po noći. Većinu ne pamtimo. Problem nastaje tek kada buđenja postanu predmet brige i produžene budnosti.

Razumijevanje ovih procesa može smanjiti anksioznost oko sna: Vaš mozak zna kako spavati. Ponekad mu samo trebate maknuti prepreke.`,
    sources: [
      'Carskadon MA, Dement WC. Normal human sleep: an overview. In: Kryger MH, et al., eds. Principles and Practice of Sleep Medicine. 6th ed. Elsevier; 2017.',
      'Walker MP. Why We Sleep. Scribner; 2017.',
      'Rasch B, Born J. About sleep\'s role in memory. Physiol Rev. 2013;93(2):681-766.',
      'Xie L et al. Sleep drives metabolite clearance from the adult brain. Science. 2013;342(6156):373-377.',
    ],
  },

  // ────────────────────────────────────────────
  // 8. Kada se obratiti liječniku?
  // ────────────────────────────────────────────
  {
    id: 'when-to-see-doctor',
    title: 'Kada se obratiti liječniku?',
    subtitle: 'Prepoznajte znakove koji zahtijevaju stručnu pomoć',
    readTime: '5 min',
    icon: 'Stethoscope',
    content: `Ovaj program može značajno pomoći kod kronične nesanice — ali nije zamjena za medicinsku dijagnostiku i liječenje. Postoje situacije u kojima je važno potražiti profesionalnu pomoć. Evo kako prepoznati te znakove.

## Poremećaji disanja u snu

**Opstruktivna apneja u snu (OSA)** drugi je najčešći poremećaj spavanja (odmah iza nesanice) i pogađa 5–15 % odrasle populacije. Karakteriziraju je ponavljana zaustavljanja disanja tijekom sna, obično uzrokovana kolapsom gornjeg dišnog puta.

Obratite se liječniku ako:
- Glasno hrčete (osobito ako partner/ica primjećuje pauze u disanju)
- Budite se s osjećajem gušenja ili nedostatka zraka
- Imate izrazitu pospanost tijekom dana unatoč dovoljno sati sna
- Budite se s jutarnjim glavoboljama ili suhim grkljanom
- Imate povišeni krvni tlak koji ne reagira na lijekove

OSA je ozbiljan poremećaj koji povećava rizik od srčanog udara, moždanog udara i prometnih nesreća. Liječi se CPAP uređajem, oralnim aparatima ili, u nekim slučajevima, kirurški.

## Sindrom nemirnih nogu (RLS)

Ako osjećate neodoljiv nagon za micanjem nogu, posebno navečer i noću, praćen neugodnim osjetima (trnci, žarenje, osjećaj "gmizanja"), možda imate sindrom nemirnih nogu. Pogađa 5–10 % populacije i može značajno ometati usnivanje.

RLS može biti povezan s nedostatkom željeza, bubrežnom insuficijencijom ili nekim lijekovima. Liječi se utvrđivanjem i korekcijom uzroka, a po potrebi i specifičnim lijekovima.

## Narkolepsija

Obratite se liječniku ako:
- Osjećate neodoljivu pospanost tijekom dana
- Naglo zasipate u neprikladnim situacijama (razgovor, obrok)
- Imate epizode iznenadne mišićne slabosti (katapleksija), osobito pri snažnim emocijama (smijeh, iznenađenje)
- Doživljavate paralizu sna (nemogućnost pokretanja pri buđenju ili usnivanju) ili živopisne halucinacije na prijelazu sna i budnosti

## Parasomnije

Obratite se liječniku ako:
- Hodate u snu, osobito s rizičnim ponašanjima (izlaženje iz kuće, korištenje kuhinjskih aparata)
- Imate noćne strahove (night terrors) — iznenadna buđenja s vrištanjem i paničnim strahom
- Fizički izvodite pokrete iz snova (udaranje, skakanje) — ovo može biti znak REM poremećaja ponašanja, koji zahtijeva neurološku obradu

## Psihijatrijski komorbiditet

Nesanica i psihijatrijski poremećaji česti su partneri. Obratite se liječniku ako osim nesanice imate:
- Trajno sniženo raspoloženje, gubitak interesa za aktivnosti, osjećaj bezvrijednosti (depresija)
- Izrazitu anksioznost koja ometa dnevno funkcioniranje
- Ponavljajuće noćne more povezane s traumatskim iskustvom (PTSP)
- Misli o samoozljeđivanju ili suicidu — u tom slučaju odmah potražite pomoć (Hitna pomoć: 194, Telefon za krizne situacije: 01/4833-888)

## Dugotrajna uporaba lijekova za spavanje

Ako koristite benzodiazepine ili Z-lijekove (zolpidem, zaleplon) dulje od 4 tjedna, razgovarajte s liječnikom o planu postupnog ukidanja. Ovi lijekovi namijenjeni su kratkoročnoj uporabi i mogu uzrokovati toleranciju (potreba za sve većom dozom) i ovisnost. KBT-I je dokazano učinkovita alternativa za dugoročno upravljanje nesanicom.

## Kada sam KBT-I program nije dovoljan

Razmislite o profesionalnoj KBT-I terapiji (s licenciranim terapeutom) ako:
- Nakon 6–8 tjedana dosljedne primjene programa ne vidite poboljšanje
- Imate složenu medicinsku situaciju koja komplicira standardni pristup
- Trebate podršku za restrikciju sna ili kognitivnu restrukturaciju

## Gdje potražiti pomoć u Hrvatskoj?

- **Liječnik obiteljske medicine** — prvi korak, može uputiti na daljnju obradu
- **KBC Zagreb** — Centar za medicinu spavanja
- **KBC Split** — Laboratorij za poremećaje spavanja
- **KBC Rijeka** — Neurofiziološki laboratorij
- **Privatne poliklinike** — neke nude polisomnografiju i KBT-I

Ne oklijevajte potražiti pomoć. Prepoznavanje problema i traženje stručnog mišljenja znak je snage, ne slabosti.`,
    sources: [
      'Sateia MJ et al. Clinical practice guideline for the pharmacologic treatment of chronic insomnia in adults. J Clin Sleep Med. 2017;13(2):307-349.',
      'Benjafield AV et al. Estimation of the global prevalence and burden of obstructive sleep apnoea. Lancet Respir Med. 2019;7(8):687-698.',
      'Allen RP et al. Restless legs syndrome/Willis-Ekbom disease diagnostic criteria. Sleep Med. 2014;15(8):860-873.',
      'Qaseem A et al. Management of chronic insomnia disorder in adults: clinical practice guideline from the ACP. Ann Intern Med. 2016;165(2):125-133.',
    ],
  },
]
