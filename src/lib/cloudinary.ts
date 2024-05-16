import { v2 as cloudinary } from 'cloudinary';

import { CloudinaryFolder, CloudinaryResource } from '@/types/cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * getResourcebyAssetId
 */

export async function getResourcebyAssetId(assetId: string) {
  const results = await cloudinary.api.resources_by_asset_ids(assetId, {
    tags: true
  });
  return results?.resources?.[0] as unknown as CloudinaryResource;
}


/**
 * getFolderConfig
 */


export async function getFolderConfig(folderName: string) {
  try {
    const url = cloudinary.url(`photowall/${folderName}/config.json`, {
      resource_type: 'raw'
    });
    const data = await fetch(url).then(r => r.json());
    return data;
  } catch(e) {
    console.log(`Can not find config for ${folderName}`);
    return;
  }
}

/**
 * getResourcesByFolder
 */

interface GetResourcesByFolderOptions {
  resourceType?: string;
}

export async function getResourcesByFolder(folderName: string, options?: GetResourcesByFolderOptions) {
  const { resourceType } = options || {};
  try {
    const { resources } = await cloudinary.api.resources({
      type: 'upload',
      prefix: `photowall/${folderName}`,
      resource_type: resourceType
    });
    return {
      resources: resources as unknown as Array<CloudinaryResource>
    };
  } catch(e) {
    return {
      resources: []
    }
  }
}

/**
 * getSubFolders
 */

export async function getSubFolders(parentFolder: string) {
  try {
    const { folders }: { folders: Array<CloudinaryFolder> } = await cloudinary.api.sub_folders(parentFolder, {
      max_results: 400
    });
    return {
      folders
    };
  } catch(e) {
    return {
      folders: []
    }
  }
}