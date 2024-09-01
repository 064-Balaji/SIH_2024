"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import ThemeSwitch from "./ThemeSwitch";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <Flex justify="between" align="center" className="h-8 mx-2 py-6">
      <Text className="flex-1" onClick={() => router.push("/")}>
        Innovation Hub
      </Text>
      <Flex align="center" gap="3">
        <ThemeSwitch />
        {session.data && (
          <Button onClick={() => signOut()} variant="soft">
            Signout{" "}
          </Button>
        )}
        {!session.data && (
          <Button onClick={() => signIn()} variant="soft">
            Login/Signup
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
