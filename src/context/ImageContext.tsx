import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageContextType {
  images: Record<string, string>;
  setImage: (slotId: string, urlOrBase64: string) => void;
  removeImage: (slotId: string) => void;
  resetAllImages: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const STORAGE_KEY = 'ansh_mehndi_real_photos_v1';

// Safe storage access helper to prevent crashes in private browsing or restricted iframes
const safeGetItem = (key: string): string | null => {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch {
    // Access denied / Private mode / security restriction
  }
  return null;
};

const safeSetItem = (key: string, value: string): void => {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch {
    // Quota exceeded or storage blocked
  }
};

const safeRemoveItem = (key: string): void => {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  } catch {
    // Ignore
  }
};

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>(() => {
    try {
      const saved = safeGetItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      safeSetItem(STORAGE_KEY, JSON.stringify(images));
    } catch {
      // Safeguard
    }
  }, [images]);

  const setImage = (slotId: string, urlOrBase64: string) => {
    setImages(prev => ({ ...prev, [slotId]: urlOrBase64 }));
  };

  const removeImage = (slotId: string) => {
    setImages(prev => {
      const next = { ...prev };
      delete next[slotId];
      return next;
    });
  };

  const resetAllImages = () => {
    setImages({});
    safeRemoveItem(STORAGE_KEY);
  };

  return (
    <ImageContext.Provider value={{ images, setImage, removeImage, resetAllImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const ctx = useContext(ImageContext);
  if (!ctx) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return ctx;
};
