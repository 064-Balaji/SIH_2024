import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import InfoBar from "./InfoBar";
import Performance from "./Performance";

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
    <Flex justify={"between"} className="m-4" gap="6">
      <InfoBar startup={startup} />
      <Performance invoices={invoices} />
    </Flex>
  );
};

export default Page;
