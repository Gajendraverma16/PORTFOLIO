export const SITE_CONFIG = {
  name: 'GAJENDRA VERMA',
  shortName: 'GV',
  title: 'Full Stack Web Developer Portfolio',
  role: 'Full Stack Web Developer',
  tagline: 'Building high-performance web applications with clean UI and efficient backends.',
  description: 'Specialized in React, Next.js, Node.js, and modern web technologies',
  email: 'gajendraverma353@gmail.com',
  phone: '9116465321',
  location: 'Chhindwara, Madhya Pradesh',
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/gajendra-verma-b7b8b0267/',
  author: 'Gajendra Verma',
  year: new Date().getFullYear(),
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Orium Dusk',
    category: 'Full Stack',
    year: '2025',
    link: 'https://deepesh-nine.vercel.app/',
    image: '/projects/deepesh.jpg',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    id: 2,
    title: 'LightShip',
    category: 'Web Development',
    year: '2025',
    link: 'https://gajendraverma16.github.io/ship/',
    image: '/projects/lightship.jpg',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 3,
    title: 'Neverland',
    category: 'Creative Design',
    year: '2024',
    link: 'https://gajendraverma16.github.io/Neverland/',
    image: '/projects/neverland.jpg',
    gradient: 'from-pink-600 to-orange-600',
  },
  {
    id: 4,
    title: 'GIULIA',
    category: 'Web Design',
    year: '2025',
    link: 'https://gajendraverma16.github.io/GIULIA/',
    image: '/projects/giulia.jpg',
    gradient: 'from-purple-600 to-blue-600',
  },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gajendra-verma-b7b8b0267/', icon: 'Linkedin' },
  { name: 'GitHub', href: 'https://github.com', icon: 'Github' },
  { name: 'WhatsApp', href: 'https://wa.me/919116465321', icon: 'MessageCircle' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Works', href: '#works' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  {
    id: 1,
    category: 'Languages & Frameworks',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Fastify'],
  },
  {
    id: 2,
    category: 'Databases & State',
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Drizzle ORM', 'Redis', 'React Query', 'Zustand'],
  },
  {
    id: 3,
    category: '3D & Graphics',
    items: ['Three.js', 'React Three Fiber', 'WebGL', 'Gaussian Splatting', 'GSAP', 'Framer Motion'],
  },
  {
    id: 4,
    category: 'UI & Styling',
    items: ['Tailwind CSS', 'ShadCN UI', 'Radix UI', 'MUI', 'Framer Motion'],
  },
];
