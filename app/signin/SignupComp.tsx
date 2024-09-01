"use client";

import { Button, Flex, Select, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { HiLogin } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

const SignupComp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [userType, selectUser] = useState("INVESTOR");
  const [cmpName, setCmpName] = useState("");
  const [cmpType, setCmpType] = useState("");

  const handleSubmit = async () => {
    const response = await axios
      .post("api/auth/signup", {
        name,
        mail,
        pass,
        userType,
        cmpName,
        cmpType,
      })
      .then(() => console.log("Success"))
      .catch(() => console.log("error"));
  };

  return (
    <Flex direction="column" gap="3" className="my-8">
      <TextField.Root
        placeholder="John Doe"
        type="text"
        onChange={(v) => setName(v.target.value)}
        value={name}
      >
        <TextField.Slot>
          <FaRegUser size={18} />
        </TextField.Slot>
      </TextField.Root>
      <TextField.Root
        placeholder="sample@gmail.com"
        type="email"
        value={mail}
        onChange={(v) => setMail(v.target.value)}
      >
        <TextField.Slot>
          <MdOutlineAlternateEmail size={18} />
        </TextField.Slot>
      </TextField.Root>
      <TextField.Root
        placeholder="*******"
        type="password"
        value={pass}
        onChange={(v) => setPass(v.target.value)}
      >
        <TextField.Slot>
          <IoKeyOutline size={18} />
        </TextField.Slot>
      </TextField.Root>
      <Select.Root
        defaultValue="investor"
        onValueChange={(v) => selectUser(v)}
        value={userType}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="INVESTOR">Investor</Select.Item>
          <Select.Item value="ENTREPRENEUR">Entrepreneur</Select.Item>
          <Select.Item value="INNOVATOR">Innovator</Select.Item>
        </Select.Content>
      </Select.Root>
      {userType == "ENTREPRENEUR" && (
        <>
          <TextField.Root
            placeholder="Company Name"
            type="text"
            value={cmpName}
            onChange={(v) => setCmpName(v.target.value)}
          >
            <TextField.Slot>
              <GoOrganization size={18} />
            </TextField.Slot>
          </TextField.Root>
          <Select.Root onValueChange={(v) => setCmpType(v)} value={cmpType}>
            <Select.Trigger placeholder="Type of company" />
            <Select.Content>
              <Select.Item value="SOFTWARE">Software</Select.Item>
              <Select.Item value="HARDWARE">Hardware</Select.Item>
            </Select.Content>
          </Select.Root>
        </>
      )}
      <Button variant="soft" onClick={() => handleSubmit()}>
        Signup <HiLogin size={18} />
      </Button>
    </Flex>
  );
};

export default SignupComp;
