"use client";

import { useState } from "react";

export default function ArticleImage({ src, alt, fallbackSrc, ...props }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      className="object-cover h-full"
      src={imageSrc}
      alt={alt}
      {...props}
      onError={() => setImageSrc(fallbackSrc)}
    />
  );
}
