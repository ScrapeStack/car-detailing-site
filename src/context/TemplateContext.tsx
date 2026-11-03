import React, { createContext, useContext, useState, useEffect } from 'react';
import { DetailingBusinessConfig, DEFAULT_CONFIG } from '../data/templateConfig';

interface TemplateContextType {
  config: DetailingBusinessConfig;
  updateConfig: (patch: Partial<DetailingBusinessConfig>) => void;
  resetConfig: () => void;
  showRawPlaceholders: boolean;
  setShowRawPlaceholders: (show: boolean) => void;
  toggleRawPlaceholders: () => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  // Helper to render either the real customized value or the explicit placeholder tag
  renderText: (key: keyof DetailingBusinessConfig | string, placeholderTag: string, fallback?: string) => string;
}

const STORAGE_KEY = 'car_detailing_template_config_v2';
const PLACEHOLDER_MODE_KEY = 'car_detailing_raw_placeholders_v2';

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const TemplateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<DetailingBusinessConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return DEFAULT_CONFIG;
  });

  const [showRawPlaceholders, setShowRawPlaceholders] = useState<boolean>(() => {
    try {
      return localStorage.getItem(PLACEHOLDER_MODE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // ignore
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem(PLACEHOLDER_MODE_KEY, String(showRawPlaceholders));
    } catch {
      // ignore
    }
  }, [showRawPlaceholders]);

  // Apply CSS variables to document root for real-time accent & theme updates
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-color', config.accentColor);
    
    // Calculate lighter and glow variants
    let glow = 'rgba(0, 122, 255, 0.35)';
    if (config.accentColor === '#FF3B30') glow = 'rgba(255, 59, 48, 0.35)';
    else if (config.accentColor === '#10B981') glow = 'rgba(16, 185, 129, 0.35)';
    else if (config.accentColor === '#F59E0B') glow = 'rgba(245, 158, 11, 0.35)';
    root.style.setProperty('--accent-glow', glow);

    // Base background colors
    let bg = '#090B10';
    let surface = '#111622';
    if (config.baseTheme === 'charcoal') {
      bg = '#121212';
      surface = '#1B1B1B';
    } else if (config.baseTheme === 'dark-slate') {
      bg = '#0F172A';
      surface = '#1E293B';
    }
    root.style.setProperty('--bg-base', bg);
    root.style.setProperty('--bg-surface', surface);
  }, [config.accentColor, config.baseTheme]);

  const updateConfig = (patch: Partial<DetailingBusinessConfig>) => {
    setConfig((prev) => ({ ...prev, ...patch }));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
  };

  const toggleRawPlaceholders = () => {
    setShowRawPlaceholders((prev) => !prev);
  };

  const renderText = (
    key: keyof DetailingBusinessConfig | string,
    placeholderTag: string,
    fallback?: string
  ): string => {
    if (showRawPlaceholders) {
      return placeholderTag;
    }
    if (key in config) {
      const val = config[key as keyof DetailingBusinessConfig];
      if (typeof val === 'string' || typeof val === 'number') {
        return String(val);
      }
    }
    return fallback ?? placeholderTag;
  };

  return (
    <TemplateContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        showRawPlaceholders,
        setShowRawPlaceholders,
        toggleRawPlaceholders,
        isCustomizerOpen,
        setIsCustomizerOpen,
        renderText
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }
  return context;
};
