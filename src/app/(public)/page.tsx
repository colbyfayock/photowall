import Link from 'next/link';

import { getFolderConfig, getSubFolders } from '@/lib/cloudinary';

import Container from '@/components/Container';

export default async function Home() {
  const { folders } = await getSubFolders('photowall');

  const foldersWithConfig = await Promise.all(folders.map(async folder => {
    const config = await getFolderConfig(folder.name);
    return {
      ...folder,
      config
    }
  }));

  return (
    <Container className="mt-12">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {foldersWithConfig.map((folder) => {
          return (
            <li key={folder.name}>
              <Link
                className="flex items-center justify-center aspect-square font-bold p-5 border-2 border-zinc-200 rounded"
                href={`/wall/${folder.name}`}
              >
                { folder.config.name || folder.name }
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}