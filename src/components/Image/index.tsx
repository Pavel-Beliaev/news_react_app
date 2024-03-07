import React, { FC, memo, useEffect, useRef, useState } from 'react';

type PropsType = {
  src: string;
  alt?: string;
  imgAuthor?: string;
};
export const Image: FC<PropsType> = ({ src, alt = 'pict', imgAuthor }) => {
  const [isLoaded, setisLoaded] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setisLoaded(true);
    }
  }, []);

  return (
    <div className='flex flex-col'>
      <div
        className={`imageContainer ${
          imageRef.current !== null && isLoaded ? 'imageContainerLoaded' : ''
        }`}>
        <img
          ref={imageRef}
          className={`image ${
            imageRef.current !== null && isLoaded ? 'imageLoaded' : ''
          }`}
          src={src}
          alt={alt}
        />
      </div>
      {!!imgAuthor && (
        <span className='flex self-end text-[#727272] text-[9px]'>
          {imgAuthor}
        </span>
      )}
    </div>
  );
};
