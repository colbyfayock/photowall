import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.PUBLIC_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

/**
 * getFolderConfig
 */


export async function getFolderConfig(folderName: string) {
  try {
    const url = cloudinary.url(`${folderName}/config.json`, {
      resource_type: 'raw'
    });

    const response = await fetch(url);

    if ( !response.ok ) {
      throw new Error('Error finding config.')
    }

    const data = await response.json();

    return data;
  } catch(e) {
    console.log(`Can not find config for ${folderName}`);
    return;
  }
}