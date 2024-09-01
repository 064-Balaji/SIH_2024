"use client";

import { Flex } from "@radix-ui/themes";
import axios from "axios";
import { CldImage, CldUploadButton } from "next-cloudinary";
import React from "react";

const ImageComp = ({ user }: { user: any }) => {
  const email = user.email;
  return (
    <Flex justify="center" className="w-[100px]h-full">
      <div className="relative">
        <CldImage
          src={user.image ? user.image : ""}
          width="200"
          height="200"
          alt="Image wasn't available"
          radius="300"
          crop={{ type: "auto" }}
          className="rounded-full object-cover"
        />
        <div
          className={
            "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100"
          }
        >
          <CldUploadButton
            uploadPreset="klhusdyw"
            onSuccess={async (res) => {
              const url = res.info;
              await axios.put("/api/user", { email, url });
            }}
            className="bg-white text-black py-2 px-4 rounded-lg"
          >
            Upload Image
          </CldUploadButton>
        </div>
      </div>
    </Flex>
  );
};

export default ImageComp;
