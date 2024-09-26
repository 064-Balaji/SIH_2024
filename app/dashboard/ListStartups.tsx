"use client";

import { Grid, Flex, Heading, Text } from "@radix-ui/themes"; // Import Radix components
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";

const StartupGrid = ({ startup }: { startup: any }) => {
  const router = useRouter();

  return (
    <Flex direction="column" align="center" className="w-full mx-auto">
      <Grid
        columns={{ initial: "2", md: "3", xl: "4" }} // Defining responsive grid columns
        gap="6"
        className="w-full overflow-y-scroll hidden-scrollbar"
      >
        {startup.map((s: any) => (
          <Flex
            key={s.id}
            direction="column"
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => router.push(`/startup?id=${s.id}`)}
          >
            <Flex justify="center" className="mb-4">
              <CldImage
                src={s.imageURL ? s.imageURL : ""}
                width={150}
                height={150}
                crop="auto"
                alt="Image wasn't Available"
                className="rounded-full"
              />
            </Flex>

            <Text
              align="center"
              size="4"
              className="text-gray-900 dark:text-gray-100 mb-4"
            >
              <strong>Name: </strong>
              {s.name}
            </Text>

            <Text className="text-gray-700 dark:text-gray-300 text-center mb-4">
              <strong>Description:</strong> {s.description}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default StartupGrid;
