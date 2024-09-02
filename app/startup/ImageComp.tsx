"use client";

import { Flex } from "@radix-ui/themes";
import axios from "axios";
import { CldImage, CldUploadButton } from "next-cloudinary";
import React from "react";

const ImageComp = ({ url, id }: { url: string; id: string }) => {
  return (
    <Flex justify="center">
      <div className="relative flex justify-center items-center">
        <CldImage
          src={url ? url : ""}
          width="200"
          height="200"
          alt="Image wasn't available"
          radius="300"
          crop={{ type: "auto" }}
          className="rounded-full object-cover shadow-md"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100">
          <CldUploadButton
            uploadPreset="klhusdyw"
            onSuccess={async (res) => {
              const url = res.info;
              await axios.put("/api/user/startup", { id, url });
            }}
            className="bg-white text-black py-2 px-4 rounded-lg shadow-lg"
          >
            Upload Image
          </CldUploadButton>
        </div>
      </div>
    </Flex>
  );
};

export default ImageComp;
