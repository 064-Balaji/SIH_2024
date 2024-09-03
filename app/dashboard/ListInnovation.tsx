"use client";

import { Flex, Heading, Text } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import React from "react";

const ListInnovation = ({ innovation }: { innovation: any }) => {
  const router = useRouter();
  console.log(innovation);
  return (
    <Flex
      direction="column"
      align="center"
      gap="6"
      className="w-full p-6 mx-auto"
    >
      {innovation.map((i: any) => (
        <Flex
          key={i.id}
          className="w-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => router.push(`/innovation?id=${i.id}`)}
        >
          <Flex
            direction="column"
            className="w-full"
            justify={"center"}
            align={"center"}
          >
            <Heading
              align="center"
              size="4"
              className="text-gray-900 dark:text-gray-100 mb-4"
            >
              Name: {i.title}
            </Heading>
            <Text className="text-gray-700 dark:text-gray-300 text-center">
              Description: {i.description}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default ListInnovation;
