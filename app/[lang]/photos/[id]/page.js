import PhotoDetails from "@/components/photo-details";

const SinglePhotoDetails = ({ params: { id, lang } }) => {
  return <PhotoDetails id={id} lang={lang} />;
};

export default SinglePhotoDetails;
