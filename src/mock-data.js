export const users = [
  {
    id: 1,
    avatar: 'https://placem.at/people?w=265&h=150&txt=0&random=1',
    name: 'KAMIL KOPERWAS',
    description: 'Graphic Designer, Web Designer, UI/UX Designer, Branding',
  },
  {
    id: 2,
    avatar: 'https://placem.at/people?w=265&h=150&txt=0&random=2',
    name: 'Adrianna Lipsum',
    description: 'Project Manager',
  },
  {
    id: 3,
    avatar: 'https://placem.at/people?w=265&h=150&txt=0&random=3',
    name: 'Win McElree',
    description: 'Project Manager',
  },
  {
    id: 4,
    avatar: 'https://placem.at/people?w=265&h=150&txt=0&random=4',
    name: 'Deidre Towell',
    description: 'Project Manager',
  },
];

export const posts = [
  {
    id: 1,
    title: 'Post One',
    excerpt: 'An engraving by Claes Visscher showing Old London Bridge in 1616',
    date: '16-03-2015',
    image: 'https://placem.at/things?w=300&h=300&txt=0&random=1',
    imagePosition: 'left',
  },
  {
    id: 2,
    title: 'Post Two',
    excerpt: 'An engraving by Claes Visscher showing Old London Bridge in 1616',
    date: '01-06-2015',
    image: 'https://placem.at/things?w=300&h=300&txt=0&random=2',
    imagePosition: 'right',
  },
  {
    id: 3,
    title: 'Post Tree',
    excerpt: 'An engraving by Claes Visscher showing Old London Bridge in 1616',
    date: '22-12-2016',
    image: 'https://placem.at/things?w=300&h=300&txt=0&random=3',
    imagePosition: 'bottom',
  },
  {
    id: 4,
    title: 'Post Four',
    excerpt: 'An engraving by Claes Visscher showing Old London Bridge in 1616',
    date: '12-06-2015',
    image: 'https://placem.at/things?w=300&h=300&txt=0&random=4',
    imagePosition: 'top',
  },
];

export const slides = [
  {
    id: 1,
    image: 'https://placem.at/things?w=1140&h=500&txt=0&random=1',
    title: 'Need UI kit?',
  },
  {
    id: 2,
    image: 'https://placem.at/things?w=1140&h=500&txt=0&random=2',
    title: 'Anoter Image with Title',
  },
  {
    id: 3,
    image: 'https://placem.at/things?w=1140&h=500&txt=0&random=3',
    title: '',
  },
];

export const navigation = [
  {
    id: 1,
    label: 'Web Design',
    url: '#',
  },
  {
    id: 2,
    label: 'Mobile Apps',
    url: '#',
  },
  {
    id: 3,
    label: 'Branding',
    url: '#',
  },
];

export const menu = [
  {
    id: 1,
    label: 'About Us',
    url: '/',
    submenu: null,
  },
  {
    id: 2,
    label: 'Portfolio',
    url: '/portfolio',
    submenu: [
      {
        id: 4,
        label: 'Web Design',
        url: '#',
      },
      {
        id: 5,
        label: 'Mobile Apps',
        url: '#',
      },
      {
        id: 6,
        label: 'Branding',
        url: '#',
      },
    ],
  },
  {
    id: 3,
    label: 'Contact Us',
    url: '/contact',
    submenu: null,
  },
];



export const chat = [
  {
    id: 1,
    authorId: 2,
    date: '1478557491',
    chatText: 'Nullam varius.',
    alt: false,
  },
  {
    id: 2,
    authorId: 4,
    date: '1488334078',
    chatText: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    alt: true,
  },
  {
    id: 3,
    authorId: 1,
    date: '1472302769',
    chatText: 'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    alt: false,
  },
  {
    id: 4,
    authorId: 2,
    date: '1477494253',
    chatText: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    alt: true,
  }
];
