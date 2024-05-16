"use client";

import { useState, ReactNode } from "react";
// @ts-expect-error
import { Lightbox } from "react-modal-image";

interface WithLightboxProps {
  alt?: string;
  children: ReactNode;
  imageMedium: string;
  imageLarge: string;
}

const WithLightbox = ({ children, imageMedium, imageLarge, alt = '' }: WithLightboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(!open)}>
      { children }
      {open && (
        <Lightbox
          medium={imageMedium}
          large={imageLarge}
          alt={alt}
          onClose={() => setOpen(false)}
          hideDownload
          hideZoom
        />
      )}
    </button>
  )
}

export default WithLightbox;