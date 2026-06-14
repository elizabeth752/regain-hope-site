// Central blog data — authors + post metadata. Post bodies live in src/pages/blog/{slug}.astro.
export const authors = {
  gomez: {
    slug: 'dr-mileidys-gomez',
    name: 'Mileidys Gomez Gonzalez, MD',
    role: 'Co-founder & Medical Lead',
    photo: '/images/team/mileidys-gomez.webp',
    short: 'Co-founder and Medical Lead at Regain Hope Detox and Recovery Center. Trained in internal and family medicine, Dr. Gomez leads all clinical care and sees clients in person every day.',
    bio: [
      'Dr. Mileidys Gomez Gonzalez is the Co-founder and Medical Lead of Regain Hope Detox and Recovery Center in Burbank, California. Trained in internal and family medicine, she brings a whole-person perspective to addiction medicine — caring for each client\'s full health, not just their withdrawal.',
      'A native Spanish speaker, Dr. Gomez is known for the personal way she practices: she sees clients in person every day and, as her patients often note, follows up with them herself even after they return home. She writes here to help people understand what detox and recovery really involve.',
    ],
  },
  carlos: {
    slug: 'dr-carlos-yoo',
    name: 'Dr. Carlos Yoo',
    role: 'Co-founder & Physician',
    photo: '/images/team/carlos-yoo.webp',
    short: 'Co-founder and physician at Regain Hope Detox and Recovery Center, leading admissions and daily care. Korean-speaking, with a steady, reassuring presence for families reaching out for help.',
    bio: [
      'Dr. Carlos Yoo is a Co-founder and physician at Regain Hope Detox and Recovery Center. He helped build the program from the ground up and is deeply involved in daily care and admissions — often the first person families speak with when they reach out for help.',
      'A Korean speaker, Dr. Carlos extends genuine, in-language care to Los Angeles\'s Korean community, a rare offering in addiction treatment. He writes here to make recovery feel less frightening and more possible.',
    ],
  },
};

export const posts = [
  {
    slug: 'how-long-does-alcohol-detox-take',
    title: 'How Long Does Alcohol Detox Take? A Day-by-Day Timeline',
    category: 'Alcohol',
    author: 'gomez',
    date: 'June 12, 2026',
    image: '/images/stock/therapy-session.webp',
    excerpt: 'Most alcohol detox lasts about 5 to 10 days — but the timeline depends on your history. Here\'s what each phase actually feels like, and why supervision matters.',
  },
  {
    slug: 'detox-from-benzodiazepines-at-home',
    title: 'Is It Safe to Detox from Benzodiazepines at Home?',
    category: 'Benzodiazepines',
    author: 'gomez',
    date: 'June 8, 2026',
    image: '/images/stock/support.webp',
    excerpt: 'Benzodiazepine withdrawal can cause seizures — which is why quitting cold turkey at home is dangerous. Here\'s why a medically managed taper is the safe path.',
  },
  {
    slug: 'what-is-dual-diagnosis',
    title: 'What Is Dual Diagnosis — and Why Treating Both Matters',
    category: 'Dual Diagnosis',
    author: 'carlos',
    date: 'June 3, 2026',
    image: '/images/stock/co-occurring.webp',
    excerpt: 'When addiction and a mental health condition occur together, treating only one tends to lead back to relapse. Here\'s why integrated care changes outcomes.',
  },
];

export const getAuthor = (key) => authors[key];
export const getPost = (slug) => posts.find((p) => p.slug === slug);
export const otherPosts = (slug, n = 3) => posts.filter((p) => p.slug !== slug).slice(0, n);
