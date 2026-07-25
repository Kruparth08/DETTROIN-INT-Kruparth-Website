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


export const infrastructure = [
  { tag: 'Skill-based', title: 'Skill-Based Learning', desc: 'Applying knowledge practically and thinking creatively to solve real problems.' },
  { tag: 'Outreach', title: 'Community Service', desc: 'Interacting with different communities to build empathy and social awareness.' },
  { tag: 'Hands-on', title: 'Experiential Learning', desc: 'Connecting classroom knowledge with real-life experience and practical understanding.' },
  { tag: 'STREAM', title: 'STREAM Education', desc: 'Science, technology, reading, engineering, arts and mathematics — integrated.' },
  { tag: 'Arts', title: 'Visual & Performing Arts', desc: 'Music, dance, drawing and drama that build imagination and emotional intelligence.' },
  { tag: 'Fitness', title: 'Physical Development', desc: 'Building strength, leadership and healthy lifestyle habits through sport.' },
]

export const testimonials = [
  { initials: 'RS', quote: 'Excellence International School has been amazing for my child — caring teachers, fun lessons, and growing confidence every single week.', name: 'Rakesh Sharma', role: 'Parent of Aarav, Class 5' },
  { initials: 'NV', quote: 'I love how safe and welcoming the school is. Staff know every student well and encourage them to do their best.', name: 'Neha Verma', role: 'Parent of Anaya, Class 3' },
  { initials: 'AG', quote: 'My daughter enjoys learning, sports and creativity here. The balance between academics and fun is exactly right.', name: 'Amit Gupta', role: 'Parent of Vivaan, Class 7' },
  { initials: 'PM', quote: 'Teachers here are patient and dedicated — every child is made to feel understood and supported to reach their potential.', name: 'Pooja Mehta', role: 'Parent of Riya, Class 4' },
  { initials: 'SP', quote: 'My child is developing critical thinking and confidence through hands-on projects — and genuinely enjoys school.', name: 'Sanjay Patel', role: 'Parent of Krish, Class 6' },
]

export const values = ['Honesty', 'Integrity', 'Respect', 'Discipline', 'Compassion', 'Responsibility']


export const faqs = [
  { q: 'Where is Excellence International School located?', a: 'The school is located on Ramghat Road, Aligarh 202001, Uttar Pradesh, India.' },
  { q: 'Which classes are available for admission?', a: 'Admissions are open across Play Group through Class 8, plus Daycare, subject to seat availability.' },
  { q: 'Does the school offer extracurricular activities?', a: 'Yes — students take part in sports, cultural activities, the arts and personality-development programs.' },
  { q: 'Is transportation available for students?', a: 'Yes, the school runs safe and convenient supervised transport on fixed routes.' },
  { q: 'What makes Excellence International one of the best schools in Aligarh?', a: 'A structured academic approach, modern teaching methods, a focus on student development, and value-based education.' },
]

export const admissionSteps = [
  { step: '01', title: 'Submit an enquiry', desc: 'Fill out the admission enquiry form online or call the admissions desk directly.' },
  { step: '02', title: 'Campus visit', desc: 'Tour the campus, meet faculty, and see classrooms in session.' },
  { step: '03', title: 'Assessment & interaction', desc: 'A simple, age-appropriate interaction to understand the child\u2019s readiness.' },
  { step: '04', title: 'Confirm your seat', desc: 'Complete documentation and fee formalities to confirm admission.' },
]
