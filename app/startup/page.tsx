import { Flex } from "@radix-ui/themes";
import InfoBar from "./InfoBar";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";

const page = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const startup = await prisma.startup.findUnique({
    where: { id: String(searchParams?.id) },
  });
  const session = await getServerSession();
  return (
    <Flex justify={"between"} className="m-4">
      <InfoBar startup={startup} />
    </Flex>
  );
};

export default page;
