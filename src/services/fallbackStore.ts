import type { Product, Review, Order, UserAccount, StoreSettings } from '../types/index.ts';
import rawStoreData from '../../data/store.json';

export const resolveAssetUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('./')) {
    return url;
  }
  if (url.startsWith('/')) {
    return `.${url}`;
  }
  return `./${url}`;
};

const sanitizeBrandString = (val?: string): string => {
  if (!val || typeof val !== 'string') return val || '';
  return val
    .replace(/liyau_logo\.svg/gi, 'khojau_logo.svg')
    .replace(/Liyau/g, 'Khojau')
    .replace(/liyau/g, 'khojau')
    .replace(/LIYAU/g, 'KHOJAU')
    .replace(/लिऔँ/g, 'खोजौँ')
    .replace(/लिऔं/g, 'खोजौँ');
};

const normalizeStoreSettings = (s: StoreSettings): StoreSettings => {
  const cleanTexts: Record<string, string> = {};
  if (s.websiteTexts) {
    for (const [k, v] of Object.entries(s.websiteTexts)) {
      cleanTexts[k] = sanitizeBrandString(v as string);
    }
  }

  return {
    ...s,
    storeName: sanitizeBrandString(s.storeName || 'Khojau'),
    tagline: sanitizeBrandString(s.tagline),
    logoUrl: resolveAssetUrl(sanitizeBrandString(s.logoUrl) || '/src/assets/images/khojau_logo.svg'),
    heroBannerUrl: resolveAssetUrl(s.heroBannerUrl || '/src/assets/images/khojau_hero_nepal_1791032655932.jpg'),
    promoBannerUrl: resolveAssetUrl(s.promoBannerUrl || '/src/assets/images/banner_tech_lifestyle_1790995930360.jpg'),
    nepalFlagUrl: resolveAssetUrl(s.nepalFlagUrl),
    heroTitle: sanitizeBrandString(s.heroTitle),
    heroSubtitle: sanitizeBrandString(s.heroSubtitle),
    contactEmail: sanitizeBrandString(s.contactEmail),
    storeAddress: sanitizeBrandString(s.storeAddress),
    deliveryInfoText: sanitizeBrandString(s.deliveryInfoText),
    returnPolicyText: sanitizeBrandString(s.returnPolicyText),
    founder: {
      ...s.founder,
      name: sanitizeBrandString(s.founder?.name),
      role: sanitizeBrandString(s.founder?.role),
      bio: sanitizeBrandString(s.founder?.bio),
      photoUrl: resolveAssetUrl(s.founder?.photoUrl || '/src/assets/images/founder_shishir_1790996757613.jpg'),
    },
    aboutBrand: {
      aboutKhojau: sanitizeBrandString(s.aboutBrand?.aboutKhojau || (s.aboutBrand as any)?.aboutLiyau || ''),
      brandDescription: sanitizeBrandString(s.aboutBrand?.brandDescription),
      mission: sanitizeBrandString(s.aboutBrand?.mission),
    },
    aiSettings: s.aiSettings
      ? {
          ...s.aiSettings,
          welcomeMessage: sanitizeBrandString(s.aiSettings.welcomeMessage),
          customPrompt: sanitizeBrandString(s.aiSettings.customPrompt),
        }
      : s.aiSettings,
    promotionalOffer: s.promotionalOffer
      ? {
          ...s.promotionalOffer,
          title: sanitizeBrandString(s.promotionalOffer.title),
          subtitle: sanitizeBrandString(s.promotionalOffer.subtitle),
          popupImageUrl: resolveAssetUrl(s.promotionalOffer.popupImageUrl),
        }
      : undefined,
    qrPaymentSettings: s.qrPaymentSettings
      ? {
          ...s.qrPaymentSettings,
          accountName: sanitizeBrandString(s.qrPaymentSettings.accountName),
          instructions: sanitizeBrandString(s.qrPaymentSettings.instructions),
          qrImageUrl: resolveAssetUrl(s.qrPaymentSettings.qrImageUrl),
        }
      : undefined,
    websiteTexts: cleanTexts as any,
  };
};

const normalizeProduct = (p: Product): Product => ({
  ...p,
  images: (p.images || []).map((img) => resolveAssetUrl(img)),
});

export interface LocalAdminCredentials {
  email: string;
  username: string;
  passwordHash?: string;
  salt?: string;
  plainPassword?: string;
  isConfigured: boolean;
  updatedAt: string;
}

export interface LocalStoreDB {
  settings: StoreSettings;
  products: Product[];
  reviews: Review[];
  orders: Order[];
  customers: (UserAccount & { password?: string })[];
  adminCredentials?: LocalAdminCredentials;
}

const LOCAL_DB_KEY = 'khojau_static_store_db_v2';

export function getLocalStoreDB(): LocalStoreDB {
  try {
    // Purge legacy v1 key that may hold old "Liyau" cached settings on other devices
    if (localStorage.getItem('khojau_static_store_db_v1')) {
      localStorage.removeItem('khojau_static_store_db_v1');
    }
    const saved = localStorage.getItem(LOCAL_DB_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        settings: normalizeStoreSettings({
          ...(rawStoreData.settings as unknown as StoreSettings),
          ...(parsed.settings || {}),
          websiteTexts: {
            ...(rawStoreData.settings.websiteTexts as any),
            ...((parsed.settings && parsed.settings.websiteTexts) || {}),
          },
        }),
        products: Array.isArray(parsed.products)
          ? parsed.products.map(normalizeProduct)
          : (rawStoreData.products as unknown as Product[]).map(normalizeProduct),
        reviews: Array.isArray(parsed.reviews) ? parsed.reviews : (rawStoreData.reviews as unknown as Review[]),
        orders: Array.isArray(parsed.orders) ? parsed.orders : (rawStoreData.orders as unknown as Order[]),
        customers: Array.isArray(parsed.customers) ? parsed.customers : (rawStoreData.customers as unknown as UserAccount[]),
        adminCredentials: parsed.adminCredentials || (rawStoreData as any).adminCredentials,
      };
    }
  } catch (e) {
    console.warn('Fallback store parse warning:', e);
  }

  return {
    settings: normalizeStoreSettings(rawStoreData.settings as unknown as StoreSettings),
    products: (rawStoreData.products as unknown as Product[]).map(normalizeProduct),
    reviews: (rawStoreData.reviews as unknown as Review[]) || [],
    orders: (rawStoreData.orders as unknown as Order[]) || [],
    customers: (rawStoreData.customers as unknown as UserAccount[]) || [],
    adminCredentials: (rawStoreData as any).adminCredentials,
  };
}

export function saveLocalStoreDB(db: LocalStoreDB): void {
  try {
    localStorage.setItem(LOCAL_DB_KEY, JSON.stringify(db));
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
}
