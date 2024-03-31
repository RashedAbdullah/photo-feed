import PhotoList from "@/components/photo-list";
import { getManageLangs } from "@/manage-langs/manage-langs";

const Home = async () => {
  const response = await fetch(process.env.BASE_URL);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
};

export default Home;
