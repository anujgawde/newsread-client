"use client";

import { useState } from "react";

export default function ArticleImage({
  src,
  alt,
  fallbackSrc,
  onClick,
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      onClick={onClick}
      className="object-cover h-full"
      src={imageSrc}
      alt={alt}
      {...props}
      onError={() => setImageSrc(fallbackSrc)}
    />
  );
}
