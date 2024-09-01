"use client";

import { Button, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { GoOrganization } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

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

  const handleSubmit = () => {};
  return (
    <>
      <TextField.Root value={name} onChange={(e) => setName(e.target.value)}>
        <TextField.Slot>
          <MdOutlineDriveFileRenameOutline size="18" />
        </TextField.Slot>
      </TextField.Root>
      <TextField.Root value={passw} onChange={(e) => setPassw(e.target.value)}>
        <TextField.Slot>
          <IoKeyOutline size={18} />
        </TextField.Slot>
      </TextField.Root>
      <TextField.Root value={orga} onChange={(e) => setOrga(e.target.value)}>
        <TextField.Slot>
          <GoOrganization size={"18"} />
        </TextField.Slot>
      </TextField.Root>
      <Button variant="soft" onClick={handleSubmit}>
        Update
      </Button>
    </>
  );
};

export default UserFieldsUpdate;
