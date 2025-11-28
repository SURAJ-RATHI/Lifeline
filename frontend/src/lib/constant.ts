import { Clock, Facebook, FileText, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Video } from "lucide-react";

export const healthcareCategories = [
  {
    id: 'primary-care',
    title: 'Primary Care',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    color: 'bg-blue-500'
  },
  {
    id: 'manage-condition',
    title: 'Manage Your Condition',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    color: 'bg-green-500'
  },
  {
    id: 'mental-behavioral-health',
    title: 'Mental & Behavioral Health',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
    color: 'bg-yellow-500'
  },
  {
    id: 'sexual-health',
    title: 'Sexual Health',
    icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    color: 'bg-pink-500'
  },
  {
    id: 'childrens-health',
    title: "Children's Health",
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-8h2v6h-2z',
    color: 'bg-red-500'
  },
  {
    id: 'senior-health',
    title: 'Senior Health',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    color: 'bg-orange-500'
  },
  {
    id: 'womens-health',
    title: "Women's Health",
    icon: 'M17.5 9.5C17.5 6.5 15 4 12 4S6.5 6.5 6.5 9.5c0 2.89 2.39 5.43 5.5 6.44V17c0 .55.45 1 1 1s1-.45 1-1v-1.06c3.11-1.01 5.5-3.55 5.5-6.44zM12 14.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
    color: 'bg-purple-500'
  },
  {
    id: 'mens-health',
    title: "Men's Health",
    icon: 'M17.5 9.5C17.5 6.5 15 4 12 4S6.5 6.5 6.5 9.5c0 2.89 2.39 5.43 5.5 6.44V20h3v-4.06c3.11-1.01 5.5-3.55 5.5-6.44z',
    color: 'bg-indigo-500'
  },
  {
    id: 'wellness',
    title: 'Wellness',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    color: 'bg-emerald-500'
  }
];


// Healthcare categories (matches backend)
export const healthcareCategoriesList = [
  "Primary Care",
  "Manage Your Condition",
  "Mental & Behavioral Health",
  "Sexual Health",
  "Children's Health",
  "Senior Health",
  "Women's Health",
  "Men's Health",
  "Wellness",
];

export const specializations = [
  "Cardiologist",
  "Dermatologist",
  "Orthopedic",
  "Pediatrician",
  "Neurologist",
  "Gynecologist",
  "General Physician",
  "ENT Specialist",
  "Psychiatrist",
  "Ophthalmologist",
];



   export const testimonials = [
    {
      rating: 5,
      text: "Booked a dermatology consult in minutes and got a clear prescription on video. The doctor even suggested affordable medicines from local pharmacies.",
      author: "Aarav Sharma",
      location: "Mumbai, Maharashtra · Bhiwani, Haryana",
      bgColor: "bg-chart-1/10"
    },
    {
      rating: 5,
      text: "My mother needed a cardiology follow-up. Lifeline arranged a bilingual doctor who patiently explained every report in Hindi.",
      author: "Ananya Iyer",
      location: "Bengaluru, Karnataka · Bhiwani, Haryana",
      bgColor: "bg-chart-2/10"
    },
    {
      rating: 5,
      text: "I connected with a pediatrician late at night when my son had fever. Got quick guidance and an e-prescription without stepping out.",
      author: "Rohan Verma",
      location: "Noida, Uttar Pradesh · Bhiwani, Haryana",
      bgColor: "bg-chart-3/10"
    },
    {
      rating: 4,
      text: "Video call was crystal clear and the doctor shared diet changes that matched our Gujarati meals. Follow-up reminders were helpful.",
      author: "Meera Joshi",
      location: "Ahmedabad, Gujarat · Bhiwani, Haryana",
      bgColor: "bg-chart-4/10"
    },
    {
      rating: 5,
      text: "Got a physiotherapy plan after my marathon. The doctor shared exercise videos and tracked progress on WhatsApp.",
      author: "Arjun Nair",
      location: "Kochi, Kerala · Bhiwani, Haryana",
      bgColor: "bg-chart-5/10"
    },
    {
      rating: 5,
      text: "Prescription arrived instantly on email and SMS. Billing support even applied my corporate insurance without hassle.",
      author: "Priya Kulkarni",
      location: "Pune, Maharashtra · Bhiwani, Haryana",
      bgColor: "bg-chart-6/10"
    },
    {
      rating: 4,
      text: "App reminded me about hydration, medicines, and lab tests. Loved the culturally relevant wellness tips during Navratri fasting.",
      author: "Devanshi Patel",
      location: "Vadodara, Gujarat · Bhiwani, Haryana",
      bgColor: "bg-chart-7/10"
    },
    {
      rating: 5,
      text: "Doctor shared a Hindi summary for my father so he felt confident about the treatment plan. Truly patient friendly.",
      author: "Kabir Bansal",
      location: "New Delhi · Bhiwani, Haryana",
      bgColor: "bg-chart-8/10"
    },
    {
      rating: 5,
      text: "I manage diabetes remotely while working in Hyderabad. Regular follow-ups and lab tracking keep my HbA1c steady.",
      author: "Sneha Menon",
      location: "Hyderabad, Telangana · Bhiwani, Haryana",
      bgColor: "bg-chart-9/10"
    },
    {
      rating: 5,
      text: "Scheduling for my clinic staff was easy, and the doctor suggested immunity boosters using ingredients we actually get in Jaipur.",
      author: "Vikram Singh",
      location: "Jaipur, Rajasthan · Bhiwani, Haryana",
      bgColor: "bg-chart-10/10"
    }
  ];


    export const faqs = [
    {
      question: "How much does a doctor visit with Lifeline cost?",
      answer: "With insurance, you pay your copay based on your plan. We accept most plans, including Lifeline. Without insurance, online doctor visits are $129. You can become a Lifeline member and pay $44/visit. Membership is $55 for three months and $180 for a yearly membership."
    },
    {
      question: "Do you accept health insurance?",
      answer: "Yes, we accept most major health insurance plans including Lifeline, BlueCross BlueShield, Aetna, United Healthcare, Cigna, Humana, and many others. We also accept FSA and HSA payments."
    },
    {
      question: "What conditions can Lifeline doctors treat?",
      answer: "Our doctors can treat a wide range of conditions including cold and flu symptoms, allergies, skin conditions, mental health concerns, chronic condition management, and much more through virtual consultations."
    },
    {
      question: "How quickly can I see a doctor?",
      answer: "Many of our doctors are available for same-day appointments, and some offer immediate consultations. You can book appointments that fit your schedule, often within hours of your request."
    }
  ];

  export const trustLogos = [
    "Business Insider", "CBS News", "CNBC", "Forbes", "Fortune", "Fox Business",
    "Healthline", "Inc.", "Men's Health", "TechCrunch", "The New York Times", "WSJ"
  ];


  export const contactInfo = [
  {
    icon: Phone,
    text: "+91-7015506489 (Lifeline)",
  },
  {
    icon: Mail,
    text: "support@Lifeline.com",
  },
  {
    icon: MapPin,
    text: "Available in Bhiwani, Haryana",
  },
];


    export const footerSections = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Support Center", href: "/support" },
        { text: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "For Healthcare",
      links: [
        { text: "Join as Doctor", href: "/signup/doctor" },
        { text: "Doctor Resources", href: "/doctor-resources" },
      ]
    },
    {
      title: "For Patients",
      links: [
        { text: "Find Doctors", href: "/doctors" },
        { text: "Book Appointment", href: "/signup/patient" },
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
      ]
    }
  ];


  export const socials = [
  { name: "twitter", icon: Twitter, url: "https://twitter.com/lifeline-hospital" },
  { name: "facebook", icon: Facebook, url: "https://facebook.com/lifeline-hospital" },
  { name: "linkedin", icon: Linkedin, url: "https://linkedin.com/company/lifeline-hospital" },
  { name: "instagram", icon: Instagram, url: "https://instagram.com/lifeline-hospital"},
]


export  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];



 export const consultationTypes = [
      {
        type: 'Video Consultation',
        icon: Video,
        description: 'Face-to-face consultation via HD video call',
        price: 0,
        recommended: true
      },
      {
        type: 'Voice Call',
        icon: Phone,
        description: 'Audio-only consultation via voice call',
        price: -100,
        recommended: false
      }
    ];


    
        export const emptyStates = {
      upcoming: {
        icon: Clock,
        title: "No Upcoming Appointments",
        description: "You have no upcoming appointments scheduled.",
      },
      completed: {
        icon: FileText,
        title: "No Completed Appointments",
        description: "Completed consultations will appear here.",
      },
    };



      export const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'in progress': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };