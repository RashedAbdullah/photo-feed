import Image from "next/image";
import Link from "next/link";
import React from "react";
import PhotoCard from "./photo-card";

const PhotoList = ({ photos }) => {
  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
