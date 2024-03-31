import Image from "next/image";
import Link from "next/link";

const PhotoCard = ({ photo }) => {
  return (
    <Link href={`/photos/${photo.id}`} className="group">
      <Image height={5000} width={5000} src={photo.url} alt="" />
      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
};

export default PhotoCard;
