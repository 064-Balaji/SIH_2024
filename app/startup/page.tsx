import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import InfoBar from "./InfoBar";
import Performance from "./Performance";

const page = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const startup = await prisma.startup.findUnique({
    where: { id: String(searchParams?.id) },
  });
  const perform = await prisma.performance.findMany({
    where: { startupId: startup?.id },
  });
  return (
    <Flex justify={"between"} className="m-4" gap="6">
      <InfoBar startup={startup} />
      <Performance perform={perform} startupId={startup?.id!} />
    </Flex>
  );
};

export default page;
