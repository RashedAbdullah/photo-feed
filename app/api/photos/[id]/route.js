import { getPhotoById } from "@/libs/image-data";
import { NextResponse } from "next/server";

const GET = async (_request, { params: { id } }) => {
  const data = await getPhotoById(id);
  return NextResponse.json(data);
};

export { GET };
