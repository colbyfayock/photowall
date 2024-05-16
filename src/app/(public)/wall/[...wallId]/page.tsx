import { getCldImageUrl } from "next-cloudinary";

import Container from "@/components/Container";
import CldImage from "@/components/CldImage";
import WithLightbox from "@/components/WithLightbox";
import { getResourcesByFolder, getFolderConfig } from "@/lib/cloudinary";

export const revalidate = 60 * 5;

export default async function Wall({ params }: { params: { wallId: string } }) {
  const [config, { resources }] = await Promise.all([
    await getFolderConfig(params.wallId),
    await getResourcesByFolder(params.wallId)
  ]);
  
  return (
    <Container className="mt-12">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-12">
          { config.name }
        </h1>
      </header>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {resources.map(resource => {

          const imageMedium = getCldImageUrl({
            src: resource.public_id,
            width: 1200,
          });

          const imageLarge = getCldImageUrl({
            src: resource.public_id,
          });

          return (
            <li key={resource.asset_id}>  
              <WithLightbox
                imageMedium={imageMedium}
                imageLarge={imageLarge}
              >
                <CldImage
                  width={1200}
                  height={1200}
                  src={resource.public_id}
                  crop={{
                    source: true,
                    type: 'fill'
                  }}
                  alt=""
                />
              </WithLightbox>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}