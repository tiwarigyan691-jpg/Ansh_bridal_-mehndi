export interface MehndiCategoryItem {
  id: string;
  title: string;
  slotId: string;
  tag: string;
  description: string;
  slotLabel: string;
  aspectRatio: string;
}

export interface GuestPriceItem {
  price: string;
  title: string;
  subtitle: string;
  description: string;
  popular?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  guests: string;
  features: string[];
  recommended?: boolean;
}

export const BUSINESS_INFO = {
  name: "ANSH BRIDAL MEHANDI ART",
  tagline: "Mehndi ki best service",
  subTagline: "11 Years of Beautiful Bridal Mehendi Art",
  heroDescription: "Creating elegant, intricate and memorable mehendi designs for brides, families and special occasions.",
  trustLine: "11 Years Experience • Professional Team • Home Service Available",
  experienceYears: "11+",
  experienceLabel: "Years Experience",
  phones: ["8449227407", "8449227499"],
  primaryPhone: "8449227407",
  callLink: "tel:+918449227407",
  whatsappLink: "https://wa.me/918449227407",
  whatsappTextLink: (msg: string) => `https://wa.me/918449227407?text=${encodeURIComponent(msg)}`,
  email: "anshmehndiartbridal@gmail.com",
  emailLink: "mailto:anshmehndiartbridal@gmail.com",
  address: "Amritpuram, Block E, Chandila, Gamma 1, Greater Noida, Uttar Pradesh 201310",
  googleMapsLink: "https://maps.app.goo.gl/JoGGDmzoTWrYwL428",
  googleReviewLink: "https://share.google/uLasCINSV0Ey2SZza",
  instagramLink: "https://www.instagram.com/ansh_bridal_mehandi_art?stkn=MWluNTF3ajVlNGFhOA==",
  aboutTitle: "About Ansh Bridal Mehandi Art",
  aboutParagraph1: "Ansh Bridal Mehandi Art specializes in beautiful mehendi designs for brides, couples, families and special occasions. With 11 years of experience and a professional team, we create detailed traditional, modern and customized mehendi designs to make every celebration memorable.",
  aboutParagraph2: "Home mehendi service is available across our service areas.",
  bridalHeading: "Your Big Day Deserves Beautiful Mehendi",
  bridalSubtext: "From intricate bridal patterns to elegant bride & groom designs, create a mehendi look that reflects your style and becomes a beautiful part of your wedding memories.",
  bridalHighlights: [
    "Bridal Mehendi",
    "Bride & Groom Mehendi",
    "Customized Designs",
    "Traditional Designs",
    "Home Service"
  ],
  footerTagline: "Beautiful Mehendi. Beautiful Memories.",
  copyright: "© 2026 Ansh Bridal Mehandi Art. All Rights Reserved."
};

/**
 * EXACT 8 MEHNDI CATEGORIES
 * STRICT REQUIREMENT: Used consistently across Services, Mehendi Types, Gallery, Homepage,
 * Category Cards, Image Sections, and Navigation/Filter sections.
 */
export const MEHNDI_CATEGORIES: MehndiCategoryItem[] = [
  {
    id: "leg-mehndi-bridal",
    title: "Leg Mehndi Bridal",
    slotId: "slot-leg-mehndi-bridal",
    tag: "Signature Bridal",
    description: "Intricate bridal feet and leg henna patterns adorned with payal chains, peacocks, floral mandalas, and royal motifs.",
    slotLabel: "Real Photo Slot: Leg Mehndi Bridal",
    aspectRatio: "4/5"
  },
  {
    id: "customized-bridal-mehndi",
    title: "Customized Bridal Mehndi",
    slotId: "slot-customized-bridal-mehndi",
    tag: "Bespoke Art",
    description: "Personalized bridal designs including couple portraits, customized wedding dates, vows, hashtags, and love story elements.",
    slotLabel: "Real Photo Slot: Customized Bridal Mehndi",
    aspectRatio: "4/5"
  },
  {
    id: "engagement-mehndi",
    title: "Engagement Mehndi",
    slotId: "slot-engagement-mehndi",
    tag: "Ceremony Special",
    description: "Graceful and elegant henna tailored for ring ceremonies, featuring exquisite finger highlights and delicate wrist cuffs.",
    slotLabel: "Real Photo Slot: Engagement Mehndi",
    aspectRatio: "4/5"
  },
  {
    id: "guest-mehndi-arabic-mehndi",
    title: "Guest Mehndi / Arabic Mehndi",
    slotId: "slot-guest-mehndi-arabic-mehndi",
    tag: "Trending Style",
    description: "Flowing floral trails, shaded motifs, and bold Arabic lattices combined with fast, elegant designs for wedding guests.",
    slotLabel: "Real Photo Slot: Guest Mehndi / Arabic Mehndi",
    aspectRatio: "4/5"
  },
  {
    id: "mandala-mehndi",
    title: "Mandala Mehndi",
    slotId: "slot-mandala-mehndi",
    tag: "Sacred Symmetry",
    description: "Mesmerizing geometric and floral circular centerpieces with finely detailed symmetry and spiritual elegance.",
    slotLabel: "Real Photo Slot: Mandala Mehndi",
    aspectRatio: "4/5"
  },
  {
    id: "rajasthani-mehndi",
    title: "Rajasthani Mehndi",
    slotId: "slot-rajasthani-mehndi",
    tag: "Royal Heritage",
    description: "Dense, traditional Marwari royal craftsmanship featuring jharokhas, dhol-shehnai, royal elephants, and heavy full-hand coverage.",
    slotLabel: "Real Photo Slot: Rajasthani Mehndi",
    aspectRatio: "4/5"
  },
  {
    id: "indian-mehndi",
    title: "Indian Mehndi",
    slotId: "slot-indian-mehndi",
    tag: "Festive Classic",
    description: "Rich celebratory patterns infused with classic peacocks, kalash, mango bootas, and timeless cultural heritage.",
    slotLabel: "Real Photo Slot: Indian Mehndi",
    aspectRatio: "4/5"
  },
  {
    id: "traditional-mehndi",
    title: "Traditional Mehndi",
    slotId: "slot-traditional-mehndi",
    tag: "Evergreen Heritage",
    description: "Pure authentic Indian wedding henna characterized by fine-line precision, traditional net jaali, and deep dark natural stain.",
    slotLabel: "Real Photo Slot: Traditional Mehndi",
    aspectRatio: "4/5"
  }
];

export const GUEST_MEHNDI_PRICES: GuestPriceItem[] = [
  {
    price: "₹300",
    title: "Simple Front Hand",
    subtitle: "Elegant & Light Design",
    description: "Quick graceful trail or front hand floral motif, ideal for bridesmaids and family members."
  },
  {
    price: "₹500",
    title: "Front Hand + Back Hand",
    subtitle: "Balanced & Stylish Design",
    description: "Harmonious front palm and stylish back hand patterns for a complete balanced look."
  },
  {
    price: "₹700",
    title: "Heavy Front Hand",
    subtitle: "Rich & Beautiful Design",
    description: "Intricate jaali, floral lace, and dense shading for a festive statement palm.",
    popular: true
  },
  {
    price: "₹1,000",
    title: "Front + Back Hand Heavy Design",
    subtitle: "Traditional & Trendy Look",
    description: "Rich detailing on both sides of the hands with trendy wrist cuffs and royal filler work."
  },
  {
    price: "₹1,500",
    title: "Full Hand Mehndi (Both Hands)",
    subtitle: "Full Coverage & Detailed Work",
    description: "Complete forearm coverage front and back on both hands with deep intricate detailing."
  },
  {
    price: "₹2,000+",
    title: "Premium / Customized Guest Mehndi",
    subtitle: "As per Your Choice & Design",
    description: "Tailored to your specific reference photo, customized motifs, and luxury bridal party finish."
  }
];

export const GUEST_PACKAGES_20: PackageItem[] = [
  {
    id: "basic",
    name: "BASIC",
    price: "₹5,999",
    guests: "20 Guests",
    features: [
      "Simple Guest Mehndi",
      "₹300 वाले डिज़ाइन के हिसाब से",
      "Beautiful & Elegant Designs",
      "100% Natural Mehndi"
    ]
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "₹7,999",
    guests: "20 Guests",
    recommended: true,
    features: [
      "Front Hand + Selected Back Hand Designs",
      "₹500–₹700 Range Designs",
      "Stylish & Beautiful Patterns",
      "100% Natural Mehndi"
    ]
  },
  {
    id: "royal",
    name: "ROYAL",
    price: "₹9,999",
    guests: "20 Guests",
    features: [
      "Premium Guest Mehndi",
      "Heavy & Customized Designs",
      "Front + Back Hand Options",
      "Beautiful & Long-Lasting Colour",
      "Home Service Available"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "11 Years of Experience",
    description: "Over a decade of trusted bridal and celebratory henna expertise across Delhi NCR."
  },
  {
    title: "Professional Team",
    description: "Punctual, hygienic, and skilled henna artists trained for fast and flawless application."
  },
  {
    title: "Beautiful Detailed Designs",
    description: "Fine-line precision, flawless symmetries, rich dark natural stain results."
  },
  {
    title: "Customized Designs",
    description: "Personalized portraits, couple initials, dates, and custom motifs matched to your attire."
  },
  {
    title: "Multiple Styles",
    description: "Bridal, Rajasthani, Arabic, Indo-Western, Moroccan, and contemporary fusion styles."
  },
  {
    title: "Home Mehendi Service",
    description: "Hassle-free doorstep service at your home, hotel, farm, or wedding venue."
  }
];

export const SERVICE_AREAS = [
  "Noida",
  "Delhi",
  "Greater Noida",
  "Faridabad",
  "Gurgaon"
];

export const REVIEWS = [
  {
    name: "Priya Sharma",
    quote: "Beautiful mehndi design, loved the detailing! ❤️"
  },
  {
    name: "Ananya Verma",
    quote: "Amazing work and very neat finishing. Highly recommended!"
  },
  {
    name: "Neha Singh",
    quote: "Absolutely loved my mehndi. The design was so beautiful! ✨"
  },
  {
    name: "Riya Patel",
    quote: "Very creative designs and excellent service. Loved it!"
  },
  {
    name: "Pooja Gupta",
    quote: "The bridal mehndi was gorgeous. Exactly what I wanted! 💕"
  },
  {
    name: "Simran Kaur",
    quote: "Beautiful work with amazing detailing. Really happy!"
  },
  {
    name: "Sneha Agarwal",
    quote: "Loved the design and the finishing. Wonderful experience!"
  },
  {
    name: "Shreya Joshi",
    quote: "Such beautiful and elegant mehndi designs. Highly recommended!"
  },
  {
    name: "Kavya Mehta",
    quote: "The customized design was perfect. Absolutely loved it! ❤️"
  },
  {
    name: "Nisha Yadav",
    quote: "Very professional and talented. The mehndi looked stunning!"
  }
];
