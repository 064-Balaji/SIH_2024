"use client";

import { Button, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { GoOrganization } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

const UserFieldsUpdate = ({
  fullname,
  pass,
  org,
}: {
  fullname: string;
  pass: string;
  org: string;
}) => {
  const [name, setName] = useState(fullname);
  const [passw, setPassw] = useState(pass);
  const [orga, setOrga] = useState(org);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    // Handle the submit logic
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md">
      <TextField.Root
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md"
        placeholder="Full Name"
      >
        <TextField.Slot>
          <MdOutlineDriveFileRenameOutline
            size="20"
            className="text-gray-500 dark:text-gray-300"
          />
        </TextField.Slot>
      </TextField.Root>

      <div className="relative">
        <TextField.Root
          value={passw}
          onChange={(e) => setPassw(e.target.value)}
          className="flex items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        >
          <TextField.Slot>
            <IoKeyOutline
              size="20"
              className="text-gray-500 dark:text-gray-300"
            />
          </TextField.Slot>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-300"
          >
            {showPassword ? <HiEyeOff size="20" /> : <HiEye size="20" />}
          </button>
        </TextField.Root>
      </div>

      <TextField.Root
        value={orga}
        onChange={(e) => setOrga(e.target.value)}
        className="flex items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md"
        placeholder="Organization"
      >
        <TextField.Slot>
          <GoOrganization
            size="20"
            className="text-gray-500 dark:text-gray-300"
          />
        </TextField.Slot>
      </TextField.Root>

      <Button
        variant="solid"
        onClick={handleSubmit}
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Update
      </Button>
    </div>
  );
};

export default UserFieldsUpdate;
