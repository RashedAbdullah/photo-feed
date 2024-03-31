import Modal from "@/components/modal";
import PhotoDetails from "@/components/photo-details";

const Photo = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default Photo;
