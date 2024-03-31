import { getManageLangs } from "@/manage-langs/manage-langs";
import Image from "next/image";
import React from "react";

const PhotoDetails = async ({ id, lang }) => {
  const manageLang = await getManageLangs(lang);
  const response = await fetch(`${process.env.BASE_URL}/${id}`);
  const data = await response.json();
  console.log(data);
  return (
    <div className="container my-4 lg:my-8">
      {/* <!--  --> */}
      <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
        {/* <!-- main photo --> */}
        <div className="col-span-12 lg:col-span-8 border rounded-xl">
          <Image
            height={5000}
            width={500}
            className="max-w-full h-full max-h-[70vh] mx-auto"
            src={data.url}
            alt={data.title}
          />
        </div>
        {/* <!-- main photo ends --> */}

        {/* <!-- details card --> */}
        <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
          <h2 className="text-lg lg:text-2xl font-bold mb-2">{data.title}</h2>
          <div className="text-xs lg:text-sm text-black/60 mb-6">
            {data.tags.map((tag) => `#${tag} `)}
          </div>
          {/* <!-- info rows --> */}
          <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
            {/* <!-- item start --> */}
            <div className="flex justify-between">
              <span>{manageLang.views}</span>
              <span className="font-bold">{data.views}</span>
            </div>
            {/* <!-- item ends --> */}
            {/* <!-- item start --> */}
            <div className="flex justify-between">
              <span>{manageLang.share}</span>
              <span className="font-bold">{data.share}</span>
            </div>
            {/* <!-- item ends --> */}
            {/* <!-- item start --> */}
            <div className="flex justify-between">
              <span>{manageLang.uploadedOn}</span>
              <span className="font-bold">{data.uploaded}</span>
            </div>
            {/* <!-- item ends --> */}
          </div>
          {/* <!-- info rows ends --> */}

          {/* <!-- author info --> */}
          <div className="mt-6">
            {/* <!-- author header --> */}
            <div className="flex justify-between items-center mb-3">
              {/* <!--  --> */}
              <div className="flex items-center gap-3">
                <Image
                  height={5000}
                  width={5000}
                  className="size-12 lg:size-14 rounded-full border"
                  src="https://i.pravatar.cc/150?img=53"
                  alt="avatar"
                />
                <div className="spacy-y-3">
                  <h6 className="lg:text-lg font-bold">{data.author.name}</h6>
                  <p className="text-black/60 text-xs lg:text-sm">
                    {data.author.followers} {manageLang.followers}
                  </p>
                </div>
              </div>
              {/* <!-- action --> */}
              <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                <Image
                  height={5000}
                  width={5000}
                  alt=""
                  src="/follow.svg"
                  className="w-5 h-5"
                />
                {manageLang.follow}
              </button>
            </div>
            {/* <!-- author bio --> */}
            <p className="text-xs lg:text-sm text-black/60">
              {data.author.bio}
            </p>
          </div>
          {/* <!-- author info ends --> */}
          {/* <!-- actions --> */}
          <div className="mt-6">
            <div className="flex items-stretch gap-3">
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  height={5000}
                  width={5000}
                  alt=""
                  src="/heart.svg"
                  className="w-5 h-5"
                />
                {data.likes}
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  height={5000}
                  width={5000}
                  alt=""
                  src="/save.svg"
                  className="w-5 h-5"
                />
                {manageLang.save}
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  height={5000}
                  width={5000}
                  alt=""
                  src="/share.svg"
                  className="w-5 h-5"
                />
                {manageLang.share}
              </button>
            </div>
          </div>
        </div>
        {/* <!-- details card ends --> */}
      </div>
      {/* <!--  --> */}
    </div>
  );
};

export default PhotoDetails;
