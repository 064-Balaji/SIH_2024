"use server";

import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import InfoBar from "./InfoBar";
import Performance from "./Performance";
import EditInfo from "./EditInfo";

const Page = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const startupId = String(searchParams?.id);

  // Fetch startup to get the gstin and gstInfo
  const startup = await prisma.startup.findUnique({
    where: { id: startupId },
    include: { gstInfo: true },
  });

  if (!startup) {
    return <div>Startup not found</div>;
  }

  // Ensure gstInfoId exists
  if (!startup.gstInfo?.id) {
    return <div>No GST Info ID found</div>;
  }

  // Fetch invoices using gstInfoId from the startup record
  const invoices = await prisma.invoice.findMany({
    where: { gstInfoId: startup.gstInfo?.id },
  });

  return (
    <Flex justify={"between"} className="p-4 max-h-[100%]" gap="6">
      <Flex
        direction="column"
        gap="4"
        className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 w-5/12 overflow-y-scroll"
      >
        <InfoBar startup={startup} />
        <EditInfo startup={startup} />
      </Flex>
      <Performance invoices={invoices} />
    </Flex>
  );
};

export default Page;
