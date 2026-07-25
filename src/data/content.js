export const school = {
  name: 'Excellence International School',
  short: 'Excellence International',
  location: 'Ramghat Road, Aligarh 202001, Uttar Pradesh, India',
  phone: '+91 70555 82117',
  phoneHref: 'tel:+917055582117',
  email: 'info@excellenceinternationalschool.com',
  whatsapp: 'https://api.whatsapp.com/send?phone=917055582117',
  facebook: 'https://www.facebook.com/share/1GvbBbZqN5/',
  instagram: 'https://www.instagram.com/excellence_school_aligarh',
  youtube: 'https://youtube.com/@excellenceschoolinternational',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      { label: 'Pre-Primary School', to: '/academics#pre-primary' },
      { label: 'Primary School', to: '/academics#primary' },
      { label: 'Middle School', to: '/academics#middle' },
      { label: 'Daycare', to: '/academics#daycare' },
    ],
  },
  {
    label: 'Admissions',
    to: '/admissions',
    children: [
      { label: 'Admission Enquiry Form', to: '/admissions#enquiry' },
      { label: 'Admission Procedure', to: '/admissions#procedure' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
]


export const stages = [
  {
    color: 'marigold',
    id: 'pre-primary',
    tab: 'Stage 01 · Ages 2–5',
    title: 'Pre-Primary School',
    desc: 'Nurturing curiosity and creativity through joyful, play-based learning.',
    points: ['Play-based learning', 'Early language development', 'Basic numeracy skills', 'Social interaction', 'Creative exploration'],
  },
  {
    color: 'leaf',
    id: 'primary',
    tab: 'Stage 02 · Grades 1–5',
    title: 'Primary School',
    desc: 'Strengthening core academic skills while building independent learners.',
    points: ['Reading & writing skills', 'Fundamental mathematics', 'Basic science concepts', 'Moral values & good habits', 'Classroom discipline'],
  },
  {
    color: 'denim',
    id: 'middle',
    tab: 'Stage 03 · Grades 6–8',
    title: 'Middle School',
    desc: 'Preparing students for advanced learning and analytical thinking.',
    points: ['Advanced reading & writing', 'Concept-based mathematics', 'Science exploration', 'Social studies & awareness', 'Communication skills'],
  },
  {
    color: 'rose',
    id: 'daycare',
    tab: 'All-day care',
    title: 'Daycare',
    desc: 'A safe, caring space for young children while parents are at work.',
    points: ['Safe, supervised environment', 'Play & activity engagement', 'Rest & relaxation time', 'Interactive learning', 'Social peer interaction'],
  },
]


export const whyUs = [
  {
    num: '01',
    title: 'Strong Academic System',
    desc: 'A structured, well-planned approach to effective learning.',
    points: ['Well-planned daily lessons', 'Regular revision sessions', 'Periodic assessments', 'Doubt-clearing sessions'],
  },
  {
    num: '02',
    title: 'Concept-Based Learning',
    desc: 'Understanding ideas, not memorising information.',
    points: ['Analytical thinking', 'Problem-solving ability', 'Logical reasoning', 'Practical knowledge'],
  },
  {
    num: '03',
    title: 'Dedicated Faculty',
    desc: 'Qualified, experienced teachers committed to every student.',
    points: ['Interactive discussions', 'Activity-based learning', 'Technology-supported classes', 'Continuous progress checks'],
  },
  {
    num: '04',
    title: 'Safe & Secure Campus',
    desc: 'A secure environment so students can focus on learning.',
    points: ['CCTV monitoring', 'Supervised campus areas', 'Structured discipline policy', 'Safe entry & exit systems'],
  },
]


export const holistic = [
  {
    tag: 'Sports & physical education',
    title: 'Building discipline, teamwork and fitness.',
    desc: 'Structured physical activity develops both physical health and mental strength, on and off the field.',
    chips: ['Outdoor sports', 'Indoor games', 'Fitness activities', 'Competitions', 'Yoga & wellness'],
  },
  {
    tag: 'Cultural & creative activities',
    title: 'Expression that builds real confidence.',
    desc: "From the stage to the studio, students find their voice — and carry that confidence into every other part of school life.",
    chips: ['Dance', 'Music', 'Drama', 'Art & craft', 'Debate', 'Annual functions'],
  },
  {
    tag: 'Personality development & life skills',
    title: "Skills students will use for the rest of their lives.",
    desc: "We build the essentials for real-world readiness — the kind of skills report cards don't always capture.",
    chips: ['Public speaking', 'Leadership', 'Responsibility', 'Teamwork', 'Ethics'],
  },
  {
    tag: 'Transportation',
    title: 'Safe, supervised travel — every route, every day.',
    desc: 'Well-maintained buses, experienced drivers and fixed routes give parents peace of mind.',
    chips: ['Maintained buses', 'Experienced drivers', 'Fixed routes', 'Supervised travel'],
  },
]
