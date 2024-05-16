"use client";

import { Upload } from 'lucide-react';
import { CloudinaryUploadWidgetResults } from 'next-cloudinary';

import CldUploadButton from "@/components/CldUploadButton";

interface UploadButtonProps {
  children?: JSX.Element
}

const UploadButton = ({ children }: UploadButtonProps) => {
  async function handleOnSuccess(results: CloudinaryUploadWidgetResults) {
    if ( typeof results?.info === 'object' ) {
      // addResources([results.info]);
    }
  }

  function handleOnError(error: any) {
    console.log('error', error)
    // @TODO: Toast
  }

  return (
    <CldUploadButton
      signatureEndpoint="/api/sign-cloudinary-params"
      options={{
        autoMinimize: true,
        resourceType: 'image',
        folder: 'test'
      }}
      onSuccess={handleOnSuccess}
      onError={handleOnError}
    >
      {children || (
        <span className="flex items-center">
          <Upload className="mr-2 h-4 w-4" /> Upload
        </span>
      )}
    </CldUploadButton>
  )
}

export default UploadButton;