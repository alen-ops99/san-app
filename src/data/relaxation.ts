export interface RelaxationTechnique {
  id: string
  title: string
  subtitle: string
  duration: string
  icon: string
  description: string
  steps: { instruction: string; duration?: number }[]
  type: 'breathing' | 'muscle' | 'mindfulness' | 'imagery' | 'autogenic'
}

export const relaxationTechniques: RelaxationTechnique[] = [
  // ────────────────────────────────────────────
  // 1. Progresivna mišićna relaksacija (PMR)
  // ────────────────────────────────────────────
  {
    id: 'pmr',
    title: 'Progresivna mišićna relaksacija',
    subtitle: 'Napnite i opustite 16 mišićnih skupina',
    duration: '20 min',
    icon: 'Zap',
    description:
      'Progresivna mišićna relaksacija (PMR) temelji se na principu da namjerno napinjanje, a zatim opuštanje mišića, dovodi do dublje relaksacije nego sam pokušaj opuštanja. Razvijena 1930-ih godina, danas je jedna od najbolje istraživanih tehnika za poboljšanje sna. Sistematski prolazite kroz 16 mišićnih skupina, napinjući svaku 5 sekundi i opuštajući 15–20 sekundi, primjećujući razliku između napetosti i opuštenosti.',
    type: 'muscle',
    steps: [
      {
        instruction:
          'Zauzimte udoban položaj, ležeći na leđima ili sjedeći u naslonjaču. Zatvorite oči. Napravite tri duboka udaha i izdaha da se smirite.',
        duration: 20,
      },
      {
        instruction:
          'DESNO STOPALO: Savijte prste desnog stopala prema dolje, napinjući mišiće stopala. Držite napeto... osjećajte napetost...',
        duration: 5,
      },
      {
        instruction:
          'Opustite desno stopalo. Pustite svu napetost. Primijetite razliku između napetosti i opuštenosti. Osjećajte kako se toplina i opuštenost šire kroz stopalo.',
        duration: 20,
      },
      {
        instruction:
          'LIJEVO STOPALO: Savijte prste lijevog stopala prema dolje, napinjući mišiće stopala. Držite napeto...',
        duration: 5,
      },
      {
        instruction:
          'Opustite lijevo stopalo. Pustite svu napetost. Osjećajte ugodnu opuštenost u oba stopala.',
        duration: 20,
      },
      {
        instruction:
          'DESNA POTKOLJENICA: Napnite mišiće desne potkoljenice povlačeći prste prema sebi. Osjećajte napetost u listu...',
        duration: 5,
      },
      {
        instruction:
          'Opustite desnu potkoljenicu. Neka noga postane potpuno opuštena i teška.',
        duration: 20,
      },
      {
        instruction:
          'LIJEVA POTKOLJENICA: Napnite mišiće lijeve potkoljenice povlačeći prste prema sebi. Držite...',
        duration: 5,
      },
      {
        instruction:
          'Opustite lijevu potkoljenicu. Primijetite kako su obje noge sada opuštene i teške.',
        duration: 20,
      },
      {
        instruction:
          'DESNA NATKOLJENICA: Napnite mišiće desne natkoljenice pritiskom koljena prema dolje. Osjećajte napetost u prednjem dijelu bedra...',
        duration: 5,
      },
      {
        instruction:
          'Opustite desnu natkoljenicu. Pustite mišić da se potpuno opusti.',
        duration: 20,
      },
      {
        instruction:
          'LIJEVA NATKOLJENICA: Napnite mišiće lijeve natkoljenice pritiskom koljena prema dolje. Držite...',
        duration: 5,
      },
      {
        instruction:
          'Opustite lijevu natkoljenicu. Obje noge su sada potpuno opuštene — od prstiju do kukova.',
        duration: 20,
      },
      {
        instruction:
          'STRAŽNJICA (GLUTEUSI): Stisnite mišiće stražnjice zajedno. Držite čvrsto napeto...',
        duration: 5,
      },
      {
        instruction:
          'Opustite stražnjicu. Osjećajte kako se donji dio tijela potpuno opušta i postaje težak.',
        duration: 20,
      },
      {
        instruction:
          'TRBUH: Napnite trbušne mišiće kao da očekujete udarac u trbuh. Uvucite trbuh i držite...',
        duration: 5,
      },
      {
        instruction:
          'Opustite trbuh. Neka se trbuh potpuno opusti. Primijetite razliku.',
        duration: 20,
      },
      {
        instruction:
          'PRSA I LEĐA: Duboko udahnite, napnite mišiće prsa i gornjeg dijela leđa. Blago savinite leđa prema naprijed. Držite...',
        duration: 5,
      },
      {
        instruction:
          'Izdahnite i opustite prsa i leđa. Osjećajte kako se opuštenost širi iz centra tijela.',
        duration: 20,
      },
      {
        instruction:
          'DESNA ŠAKA I PODLAKTICA: Stisnite desnu šaku u pesnicu i napnite podlakticu. Držite čvrsto...',
        duration: 5,
      },
      {
        instruction:
          'Opustite desnu šaku i podlakticu. Raširite prste i osjećajte toplinu i opuštenost.',
        duration: 20,
      },
      {
        instruction:
          'LIJEVA ŠAKA I PODLAKTICA: Stisnite lijevu šaku u pesnicu i napnite podlakticu. Držite...',
        duration: 5,
      },
      {
        instruction:
          'Opustite lijevu šaku i podlakticu. Obje ruke su opuštene i teške.',
        duration: 20,
      },
      {
        instruction:
          'DESNA NADLAKTICA (BICEPS): Savijte desnu ruku u laktu i napnite biceps. Držite...',
        duration: 5,
      },
      {
        instruction:
          'Opustite desnu nadlakticu. Neka ruka padne prirodno uz tijelo.',
        duration: 20,
      },
      {
        instruction:
          'LIJEVA NADLAKTICA (BICEPS): Savijte lijevu ruku u laktu i napnite biceps. Držite...',
        duration: 5,
      },
      {
        instruction:
          'Opustite lijevu nadlakticu. Obje ruke su potpuno opuštene od ramena do prstiju.',
        duration: 20,
      },
      {
        instruction:
          'RAMENA: Podignite oba ramena prema ušima, što više možete. Osjećajte napetost u ramenima i trapezijusu...',
        duration: 5,
      },
      {
        instruction:
          'Spustite ramena i potpuno ih opustite. Osjećajte kako se napetost otapa iz ramena — mjesta gdje mnogi od nas „nosimo" stres.',
        duration: 20,
      },
      {
        instruction:
          'VRAT (STRAŽNJI DIO): Nježno pritisnite glavu prema natrag (prema jastuku ili naslonu). Osjećajte napetost u stražnjem dijelu vrata...',
        duration: 5,
      },
      {
        instruction:
          'Opustite vrat. Neka se glava prirodno smjesti u udoban položaj.',
        duration: 20,
      },
      {
        instruction:
          'ČELJUST: Stisnite zube zajedno i napnite mišiće čeljusti. Držite...',
        duration: 5,
      },
      {
        instruction:
          'Opustite čeljust. Neka Vam usta budu lagano otvorena, čeljust potpuno opuštena.',
        duration: 20,
      },
      {
        instruction:
          'LICE — OČI I NOS: Stisnite oči i namrštite nos. Osjećajte napetost oko očiju i nosa...',
        duration: 5,
      },
      {
        instruction:
          'Opustite lice. Neka se sva napetost oko očiju i nosa otopi.',
        duration: 20,
      },
      {
        instruction:
          'ČELO: Podignite obrve što više prema gore, kao da ste iznenađeni. Osjećajte napetost na čelu...',
        duration: 5,
      },
      {
        instruction:
          'Opustite čelo. Neka čelo bude potpuno glatko i opušteno.',
        duration: 20,
      },
      {
        instruction:
          'Sada primijetite cijelo tijelo. Od stopala do vrha glave, svaki dio je opušten i težak. Osjećajte toplinu i mir koji se šire kroz cijelo tijelo. Ostanite u ovom stanju koliko god želite. Dišite mirno i prirodno.',
        duration: 60,
      },
    ],
  },

  // ────────────────────────────────────────────
  // 2. 4-7-8 Disanje
  // ────────────────────────────────────────────
  {
    id: 'breathing-478',
    title: '4-7-8 Disanje',
    subtitle: 'Tehnika dubokog disanja za brzo smirivanje',
    duration: '5 min',
    icon: 'Wind',
    description:
      'Tehnika 4-7-8 disanja temelji se na drevnoj pranayama praksi, a popularizirao ju je dr. Andrew Weil. Produljeni izdah aktivira vagalni živac i parasimpatički živčani sustav, čime se usporava puls, snižava krvni tlak i potiče opuštanje. Istraživanja pokazuju da već 4 ciklusa mogu značajno smanjiti razinu anksioznosti. Ova tehnika posebno je korisna jer ju možete primijeniti bilo gdje — u krevetu, na poslu ili u stresnim situacijama.',
    type: 'breathing',
    steps: [
      {
        instruction:
          'Zauzimte udoban položaj. Možete ležati ili sjediti. Položite vrh jezika na nepce, odmah iza gornjih prednjih zuba. Jezik će ostati u tom položaju tijekom cijele vježbe.',
        duration: 10,
      },
      {
        instruction:
          'Potpuno izdahnite kroz usta s blagim zvukom „fuu", ispuštajući sav zrak iz pluća.',
        duration: 5,
      },
      {
        instruction:
          'CIKLUS 1: Udahnite tiho kroz nos brojeći u sebi do 4... 1... 2... 3... 4.',
        duration: 4,
      },
      {
        instruction:
          'Zadržite dah brojeći do 7... 1... 2... 3... 4... 5... 6... 7.',
        duration: 7,
      },
      {
        instruction:
          'Izdahnite potpuno kroz usta sa zvukom „fuu" brojeći do 8... 1... 2... 3... 4... 5... 6... 7... 8.',
        duration: 8,
      },
      {
        instruction:
          'CIKLUS 2: Udahnite tiho kroz nos... 1... 2... 3... 4.',
        duration: 4,
      },
      {
        instruction: 'Zadržite dah... 1... 2... 3... 4... 5... 6... 7.',
        duration: 7,
      },
      {
        instruction:
          'Izdahnite potpuno kroz usta... 1... 2... 3... 4... 5... 6... 7... 8.',
        duration: 8,
      },
      {
        instruction:
          'CIKLUS 3: Udahnite tiho kroz nos... 1... 2... 3... 4.',
        duration: 4,
      },
      {
        instruction: 'Zadržite dah... 1... 2... 3... 4... 5... 6... 7.',
        duration: 7,
      },
      {
        instruction:
          'Izdahnite potpuno kroz usta... 1... 2... 3... 4... 5... 6... 7... 8.',
        duration: 8,
      },
      {
        instruction:
          'CIKLUS 4: Udahnite tiho kroz nos... 1... 2... 3... 4.',
        duration: 4,
      },
      {
        instruction: 'Zadržite dah... 1... 2... 3... 4... 5... 6... 7.',
        duration: 7,
      },
      {
        instruction:
          'Izdahnite potpuno kroz usta... 1... 2... 3... 4... 5... 6... 7... 8.',
        duration: 8,
      },
      {
        instruction:
          'Primijetite kako se osjećate. Vaš puls se usporio, disanje je dublje, tijelo je opuštenije. Ostanite u ovom stanju koliko god želite, dišući prirodno.',
        duration: 15,
      },
    ],
  },

  // ────────────────────────────────────────────
  // 3. Body Scan
  // ────────────────────────────────────────────
  {
    id: 'body-scan',
    title: 'Body Scan',
    subtitle: 'Mindfulness pregled tijela od stopala do glave',
    duration: '15 min',
    icon: 'ScanLine',
    description:
      'Body scan je mindfulness tehnika u kojoj sustavno usmjeravate pažnju na različite dijelove tijela, primjećujući osjete bez pokušaja da ih promijenite. Preusmjeravajući pažnju s misli na tjelesne osjete, smanjujete kognitivnu pobuđenost koja održava budnost. Istraživanje objavljeno u JAMA Internal Medicine (2015.) pokazalo je da mindfulness značajno poboljšava kvalitetu sna. Ova tehnika je posebno korisna za osobe koje imaju problem s „jurećim mislima" u krevetu.',
    type: 'mindfulness',
    steps: [
      {
        instruction:
          'Legnite na leđa u udoban položaj. Ruke su uz tijelo, dlanovi okrenuti prema gore. Zatvorite oči. Napravite tri duboka udaha i izdaha, svjesno otpuštajući napetost sa svakim izdahom.',
        duration: 20,
      },
      {
        instruction:
          'Usmjerite pažnju na STOPALA. Primijetite sve osjete — toplinu, hladnoću, tlak, trnce ili potpuni izostanak osjeta. Ne pokušavajte ništa promijeniti — samo promatrajte. Dišite prema stopalima.',
        duration: 40,
      },
      {
        instruction:
          'Pomaknite pažnju na GLEŽNJEVE i POTKOLJENICE. Primijetite osjete u listovima — jesu li opušteni ili napeti? Samo primijetite, bez prosuđivanja.',
        duration: 40,
      },
      {
        instruction:
          'Pažnja se pomiče na KOLJENA i NATKOLJENICE. Osjećate li težinu nogu na podlozi? Toplinu? Primijetite sve osjete i pustite ih.',
        duration: 40,
      },
      {
        instruction:
          'Usmjerite pažnju na KUKOVE i ZDJELICU. Ovo je područje u kojem mnogi od nas nesvjesno drže napetost. Primijetite kontakt tijela s podlogom. Dopustite tom dijelu tijela da se opusti.',
        duration: 40,
      },
      {
        instruction:
          'Pažnja se pomiče na DONJI DIO LEĐA i TRBUH. Primijetite pokrete trbuha s disanjem — blago podizanje pri udahu, spuštanje pri izdahu. Nema potrebe kontrolirati disanje — samo promatrajte.',
        duration: 50,
      },
      {
        instruction:
          'Usmjerite pažnju na GORNJI DIO LEĐA i PRSA. Osjećajte širenje prsnog koša pri disanju. Primijetite sve napetosti i s izdahom ih svjesno pustite.',
        duration: 50,
      },
      {
        instruction:
          'Pažnja se pomiče na PRSTE RUKU, DLANOVE i ŠAKE. Primijetite osjete — toplinu, trnce, pulsiranje. Svaki prst pojedinačno.',
        duration: 40,
      },
      {
        instruction:
          'Usmjerite pažnju na PODLAKTICE, LAKTOVE i NADLAKTICE. Primijetite težinu ruku na podlozi. Pustite svu napetost iz ruku.',
        duration: 40,
      },
      {
        instruction:
          'Pažnja se pomiče na RAMENA i VRAT. Ovo su područja koja „nose" stres. Primijetite svaku napetost. S izdahom, zamislite da se napetost otapa poput leda na suncu.',
        duration: 50,
      },
      {
        instruction:
          'Usmjerite pažnju na ČELJUST i USTA. Jesu li zubi stisnuti? Opustite čeljust, neka usta budu lagano otvorena. Primijetite jezik, usne, unutrašnjost usta.',
        duration: 40,
      },
      {
        instruction:
          'Pažnja se pomiče na OČI, OBRAZE i NOS. Opustite mišiće oko očiju. Neka oči mirno leže u očnim dupljama. Primijetite zrak koji ulazi kroz nos pri udahu.',
        duration: 40,
      },
      {
        instruction:
          'Usmjerite pažnju na ČELO i TJEME. Opustite čelo — neka bude glatko. Primijetite osjete na vrhu glave.',
        duration: 40,
      },
      {
        instruction:
          'Sada proširite pažnju na CIJELO TIJELO odjednom. Od stopala do vrha glave — jedno cjelovito, opušteno tijelo. Dišite mirno. Osjećajte mir i opuštenost.',
        duration: 60,
      },
      {
        instruction:
          'Ostanite u ovom stanju koliko želite. Ako ste u krevetu, dopustite snu da dođe prirodno. Ako ste budni, polagano pomaknite prste ruku i nogu, protegnite se i otvorite oči kada budete spremni.',
        duration: 30,
      },
    ],
  },

  // ────────────────────────────────────────────
  // 4. Vođena vizualizacija
  // ────────────────────────────────────────────
  {
    id: 'guided-imagery',
    title: 'Vođena vizualizacija',
    subtitle: 'Zamislite mirnu plažu pri zalasku sunca',
    duration: '12 min',
    icon: 'Sunset',
    description:
      'Vođena vizualizacija koristi moć mašte za postizanje duboke opuštenosti. Istraživanja neuroznanosti pokazuju da zamišljanje opuštajućeg okruženja aktivira slične moždane regije kao stvarno iskustvo, čime se smanjuje razina kortizola i aktivira parasimpatički živčani sustav. Uključivanjem svih osjetila — vida, sluha, mirisa, dodira — stvarate bogato unutarnje iskustvo koje preusmjerava um s briga i olakšava prelazak u san.',
    type: 'imagery',
    steps: [
      {
        instruction:
          'Zatvorite oči i zauzimte udoban položaj. Napravite tri duboka udaha i izdaha. Sa svakim izdahom, pustite napetost i svakodnevne brige. Zamislite da ih ostavljate daleko iza sebe.',
        duration: 20,
      },
      {
        instruction:
          'Zamislite da se nalazite na prekrasnoj, mirnoj plaži. Sunce je nisko nad horizontom, sprema se zaći. Nebo je obojeno toplim nijansama — zlatnom, narančastom, nježno ružičastom. Osjećajte toplinu zadnjih sunčevih zraka na Vašem licu.',
        duration: 40,
      },
      {
        instruction:
          'Stojite na finom, toplom pijesku. Osjećajte kako se pijesak oblikuje oko Vaših bosih stopala — topao i mekan. Polagano zaronite prste u pijesak. Osjećajte teksturu svakog zrnca.',
        duration: 40,
      },
      {
        instruction:
          'Slušajte zvukove oko sebe. Ritmičko šuštanje valova koji se nježno razbijaju o obalu... jedno za drugim... u savršenom ritmu. Zvuk galebova u daljini. Lagano šuštanje palmi na laganom povjetarcu.',
        duration: 50,
      },
      {
        instruction:
          'Udahnite duboko. Osjećajte miris mora — slankast, svjež, čist. U zraku se miješa miris morske soli s blagim mirisom tropskog cvijeća u blizini. Svaki udah donosi svježinu i mir.',
        duration: 40,
      },
      {
        instruction:
          'Polako hodajte prema vodi. Voda je topla i kristalno čista. Valovi Vam nježno dodiruju stopala — naprijed i nazad, naprijed i nazad. Svaki val donosi opuštenost i odnosi napetost.',
        duration: 50,
      },
      {
        instruction:
          'Promatrajte zalazak sunca. Sunce se polako spušta prema horizontu, boje neba postaju dublje — ljubičasta, tamno ružičasta, indigo. Osjećajte kako se sa zalaskom sunca i Vaša energija smiruje. Sve je tiho i mirno.',
        duration: 50,
      },
      {
        instruction:
          'Sjednite na mekani pijesak. Osjećajte potporu pijeska ispod sebe — topao i udoban. Pogled Vam počiva na horizontu. Um je miran, misli su tihe. Samo Vi i more, i savršeni mir.',
        duration: 50,
      },
      {
        instruction:
          'Sunce je zašlo. Nebo je sada nježno tamno plavo s prvim zvijezdama. Mjesec se pojavljuje, blag i srebrn, obasjavajući more mekanim svjetlom. Noć je topla i sigurna.',
        duration: 50,
      },
      {
        instruction:
          'Legnite na mekani pijesak i promatrajte zvijezde. Jedna po jedna, sve ih je više. Osjećajte se zaštićeno u ovom ogromnom, mirnom svemiru. Sa svakim udahom dublje se opuštate.',
        duration: 50,
      },
      {
        instruction:
          'Zvuk valova je Vaša uspavanka. Naprijed... nazad... naprijed... nazad... Dopustite tom ritmu da Vas nosi prema snu. Sigurni ste. Mirni ste. Možete se potpuno prepustiti.',
        duration: 60,
      },
    ],
  },

  // ────────────────────────────────────────────
  // 5. Autogeni trening
  // ────────────────────────────────────────────
  {
    id: 'autogenic',
    title: 'Autogeni trening',
    subtitle: '6 standardnih vježbi za duboku relaksaciju',
    duration: '15 min',
    icon: 'Brain',
    description:
      'Autogeni trening razvio je njemački psihijatar Johannes Schultz 1930-ih godina. Temelji se na samohipnotičkim formulama koje potiču specifične tjelesne osjete — težinu, toplinu, mirnoću — dovodeći do duboke psihofizičke relaksacije. Šest standardnih vježbi postupno aktiviraju parasimpatički živčani sustav. S redovitom praksom (2–3 tjedna), samo izgovaranje formula može automatski izazvati opuštanje. Tehnika je široko korištena u europskoj kliničkoj praksi za liječenje nesanice, anksioznosti i psihosomatskih tegoba.',
    type: 'autogenic',
    steps: [
      {
        instruction:
          'Zauzimte udoban položaj — ležeći na leđima ili sjedeći u naslonjaču. Zatvorite oči. Napravite nekoliko dubokih udaha i izdaha. Recite sebi tiho: „Miran/mirna sam. Potpuno sam miran/mirna."',
        duration: 20,
      },
      {
        instruction:
          'VJEŽBA 1 — TEŽINA. Usmjerite pažnju na desnu ruku. Tiho ponavljajte: „Moja desna ruka je teška." Zamislite da je ruka potpuno opuštena i teška, kao da je od olova. „Moja desna ruka je teška... teška... potpuno teška..."',
        duration: 30,
      },
      {
        instruction:
          '„Moja lijeva ruka je teška." Osjećajte težinu i opuštenost u lijevoj ruci. „Obje ruke su teške... teške i opuštene..."',
        duration: 30,
      },
      {
        instruction:
          '„Moja desna noga je teška." Osjećajte težinu u desnoj nozi. „Moja lijeva noga je teška." „Sve četiri ekstremiteta su teške... teške i opuštene... Cijelo tijelo je teško i opušteno."',
        duration: 40,
      },
      {
        instruction:
          'VJEŽBA 2 — TOPLINA. „Moja desna ruka je topla." Zamislite da topla struja teče kroz desnu ruku. „Moja desna ruka je topla... ugodno topla..."',
        duration: 30,
      },
      {
        instruction:
          '„Moja lijeva ruka je topla... Obje ruke su tople..." „Moja desna noga je topla... Moja lijeva noga je topla..." „Cijelo tijelo je toplo i opušteno..."',
        duration: 40,
      },
      {
        instruction:
          'VJEŽBA 3 — SRCE. Usmjerite pažnju na svoje srce. Tiho ponavljajte: „Moje srce kuca mirno i ravnomjerno." Ne pokušavajte kontrolirati rad srca — samo primijetite njegov ujednačeni, prirodni ritam. „Mirno... ravnomjerno... pouzdano..."',
        duration: 40,
      },
      {
        instruction:
          'VJEŽBA 4 — DISANJE. Usmjerite pažnju na disanje. Tiho ponavljajte: „Dišem mirno i prirodno." Ne kontrolirajte disanje — samo ga promatrajte. „Dišem mirno... Disanje je lagano... Disanje me opušta..."',
        duration: 40,
      },
      {
        instruction:
          'VJEŽBA 5 — TRBUŠNA TOPLINA. Usmjerite pažnju na trbuh, na područje solarnog pleksusa. Tiho ponavljajte: „Moj trbuh je topao." Zamislite ugodnu toplinu koja se širi iz centra trbuha. „Trbuh je topao... ugodno topao... toplina se širi..."',
        duration: 40,
      },
      {
        instruction:
          'VJEŽBA 6 — HLADNO ČELO. Usmjerite pažnju na čelo. Tiho ponavljajte: „Moje čelo je ugodno hladno." Zamislite lagani, osvježavajući povjetarac na čelu. „Čelo je hladno... ugodno hladno... jasno i hladno..."',
        duration: 40,
      },
      {
        instruction:
          'Sada ponovite sve formule zajedno: „Ruke i noge su teške i tople... Srce kuca mirno... Dišem mirno... Trbuh je topao... Čelo je ugodno hladno... Potpuno sam miran/mirna... Potpuno sam opušten/opuštena..."',
        duration: 50,
      },
      {
        instruction:
          'Ostanite u ovom stanju duboke opuštenosti koliko god želite. Ako ste u krevetu, dopustite snu da dođe prirodno. Ako se želite vratiti u budno stanje, polako stisnite šake, duboko udahnite, protegnite se i otvorite oči.',
        duration: 30,
      },
    ],
  },
]
