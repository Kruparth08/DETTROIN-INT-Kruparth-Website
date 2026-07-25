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

