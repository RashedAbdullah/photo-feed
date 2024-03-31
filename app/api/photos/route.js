import { getAllPhotos } from "@/libs/image-data";
import { NextResponse } from "next/server";

const GET = async () => {
  const data = await getAllPhotos();
  return NextResponse.json(data);
};

export { GET };
