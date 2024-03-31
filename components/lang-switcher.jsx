"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LangSwitcher = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isShowLangs, setIsShowLangs] = useState(false);

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "Bangla",
    },
    {
      code: "ar",
      language: "Arabic",
    },
  ];

 
  const [currenLang, setCurrenLang] = useState(
    pathName.slice(1, 3) === "en"
      ? "English"
      : pathName.slice(1, 3) === "ar"
      ? "Arabic"
      : "Bangla"
  );

  const handleChangeLang = (lang) => {
    setCurrenLang(lang);
    router.push(`/${lang}/${pathName.slice(3)}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsShowLangs(!isShowLangs)}
        className="flex items-center gap-2"
      >
        {currenLang}
      </button>
      {isShowLangs && (
        <div className="absolute right-0 top-full mt-2 w-36 rounded-md bg-white p-2 z-10 shadow-lg">
          {languages.map((lang) => (
            <li
              onClick={() => handleChangeLang(lang.code)}
              key={lang.code}
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <Image
                height={5000}
                width={5000}
                className="max-w-8"
                src="/bd.png"
                alt="bangla"
              />
              {lang.language}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
