import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

import { getConfig } from '@/lib/config';

const config = getConfig();

export const collections = {
  assets: defineCollection({
    loader: cldAssetsLoader({
      limit: 99999,
      folder: config.folder
    })
  }),
}