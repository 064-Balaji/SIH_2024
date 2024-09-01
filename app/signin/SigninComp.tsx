"use client";

import { Button, Flex, TextField } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { GoSignIn } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

const SigninComp = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async () => {
    const result = await signIn("credentials", {
      email: mail,
      password: pass,
    });

    if (result?.error) {
      console.error("Sign-in failed:", result.error);
    } else {
      console.log("Signed in successfully!");
    }
  };

  return (
    <Flex direction="column" gap="2" className="my-8">
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
      <Button variant="soft" onClick={() => handleSubmit()}>
        Signin <GoSignIn size={18} />
      </Button>
    </Flex>
  );
};

export default SigninComp;
