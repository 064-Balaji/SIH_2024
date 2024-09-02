"use client";

import React from "react";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const ListStartups = ({ startup }: { startup: any }) => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      align="center"
      gap="6"
      className="w-full max-w-2xl p-6 mx-auto"
    >
      {startup.map((s: any) => (
        <Flex
          key={s.id}
          direction="column"
          className="w-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => router.push(`/startup?id=${s.id}`)}
        >
          <Heading
            align="center"
            size="4"
            className="text-gray-900 dark:text-gray-100 mb-4"
          >
            {s.name}
          </Heading>
          <Text className="text-gray-700 dark:text-gray-300 text-center">
            {s.description}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default ListStartups;
