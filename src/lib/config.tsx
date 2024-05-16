import { Image } from 'lucide-react';
import themeConfig from '../../theme.config';

import { PhotowallConfig } from '@/types/config';

export function getConfig() {
  const config: PhotowallConfig = {
    // Customization

    logo: <Image className="w-6 h-6" />,
    title: 'Photowall',

    // Apply custom settings based on theme configuration

    ...themeConfig
  }

  return config;
}