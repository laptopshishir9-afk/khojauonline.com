import { StoreSettings, Product, Review, Order, UserAccount } from '../types';
import liyauLogoAsset from '../assets/images/liyau_logo.svg';
import khojauHeroAsset from '../assets/images/khojau_hero_nepal_1791032655932.jpg';
import nepalFlagAsset from '../assets/images/nepal_flag.svg';
import founderAvatarAsset from '../assets/images/founder_shishir_avatar_1790995944922.jpg';

export const RESOLVED_BRAND_ASSETS = {
  logo: liyauLogoAsset,
  heroBanner: khojauHeroAsset,
  nepalFlag: nepalFlagAsset,
  founderAvatar: founderAvatarAsset,
};

export function resolveAssetUrl(url: string | undefined | null, fallbackUrl: string = ''): string {
  if (!url) return fallbackUrl;
  if (url.includes('liyau_logo.svg') || url.includes('khojau_logo.svg')) return RESOLVED_BRAND_ASSETS.logo;
  if (url.includes('khojau_hero_nepal') || url.includes('hero_nepal_shopping')) return RESOLVED_BRAND_ASSETS.heroBanner;
  if (url.includes('nepal_flag.svg')) return RESOLVED_BRAND_ASSETS.nepalFlag;
  if (url.includes('founder_shishir_avatar')) return RESOLVED_BRAND_ASSETS.founderAvatar;
  return url;
}

export const FALLBACK_SETTINGS: StoreSettings = {
  storeName: "Liyau",
  tagline: "Nepal's Trusted Modern Online Store",
  logoUrl: liyauLogoAsset,
  heroBannerUrl: khojauHeroAsset,
  nepalFlagUrl: nepalFlagAsset,
  heroBadgeText: "PROUDLY NEPALI · लियौँ — SMART SHOPPING IN NEPAL",
  heroTitle: "Authentic Quality, Delivered Across Nepal.",
  heroSubtitle: "Welcome to Liyau (लियौँ) — based in Butwal, Nepal. Discover genuine electronics, handcrafted Nepali heritage goods, and everyday essentials with verified QR payment and fast nationwide delivery.",
  heroCtaText: "Start Exploring",
  announcementText: "🇳🇵 Dashain & Tihar Mega Offer! Free Delivery in Butwal on orders above Rs. 2,000 | Fast Delivery Across All 7 Provinces of Nepal",
  announcementEnabled: true,
  freeDeliveryThreshold: 2000,
  deliveryKathmanduFee: 50,
  deliveryOutsideFee: 150,
  contactPhone: "+977 9802685609",
  contactEmail: "pokhrelshishir21@gmail.com",
  storeAddress: "Butwal, Nepal",
  socialLinks: {
    facebook: "https://facebook.com/liyau.np",
    instagram: "https://instagram.com/liyau.np",
    tiktok: "https://tiktok.com/@liyau.np",
    whatsapp: "9779802685609"
  },
  founder: {
    name: "Shishir Pokhrel",
    role: "Founder & Chief Executive Officer",
    photoUrl: founderAvatarAsset,
    bio: "Shishir Pokhrel founded Liyau (लियौँ) in Butwal, Nepal with a clear mission: to make online shopping in Nepal trustworthy, transparent, and accessible to every household from Mechi to Mahakali. Tired of seeing Nepali shoppers overcharged for low-grade imports, Shishir built Liyau around strict quality inspection, honest rupee pricing, and responsive local customer care.",
    visionQuote: "At Liyau, we don't just deliver packages — we deliver trust. Every product in our catalog is hand-checked by our team in Butwal before it ever reaches your doorstep.",
    location: "Butwal, Nepal",
    email: "pokhrelshishir21@gmail.com",
    website: "https://shishirpokhrel.com.np",
    instagram: "https://instagram.com/shishirpokhrel"
  },
  aboutBrand: {
    title: "About Liyau (लियौँ)",
    subtitle: "Redefining Everyday Online Shopping in Nepal",
    story: "Born in Butwal, Nepal, Liyau ('लियौँ' — meaning 'Let's Get It / Let's Take It Together') was created for modern Nepali shoppers who value genuine products, fair transparent pricing, and dependable doorstep delivery.",
    aboutKhojau: "Liyau (लियौँ) is a proudly Nepali e-commerce platform headquartered in Butwal, Rupandehi, Nepal. We connect discerning shoppers across all 7 provinces with 100% genuine electronics, local Nepali craftsmanship, fashion, and daily essentials.",
    brandDescription: "Every item listed on Liyau undergoes multi-point physical verification at our Butwal hub before dispatch. We combine transparent Nepalese Rupee (Rs.) pricing, instant QR digital payments, and responsive human support.",
    mission: "To empower Nepali consumers and local artisans by providing a zero-compromise digital marketplace built on authenticity, speed, and local accountability.",
    values: [
      "100% Genuine & Quality-Verified Products",
      "Fast Express Dispatch in Butwal & All 7 Provinces",
      "Secure Official QR Payment with Admin Verification",
      "7-Day Hassle-Free Return & Replacement Guarantee"
    ]
  },
  aiSettings: {
    enabled: true,
    assistantName: "Liyau Thinker",
    greetingMessage: "Namaste! 🙏 I am Liyau Thinker, your official shopping assistant for Liyau (लियौँ) in Butwal, Nepal. Ask me about our live products, prices, QR payment, or delivery across Nepal!",
    systemBehavior: "Warm, polite, helpful Nepali e-commerce specialist. Uses occasional respectful Nepali words like 'Namaste', 'Hajur', and 'Dhanyabad'. Always truthful to actual live catalog data and Butwal, Nepal location.",
    customInstructions: "Highlight that Liyau is proudly based in Butwal, Nepal (never Kathmandu). Free delivery applies on orders over Rs. 2,000. Only quote real products and prices from the active catalog.",
    faqList: [
      {
        id: "faq-1",
        question: "Where is Liyau located and how fast is delivery?",
        answer: "Liyau (लियौँ) is headquartered in Butwal, Nepal. Inside Butwal & Rupandehi, we deliver within 24 hours (Rs. 50, or FREE above Rs. 2,000). For major cities across Nepal including Kathmandu, Pokhara, Chitwan, Dharan, and Biratnagar, delivery takes 2–4 business days (Rs. 150 flat)."
      },
      {
        id: "faq-2",
        question: "How do I pay for my order on Liyau?",
        answer: "We accept Official QR Payment (compatible with eSewa, Khalti, Fonepay, and Mobile Banking apps). At checkout, our system displays the exact total amount and unique order remark. After scanning and paying, submit your Transaction ID or payment screenshot for verification."
      },
      {
        id: "faq-3",
        question: "What is your return or exchange policy?",
        answer: "We offer a 7-day easy return and replacement guarantee from our Butwal hub if you receive a damaged, defective, or wrong item. Simply reach out via WhatsApp or phone at +977 9802685609 with your order number."
      },
      {
        id: "faq-4",
        question: "Who is the founder of Liyau?",
        answer: "Liyau (लियौँ) was founded by Shishir Pokhrel in Butwal, Nepal with the vision of making online shopping in Nepal transparent, reliable, and quality-verified."
      }
    ]
  },
  promotionalOffer: {
    enabled: true,
    badge: "🇳🇵 Dashain & Tihar Special Offer",
    title: "Festive Mega Savings Across Nepal!",
    subtitle: "Celebrate the festive season with authentic electronics, heritage crafts, and daily essentials dispatched directly from Butwal, Nepal.",
    discountText: "Up to 25% OFF + Free Butwal Delivery Above Rs. 2,000",
    discountPercentage: 25,
    ctaText: "Explore Festive Deals",
    bannerImageUrl: khojauHeroAsset,
    showOnFirstVisit: true
  },
  qrPaymentSettings: {
    enabled: true,
    qrImageUrl: "",
    accountName: "Liyau Online Store (Shishir Pokhrel)",
    providerName: "Fonepay / eSewa / Khalti / Mobile Banking QR",
    instructions: "Scan the official Liyau QR code below using your eSewa, Khalti, or Mobile Banking app. Please pay the exact total amount shown and enter the automatic Order Remark in your payment remarks field, then submit your Transaction ID below."
  },
  websiteTexts: {
    featuredSectionTitle: "Handpicked for Nepal",
    featuredSectionSubtitle: "Curated top-rated essentials verified by our Butwal quality team",
    allProductsSectionTitle: "Complete Liyau Catalog",
    allProductsSectionSubtitle: "Browse 100% genuine products with transparent Nepalese Rupee pricing",
    emptyCatalogTitle: "No Products Listed Yet",
    emptyCatalogMessage: "Our Butwal, Nepal warehouse team is currently updating the live catalog. Please check back shortly or contact us on WhatsApp!",
    checkoutHeaderTitle: "Secure QR Checkout",
    checkoutHeaderSubtitle: "Fast dispatch from Butwal, Nepal across all 7 provinces",
    footerTagline: "Liyau (लियौँ) — Nepal's trusted modern online shopping destination based in Butwal, Nepal."
  },
  returnPolicyText: "7-Day Hassle-Free Replacement & Return Policy: If your item arrives damaged, defective, or different from what you ordered, contact our Butwal support team within 7 days of delivery for a free replacement or full refund.",
  deliveryInfoText: "Same/Next-day express delivery in Butwal & Rupandehi (Rs. 50, Free over Rs. 2,000). 2 to 4 business days nationwide courier delivery across all 7 provinces of Nepal (Rs. 150)."
};

export interface FallbackAdminCredentials {
  email: string;
  username: string;
  passwordHash?: string;
  salt?: string;
  plainPassword?: string;
  isConfigured: boolean;
  updatedAt: string;
}

export interface FallbackDB {
  settings: StoreSettings;
  products: Product[];
  reviews: Review[];
  orders: Order[];
  customers: Array<UserAccount & { password?: string }>;
  adminCredentials?: FallbackAdminCredentials;
}

export const INITIAL_FALLBACK_DB: FallbackDB = {
  settings: FALLBACK_SETTINGS,
  products: [],
  reviews: [],
  orders: [],
  customers: [],
  adminCredentials: {
    email: "admin@liyau.com",
    username: "admin",
    passwordHash: "2ed5d2049dfb257577e1f7ff88c0812160f64f3b0e52bf107cf3c192dfa854215a57e70f2f0d0f20bc51d6dbafd7b5943dfbaae428707f8e1fc6de3c3a02fe5d",
    salt: "a1b2c3d4e5f607182930415263748596",
    isConfigured: true,
    updatedAt: new Date().toISOString()
  }
};

const LOCAL_STORE_DB_KEY = 'liyau_store_db_v6';

export function getLocalStoreDB(): FallbackDB {
  try {
    const raw = localStorage.getItem(LOCAL_STORE_DB_KEY) || localStorage.getItem('khojau_static_store_db_v5');
    if (raw) {
      const parsed = JSON.parse(raw);
      const rawStoreName = parsed.settings?.storeName;
      const migratedStoreName = (!rawStoreName || rawStoreName === 'Khojau' || rawStoreName.includes('खोजौँ'))
        ? FALLBACK_SETTINGS.storeName
        : rawStoreName;

      const settings: StoreSettings = {
        ...FALLBACK_SETTINGS,
        ...(parsed.settings || {}),
        storeName: migratedStoreName,
        logoUrl: resolveAssetUrl(parsed.settings?.logoUrl, RESOLVED_BRAND_ASSETS.logo),
        heroBannerUrl: resolveAssetUrl(parsed.settings?.heroBannerUrl, RESOLVED_BRAND_ASSETS.heroBanner),
        nepalFlagUrl: resolveAssetUrl(parsed.settings?.nepalFlagUrl, RESOLVED_BRAND_ASSETS.nepalFlag),
        heroBadgeText: (parsed.settings?.heroBadgeText || FALLBACK_SETTINGS.heroBadgeText)
          .replace(/Khojau/gi, 'Liyau')
          .replace(/खोजौँ/g, 'लियौँ'),
        heroTitle: (parsed.settings?.heroTitle || FALLBACK_SETTINGS.heroTitle)
          .replace(/Khojau/gi, 'Liyau')
          .replace(/खोजौँ/g, 'लियौँ'),
        heroSubtitle: (parsed.settings?.heroSubtitle || FALLBACK_SETTINGS.heroSubtitle)
          .replace(/Khojau/gi, 'Liyau')
          .replace(/खोजौँ/g, 'लियौँ'),
        founder: {
          ...FALLBACK_SETTINGS.founder,
          ...(parsed.settings?.founder || {}),
          photoUrl: resolveAssetUrl(parsed.settings?.founder?.photoUrl, RESOLVED_BRAND_ASSETS.founderAvatar)
        },
        aboutBrand: {
          ...FALLBACK_SETTINGS.aboutBrand,
          ...(parsed.settings?.aboutBrand || {})
        },
        aiSettings: {
          ...FALLBACK_SETTINGS.aiSettings,
          ...(parsed.settings?.aiSettings || {}),
          assistantName: (!parsed.settings?.aiSettings?.assistantName || parsed.settings.aiSettings.assistantName.toLowerCase().includes('khojau'))
            ? 'Liyau Thinker'
            : parsed.settings.aiSettings.assistantName,
          greetingMessage: (parsed.settings?.aiSettings?.greetingMessage || FALLBACK_SETTINGS.aiSettings.greetingMessage)
            .replace(/Khojau Saathi/gi, 'Liyau Thinker')
            .replace(/Khojau/gi, 'Liyau')
            .replace(/खोजौँ/g, 'लियौँ')
        },
        promotionalOffer: {
          ...FALLBACK_SETTINGS.promotionalOffer!,
          ...(parsed.settings?.promotionalOffer || {}),
          bannerImageUrl: resolveAssetUrl(parsed.settings?.promotionalOffer?.bannerImageUrl, RESOLVED_BRAND_ASSETS.heroBanner)
        },
        qrPaymentSettings: {
          ...FALLBACK_SETTINGS.qrPaymentSettings,
          ...(parsed.settings?.qrPaymentSettings || {})
        },
        websiteTexts: {
          ...FALLBACK_SETTINGS.websiteTexts!,
          ...(parsed.settings?.websiteTexts || {})
        }
      };

      return {
        settings,
        products: Array.isArray(parsed.products) ? parsed.products : INITIAL_FALLBACK_DB.products,
        reviews: Array.isArray(parsed.reviews) ? parsed.reviews : INITIAL_FALLBACK_DB.reviews,
        orders: Array.isArray(parsed.orders) ? parsed.orders : INITIAL_FALLBACK_DB.orders,
        customers: Array.isArray(parsed.customers) ? parsed.customers : INITIAL_FALLBACK_DB.customers,
        adminCredentials: parsed.adminCredentials || INITIAL_FALLBACK_DB.adminCredentials
      };
    }
  } catch (e) {
    console.warn('Fallback DB read failed, using defaults', e);
  }
  const initial: FallbackDB = JSON.parse(JSON.stringify(INITIAL_FALLBACK_DB));
  saveLocalStoreDB(initial);
  return initial;
}

export function saveLocalStoreDB(db: FallbackDB): void {
  try {
    const serialized = JSON.stringify(db);
    localStorage.setItem(LOCAL_STORE_DB_KEY, serialized);
    window.dispatchEvent(new CustomEvent('liyau-store-updated'));
  } catch (e) {
    console.warn('Could not persist to localStorage', e);
  }
}
