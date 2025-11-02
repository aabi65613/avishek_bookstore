"use client";

import Image, { ImageProps } from 'next/image';
import React from 'react';

// Define props for the component, extending ImageProps but making onError optional
interface ImageWithErrorHandlerProps extends Omit<ImageProps, 'onError'> {
  // We don't need to pass onError, as we handle it internally
}

const ImageWithErrorHandler: React.FC<ImageWithErrorHandlerProps> = (props) => {
  return (
    <Image
      {...props}
      onError={(e) => {
        // Fallback to a placeholder image on error
        e.currentTarget.src = "/placeholder-product.png";
        e.currentTarget.style.objectFit = 'contain';
      }}
    />
  );
};

export default ImageWithErrorHandler;
