import { WaterService, FaqItem, Testimonial, CoverageDistrict } from './types';

export const PHONE_NUMBER = '077 222 8029';
export const WHATSAPP_PHONE = '263772228029'; // international form with no '+' for links

export const SERVICES: WaterService[] = [
  {
    id: 'bulk-delivery',
    title: 'Bulk Water Delivery',
    description: 'High-volume water transport for storage reservoirs, municipal backup systems, industrial tasks, and swimming pools across Zimbabwe.',
    features: [
      'Flexible tank sizes (5,000L to 20,000L)',
      'High-pressure discharge pumps',
      'Food-grade clean delivery tankers',
      'Fast turnaround times'
    ],
    capacityOptions: ['5,000 Litres', '10,000 Litres', '15,000 Litres', '20,000 Litres'],
    lucideIconName: 'Truck',
    badge: 'Popular Service',
    whatsappMessage: 'Hi Chiko Water Delivery, I want to inquire about Bulk Water Delivery.'
  },
  {
    id: 'tank-refills',
    title: 'Water Tank Refills',
    description: 'Professional refills for Jojo tanks, Slimline tanks, overhead reservoirs, or underground backup systems for residential and commercial spaces.',
    features: [
      'Jojo tank safety and fit checks',
      'Overhead tank pumping capability',
      'High rise apartments accessible',
      'Scheduled top-ups available'
    ],
    capacityOptions: ['2,500L Tank', '5,000L Tank', '10,000L Tank'],
    lucideIconName: 'Database',
    badge: 'Daily Refills',
    whatsappMessage: 'Hi Chiko Water Delivery, I want to book a Jojo Water Tank Refill.'
  },
  {
    id: 'construction-site',
    title: 'Construction Site Supply',
    description: 'Reliable water delivery for concrete mixing, compaction, dust suppression, site offices, and continuous builders\' requirements.',
    features: [
      'Heavy-duty site-adapted vehicles',
      'Dust-control spraying systems',
      'Flexible contract water booking',
      'Early morning deliveries'
    ],
    capacityOptions: ['10,000 Litres', '20,000 Litres', 'Multi-Load Contracts'],
    lucideIconName: 'HardHat',
    badge: 'Industrial Grade',
    whatsappMessage: 'Hi Chiko Water Delivery, I would like a quote for Construction Site Water Supply.'
  },
  {
    id: 'residential-supply',
    title: 'Residential Water Supply',
    description: 'Ensure your family has uninterrupted water for drinking, garden irrigation, washing, and daily household chores.',
    features: [
      'Tested borehole water source',
      'Cleanest storage standards',
      'Respectful, careful delivery team',
      'Same-day service available'
    ],
    capacityOptions: ['2,500 Litres', '5,000 Litres', '10,000 Litres'],
    lucideIconName: 'Home',
    badge: 'Family Safe',
    whatsappMessage: 'Hi Chiko Water Delivery, I need Residential Water Supply for my home.'
  },
  {
    id: 'commercial-delivery',
    title: 'Commercial Water Delivery',
    description: 'Tailored water delivery models for corporate offices, malls, retail outlets, schools, and hospitals to maintain continuous hygiene.',
    features: [
      'Off-peak and night delivery options',
      'Invoiced corporate accounts',
      'Consistent backup water security',
      'Large volume capabilities'
    ],
    capacityOptions: ['10,000 Litres', '20,000 Litres', 'Weekly Schedules'],
    lucideIconName: 'Building2',
    badge: 'Business Backup',
    whatsappMessage: 'Hi Chiko Water Delivery, I want to discuss Commercial Water Delivery.'
  },
  {
    id: 'emergency-delivery',
    title: 'Emergency Water Delivery',
    description: 'Rapid dispatch response when municipal lines dry up, boreholes fail, or crucial storage tanks run empty unexpectedly.',
    features: [
      'Express queue dispatch',
      '24/7 emergency contact line',
      'All holidays and weekends active',
      'Immediate text notifications'
    ],
    capacityOptions: ['5,000 Litres', '10,000 Litres'],
    lucideIconName: 'Zap',
    badge: 'Priority Dispatch',
    whatsappMessage: 'Hi Chiko Water Delivery, this is an EMERGENCY water delivery request!'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Tinashe Mugore',
    role: 'Homeowner',
    location: 'Borrowdale, Harare',
    comment: 'Chiko Water Delivery saved us when our borehole ran dry during the hot season. They arrived within 2 hours of our WhatsApp call, and the driver helped position the hose safely to our tank without ruining our flowerbeds.',
    rating: 5,
    date: 'May 14, 2026'
  },
  {
    id: 'test-2',
    name: 'Sarah Chiwara',
    role: 'Facility Manager',
    location: 'Avondale Offices, Harare',
    comment: 'We have a monthly retainer with Chiko Water. They refill our corporate backup tank every second Saturday dawn, so our staff never encounters water rationing. Extremely professional, prompt invoicing, and clean tested water!',
    rating: 5,
    date: 'April 28, 2026'
  },
  {
    id: 'test-3',
    name: 'Eng. Kelvin Gara',
    role: 'Project Supervisor',
    location: 'Construction Site, Ruwa',
    comment: 'For heavy-duty construction dust suppression and brick-and-mortar laying, Chiko has been our go-to. Their 10,000L tankers arrive back-to-back on call. Real value for money and outstanding communication.',
    rating: 5,
    date: 'May 02, 2026'
  },
  {
    id: 'test-4',
    name: 'Amara Moyo',
    role: 'Garden Heights Apartments Council',
    location: 'Avenues, Harare',
    comment: 'Managing a complex with 24 units is tough without stable municipal water. Chiko coordinates beautifully to fill up our main sump tank weekly. Drivers are patient and highly skilled at navigating tight parking lots.',
    rating: 5,
    date: 'May 19, 2026'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How fast can you deliver water to my location?',
    answer: 'For standard orders, we typically deliver within 2 to 4 hours of confirmation. For emergency requests, we offer priority dispatch to get a water truck to you as fast as possible, depending on current traffic and area queues.',
    category: 'delivery'
  },
  {
    id: 'faq-2',
    question: 'Is the water safe for domestic usage and drinking?',
    answer: 'Absolutely. We source our water from strictly tested and certified local boreholes. It is clean, clear, safe, and stored in hygienic, food-grade tankers dedicated solely to clean domestic water distribution. We never transport industrial effluents or waste.',
    category: 'quality'
  },
  {
    id: 'faq-3',
    question: 'What tanker capacities do you provide?',
    answer: 'Our main fleet consists of highly maintained 5,000-litre, 10,000-litre, and 20,000-litre heavy-duty vehicles. We can dispatch multiple trucks for grand-scale events, industrial tasks, or construction works.',
    category: 'general'
  },
  {
    id: 'faq-4',
    question: 'What are your accepted payment methods in Zimbabwe?',
    answer: 'For your maximum convenience, we accept USD Cash, EcoCash, Swipe/ZIPIT bank transfers, and corporate bank transfers. Talk to us on WhatsApp to get our banking details or pre-payment guidance.',
    category: 'pricing'
  },
  {
    id: 'faq-5',
    question: 'How long are the delivery hoses on your trucks?',
    answer: 'Our water delivery trucks carry state-of-the-art high-pressure pumps and standard food-grade hoses measuring up to 30 to 50 meters. This allows us to conveniently reach backyards, overhead tanks, or indoor reservoirs from your driveway.',
    category: 'delivery'
  },
  {
    id: 'faq-6',
    question: 'Do you deliver on weekends and public holidays?',
    answer: 'Yes! Water is a basic necessity, so our delivery service is operational 7 days a week, including weekends and public holidays. Emergency dispatch queues receive rapid coverage even at night.',
    category: 'general'
  }
];

export const COVERAGE_AREAS: CoverageDistrict[] = [
  { name: 'Harare North (Borrowdale, Glen Lorne, Mt Pleasant)', deliveryTime: '1 - 2 Hours', status: 'active', popularFor: 'Residential refilling' },
  { name: 'Harare East (Highlands, Greendale, Kamfinsa)', deliveryTime: '2 - 3 Hours', status: 'active', popularFor: 'Jojo tanks & Domestic' },
  { name: 'Harare West (Avondale, Westgate, Marlborough)', deliveryTime: '2 - 3 Hours', status: 'active', popularFor: 'Residential complex supply' },
  { name: 'Chitungwiza & South', deliveryTime: '3 - 4 Hours', status: 'high-demand', popularFor: 'Domestic Borehole outages' },
  { name: 'Ruwa & Goromonzi', deliveryTime: '2 - 3 Hours', status: 'active', popularFor: 'Construction & Industrial' },
  { name: 'Norton & Lakeside Areas', deliveryTime: '3 - 4 Hours', status: 'scheduled', popularFor: 'Weekly Scheduled supply' },
  { name: 'Industrial Sites & Working Districts', deliveryTime: '1 - 2 Hours', status: 'active', popularFor: 'Offices & Heavy works' }
];
