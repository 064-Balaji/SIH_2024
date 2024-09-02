import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ImageComp from "./ImageComp";
import UserFieldsUpdate from "./UserFieldsUpdate";
import ListStartups from "./ListStartups";
import AddStartup from "./AddStartup";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) redirect("/signin");

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email!,
    },
  });

  const company = await prisma.company.findUnique({
    where: { userId: user?.id },
  });

  const startup = await prisma.startup.findMany({
    where: {
      companyId: company?.id!,
    },
  });

  if (user?.userType === "ENTREPRENEUR") {
    return (
      <Flex direction="row" gap="6" className="p-6">
        {/* Profile and User Information */}
        <Flex
          direction="column"
          className="w-1/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          gap="6"
        >
          <ImageComp user={user} />
          <UserFieldsUpdate
            fullname={user?.fullName}
            org={company?.name!}
            pass={user.password}
          />
        </Flex>

        {/* Main Content */}
        <Flex
          direction="column"
          className="w-3/4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
          gap="6"
        >
          <ListStartups startup={startup} />
          <AddStartup cmpid={company?.id!} />
        </Flex>
      </Flex>
    );
  } else return null;
};

export default Dashboard;
