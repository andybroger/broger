// Central content for the site. Edit here to update text/data site-wide.

export const profile = {
  name: 'Jakob Broger',
  nickname: 'Köbi',
  role: 'Skikjöringfahrer',
  location: '8602 Wangen/ZH, Schweiz',
  born: '12. März 1960',
  family: 'verheiratet, 2 erwachsene Kinder',
  job: 'Unternehmer',
};

export const career = [
  { period: '1976–1991', text: 'Amateur-Rennreiter' },
  { period: 'seit 1985', text: 'Rennpferdebesitzer' },
  { period: '1985–1998', text: 'Vorstandsmitglied Schweizer Rennreiter-Verband (Präsident 1994–1998)' },
  { period: '1986–2015', text: 'Vorstandsmitglied Galopp Schweiz (Präsident 2011–2015)' },
  { period: '1998–2007', text: 'Präsident Rennpferdebesitzer-Club' },
  { period: '1996–2023', text: 'Aktiver Skikjöringfahrer' },
  { period: 'seit 2017', text: 'Präsident Skikjöring Drivers Association' },
  { period: 'seit 2024', text: 'Mitglied Skikjöring-Kommission' },
];

export const crownRoad = [
  {
    time: 'Februar 1996',
    title: 'Das Debüt auf dem gefrorenen See',
    text:
      'Der Beginn einer geschichtsträchtigen Ära: Jakob „Köbi“ Broger bestritt im Februar 1996 seinen ersten offiziellen Start beim White Turf in St. Moritz.',
  },
  {
    time: 'Februar 1997',
    title: 'Erste Siege und die erste Krone mit Efir',
    text:
      'Nur ein Jahr nach dem Debüt gelangen auf dem gefrorenen See die ersten beiden Rennsiege. Mit Efir sicherte sich Köbi Broger seine erste Krone als König vom Engadin.',
  },
  {
    time: 'Späte 1990er',
    title: 'Der Durchbruch im Engadin',
    text:
      'Als erster Fahrer aus dem Schweizer Flachland brach Jakob Broger endgültig in die traditionelle Domäne der Engadiner Skikjöringfahrer ein.',
  },
  {
    time: '1999–2005',
    title: 'Die goldene Ära Volta',
    text:
      'Mit Volta entstand das erfolgreichste Gespann seiner Karriere: 12 Siege aus 21 Starts und mehrere prägende Saisons auf dem Eis.',
  },
  {
    time: '2007–2011',
    title: 'Die Ära King George',
    text:
      'King George prägte fünf Jahre von Köbis Laufbahn. Unvergesslich blieb die Saison 2008 mit drei Siegen in drei Rennen.',
  },
  {
    time: '2019',
    title: 'Comeback mit Strade Kirk',
    text:
      'Mit Strade Kirk gelang die Rückkehr auf die Siegerstrasse und ein weiterer Erfolg in einer langen, aussergewöhnlichen Karriere.',
  },
  {
    time: '2020–2022',
    title: 'Die letzten Saisons mit Vienna Woods',
    text:
      'Mit Vienna Woods fuhr Köbi Broger in seinen letzten aktiven Saisons nochmals um Spitzenplätze und beendete seine Karriere mit dem Rücktritt im Jahr 2023 sowie elf Kronen.',
  },
];

// Career highlights — the headline numbers.
export const highlights = [
  { value: '61', label: 'Starts' },
  { value: '24', label: 'Siege' },
  { value: '11', label: 'Mal König vom Engadin' },
  { value: '24', label: 'Saisons' },
];

// Per-horse statistics (Pferd, Starts, Siege, 2., 3., 4., 5., >5.)
export const stats = {
  columns: ['Pferd', 'Starts', 'Siege', '2.', '3.', '4.', '5.', '> 5.'],
  rows: [
    ['Volta', 21, 12, 6, '–', '–', 2, 1],
    ['King George', 11, 8, 1, '–', 1, '–', 1],
    ['Efir', 6, 2, 1, 1, 1, '–', 1],
    ['Vienna Woods', 4, 1, 2, '–', '–', '–', 1],
    ['Strade Kirk', 3, 1, '–', '–', '–', 1, 1],
    ['Territorial Claim', 3, '–', 1, '–', '–', '–', 2],
    ['Chanell', 2, '–', '–', 2, '–', '–', '–'],
    ['Abu Ardash', 1, '–', '–', '–', 1, '–', '–'],
    ['From Frost', 2, '–', '–', '–', '–', 1, 1],
    ['Don Chester', 2, '–', '–', '–', '–', 1, 1],
    ['Sob', 1, '–', '–', '–', '–', '–', 1],
    ['Little Merlin', 1, '–', '–', '–', '–', '–', 1],
    ['First Stream', 1, '–', '–', '–', '–', '–', 1],
    ['Baileys Best', 1, '–', '–', '–', '–', '–', 1],
    ['Amber Fire', 1, '–', '–', '–', '–', '–', 1],
    ['Theology', 1, '–', '–', '–', '–', '–', 1],
  ],
  total: ['Total', 61, 24, 11, 3, 3, 5, 14],
};

// Notable horses for the Resultate page highlight cards.
export const topHorses = [
  { name: 'Volta', years: '1999–2004', trainer: 'Miro Weiss', owner: 'Stall Zürisee', note: '12 Siege aus 21 Starts, das erfolgreichste Gespann der Karriere.' },
  { name: 'King George', years: '2007–2011', trainer: 'Miro Weiss', owner: 'Charlotte Haselbach', note: '8 Siege aus 11 Starts auf dem gefrorenen St. Moritzersee.' },
  { name: 'Vienna Woods', years: '2020–2022', trainer: 'Carina Fey', owner: 'Stall Allegra Racing Club', note: 'Die letzten Saisons vor dem Rücktritt 2023.' },
  { name: 'Efir', years: '1997–1998', trainer: '', owner: '', note: 'Frühe Erfolge zu Beginn der Skikjöring-Laufbahn.' },
];

export const sponsoring = {
  intro:
    'Als aktiver Pferdesportler engagiert sich Jakob Broger für die Förderung des Nachwuchses. Über seine Firmen Intool AG und Calixus AG ist er ganzjährig Hauptsponsor der Ponyrennen.',
  blocks: [
    { company: 'Intool AG', supports: 'Grosse Ponys (Kategorie D, Stockmass < 150 cm)' },
    { company: 'Calixus AG', supports: 'Ganz kleine Ponys (Kategorie A, Stockmass < 120 cm)' },
  ],
};

export const partners = [
  { name: 'Intool AG', logo: 'intool.png', url: 'https://intool.ch' },
  { name: 'TopSolid', logo: 'topsolid.png', url: '#' },
  { name: 'Calixus AG', logo: 'calixus.png', url: 'https://calixus.ch' },
  { name: 'Skikjöring', logo: 'skikjoering_logo.png', url: 'https://skikjoering.ch' },
  { name: 'White Turf', logo: 'whiteturf.png', url: 'https://whiteturf.ch' },
  { name: 'Beliar', logo: 'beliar.png', url: '#' },
  { name: 'Galop Suisse', logo: 'galoppschweiz.png', url: 'https://iena.ch/galop-suisse' },
  { name: 'IENA', logo: 'iena.png', url: 'https://iena.ch' },
  { name: 'Pony Renn Club', logo: 'ponyrennclub.png', url: 'https://ponyrennclub.ch' },
  { name: 'SRV Rennreiter', logo: 'srv.png', url: 'https://rennreiter.ch' },
];

// Career end — shown as a prominent statement section. Jakob retired in 2023.
export const retirement = {
  eyebrow: 'Rücktritt im Jahr 2023',
  title: 'Alles hat seine Zeit',
  paragraphs: [
    'Das Skikjöring ist die rennsportliche Weltexklusivität von White Turf. Daran durfte ich als Fahrer während vielen Jahren erfolgreich mitwirken. Alles hat seine Zeit: als aktiver Skikjöringfahrer war für mich 2023 Schluss.',
    'Nach 24 Saisons als aktiver Fahrer und mit bald 63 Altersjahren war der Zeitpunkt für den Rücktritt und das Platzmachen für den Nachwuchs gekommen. Ich danke den Besitzern und Trainern für ihr Vertrauen, dem White Turf, der Credit Suisse und den vielen Helfern für ihr Engagement, meinen Konkurrenten für ihre Fairness, meinen Fans für die treue Unterstützung und meiner Familie für das Verständnis meiner aussergewöhnlichen Passion.',
  ],
  signoff: 'Allegra und bis bald am White Turf',
  signature: 'Jakob (Köbi) Broger',
};
