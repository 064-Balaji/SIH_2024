"use client";

import React from "react";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

const ListStartups = ({ startup }: { startup: any }) => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      align="center"
      gap="6"
      className="w-full p-6 mx-auto"
    >
      {startup.map((s: any) => (
        <Flex
          key={s.id}
          className="w-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => router.push(`/startup?id=${s.id}`)}
        >
          <Flex>
            <CldImage
              src={s.imageURL ? s.imageURL : ""}
              width={150}
              height={150}
              radius="200"
              alt="Image wasn't Available"
            />
          </Flex>
          <Flex className="w-full">
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
                Name: {s.name}
              </Heading>
              <Text className="text-gray-700 dark:text-gray-300 text-center">
                Description: {s.description}
              </Text>
            </Flex>
            <Flex
              direction="column"
              className="w-full"
              justify={"center"}
              align={"center"}
              gap="3"
            >
              <Text>Type of Software: {s.type}</Text>
              <Text>Domain: {s.domain}</Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default ListStartups;
