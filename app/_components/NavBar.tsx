"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import ThemeSwitch from "./ThemeSwitch";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Header = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <Flex
      justify="between"
      align="center"
      className="h-16 px-4 md:px-8 py-4 bg-white dark:bg-gray-900 shadow-sm"
    >
      <Text
        size="4"
        weight="bold"
        className="cursor-pointer text-blue-600 dark:text-blue-400"
        onClick={() => router.push("/")}
      >
        Innovation Hub
      </Text>
      <Flex align="center" gap="4">
        <ThemeSwitch />
        {session.data ? (
          <Button
            onClick={() => {
              toast.success("Signed out");
              signOut();
            }}
            variant="soft"
            color="red"
          >
            Sign Out
          </Button>
        ) : (
          <Button onClick={() => signIn()} variant="soft" color="green">
            Login / Signup
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
