export interface ISIQuestion {
  id: number
  text: string
  options: { value: number; label: string }[]
}

export const isiQuestions: ISIQuestion[] = [
  {
    id: 1,
    text: 'Ocijenite trenutnu težinu Vašeg problema s USNIVANJEM (teškoća da zaspite).',
    options: [
      { value: 0, label: 'Nimalo' },
      { value: 1, label: 'Blago' },
      { value: 2, label: 'Umjereno' },
      { value: 3, label: 'Jako' },
      { value: 4, label: 'Izrazito jako' },
    ],
  },
  {
    id: 2,
    text: 'Ocijenite trenutnu težinu Vašeg problema s ODRŽAVANJEM SNA (često se budite tijekom noći).',
    options: [
      { value: 0, label: 'Nimalo' },
      { value: 1, label: 'Blago' },
      { value: 2, label: 'Umjereno' },
      { value: 3, label: 'Jako' },
      { value: 4, label: 'Izrazito jako' },
    ],
  },
  {
    id: 3,
    text: 'Ocijenite trenutnu težinu Vašeg problema s PRERANIM JUTARNJIM BUĐENJEM (budite se prerano ujutro).',
    options: [
      { value: 0, label: 'Nimalo' },
      { value: 1, label: 'Blago' },
      { value: 2, label: 'Umjereno' },
      { value: 3, label: 'Jako' },
      { value: 4, label: 'Izrazito jako' },
    ],
  },
  {
    id: 4,
    text: 'Koliko ste ZADOVOLJNI / NEZADOVOLJNI svojim trenutnim obrascem spavanja?',
    options: [
      { value: 0, label: 'Vrlo zadovoljni' },
      { value: 1, label: 'Zadovoljni' },
      { value: 2, label: 'Ni zadovoljni ni nezadovoljni' },
      { value: 3, label: 'Nezadovoljni' },
      { value: 4, label: 'Vrlo nezadovoljni' },
    ],
  },
  {
    id: 5,
    text: 'U kojoj mjeri smatrate da je Vaš problem sa spavanjem PRIMJETAN DRUGIMA u smislu narušavanja kvalitete Vašeg života?',
    options: [
      { value: 0, label: 'Nimalo primjetan' },
      { value: 1, label: 'Malo primjetan' },
      { value: 2, label: 'Donekle primjetan' },
      { value: 3, label: 'Vrlo primjetan' },
      { value: 4, label: 'Izrazito primjetan' },
    ],
  },
  {
    id: 6,
    text: 'Koliko ste ZABRINUTI / UZNEMIRENI zbog svog trenutnog problema sa spavanjem?',
    options: [
      { value: 0, label: 'Nimalo' },
      { value: 1, label: 'Malo' },
      { value: 2, label: 'Donekle' },
      { value: 3, label: 'Vrlo' },
      { value: 4, label: 'Izrazito' },
    ],
  },
  {
    id: 7,
    text: 'U kojoj mjeri smatrate da Vaš problem sa spavanjem OMETA Vaše dnevno funkcioniranje (npr. dnevni umor, sposobnost obavljanja posla/dnevnih obaveza, koncentracija, pamćenje, raspoloženje)?',
    options: [
      { value: 0, label: 'Nimalo' },
      { value: 1, label: 'Malo' },
      { value: 2, label: 'Donekle' },
      { value: 3, label: 'Vrlo' },
      { value: 4, label: 'Izrazito' },
    ],
  },
]

export const isiInterpretation = (
  score: number
): { level: string; description: string; color: string } => {
  if (score <= 7) {
    return {
      level: 'Nema klinički značajne nesanice',
      description:
        'Vaš rezultat ukazuje na to da nemate klinički značajne probleme sa spavanjem. Nastavite s dobrim navikama spavanja i koristite naše edukativne materijale za dodatno poboljšanje kvalitete sna.',
      color: 'bg-emerald-500',
    }
  }
  if (score <= 14) {
    return {
      level: 'Subklinička (blaga) nesanica',
      description:
        'Vaš rezultat ukazuje na blage poteškoće sa spavanjem. Program San može Vam pomoći da usvojite učinkovite strategije za poboljšanje sna. Preporučujemo da prođete cijeli program i redovito vodite dnevnik spavanja.',
      color: 'bg-yellow-500',
    }
  }
  if (score <= 21) {
    return {
      level: 'Umjerena nesanica',
      description:
        'Vaš rezultat ukazuje na umjerenu nesanicu. Kognitivno-bihevioralna terapija za nesanicu (KBT-I), na kojoj se temelji ovaj program, dokazano je najučinkovitiji pristup liječenju. Toplo Vam preporučujemo da pažljivo prođete sve lekcije i primijenite naučene tehnike. Ako tegobe potraju, razmislite o konzultaciji s liječnikom.',
      color: 'bg-orange-500',
    }
  }
  return {
    level: 'Teška nesanica',
    description:
      'Vaš rezultat ukazuje na tešku nesanicu koja značajno utječe na Vašu kvalitetu života. Ovaj program može Vam pomoći, ali toplo Vam preporučujemo da se obratite liječniku ili specijalistu za medicinu spavanja. KBT-I u kombinaciji s profesionalnim vodstvom daje najbolje rezultate kod teže nesanice.',
    color: 'bg-red-500',
  }
}
