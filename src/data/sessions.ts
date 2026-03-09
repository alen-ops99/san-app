export interface SessionSection {
  title: string
  content: string
  tip?: string
}

export interface Session {
  id: number
  title: string
  subtitle: string
  duration: string
  sections: SessionSection[]
  interactiveComponent?: 'sleep-diary' | 'sleep-window-calculator' | 'isi-recheck'
  keyTakeaways: string[]
}

export const sessions: Session[] = [
  // ────────────────────────────────────────────
  // Sesija 1 — Razumijevanje nesanice
  // ────────────────────────────────────────────
  {
    id: 1,
    title: 'Razumijevanje nesanice',
    subtitle: 'Zašto ne spavate i kako to promijeniti',
    duration: '15 min čitanja',
    sections: [
      {
        title: 'Što je nesanica?',
        content:
          'Nesanica je najčešći poremećaj spavanja koji pogađa oko 10–15 % odrasle populacije u kroničnom obliku. Karakterizira je teškoća usnivanja, održavanja sna ili prerano buđenje, uz nezadovoljstvo kvalitetom sna — usprkos tome što imate dovoljno prilike za spavanje.\n\nVažno je razumjeti da nesanica nije samo „premalo sati sna". Ona uključuje i dnevne posljedice: umor, poteškoće s koncentracijom, promjene raspoloženja, smanjenu radnu učinkovitost i zabrinutost oko spavanja. Ako prepoznajete ove simptome, niste sami — i postoji dokazano učinkovita pomoć.\n\nKronična nesanica definira se kao poteškoće sa spavanjem koje se javljaju najmanje tri noći tjedno tijekom najmanje tri mjeseca. No i kraći periodi nesanice zaslužuju pozornost jer se bez intervencije često kroniciziraju.',
        tip: 'Nesanica nije odraz Vaše slabosti. To je čest zdravstveni problem koji se može uspješno liječiti — upravo pristupom koji ćete naučiti u ovom programu.',
      },
      {
        title: '3P model nesanice',
        content:
          'Da bismo razumjeli zašto se nesanica javlja i zašto traje, koristimo tzv. 3P model koji su razvili Spielman i suradnici. Ovaj model objašnjava nesanicu kroz tri faktora:\n\n**Predispozicija (Predisposing factors)**\nNeki ljudi su biološki skloniji nesanici. To može uključivati genetsku sklonost ka povećanoj budnosti, anksiozni temperament, ili pojačanu reaktivnost na stres. Ovo je Vaša „bazna razina" — ne možete je promijeniti, ali možete naučiti kako je kompenzirati.\n\n**Precipitirajući faktor (Precipitating factors)**\nTo su okidači koji pokrenu nesanicu — stresni životni događaji poput gubitka posla, razvoda, bolesti, preseljenja ili čak pozitivnih promjena poput novog posla. Gotovo svi slučajevi nesanice započinju nekim precipitirajućim događajem. Zanimljivo, taj okidač često prođe, ali nesanica ostane.\n\n**Perpetuirajući faktor (Perpetuating factors)**\nOvo su ponašanja i načini razmišljanja koji nesanicu održavaju. Upravo tu leži ključ — ove faktore MOŽETE promijeniti. Primjeri uključuju: prekomjerno vrijeme u krevetu, nepravilan raspored spavanja, gledanje u sat, zabrinutost oko sna, drijemanje tijekom dana, i korištenje kreveta za aktivnosti koje nisu san.\n\nCijeli ovaj program usmjeren je na uklanjanje perpetuirajućih faktora — jer upravo oni održavaju nesanicu.',
        tip: 'Razmislite o svom slučaju: možete li prepoznati što je bio Vaš precipitirajući faktor? Koje ste navike razvili „pokušavajući" bolje spavati, a koje zapravo održavaju problem?',
      },
      {
        title: 'Pritisak za spavanje i cirkadijani ritam',
        content:
          'San je reguliran dvama neovisnim procesima koji moraju djelovati usklađeno da biste dobro spavali:\n\n**Proces S — Homeostatski pritisak za spavanje (Sleep drive)**\nOd trenutka kada se probudite, u mozgu se nakuplja tvar zvana adenozin. Što ste duže budni, to je više adenozina — i to je veći Vaš „pritisak za spavanje". Tijekom sna, mozak razgrađuje adenozin i pritisak se smanjuje. Zamislite to kao pješčani sat — što više pijeska se nakupi na dnu, to je jači nagon za spavanjem.\n\nZašto je ovo važno? Jer ako drijemljete tijekom dana, ležite predugo u krevetu ili odete na spavanje prerano — smanjujete pritisak za spavanje, što otežava usnivanje navečer.\n\n**Proces C — Cirkadijani ritam**\nVaš unutarnji biološki sat (smješten u suprakijazmatskoj jezgri u mozgu) kontrolira cikluse budnosti i pospanosti u ritmu od približno 24 sata. Ovaj sat se sinkronizira sa svjetlošću — jutarnja svjetlost ga „resetira" svako jutro.\n\nNajjači nagon za spavanjem javlja se kada su oba procesa usklađena: visok pritisak za spavanje + cirkadijani signal za san (obično oko 23:00–00:00). Nesanica nastaje kada su ovi procesi „poremećeni" — npr. previše vremena u krevetu smanjuje pritisak, a neredovit raspored zbunjuje cirkadijani sat.',
      },
      {
        title: 'Što se događa dok spavamo?',
        content:
          'San nije pasivno stanje — to je aktivan proces u kojem mozak obavlja ključne funkcije:\n\n**Faze sna**\nSan se odvija u ciklusima od 90–110 minuta koji se ponavljaju 4–6 puta tijekom noći. Svaki ciklus sadrži:\n\n• **N1 (lagani san)** — prijelaz iz budnosti u san, traje nekoliko minuta\n• **N2 (srednji san)** — čini oko 50 % ukupnog sna, važan za konsolidaciju pamćenja\n• **N3 (duboki san / spori valovi)** — dominira u prvoj polovici noći, ključan za tjelesni oporavak, imunološki sustav i čišćenje metaboličkih nusprodukata iz mozga\n• **REM san (san s brzim pokretima očiju)** — dominira u drugoj polovici noći, važan za emocionalno procesuiranje, kreativnost i pamćenje\n\n**Zašto je ovo važno za nesanicu?**\nKratka buđenja između ciklusa su potpuno normalna — zdrav spavač ih ima 10–20 po noći, ali ih ne pamti. Problem nastaje kada ta buđenja postanu predmet brige: „Opet sam se probudio/la!" — jer zabrinutost aktivira sustav budnosti i otežava ponovno usnivanje.\n\nTakođer, kvaliteta sna je jednako važna kao i količina. San u prvoj polovici noći (bogat dubokim snom) posebno je važan za fizički oporavak.',
        tip: 'Kratka buđenja tijekom noći su normalan dio zdravog sna. Ključ je ne reagirati na njih s frustracijom ili brigom.',
      },
      {
        title: 'Što ćete naučiti u ovom programu',
        content:
          'Ovaj program temelji se na kognitivno-bihevioralnoj terapiji za nesanicu (KBT-I) — zlatnom standardu za liječenje kronične nesanice, preporučenom od strane svih vodećih medicinskih društava kao prvi izbor liječenja (ispred lijekova).\n\nIstraživanja pokazuju da KBT-I pomaže 70–80 % osoba s kroničnom nesanicom, a učinci traju dugoročno — za razliku od lijekova za spavanje čiji učinak prestaje nakon prestanka uzimanja.\n\nU sljedećim sesijama naučit ćete:\n• Kako prilagoditi svoju okolinu i navike za bolji san (higijena sna)\n• Kako ponovno izgraditi snažnu vezu između kreveta i sna (kontrola stimulusa)\n• Kako koristiti znanost o pritisku za spavanje u svoju korist (restrikcija sna)\n• Kako prepoznati i promijeniti misli koje održavaju nesanicu (kognitivna restrukturacija)\n• Kako se opustiti prije spavanja (tehnike opuštanja)\n• Kako upravljati brigama koje Vas drže budnima (upravljanje brigama)\n\nSvaka sesija donosi praktične alate koje možete odmah primijeniti. Budite strpljivi — poboljšanja se obično primijete nakon 2–4 tjedna dosljedne primjene.',
        tip: 'Za najbolje rezultate, prolazite jednu sesiju tjedno i primjenjujte naučene tehnike svaki dan. Promjena navika zahtijeva vrijeme i dosljednost.',
      },
    ],
    keyTakeaways: [
      'Nesanica je čest i izlječiv problem — niste sami i postoji dokazano učinkovita pomoć.',
      '3P model objašnjava nesanicu: predispozicija + okidač + održavajuće navike. Ovaj program cilja na promjenu održavajućih navika.',
      'San reguliraju pritisak za spavanje (što duže ste budni, to je jači) i cirkadijani ritam (unutarnji sat od 24 sata).',
    ],
  },

  // ────────────────────────────────────────────
  // Sesija 2 — Higijena sna
  // ────────────────────────────────────────────
  {
    id: 2,
    title: 'Higijena sna',
    subtitle: 'Stvorite okruženje i navike za bolji san',
    duration: '15 min čitanja',
    interactiveComponent: 'sleep-diary',
    sections: [
      {
        title: 'Što je higijena sna?',
        content:
          'Higijena sna odnosi se na skup preporuka o ponašanjima i uvjetima okoline koji promiču dobar san. Sama za sebe, higijena sna obično nije dovoljna za liječenje kronične nesanice — ali je važan temelj na koji se nadograđuju sve ostale tehnike iz ovog programa.\n\nMnogi ljudi već znaju neke od ovih preporuka, ali ih ne primjenjuju dosljedno. Razlika između „znati" i „činiti" može biti ogromna. Pozivamo Vas da preispitate svoje navike i napravite konkretne promjene tamo gdje je potrebno.',
      },
      {
        title: 'Okruženje za spavanje',
        content:
          '**Temperatura**\nOptimalna temperatura spavaće sobe je 18–20 °C. Naše tijelo mora lagano sniziti tjelesnu temperaturu da bi započelo san, pa prehladan ili pretopao prostor ometa taj proces. Ako ne možete kontrolirati temperaturu, koristite odgovarajuću posteljinu i odjeću za spavanje.\n\n**Tama**\nSvjetlost je najjači signal za Vaš cirkadijani sat. Čak i mala količina svjetlosti u spavaćoj sobi može ometati proizvodnju melatonina i kvalitetu sna. Koristite zacrnjenice (blackout zavjese) ili masku za oči. Uklonite ili pokrijte sve izvore svjetlosti — uključujući LED indikatore na elektroničkim uređajima.\n\n**Tišina**\nBuka je čest ometač sna, osobito u urbanim sredinama. Razmislite o čepićima za uši ili uređaju/aplikaciji za bijeli šum (white noise). Bijeli šum maskira iznenadne zvukove (poput prometa ili susjeda) koji uzrokuju buđenja.\n\n**Udobnost**\nVaš madrac i jastuk trebaju podržavati Vašu preferiranu poziciju za spavanje. Ako se budite s bolovima u vratu ili leđima, možda je vrijeme za zamjenu. Kvalitetan madrac je investicija u zdravlje.',
        tip: 'Učinite svoju spavaću sobu „svetištem sna": hladna, tamna, tiha i ugodna. Uklonite televizor, kompjuter i radni stol ako je moguće.',
      },
      {
        title: 'Kofein, alkohol i prehrana',
        content:
          '**Kofein**\nKofein ima poluživot od 5–7 sati, što znači da kava popijen u 15:00 i u 22:00 još ima pola svoje aktivne količine u Vašem tijelu. Preporuka je izbjegavati kofein najmanje 6–8 sati prije spavanja. Imajte na umu da kofein nije samo u kavi — nalazi se i u čaju (osobito zelenom i crnom), gaziranima pićima, energetskim napicima i čokoladi.\n\nNekim ljudima čak i jutarnji kofein može ometati san, posebno ako ste „spori metabolizator" kofeina (genetski uvjetovano). Ako sumnjate, pokušajte dva tjedna bez kofeina i pratite razliku.\n\n**Alkohol**\nAlkohol je jedna od najčešćih zabluda o snu. Mnogi ga koriste kao „lijek za spavanje" jer olakšava usnivanje. No alkohol drastično narušava kvalitetu sna: smanjuje REM san, povećava broj buđenja u drugoj polovici noći, pogoršava disanje tijekom sna i uzrokuje dehidraciju. Izbjegavajte alkohol najmanje 3–4 sata prije spavanja.\n\n**Večera**\nIzbjegavajte teške, masne i pikantne obroke 2–3 sata prije spavanja jer probava može ometati san. S druge strane, ne idite u krevet gladni — lagan zalogaj (npr. banana, šaka orašastih plodova, čaša mlijeka) može čak pomoći jer hrana bogata triptofanom potiče proizvodnju serotonina i melatonina.',
        tip: 'Vodite „kofein-dnevnik" tjedan dana: zabilježite svaki unos kofeina (vrijeme i izvor) i usporedite s kvalitetom sna te noći.',
      },
      {
        title: 'Tjelesna aktivnost',
        content:
          'Redovita tjelesna aktivnost jedna je od najmoćnijih prirodnih intervencija za poboljšanje sna. Istraživanja dosljedno pokazuju da umjerena aerobna aktivnost (brzo hodanje, plivanje, vožnja biciklom) poboljšava i trajanje i kvalitetu sna.\n\n**Preporuke:**\n• Ciljajte na najmanje 30 minuta umjerene aktivnosti većinu dana u tjednu\n• Jutarnja ili poslijepodnevna aktivnost je idealna\n• Izbjegavajte intenzivnu tjelovježbu 2–3 sata prije spavanja — ona podiže tjelesnu temperaturu i razinu adrenalina, što može otežati usnivanje\n• Lagano istezanje ili joga navečer može biti korisna jer potiče opuštanje\n\nVažno: ne morate trčati maraton. Čak i 20 minuta hodanja u prirodi ima mjerljiv pozitivan učinak na san.',
      },
      {
        title: 'Večernja rutina i ekrani',
        content:
          '**Rutina prije spavanja**\nBaš kao što djeca imaju večernje rituale (kupanje, priča za laku noć), i odrasli trebaju „signal za smirivanje". Stvorite konzistentnu rutinu od 30–60 minuta prije spavanja:\n\n• Prigušite osvjetljenje u stanu\n• Prestanite s poslovnim obavezama i stresnim razgovorima\n• Radite nešto opuštajuće: čitajte (fizičku knjigu), slušajte mirnu glazbu, meditirajte, napravite lagano istezanje, popijte biljni čaj (bez kofeina)\n\n**Ekrani**\nPametni telefoni, tableti, kompjuteri i televizori emitiraju plavu svjetlost koja potiskuje proizvodnju melatonina. Preporuka je izbjegavati ekrane 60–90 minuta prije spavanja. Ako to nije moguće, koristite „noćni režim" (night shift / dark mode) koji smanjuje plavo svjetlo, ali budite svjesni da sam sadržaj na ekranima (vijesti, društvene mreže, uzbudljive serije) također aktivira mozak i otežava smirivanje.\n\n**Svjetlost ujutro**\nJutarnja izloženost prirodnom svjetlu (15–30 minuta, idealno unutar prvog sata nakon buđenja) pomaže sinkronizirati Vaš cirkadijani ritam i poboljšava budnost tijekom dana. Ovo je jedna od najjednostavnijih i najučinkovitijih intervencija za bolji san.',
        tip: 'Postavite alarm za „početak večernje rutine" — ne samo za buđenje. Tako ćete se sjetiti da je vrijeme za smirivanje.',
      },
      {
        title: 'Dnevnik spavanja',
        content:
          'Dnevnik spavanja najvažniji je alat u ovom programu. Bez podataka o Vašem snu, nemoguće je precizno prilagoditi terapiju. Svako jutro, zabilježite:\n\n• Vrijeme odlaska u krevet\n• Procijenjeno vrijeme usnivanja\n• Broj i trajanje buđenja tijekom noći\n• Vrijeme konačnog buđenja\n• Vrijeme ustajanja iz kreveta\n• Subjektivna kvaliteta sna (1–5)\n• Korištenje lijekova ili alkohola\n\nIz ovih podataka izračunavamo **učinkovitost sna** — ključni parametar za restrikciju sna (Sesija 4):\n\nUčinkovitost sna (%) = (ukupno vrijeme sna ÷ ukupno vrijeme u krevetu) × 100\n\nCilj je postići učinkovitost sna od 85 % ili više. Ako trenutno provodite 9 sati u krevetu, ali spavate samo 6, Vaša učinkovitost je 67 % — i to je problem koji ćemo riješiti.\n\nKoristite dnevnik spavanja u aplikaciji San — automatski će izračunavati Vašu učinkovitost i pratiti napredak.',
        tip: 'Ispunjavajte dnevnik spavanja odmah ujutro, dok su sjećanja svježa. Ne gledajte na sat tijekom noći — procjene su sasvim dovoljne.',
      },
    ],
    keyTakeaways: [
      'Spavaća soba treba biti hladna (18–20 °C), tamna i tiha — ovo su temelji dobrog sna.',
      'Izbjegavajte kofein 6–8 sati i alkohol 3–4 sata prije spavanja. Alkohol NIJE lijek za san.',
      'Vodite dnevnik spavanja svako jutro — bez podataka nema napretka.',
    ],
  },

  // ────────────────────────────────────────────
  // Sesija 3 — Kontrola stimulusa
  // ────────────────────────────────────────────
  {
    id: 3,
    title: 'Kontrola stimulusa',
    subtitle: 'Ponovno povežite krevet sa snom',
    duration: '12 min čitanja',
    sections: [
      {
        title: 'Krevet = san',
        content:
          'Kontrola stimulusa jedna je od najmoćnijih tehnika za liječenje nesanice. Razvio ju je Richard Bootzin 1972. godine, i danas je preporučena od strane Američke akademije za medicinu spavanja kao terapija s najvišom razinom dokaza.\n\nOsnovna ideja je jednostavna: s vremenom, osobe s nesanicom počinju povezivati krevet s budnošću, frustracijom i brigama — umjesto sa snom. Ležanje budni u krevetu, vrtenje, gledanje u strop i razmišljanje „Zašto ne mogu zaspati?!" stvara naučenu asocijaciju: krevet = budnost.\n\nKontrola stimulusa prekida taj začarani krug i ponovno izgrađuje zdravu asocijaciju: krevet = san.\n\nMislite na to ovako: ako biste svaki dan sjedili za radnim stolom ali nikada ne biste radili, s vremenom biste taj stol prestali doživljavati kao „radno mjesto". Isto se događa s krevetom i snom.',
      },
      {
        title: 'Pravila kontrole stimulusa',
        content:
          '**1. Idite u krevet samo kada ste pospani**\nPostoji razlika između umora i pospanosti. Umor je osjećaj iscrpljenosti, ali ne nužno i nagon za snom. Pospanost je onaj osjećaj kada Vam se oči zatvaraju, kada „kimajte" — signal da je pritisak za spavanje dovoljno jak. Idite u krevet samo kada osjetite pospanost, čak i ako to znači da idete kasnije nego inače.\n\n**2. Pravilo 20 minuta**\nAko nakon otprilike 20 minuta niste zaspali (ne gledajte na sat — procijenite), ustanite iz kreveta i odite u drugu prostoriju. Radite nešto tiho i opuštajuće pod prigušenim svjetlom: čitajte, slušajte mirnu glazbu, radite lagano istezanje. Vratite se u krevet tek kada opet osjetite pospanost. Ponovite po potrebi — koliko god puta bude potrebno.\n\nOvo pravilo primjenjujte i kada se probudite tijekom noći i ne možete se ponovno uspavati unutar ~20 minuta.\n\n**3. Koristite krevet samo za san (i intimnost)**\nNe čitajte, ne gledajte televiziju, ne koristite telefon, ne jedite i ne radite u krevetu. Cilj je da Vaš mozak krevet prepoznaje isključivo kao mjesto za san.\n\n**4. Ustanite svako jutro u isto vrijeme**\nBez obzira na to koliko ste spavali, ustanite u isto vrijeme — uključujući vikende. Ovo je jedan od najvažnijih koraka jer pomaže stabilizirati Vaš cirkadijani ritam i osigurava dovoljan pritisak za spavanje sljedeće noći.\n\n**5. Izbjegavajte dnevno drijemanje**\nBarem na početku programa (prvih 4–6 tjedana), izbjegavajte drijemanje tijekom dana jer smanjuje pritisak za spavanje navečer. Ako je drijemanje nužno (npr. zbog sigurnosti pri vožnji), ograničite ga na 20 minuta i prije 15:00.',
        tip: 'Pravilo 20 minuta može se isprva činiti kontraproduktivnim — ali upravo ono prekida asocijaciju krevet = budnost. Budite dosljedni, rezultati dolaze.',
      },
      {
        title: 'Kako primijeniti pravilo 20 minuta',
        content:
          'Kada ustajete iz kreveta tijekom noći, pripremite se unaprijed:\n\n**Pripremite „noćno gnijezdo"**\n• Odaberite udoban kutak izvan spavaće sobe\n• Držite tamo deku, jastuk, knjigu (fizičku) i možda čaj bez kofeina\n• Neka osvjetljenje bude prigušeno — koristite malu lampicu, ne stropno svjetlo\n• Izbjegavajte ekrane (plava svjetlost + stimulativni sadržaj)\n\n**Što raditi:**\n• Čitajte nešto lagano i ne previše uzbudljivo\n• Slušajte mirnu glazbu ili podcast o opuštajućoj temi\n• Radite vježbe opuštanja (progresivna mišićna relaksacija, duboko disanje)\n• Pišite u dnevnik (izbacite brige na papir)\n\n**Što NE raditi:**\n• Ne gledajte na sat — to povećava anksioznost\n• Ne koristite telefon ili kompjuter\n• Ne jedite teške zalogaje\n• Ne radite poslovne zadatke\n• Ne ostajte u krevetu „trudeći se" zaspati — to pogoršava problem\n\nVratite se u krevet tek kada opet osjetite pospanost (teške kapke, kimanje).',
        tip: 'Okrenite sat u spavaćoj sobi od sebe ili ga potpuno uklonite. Gledanje u sat noću aktivira računanje („Još samo 4 sata do alarma...") i povećava stres.',
      },
      {
        title: 'Česta pitanja i zabrinutosti',
        content:
          '**„Ali ja ću spavati još manje!"**\nU prvim danima, to je moguće — i to je normalno. Ali dugoročno, kontrola stimulusa značajno poboljšava san jer obnavlja zdravu asocijaciju krevet-san i pojačava pritisak za spavanje.\n\n**„Ne mogu ustati iz kreveta, preumorna/preumoran sam."**\nRazumijemo da je to teško. Ali upravo ležanje budni u krevetu održava problem. Pomislite na to kao na kratkoročnu neugodnost za dugoročno poboljšanje. Pripremite se unaprijed (topla deka, ugodan kutak) da ustajanje bude lakše.\n\n**„Moj partner/ica će se probuditi."**\nRazgovarajte s partnerom/icom o ovom programu i objasnite zašto ustajete. Većina partnera je podržavajuća kada razumije da je to dio liječenja. Pripremite ogrtač i papuče kraj kreveta da se možete tiho udaljiti.\n\n**„Vikendi su mi drugačiji."**\nKonzistentnost je ključna. Dovolite si maksimalno 30 minuta duže spavanje vikendom, ali ne više. Vaš biološki sat ne zna da je subota.',
      },
      {
        title: 'Praćenje napretka',
        content:
          'Kontrola stimulusa obično daje prve rezultate nakon 1–2 tjedna dosljedne primjene. Pratite napredak pomoću dnevnika spavanja i obratite pozornost na:\n\n• **Latencija usnivanja** — koliko brzo zasipate nakon odlaska u krevet. Cilj: manje od 30 minuta.\n• **Buđenja tijekom noći** — smanjuje li se njihov broj i trajanje?\n• **Učinkovitost sna** — povećava li se postotak vremena u krevetu koji zapravo provodite spavajući?\n\nBudite strpljivi i dosljedni. Kao i kod svake promjene navika, prvih nekoliko dana može biti izazovno. Ali svaka noć u kojoj primjenjujete ova pravila jača asocijaciju krevet = san.\n\nAko nakon dva tjedna dosljedne primjene ne vidite poboljšanje, ne odustajte — prijeđite na sljedeću sesiju (restrikcija sna) koja dodaje još jedan moćan alat.',
        tip: 'Čak i ako ne zasipate brže odmah, samo pravilo ustajanja iz kreveta smanjuje frustraciju i anksioznost vezane uz krevet — a to je prvi korak ka boljem snu.',
      },
    ],
    keyTakeaways: [
      'Idite u krevet samo kada ste pospani, ne samo umorni.',
      'Ako ne zaspite u ~20 minuta, ustanite i radite nešto opuštajuće u drugoj prostoriji — vratite se tek kad ste opet pospani.',
      'Ustanite svako jutro u isto vrijeme, uključujući vikende. Konzistentnost je ključ.',
    ],
  },

  // ────────────────────────────────────────────
  // Sesija 4 — Restrikcija sna
  // ────────────────────────────────────────────
  {
    id: 4,
    title: 'Restrikcija sna',
    subtitle: 'Konsolidirajte san i povećajte učinkovitost',
    duration: '15 min čitanja',
    interactiveComponent: 'sleep-window-calculator',
    sections: [
      {
        title: 'Zašto ograničiti vrijeme u krevetu?',
        content:
          'Restrikcija sna (terapija ograničavanjem sna) zvuči kontraintuitivno: zar ne bi osoba koja loše spava trebala VIŠE vremena u krevetu? Upravo suprotno.\n\nJedan od najčešćih perpetuirajućih faktora nesanice jest prekomjerno vrijeme u krevetu. Kada loše spavate, prirodni instinkt je ići ranije u krevet i ustajati kasnije — „da se nadoknadi". No to zapravo:\n\n• **Razrjeđuje san** — isti (ili manji) broj sati sna raspoređen na veći broj sati u krevetu rezultira fragmentiranim, plitkim snom\n• **Smanjuje pritisak za spavanje** — jer manje vremena provodite budni\n• **Pojačava asocijaciju krevet-budnost** — jer više vremena ležite budni\n\nRestrikcija sna radi suprotno: komprimira san u kraći, konsolidiraniji period, čime povećava pritisak za spavanje i poboljšava učinkovitost sna.\n\nOva tehnika, koju je razvio Arthur Spielman, dosljedno se pokazala kao jedan od najučinkovitijih elemenata KBT-I programa.',
      },
      {
        title: 'Kako izračunati prozor za spavanje',
        content:
          'Proces je jednostavan, ali zahtijeva podatke iz Vašeg dnevnika spavanja:\n\n**Korak 1: Odredite prosječno trajanje sna**\nIz dnevnika spavanja za posljednjih 7–14 dana izračunajte koliko u prosjeku zapravo SPAVATE (ne koliko ste u krevetu). Na primjer, ako idete u krevet u 22:00 i ustajete u 7:00 (9 sati u krevetu), ali procjenjujete da zapravo spavate 5,5 sati — Vaš prosječni san je 5,5 sati.\n\n**Korak 2: Postavite „prozor za spavanje" (sleep window)**\nVaš početni prozor za spavanje = Vaš prosječni san (ali nikada manje od 5 sati — to je sigurnosni minimum). U ovom primjeru, Vaš prozor je 5,5 sati.\n\n**Korak 3: Odredite fiksno vrijeme buđenja**\nOdaberite vrijeme buđenja koje je realistično i koje ćete održavati SVAKI dan (uključujući vikende). Na primjer, 6:30.\n\n**Korak 4: Izračunajte vrijeme odlaska u krevet**\nVrijeme buđenja minus prozor za spavanje = vrijeme odlaska u krevet.\n6:30 minus 5,5 sati = 1:00 (jedan sat iza ponoći).\n\nDa, ovo se može činiti kasnim. Ali upravo to je poanta — stvara se snažan pritisak za spavanje koji rezultira konsolidiranim, kvalitetnim snom.',
        tip: 'Koristite kalkulator prozora za spavanje u aplikaciji San — automatski će izračunati Vaš optimalni raspored na temelju podataka iz dnevnika.',
      },
      {
        title: 'Tjedna prilagodba',
        content:
          'Svaki tjedan na temelju učinkovitosti sna prilagođavate prozor za spavanje:\n\n**Učinkovitost sna > 90 %** — Pomaknite vrijeme odlaska u krevet 15–30 minuta RANIJE (proširite prozor). Odlično napredujete!\n\n**Učinkovitost sna 85–90 %** — Zadržite trenutni prozor. Sve je na pravom putu.\n\n**Učinkovitost sna < 85 %** — Pomaknite vrijeme odlaska u krevet 15 minuta KASNIJE (suzite prozor), ali nikada ispod 5 sati ukupno.\n\n**Primjer napredovanja:**\n• Tjedan 1: Prozor 5,5 h (00:30–06:00), učinkovitost 92 % → proširite\n• Tjedan 2: Prozor 6,0 h (00:00–06:00), učinkovitost 88 % → zadržite\n• Tjedan 3: Prozor 6,0 h (00:00–06:00), učinkovitost 91 % → proširite\n• Tjedan 4: Prozor 6,5 h (23:30–06:00), učinkovitost 89 % → zadržite\n\nCilj je postupno pronaći Vaš optimalni prozor za spavanje — dovoljno sna za dnevno funkcioniranje uz visoku učinkovitost (≥85 %).',
        tip: 'Budite strpljivi s ovim procesom. Proširivanje prozora previše i prebrzo može poništiti napredak. Slijedite podatke, ne osjećaje.',
      },
      {
        title: 'Sigurnosne napomene',
        content:
          'Restrikcija sna je moćna tehnika, ali zahtijeva odgovornost:\n\n**Sigurnosni minimum: 5 sati**\nNikada ne postavljajte prozor za spavanje na manje od 5 sati. Ispod toga rizici od deprivacije sna (smanjena koncentracija, usporeni refleksi) nadmašuju korist.\n\n**Pospanost tijekom dana**\nU prvim danima restrikcije sna očekujte povećanu pospanost tijekom dana. To je normalno i zapravo korisno — pojačava pritisak za spavanje navečer. No:\n\n• **NE VOZITE** ako ste izrazito pospani. Pospanost za volanom jednako je opasna kao alkohol.\n• Izbjegavajte opasne aktivnosti koje zahtijevaju punu koncentraciju\n• Ako radite posao koji zahtijeva visoku pozornost (liječnici, piloti, operateri strojeva), konzultirajte se s liječnikom prije početka restrikcije sna\n\n**Kontraindikacije**\nRestrikcija sna NIJE preporučena za osobe s:\n• Epilepsijom (nedostatak sna može provocirati napadaje)\n• Bipolarnim poremećajem (može izazvati maničnu epizodu)\n• Neliječenom apnejom u snu\n• Parazomnije (hodanje u snu, noćni strahovi)\n\nAko imate bilo koji od ovih stanja, preskočite ovu sesiju i konzultirajte liječnika.',
        tip: 'Pospanost u prvom tjednu restrikcije sna je DOBAR znak — znači da Vaš pritisak za spavanje raste. Iskoristite to za brže usnivanje navečer.',
      },
      {
        title: 'Kako izdržati prvih tjedan dana',
        content:
          'Prvih 5–7 dana restrikcije sna najtežeg je dijela programa. Evo strategija koje pomažu:\n\n**Ostanite aktivni navečer**\nNajveći izazov je ostati budni do novog (kasnijeg) vremena odlaska u krevet. Ne sjedite na kauču i ne gledate televiziju — to je recept za drijemanje. Umjesto toga:\n• Prošetajte se (ako je sigurno)\n• Nazovite prijatelja\n• Radite na hobiju koji zahtijeva aktivno sudjelovanje\n• Sredite stvari po kući\n\n**Zadržite motivaciju**\nPodsjetite se zašto ovo radite. Restrikcija sna ima jednu od najjačih razina dokaza u cijeloj medicini spavanja. Većina ljudi primijeti značajno poboljšanje unutar 2 tjedna.\n\n**Pratite napredak**\nSvako jutro pogledajte podatke u dnevniku spavanja. Kada vidite da Vam učinkovitost sna raste s 60 % na 85 % i više — to je moćna motivacija.\n\n**Ne nadoknađujte san**\nOdolite iskušenju „nadoknade" — ne drijemljite, ne idite ranije u krevet, ne ustajete kasnije vikendom. Svako odstupanje usporava napredak.\n\nNakon prvih 1–2 tjedna, većina osoba izvještava o jednoj od najljepših promjena: prvi put nakon dugog vremena, zaspu čim legnu u krevet i spavaju neprekidno do jutra. Taj osjećaj konsolidiranog, dubokog sna je nagrada za Vašu dosljednost.',
      },
    ],
    keyTakeaways: [
      'Prekomjerno vrijeme u krevetu razrjeđuje san. Restrikcija sna komprimira san u kraći, kvalitetniji period.',
      'Postavite prozor za spavanje = prosječno trajanje sna (minimum 5 h). Proširujte ga tjednom ritmu na temelju učinkovitosti sna.',
      'Prvih 5–7 dana je najteže, ali većina ljudi primijeti značajno poboljšanje unutar 2 tjedna.',
    ],
  },

  // ────────────────────────────────────────────
  // Sesija 5 — Kognitivna restrukturacija
  // ────────────────────────────────────────────
  {
    id: 5,
    title: 'Kognitivna restrukturacija',
    subtitle: 'Promijenite misli koje Vas drže budnima',
    duration: '15 min čitanja',
    sections: [
      {
        title: 'Kako misli utječu na san',
        content:
          'Zamislite ovu situaciju: ležite u krevetu i ne možete zaspati. Pogledate na sat — 2:30 ujutro. Alarm zvoni u 6:30. Misao koja se pojavljuje: „Ostat ću bez sna i sutra neću moći funkcionirati. Bitna mi je prezentacija, a ja ću biti potpuno nesposoban/na."\n\nŠto se sada događa u Vašem tijelu? Srce brže kuca. Mišići se napinju. Adrenalin raste. Upravo ste aktivirali sustav „borba ili bijeg" — najgoru moguću stvar za usnivanje.\n\nOvaj začarani krug — misao → anksioznost → budnost → još negativnija misao — jedan je od najsnažnijih perpetuirajućih faktora nesanice. Kognitivna restrukturacija Vas uči kako prepoznati ove automatske misli i zamijeniti ih realnijim, korisnijim perspektivama.\n\nVažno: Ne tražimo od Vas da „mislite pozitivno" na neiskren način. Cilj je misliti REALISTIČNO — jer su negativne misli o snu gotovo uvijek pretjerane i iskrivljene.',
      },
      {
        title: 'Najčešće pogrešne vjerovanja o snu',
        content:
          '**„Moram spavati 8 sati ili ću se razboliti."**\nRealnost: Potreba za snom varira od 6 do 9 sati, ovisno o osobi. Mnogi ljudi funkcioniraju izvrsno sa 6,5–7 sati. Jedna loša noć neće uzrokovati zdravstvene probleme — tijelo ima izvanrednu sposobnost kompenzacije.\n\n**„Ako ne zaspim, sutra neću moći ništa napraviti."**\nRealnost: Istraživanja pokazuju da nakon loše noći dnevno funkcioniranje jest smanjeno, ali daleko manje nego što predviđamo. Ljudi rutinski precjenjuju utjecaj loše noći na svoju izvedbu.\n\n**„Nesanica će uništiti moje zdravlje."**\nRealnost: Kronična, dugotrajna nesanica jest povezana s zdravstvenim rizicima, ali to se odnosi na godine neliječene nesanice — ne na tjedne ili mjesece. Upravo prolazeći ovaj program, aktivno radite na svom zdravlju.\n\n**„Moram nadoknaditi izgubljeni san."**\nRealnost: San se ne nadoknađuje sat za sat. Jedna ili dvije noći kvalitetnog sna dovoljne su za oporavak. Pokušaj „nadoknade" (drijemanje, duže ležanje) zapravo pogoršava nesanicu.\n\n**„Ne mogu funkcionirati bez tableta za spavanje."**\nRealnost: KBT-I je dokazano učinkovitija od lijekova dugoročno. Vaš mozak ima prirodnu sposobnost spavanja — samo trebate ukloniti prepreke.',
        tip: 'Zapišite svoja osobna pogrešna vjerovanja o snu. Samo čin prepoznavanja da je misao „automatska" a ne „činjenična" smanjuje njenu moć.',
      },
      {
        title: 'Tehnika zapisa misli',
        content:
          'Kada primijetite negativnu misao o snu, provedite je kroz ovaj proces:\n\n**1. Identificirajte misao**\nŠto točno mislite? Zapišite misao doslovno.\nPrimjer: „Neću uopće zaspati večeras i sutra ću biti katastrofa na poslu."\n\n**2. Preispitajte dokaze**\n• Koji su dokazi ZA ovu misao? (Npr. „Teže sam radila/radio nakon loše noći prošli tjedan.")\n• Koji su dokazi PROTIV? (Npr. „Ali sam ipak završio/la sve zadatke. Kolege nisu primijetile ništa. Bilo je lošije nego inače, ali nije bila katastrofa.")\n\n**3. Prepoznajte kognitivno iskrivljenje**\nNajčešća iskrivljenja kod nesanice:\n• **Katastrofiziranje** — zamišljanje najgoreg mogućeg ishoda\n• **Crno-bijelo razmišljanje** — „ili savršeno spavam ili je katastrofa"\n• **Pretjerano generaliziranje** — „UVIJEK loše spavam"\n• **Čitanje misli** — „svi će primijetiti da sam umoran/na"\n\n**4. Preoblikujte misao**\nNapišite realniju, uravnoteženiju verziju.\nPrimjer: „Možda neću spavati idealno, ali čak i nakon loše noći mogu funkcionirati dovoljno dobro. Jedan loš dan nije katastrofa. Moj san se poboljšava kako primjenjujem program."',
        tip: 'Isprva, zapisujte misli na papir. S vremenom, ovaj proces postat će automatski — moći ćete ga raditi „u glavi" kada Vas uhvati negativna misao u krevetu.',
      },
      {
        title: 'Paradoksalna intencija',
        content:
          'Paradoksalna intencija je fascinantna tehnika koja koristi potpuno suprotan pristup: umjesto da se trudite zaspati, trudite se OSTATI BUDNI.\n\nKako to funkcionira? Velika količina anksioznosti oko sna dolazi od pritiska: „Moram zaspati, moram zaspati!" Kada uklonite taj pritisak i kažete sebi: „Ostat ću budan/na, samo ću ležati i odmarati se" — paradoksalno, anksioznost se smanjuje i usnivanje postaje lakše.\n\n**Kako primijeniti:**\n1. Legnite u krevet, zatvorite oči\n2. Recite sebi: „Ostat ću budan/na. Neću se ni truditi zaspati. Samo ću ležati i odmarati se."\n3. Opustite tijelo, ali držite oči zatvorenima\n4. Ne trudite se — doslovno pokušajte ne zaspati\n\nIstraživanja pokazuju da paradoksalna intencija značajno smanjuje anksioznost oko spavanja i skraćuje vrijeme usnivanja. Ne funkcionira kod svih, ali mnogi je nalaze izuzetno korisnom.\n\n**Zašto funkcionira?**\nPerformance anxiety (anksioznost izvedbe) je čest problem kod nesanice. Što se više trudite zaspati, to je teže — jer „trud" aktivira budnost. Uklanjanjem pritiska, dopuštate prirodnom procesu spavanja da preuzme kontrolu.',
      },
      {
        title: 'Upravljanje noćnom anksioznošću',
        content:
          'Kada se probudite usred noći i um Vam kreće juriti, isprobajte ove strategije:\n\n**Tehnika „Mentalna polica"**\nZamislite policu u svom umu. Kada se pojavi briga ili misao, vizualizirajte da je stavljate na policu s porukom: „Bavit ću se tobom sutra u 10:00." Ne potiskujte misao — samo je „odložite".\n\n**Tehnika preimenovanja**\nUmjesto „Ne mogu spavati — ovo je užasno", recite sebi: „Moj mozak je trenutno aktivan. To je neugodno, ali nije opasno. Proći će."\n\n**Tehnika zaustavljanja**\nKada primijetite spiralu negativnih misli, zamislite crveni znak STOP. Zatim preusmjerite pažnju na nešto neutralno: brojite unatrag od 300 po 3 (300, 297, 294...) ili se sjetite svih mjesta koja ste posjetili u životu.\n\n**Ključna poruka:** Vi niste Vaše misli. Misli su mentalni događaji — dolaze i odlaze poput oblaka na nebu. Ne morate ih pratiti, vjerovati im ili reagirati na njih. S praksom, naučit ćete ih promatrati bez angažmana.',
        tip: 'Ako Vam misli ne daju mira, ustanite i zapišite ih na papir. Fizički čin prebacivanja briga iz glave na papir može donijeti značajno olakšanje.',
      },
    ],
    keyTakeaways: [
      'Negativne misli o snu (katastrofiziranje, crno-bijelo razmišljanje) aktiviraju stresni odgovor i pogoršavaju nesanicu.',
      'Koristite tehniku zapisa misli: identificirajte → preispitajte dokaze → preoblikujte u realniju verziju.',
      'Paradoksalna intencija — pokušajte ostati budni umjesto da se trudite zaspati — može značajno smanjiti anksioznost.',
    ],
  },

  // ────────────────────────────────────────────
  // Sesija 6 — Tehnike opuštanja
  // ────────────────────────────────────────────
  {
    id: 6,
    title: 'Tehnike opuštanja',
    subtitle: 'Smirite tijelo i um prije spavanja',
    duration: '12 min čitanja',
    sections: [
      {
        title: 'Zašto je opuštanje važno za san',
        content:
          'Nesanica je, u svojoj srži, poremećaj prekomjerne pobuđenosti (hyperarousal). Vaš sustav „borba ili bijeg" ostaje aktivan u trenucima kada bi trebao biti u stanju mirovanja. To se očituje na tri razine:\n\n• **Tjelesna pobuđenost** — ubrzani puls, napeti mišići, plitko disanje\n• **Kognitivna pobuđenost** — jurenje misli, brige, planiranje\n• **Emocionalna pobuđenost** — frustracija, anksioznost, strah od neispavanosti\n\nTehnike opuštanja djeluju na sve tri razine, pomažući Vašem tijelu i umu da prijeđu iz „moda aktivnosti" u „mod odmora". Redovita praksa — ne samo prije spavanja, nego i tijekom dana — „trenira" Vaš živčani sustav da se lakše prebacuje u parasimpatički mod (odgovor „odmori i probavi").\n\nVažno: Opuštanje je vještina koja se razvija praksom. Ako se prvi put ne osjećate opušteno, to je normalno. Kao i svaka vještina, postaje lakša i učinkovitija s ponavljanjem.',
      },
      {
        title: 'Progresivna mišićna relaksacija (PMR)',
        content:
          'PMR je tehnika koju je razvio Edmund Jacobson 1930-ih, a temelji se na jednostavnom principu: namjerno napinjanje, a zatim opuštanje mišića, dovodi do dublje relaksacije nego samo „pokušaj opuštanja".\n\nTehnika uključuje sistematsko napinjanje (5 sekundi) i opuštanje (15–20 sekundi) 16 mišićnih skupina, od stopala do glave. Detaljne upute za vođenu PMR možete pronaći u kartici „Opuštanje" u aplikaciji.\n\nPMR je jedna od najbolje istraživanih tehnika opuštanja i dosljedno se pokazuje učinkovitom za smanjenje latencije usnivanja (vremena potrebnog za usnivanje) i poboljšanje subjektivne kvalitete sna.\n\n**Savjeti za praksu:**\n• Vježbajte svaki dan, po mogućnosti u isto vrijeme\n• Počnite s vježbom tijekom dana (ne odmah navečer) dok ne savladate tehniku\n• S vremenom možete prijeći na skraćenu verziju (4 skupine mišića) ili čak na samo „opuštanje" bez prethodnog napinjanja',
      },
      {
        title: 'Tehnike disanja',
        content:
          '**4-7-8 tehnika disanja**\nOvu tehniku popularizirao je dr. Andrew Weil, a temelji se na pranayama disanju:\n1. Udahnite kroz nos brojeći do 4\n2. Zadržite dah brojeći do 7\n3. Izdahnite kroz usta brojeći do 8\n4. Ponovite 4 ciklusa\n\nZadržavanje daha i produženi izdah aktiviraju vagalni živac i parasimpatički živčani sustav, čime se usporava puls i snižava krvni tlak.\n\n**Dijafragmalno (trbušno) disanje**\n• Položite jednu ruku na prsa, drugu na trbuh\n• Dišite tako da se trbušna ruka diže, a prsna ostaje mirna\n• Udahnite na 4 sekunde, izdahnite na 6–8 sekundi\n• Duži izdah od udaha ključan je za aktivaciju parasimpatičkog sustava\n\nTehnike disanja su posebno korisne jer ih možete primijeniti bilo gdje — u krevetu, na poslu, u prometu. Već 2–3 minute svjesnog disanja mogu značajno smanjiti razinu stresa.',
        tip: 'Ako Vam tehnika 4-7-8 izaziva nelagodu (predugo zadržavanje daha), počnite s kraćim omjerima (3-5-6) i postupno produžujte.',
      },
      {
        title: 'Mindfulness i body scan',
        content:
          '**Body scan (pregled tijela)**\nBody scan je mindfulness tehnika u kojoj sustavno usmjeravate pažnju na različite dijelove tijela, od stopala do glave, primjećujući osjete bez pokušaja da ih promijenite.\n\nKako funkcionira za san: preusmjerava pažnju s misli (brige, planiranje) na tjelesne osjete, čime smanjuje kognitivnu pobuđenost. Detaljne upute za vođeni body scan možete pronaći u kartici „Opuštanje" u aplikaciji.\n\n**Mindfulness meditacija**\nMindfulness nije „pražnjenje uma" — to je vještina svjesnog, neprosuđujućeg promatranja sadašnjeg trenutka. Za san je korisna jer:\n• Smanjuje ruminaciju (ponavljajuće negativne misli)\n• Povećava sposobnost „puštanja" misli\n• Smanjuje emocionalnu reaktivnost na buđenja tijekom noći\n\nIstraživanje objavljeno u JAMA Internal Medicine (2015.) pokazalo je da mindfulness program značajno poboljšava kvalitetu sna kod starijih osoba s umjerenim poremećajima sna.',
      },
      {
        title: 'Vođena vizualizacija i autogeni trening',
        content:
          '**Vođena vizualizacija**\nZamislite mirno, opuštajuće mjesto — plažu pri zalasku sunca, šumsku čistinu, planinski potok. Uključite sva osjetila: što vidite, čujete, osjećate na koži, mirišete? Što je vizualizacija detaljnija, to je učinkovitija u preusmjeravanju uma s briga.\n\nVizualizacija aktivira slične moždane regije kao stvarno iskustvo, čime može potaknuti osjećaj sigurnosti i opuštenosti.\n\n**Autogeni trening**\nRazvio ga je Johannes Schultz 1930-ih. Temelji se na samohipnotičkim formulama koje potiču tjelesne osjete opuštenosti:\n1. „Moja desna ruka je teška" (težina)\n2. „Moja desna ruka je topla" (toplina)\n3. „Moje srce kuca mirno i ravnomjerno" (srce)\n4. „Dišem mirno i prirodno" (disanje)\n5. „Moj trbuh je topao" (trbušna toplina)\n6. „Moje čelo je ugodno hladno" (hladno čelo)\n\nSvaka formula se tiho ponavlja 3–6 puta. S praksom, samo izgovaranje formule može izazvati duboku relaksaciju.\n\nSvih pet tehnika (PMR, 4-7-8 disanje, body scan, vizualizacija, autogeni trening) dostupno je u kartici „Opuštanje" u aplikaciji s vođenim uputama.',
        tip: 'Isprobajte sve tehnike i pronađite onu (ili kombinaciju) koja Vam najbolje odgovara. Nema „najboljeg" pristupa — samo onaj koji Vama funkcionira.',
      },
    ],
    keyTakeaways: [
      'Nesanica je stanje prekomjerne pobuđenosti. Tehnike opuštanja smanjuju tu pobuđenost na tjelesnoj, kognitivnoj i emocionalnoj razini.',
      'PMR, tehnike disanja, body scan, vizualizacija i autogeni trening — isprobajte sve i pronađite svoju kombinaciju.',
      'Opuštanje je vještina. Vježbajte svaki dan, ne samo pred spavanje, kako biste „istrenirali" živčani sustav za brži prelazak u mod odmora.',
    ],
  },

  // ────────────────────────────────────────────
  // Sesija 7 — Upravljanje brigama
  // ────────────────────────────────────────────
  {
    id: 7,
    title: 'Upravljanje brigama',
    subtitle: 'Prekinite noćno jurenje misli',
    duration: '12 min čitanja',
    sections: [
      {
        title: 'Zašto brige dolaze noću',
        content:
          'Jeste li primijetili da brige koje se danju čine upravljivima, noću postaju ogromne i zastrašujuće? Za to postoji dobar razlog.\n\nTijekom dana, Vaš prefrontalni korteks (dio mozga zadužen za racionalno razmišljanje, planiranje i regulaciju emocija) je aktivan i pomaže Vam staviti probleme u perspektivu. No noću, dok ležite u tami bez distrakcija, prefrontalni korteks se smiruje, a amigdala (emocionalni centar mozga) preuzima dominaciju.\n\nRezultat: brige se doživljavaju intenzivnije, rješenja se čine nedostupnima, a problemi nesavladivima. Dodajte tome frustraciju zbog neispavanosti, i dobivate savršenu oluju kognitivne pobuđenosti.\n\nDobra vijest: postoje specifične tehnike za upravljanje noćnim brigama, i one su iznenađujuće učinkovite.',
      },
      {
        title: 'Tehnika „Vrijeme za brige"',
        content:
          'Ova tehnika zvuči neobično, ali je klinički dokazano učinkovita:\n\n**Kako funkcionira:**\n1. Odredite fiksno „vrijeme za brige" — 15–20 minuta, svaki dan u isto vrijeme, najmanje 3 sata prije spavanja (npr. 19:00–19:20)\n2. Tijekom tog vremena, AKTIVNO se brinite. Sjednite za stol s papirom i olovkom i zapišite sve što Vas muči\n3. Za svaku brigu pitajte se: „Mogu li nešto poduzeti?" Ako da — zapišite konkretan prvi korak i kada ćete ga napraviti. Ako ne — svjesno „odložite" brigu\n4. Kada istekne 20 minuta, ZAUSTAVITE SE. Zatvorite bilježnicu. To je to za danas.\n\n**Zašto funkcionira:**\nKada se briga pojavi tijekom noći, možete sebi reći: „Već sam se time bavio/la. Sve je zapisano. Sutra u 19:00 ću se ponovno posvetiti tome ako treba." Mozak prihvaća ovo „obećanje" i lakše pušta brigu.\n\nKljučno: ne ignorirate brige — dajete im strukturirano vrijeme i prostor. Ali BIRATE kada ćete se njima baviti, umjesto da one biraju Vas (obično u 3 ujutro).',
        tip: 'Koristite fizičku bilježnicu, ne telefon. Čin pisanja rukom angažira mozak drugačije i pomaže u „eksternalizaciji" briga.',
      },
      {
        title: 'Bilježnica za brige kraj kreveta',
        content:
          'Osim strukturiranog „vremena za brige", držite malu bilježnicu i olovku na noćnom ormariću. Ako se probudite s brigom ili idejom koja ne da mira:\n\n1. Zapišite brigu u jednoj-dvije rečenice (ne elaborirajte)\n2. Zatvorite bilježnicu\n3. Recite sebi: „Zapisano je. Bavit ću se time sutra."\n4. Vratite se tehnici opuštanja\n\n**Zašto pomaže:**\nVaš mozak ima „otvorene petlje" — nezavršene zadatke i neriješene brige koje stalno reciklira (Zeigarnik efekt). Zapisivanjem stvarate „vanjsku memoriju" i mozak dobiva signal da je informacija pohranjena na sigurnom mjestu, pa može prestati s ponavljanjem.\n\nSvjetlost: koristite malu lampicu ili pišite u mraku (nema veze je li čitko — poanta je proces, ne produkt).',
      },
      {
        title: 'Konstruktivni predložak za brige',
        content:
          'Kada se bavite brigama tijekom „vremena za brige", koristite ovaj strukturirani predložak:\n\n**Briga:** ___________\n\n**Je li ovo nešto nad čime imam kontrolu?**\n☐ Da → Koji je najmanji konkretan korak koji mogu poduzeti?\n   Korak: ___________\n   Kada ću to napraviti: ___________\n☐ Ne → Što mogu prihvatiti? Kako se mogu nositi s neizvjesnošću?\n\n**Koliko je ovo realistično na skali 1–10?** ___\n\n**Što bih rekao/la prijatelju koji ima istu brigu?** ___________\n\n**Primjer:**\nBriga: „Možda ću dobiti otkaz jer ne radim dovoljno dobro."\nKontrola: Djelomično da.\nKorak: Razgovarati s nadređenim o očekivanjima. Sutra u 10:00.\nRealističnost: 3/10 — nikad nisam dobio/la negativnu evaluaciju.\nPrijatelju: „Tvoja briga je razumljiva, ali nema dokaza za to. Fokusiraj se na ono što možeš kontrolirati."',
        tip: 'Pitanje „Što bih rekao/la prijatelju?" je izuzetno moćno jer aktivira suosjećanje umjesto samokritike, i gotovo uvijek donosi realniju perspektivu.',
      },
      {
        title: 'Tehnika „Mentalna polica"',
        content:
          'Ova tehnika je posebno korisna za noćne brige koje se pojavljuju u krevetu:\n\n1. Zamislite policu u svojoj glavi — može biti knjižna polica, polica u ormaru ili bilo kakva polica\n2. Kada se pojavi briga, vizualizirajte da je pretvarate u predmet (knjigu, kutiju, fascikl)\n3. Stavite taj predmet na policu\n4. Recite sebi: „Tu ćeš biti kad se sutra vratim po tebe"\n5. Vizualizirajte kako se okrećete i odlazite od police\n\n**Napredna verzija — „Rijeka misli":**\nZamislite da sjedite na obali rijeke. Svaka misao ili briga je list koji pluta niz rijeku. Primijetite list (misao), ali ne ulazite u rijeku da ga dohvatite. Samo ga promatrajte kako prolazi.\n\nOve vizualizacijske tehnike nisu „trik" — one su oblik kognitivnog defuziranja, koncepta iz ACT terapije (Acceptance and Commitment Therapy) koji pomaže stvoriti psihološku distancu od neželjenih misli.\n\n**Ključna razlika: potiskivanje vs. odlaganje**\nNe pokušavamo potisnuti misli (to ne funkcionira — pokušajte NE misliti na ružičastog slona). Umjesto toga, PRIMJEĆUJEMO misao, PRIHVAĆAMO da postoji i BIRAMO da ćemo joj se posvetiti kasnije. To je fundamentalno drugačiji pristup koji mozak prihvaća.',
      },
    ],
    keyTakeaways: [
      'Brige su noću intenzivnije jer emocionalni mozak dominira dok racionalni „spava". To je normalno, ne znak slabosti.',
      'Strukturirano „vrijeme za brige" (15–20 min, 3+ sata prije spavanja) daje brigama prostor, ali na VAŠE uvjete.',
      'Bilježnica kraj kreveta prekida „otvorene petlje" — zapisivanje signalizira mozgu da je informacija pohranjena.',
    ],
  },

  // ────────────────────────────────────────────
  // Sesija 8 — Pregled i održavanje
  // ────────────────────────────────────────────
  {
    id: 8,
    title: 'Pregled i održavanje',
    subtitle: 'Dugoročni plan za dobar san',
    duration: '15 min čitanja',
    interactiveComponent: 'isi-recheck',
    sections: [
      {
        title: 'Provjerite napredak',
        content:
          'Stigli ste do kraja programa — čestitamo na Vašoj predanosti! Vrijeme je da pogledate koliko ste napredovali.\n\nIspunite ISI upitnik ponovno i usporedite rezultat s onim na početku programa. Većina osoba koje dosljedno primjenjuju KBT-I tehnike bilježi poboljšanje od 6–10 bodova na ISI skali.\n\nOsim ISI rezultata, razmislite o sljedećim pitanjima:\n• Koliko brzo sada uspijavate zaspati u usporedbi s početkom?\n• Je li se smanjio broj buđenja tijekom noći?\n• Osjećate li se odmornije ujutro?\n• Je li se smanjila Vaša anksioznost oko spavanja?\n• Jeste li prestali „pokušavati" spavati i dopustili da se san dogodi prirodno?\n\nAko su odgovori na većinu ovih pitanja pozitivni — sjajno napredujete. Ako niste zadovoljni napretkom, ne obeshrabrujte se — nastavite primjenjivati tehnike i razmislite o profesionalnoj KBT-I terapiji za dodatnu podršku.',
      },
      {
        title: 'Pregled naučenih tehnika',
        content:
          'Podsjetimo se na sve alate koje sada imate na raspolaganju:\n\n**1. Higijena sna (Sesija 2)**\n• Optimalno okruženje: 18–20 °C, tama, tišina\n• Bez kofeina 6–8 h i alkohola 3–4 h prije sna\n• Jutarnja svjetlost, redovita tjelovježba\n• Večernja rutina 30–60 minuta prije sna\n\n**2. Kontrola stimulusa (Sesija 3)**\n• Krevet samo za san (i intimnost)\n• U krevet samo kad ste pospani\n• Pravilo 20 minuta — ustanite ako ne zasipate\n• Konzistentno vrijeme buđenja svaki dan\n\n**3. Restrikcija sna (Sesija 4)**\n• Prozor za spavanje temeljen na stvarnom vremenu sna\n• Tjedna prilagodba na temelju učinkovitosti sna\n• Sigurnosni minimum: 5 sati\n\n**4. Kognitivna restrukturacija (Sesija 5)**\n• Prepoznavanje automatskih negativnih misli\n• Preispitivanje dokaza i preoblikovanje\n• Paradoksalna intencija\n\n**5. Tehnike opuštanja (Sesija 6)**\n• PMR, 4-7-8 disanje, body scan, vizualizacija, autogeni trening\n\n**6. Upravljanje brigama (Sesija 7)**\n• Strukturirano „vrijeme za brige"\n• Bilježnica kraj kreveta\n• Tehnika „mentalna polica"',
      },
      {
        title: 'Plan dugoročnog održavanja',
        content:
          'KBT-I nije „tečaj" koji završite i zaboravite — to su vještine za cijeli život. Evo kako ih održati:\n\n**Svakodnevne navike (trajno):**\n• Konzistentno vrijeme buđenja (±30 minuta vikendom)\n• Jutarnja svjetlost (15–30 minuta)\n• Krevet samo za san\n• Večernja rutina\n\n**Tjedne provjere:**\n• Pregledajte dnevnik spavanja — je li učinkovitost sna ≥85 %?\n• Ako padne ispod 85 %, primislite na restrikciju sna\n\n**Mjesečne provjere:**\n• Ispunite ISI upitnik jednom mjesečno\n• Prepoznajte rane znakove pogoršanja\n\n**Sezonske provjere:**\n• U stresnim periodima (promjena posla, bolest, životni događaji) pojačajte primjenu tehnika PREVENTIVNO — ne čekajte da se nesanica vrati\n\n**„Booster" sesije:**\nAko osjetite da se nesanica vraća, ne paničarite. Vratite se na ovaj program: pročitajte relevantnu sesiju, reaktivirajte tehnike. Većina ljudi može sama upravljati povremenim pogoršanjima pomoću naučenih vještina.',
        tip: 'Zapišite svoju „top 3 tehnike" — one koje su Vam najbolje funkcionirale. U slučaju pogoršanja, to je Vaš prvi korak.',
      },
      {
        title: 'Kada se obratiti liječniku',
        content:
          'Ovaj program je izuzetno učinkovit za većinu osoba s nesanicom, ali postoje situacije u kojima je potrebna profesionalna pomoć:\n\n**Obratite se liječniku ako:**\n• Nakon 6–8 tjedana dosljedne primjene tehnika ne vidite poboljšanje\n• Imate simptome drugih poremećaja spavanja: glasno hrkanje, prestanci disanja, neodoljiv nagon za micanjem nogu, napadi pospanosti tijekom dana\n• Nesanica je povezana s depresijom, anksioznošću ili drugim psihijatrijskim stanjem\n• Koristite lijekove za spavanje dulje od 4 tjedna i želite ih postupno ukinuti\n• Osjećate da je nesanica simptom nekog drugog zdravstvenog problema\n\n**Što očekivati od liječnika:**\n• Vaš liječnik može Vas uputiti specijalistu za medicinu spavanja\n• Moguća je polysomnografija (studija sna) za isključivanje drugih poremećaja\n• Individualna KBT-I terapija s terapeutom može biti učinkovitija od samousmjerenog programa\n• U nekim slučajevima, kratkotrajna farmakoterapija u kombinaciji s KBT-I može biti korisna\n\n**Resursi u Hrvatskoj:**\n• Centri za medicinu spavanja postoje u većim kliničkim bolnicama (KBC Zagreb, KBC Split, KBC Rijeka)\n• Liječnik obiteljske medicine je prvi korak — može Vas uputiti na daljnju obradu',
      },
      {
        title: 'Prevencija povratka nesanice',
        content:
          'Nesanica može biti epizodična — čak i nakon uspješnog liječenja, stresni životni događaji mogu ponovno pokrenuti problem. To je normalno i NE znači da je liječenje propalo.\n\n**Znakovi ranog upozorenja:**\n• Počinjete provoditi više vremena budni u krevetu\n• Vraćate se na stare navike (gledanje telefona u krevetu, nepravilan raspored)\n• Osjećate pojačanu anksioznost oko spavanja\n• Počinjete izbjegavati obaveze „jer sam preumorna/preumoran"\n\n**Što napraviti:**\n1. Prepoznajte rano — ne čekajte da se problem razvije\n2. Odmah reaktivirajte kontrolu stimulusa i restrikciju sna\n3. Primijenite „vrijeme za brige" ako su brige prisutne\n4. Pročitajte relevantnu sesiju iz programa kao „booster"\n5. Ako se ne poboljša unutar 2 tjedna, obratite se liječniku\n\n**Završna poruka:**\nSan je prirodna sposobnost Vašeg tijela. Nesanica nije „kvar" — to je naučeni obrazac koji se može od-učiti. Sada imate znanje i alate za to. Budite strpljivi, budite dosljedni i budite ljubazni prema sebi u tom procesu.\n\nŽelimo Vam miran i obnavljajući san. Laku noć! 🌙',
      },
    ],
    keyTakeaways: [
      'Ispunite ISI upitnik ponovno i usporedite s početkom — kvantificirajte svoj napredak.',
      'KBT-I vještine su za cijeli život. Konzistentno vrijeme buđenja i krevet samo za san su temelji trajnog dobrog sna.',
      'Ako se nesanica vrati, ne paničarite — reaktivirajte naučene tehnike i obratite se liječniku ako je potrebno.',
    ],
  },
]
