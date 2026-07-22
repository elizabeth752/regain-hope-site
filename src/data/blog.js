// Central team + blog data. Authors double as staff/author pages. Post bodies live in src/pages/blog/{slug}.astro.
export const authors = {
  gomez: {
    slug: 'dr-mileidys-gomez',
    name: 'Mileidys Gomez Gonzalez, MD',
    role: 'Founder, CEO & Addiction Medicine Specialist',
    photo: '/images/team/mileidys-gomez.jpg',
    langs: ['English', 'Español'],
    short: 'Founder, CEO, and Addiction Medicine Specialist at Regain Hope Detox and Recovery Center. With more than 20 years of medical experience, Dr. Gomez leads all clinical care and sees clients in person every day.',
    bio: [
      'Dr. Mileidys Gomez Gonzalez is the Founder and Chief Executive Officer of Regain Hope Detox and Recovery Center. With more than 20 years of medical experience, she brings strong clinical leadership and a compassionate, patient-centered approach to addiction treatment and recovery.',
      'Originally trained as a physician in Cuba, Dr. Gomez continued her medical training in the United States, completing her Family Medicine Residency at UCSF Fresno and pursuing advanced training in Addiction Medicine. She also completed a Primary Care Psychiatry Fellowship through the UCI School of Medicine in 2021. Her background allows her to care for patients through detox and withdrawal management while also attending to their overall physical, emotional, and behavioral health.',
      'At Regain Hope, Dr. Gomez remains personally involved in patient care every day, overseeing detoxification, medication management, stabilization, and individualized recovery planning. She believes recovery is not one size fits all, focusing on evidence-based treatment, including Medication-Assisted Treatment when appropriate, while helping patients restore their health, rebuild relationships, and create a strong foundation for lasting recovery.',
    ],
  },
  alexis: {
    slug: 'alexis-gomez-gonzalez',
    name: 'Alexis Gomez Gonzalez, MD, MSN, FNP-BC, PMHNP-BC',
    role: 'Psychiatric Mental Health Nurse Practitioner & Family Nurse Practitioner',
    photo: '/images/team/alexis-gomez.jpg',
    langs: ['English', 'Español'],
    short: 'Board-certified Psychiatric Mental Health Nurse Practitioner and Family Nurse Practitioner with over two decades of experience in psychiatry, addiction medicine, and primary care, caring for the mind and body together.',
    bio: [
      'Alexis Gomez Gonzalez is a board-certified Psychiatric Mental Health Nurse Practitioner and Family Nurse Practitioner with over two decades of experience in psychiatry, addiction medicine, and primary care. He earned his medical degree from the University of Havana School of Medical Sciences before pursuing advanced nursing practice in the United States.',
      'He provides psychiatric evaluation, medication management, and care for adults and older adults, including those with co-occurring mental health and substance use disorders. As a Family Nurse Practitioner, he also treats acute and chronic medical conditions, letting him address the mind and body together.',
      'Alexis is committed to holistic, evidence-based, patient-centered care, and to walking with each person toward lasting recovery and well-being.',
    ],
  },
  nora: {
    slug: 'nora-oconnor',
    name: "Nora A. O'Connor, LCSW",
    role: 'Licensed Clinical Social Worker',
    photo: '/images/team/nora-oconnor.jpg',
    langs: ['English'],
    short: 'Licensed Clinical Social Worker with more than 20 years of experience helping clients navigate addiction, trauma, mental health, and life transitions through a warm, trauma-informed approach.',
    bio: [
      "Nora A. O'Connor, LCSW, is a Licensed Clinical Social Worker with more than 20 years of experience helping individuals navigate addiction, trauma, mental health challenges, and life transitions. She has worked across detoxification, residential treatment, outpatient programs, and community-based behavioral health settings, supporting clients through some of the most difficult and transformative moments of their lives.",
      "Nora earned her Master's degree from San Francisco State University. Specializing in trauma, substance use disorders, dual diagnosis treatment, anxiety, depression, grief, and life transitions, she uses a trauma-informed approach that integrates Somatic Therapy, CBT, DBT, Motivational Interviewing, mindfulness, and relapse prevention.",
      'At Regain Hope, Nora works closely with clients to address the underlying issues that often contribute to substance use, helping them build healthier coping skills and a meaningful path forward. Clients appreciate her warm, supportive, and nonjudgmental style, and the environment she creates where people feel genuinely heard and respected while being challenged to grow.',
    ],
  },
  jack: {
    slug: 'jack-gould',
    name: 'Jack Gould, CADC',
    role: 'Substance Abuse Counselor',
    photo: '/images/team/jack-gould.jpg',
    langs: ['English'],
    short: 'Certified Alcohol and Drug Counselor with more than a decade of experience, bringing a grounded, compassionate, and creative approach to recovery counseling.',
    bio: [
      'Jack Gould is a Certified Alcohol and Drug Counselor (CADC) with more than a decade of experience supporting individuals through substance use treatment and recovery. He brings a grounded, compassionate, and creative approach to counseling, helping clients understand the patterns, challenges, and choices that shape their recovery journey.',
      'Jack holds a Bachelor of Arts in Fine Art from UCLA and completed counseling studies through UCLA Extension. Before entering the behavioral health field, he worked as a professional photographer and played in an independent rock band, experiences that shaped his appreciation for creativity, resilience, and human connection.',
      'At Regain Hope, Jack supports clients as they begin rebuilding their lives free from the control of addiction. He is passionate about helping people reconnect with their strengths, rediscover purpose, and take meaningful steps toward lasting change.',
    ],
  },
};

// Ordered list for team displays (about page, homepage, money pages).
export const team = ['gomez', 'alexis', 'nora', 'jack'].map((k) => authors[k]);

export const posts = [
  {
    slug: 'how-long-does-alcohol-detox-take',
    title: 'How Long Does Alcohol Detox Take? A Day-by-Day Timeline',
    category: 'Alcohol',
    author: 'gomez',
    date: 'June 12, 2026',
    image: '/images/stock/therapy-session.webp',
    excerpt: 'Most alcohol detox lasts about 5 to 10 days, but the timeline depends on your history. Here\'s what each phase actually feels like, and why supervision matters.',
  },
  {
    slug: 'detox-from-benzodiazepines-at-home',
    title: 'Is It Safe to Detox from Benzodiazepines at Home?',
    category: 'Benzodiazepines',
    author: 'gomez',
    date: 'June 8, 2026',
    image: '/images/stock/support.webp',
    excerpt: 'Benzodiazepine withdrawal can cause seizures, which is why quitting cold turkey at home is dangerous. Here\'s why a medically managed taper is the safe path.',
  },
  {
    slug: 'what-is-dual-diagnosis',
    title: 'What Is Dual Diagnosis, and Why Treating Both Matters',
    category: 'Dual Diagnosis',
    author: 'nora',
    date: 'June 3, 2026',
    image: '/images/stock/co-occurring.webp',
    excerpt: 'When addiction and a mental health condition occur together, treating only one tends to lead back to relapse. Here\'s why integrated care changes outcomes.',
  },
];

export const getAuthor = (key) => authors[key];
export const getPost = (slug) => posts.find((p) => p.slug === slug);
export const otherPosts = (slug, n = 3) => posts.filter((p) => p.slug !== slug).slice(0, n);
