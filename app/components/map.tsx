import React from 'react';

interface GoogleMapProps {
    src: string;
    width: number;
    height: number;
}

const Map: React.FC<GoogleMapProps> = ({ src, width, height }) => {
  return (
    <iframe
        src={src}
        width={width}
        height={height}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  )
}

export default Map