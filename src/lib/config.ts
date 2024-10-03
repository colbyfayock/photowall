import themeConfig from '../../theme.config';

import type { PhotowallConfig } from '@/types/config';

export function getConfig() {
  const config: PhotowallConfig = {
    // Customization

    title: 'Photowall',
    folder: 'photowall',

    // Apply custom settings based on theme configuration

    ...themeConfig
  }

  return config;
}