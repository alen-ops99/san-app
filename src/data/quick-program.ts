import type { Session } from './sessions'

export const quickSessions: Session[] = [
  // ────────────────────────────────────────────
  // Brza sesija 1 — Osnovne navike i kontrola stimulusa
  // ────────────────────────────────────────────
  {
    id: 1,
    title: 'Osnovne navike za bolji san',
    subtitle: 'Higijena sna i kontrola stimulusa u praksi',
    duration: '12 min čitanja',
    interactiveComponent: 'sleep-diary',
    sections: [
      {
        title: 'Zašto ne spavate dobro?',
        content:
          'Nesanica je najčešći poremećaj spavanja i pogađa oko 10–15 % odrasle populacije. Ako ste ovdje, vjerojatno ste već pokušali razne savjete bez uspjeha. Dobra vijest: postoje znanstveno dokazane tehnike koje stvarno funkcioniraju.\n\nNajčešći razlog zašto nesanica traje jest taj što razvijamo navike koje je nesvjesno održavaju — predugo ležanje u krevetu, nepravilan raspored, korištenje kreveta za sve osim sna. U ove dvije brze sesije naučit ćete najvažnije korake za prekidanje tog začaranog kruga.',
      },
      {
        title: 'Okruženje za spavanje',
        content:
          'Optimalno okruženje za spavanje temelji se na tri stupa:\n\n**Temperatura: 18–20 °C**\nVaše tijelo mora lagano sniziti temperaturu za početak sna. Previše topla soba to otežava. Provjetrite spavaću sobu prije spavanja i koristite odgovarajuću posteljinu.\n\n**Tama: potpuna**\nSvjetlost potiskuje proizvodnju melatonina. Koristite zacrnjenice (blackout zavjese) ili masku za oči. Pokrijte LED indikatore na uređajima.\n\n**Tišina (ili bijeli šum)**\nAko živite u bučnom okruženju, čepići za uši ili aplikacija za bijeli šum mogu maskirati ometajuće zvukove.\n\nOva tri jednostavna koraka već mogu napraviti zamjetnu razliku.',
        tip: 'Učinite promjene VEČERAS — ne čekajte savršene uvjete. Čak i djelomična poboljšanja pomažu.',
      },
      {
        title: 'Što izbjegavati',
        content:
          '**Kofein** — Poluživot kofeina je 5–7 sati. Kava u 15:00 znači da u 22:00 još imate pola kofeina u tijelu. Preporuka: bez kofeina nakon 14:00. To uključuje čaj, gazirane napitke i čokoladu.\n\n**Alkohol** — Mnogi koriste alkohol za usnivanje, ali on drastično narušava kvalitetu sna: smanjuje REM san, povećava buđenja u drugoj polovici noći. Izbjegavajte alkohol 3–4 sata prije sna.\n\n**Ekrani** — Plava svjetlost pametnih telefona i kompjutera potiskuje melatonin. Jednako važno: sadržaj na ekranima (vijesti, društvene mreže) aktivira mozak. Preporuka: bez ekrana 60–90 minuta prije sna.\n\n**Teški obroci** — Izbjegavajte obilne večere 2–3 sata prije sna. Lagan zalogaj (banana, šaka orašastih plodova) je u redu.',
      },
      {
        title: 'Pravila za krevet — kontrola stimulusa',
        content:
          'Ovo su najmoćnija pravila za ponovnu izgradnju veze krevet = san:\n\n**1. Krevet samo za san (i intimnost)**\nNe čitajte, ne gledajte telefon, ne gledate televiziju, ne jedite i ne radite u krevetu. Vaš mozak mora krevet prepoznavati isključivo kao mjesto za san.\n\n**2. Idite u krevet samo kad ste POSPANI**\nPostoji razlika između umora i pospanosti. Pospanost je onaj osjećaj kad Vam se oči zatvaraju. Idite u krevet tek tada — čak i ako je kasnije nego inače.\n\n**3. Pravilo 20 minuta**\nAko ne zaspite u otprilike 20 minuta (ne gledajte sat — procijenite), ustanite i idite u drugu prostoriju. Radite nešto tiho i opuštajuće pod prigušenim svjetlom. Vratite se u krevet tek kad ponovno osjetite pospanost. Ponovite po potrebi.\n\n**4. Konzistentno buđenje**\nUstanite SVAKO jutro u isto vrijeme — uključujući vikende. Ovo je jedan od najvažnijih koraka jer stabilizira Vaš biološki sat.',
        tip: 'Pripremite „noćno gnijezdo" unaprijed — ugodan kutak izvan spavaće sobe s dekom, lampicom i knjigom za slučaj da morate ustati iz kreveta.',
      },
      {
        title: 'Dnevnik spavanja',
        content:
          'Dnevnik spavanja najvažniji je alat u ovom programu. Svako jutro, odmah nakon buđenja, zabilježite:\n\n• Vrijeme odlaska u krevet\n• Procijenjeno vrijeme usnivanja\n• Broj i trajanje buđenja tijekom noći\n• Vrijeme konačnog buđenja i ustajanja\n• Subjektivna kvaliteta sna (1–5)\n\nIz ovih podataka izračunavamo **učinkovitost sna**:\nUčinkovitost (%) = (ukupno vrijeme sna ÷ ukupno vrijeme u krevetu) × 100\n\nCilj je učinkovitost ≥85 %. Koristite dnevnik spavanja u aplikaciji San za automatsko praćenje.\n\nNakon tjedan dana vođenja dnevnika, imat ćete jasnu sliku o svom snu — i moći ćete procijeniti treba li Vam puni 8-tjedni program.',
        tip: 'Ne gledajte na sat tijekom noći — samo procjenjujte. Gledanje u sat povećava anksioznost i pogoršava nesanicu.',
      },
    ],
    keyTakeaways: [
      'Spavaća soba: 18–20 °C, potpuna tama, tišina. Bez kofeina nakon 14:00, bez alkohola 3–4 h prije sna.',
      'Krevet je SAMO za san. Ako ne zaspite u ~20 minuta, ustanite i vratite se tek kad ste pospani.',
      'Vodite dnevnik spavanja svako jutro — bez podataka nema napretka.',
    ],
  },

  // ────────────────────────────────────────────
  // Brza sesija 2 — Dnevnik, opuštanje i daljnji koraci
  // ────────────────────────────────────────────
  {
    id: 2,
    title: 'Opuštanje i daljnji koraci',
    subtitle: 'Tehnike smirivanja i kada potražiti pomoć',
    duration: '10 min čitanja',
    sections: [
      {
        title: 'Analiza Vašeg dnevnika spavanja',
        content:
          'Nakon tjedan dana vođenja dnevnika, pogledajte svoje podatke:\n\n**Učinkovitost sna < 85 %?**\nTo znači da provodite previše vremena budni u krevetu. Razmislite o punom 8-tjednom programu koji uključuje restrikciju sna — najučinkovitiju tehniku za povećanje učinkovitosti.\n\n**Latencija usnivanja > 30 minuta?**\nAko Vam redovito treba dulje od 30 minuta da zaspite, kontrola stimulusa (pravilo 20 minuta) i tehnike opuštanja bit će Vaši glavni alati.\n\n**Više od 2 buđenja po noći s teškoćom ponovnog usnivanja?**\nFokusirajte se na upravljanje brigama (sesija 7 punog programa) i kognitivnu restrukturaciju (sesija 5).\n\nDnevnik spavanja nije samo alat za praćenje — on je Vaš kompas koji pokazuje koje tehnike primijeniti.',
      },
      {
        title: 'Brza tehnika opuštanja: 4-7-8 disanje',
        content:
          'Ovo je najjednostavnija tehnika opuštanja koju možete koristiti odmah, u krevetu:\n\n1. **Udahnite** kroz nos brojeći do 4\n2. **Zadržite** dah brojeći do 7\n3. **Izdahnite** kroz usta brojeći do 8\n4. Ponovite 4 ciklusa\n\nZašto funkcionira: produljeni izdah aktivira Vaš parasimpatički živčani sustav (sustav „odmori i probavi"), čime se usporava puls, snižava krvni tlak i smanjuje razina stresa.\n\nAko Vam zadržavanje daha na 7 sekundi izaziva nelagodu, počnite s kraćim omjerom (3-5-6) i postupno produžujte.\n\nPraksa: vježbajte ovu tehniku 2× dnevno (npr. ujutro i prije spavanja) tijekom tjedan dana. S praksom, samo započinjanje vježbe može izazvati osjećaj opuštenosti — Vaš mozak „nauči" da ovo znači da je vrijeme za smirivanje.',
        tip: 'Koristite karticu „Opuštanje" u aplikaciji San za vođene vježbe disanja, progresivnu mišićnu relaksaciju i druge tehnike.',
      },
      {
        title: 'Upravljanje noćnim brigama',
        content:
          'Jurenje misli u krevetu jedan je od najčešćih uzroka nesanice. Evo tri brze strategije:\n\n**1. Bilježnica kraj kreveta**\nDržite malu bilježnicu i olovku na noćnom ormariću. Ako Vas briga ne pušta, zapišite je u jednoj rečenici i zatvorite bilježnicu. Čin zapisivanja signalizira mozgu: „Pohranio sam ovo na sigurno mjesto, mogu pustiti."\n\n**2. Tehnika „mentalna polica"**\nZamislite policu. Vizualizirajte svaku brigu kao predmet i stavite ga na policu s porukom: „Sutra ću se tobom baviti." Ovo nije potiskivanje — to je svjesno odlaganje.\n\n**3. Preimenovanje osjeta**\nUmjesto „Ne mogu spavati, ovo je užasno!" recite sebi: „Moj mozak je aktivan. To je neugodno, ali nije opasno. Proći će." Samo preimenovanje smanjuje intenzitet emocije.',
        tip: 'Ako brige dominiraju Vašim noćima, puni program (sesije 5 i 7) nudi dublje strategije uključujući kognitivnu restrukturaciju i strukturirano „vrijeme za brige".',
      },
      {
        title: 'Kada se obratiti liječniku',
        content:
          'Ovaj kratki program može značajno pomoći kod blaže nesanice i suboptimalnih navika spavanja. No neke situacije zahtijevaju profesionalnu procjenu:\n\n**Obratite se liječniku ako:**\n• Nesanica traje dulje od 3 mjeseca usprkos primjeni ovih tehnika\n• Glasno hrčete, imate prestanke disanja tijekom sna ili se budite s osjećajem gušenja (moguća apneja u snu)\n• Imate neodoljiv nagon za micanjem nogu navečer ili u krevetu (sindrom nemirnih nogu)\n• Osjećate izrazitu pospanost tijekom dana ili naglo zasipate (moguća narkolepsija)\n• Nesanica je praćena depresijom, anksioznošću ili drugim psihičkim tegobama\n• Koristite lijekove za spavanje dulje od 4 tjedna\n\n**Što možete očekivati:**\n• Liječnik obiteljske medicine može Vas uputiti specijalistu za medicinu spavanja\n• Polisomnografija (studija sna u laboratoriju) može isključiti druge poremećaje\n• Individualna KBT-I terapija s terapeutom nudi osobni pristup\n\nU Hrvatskoj, centri za medicinu spavanja postoje u KBC Zagreb, KBC Split i KBC Rijeka.',
      },
      {
        title: 'Sljedeći koraci',
        content:
          'Na temelju Vašeg iskustva s ovim kratkim programom, preporučujemo:\n\n**Ako ste primijetili poboljšanje:**\nOdlično! Nastavite s primjenom naučenih navika. Dosljednost je ključ. Razmislite o punom 8-tjednom programu za još dublje razumijevanje i dodatne tehnike.\n\n**Ako niste primijetili poboljšanje nakon 2 tjedna:**\nNe obeshrabrujte se. Krenite na puni 8-tjedni program koji uključuje:\n• **Restrikciju sna** — najmoćniju tehniku za konsolidaciju sna\n• **Kognitivnu restrukturaciju** — promjenu načina razmišljanja o snu\n• **Detaljne tehnike opuštanja** — 5 različitih pristupa\n• **Upravljanje brigama** — strukturirane strategije za noćne misli\n\n**Bez obzira na rezultat:**\n• Nastavite voditi dnevnik spavanja\n• Održavajte konzistentno vrijeme buđenja\n• Koristite krevet samo za san\n• Vježbajte tehniku disanja svaki dan\n\nZapamtite: san je prirodna sposobnost Vašeg tijela. Ovim programom pomažete tijelu da ponovno pronađe tu sposobnost. Budite strpljivi i ljubazni prema sebi u tom procesu.',
        tip: 'Za pristup punom 8-tjednom programu, odaberite „Puni program" u postavkama aplikacije.',
      },
    ],
    keyTakeaways: [
      'Analizirajte dnevnik spavanja nakon tjedan dana — on Vam pokazuje koje tehnike trebate pojačati.',
      'Tehnika disanja 4-7-8 najbrži je alat za smirivanje u krevetu. Vježbajte 2× dnevno.',
      'Ako tegobe traju dulje od 3 mjeseca ili imate simptome drugih poremećaja spavanja, obratite se liječniku.',
    ],
  },
]
