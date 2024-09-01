import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ImageComp from "./ImageComp";
import UserFieldsUpdate from "./UserFieldsUpdate";
import ListStartups from "./ListStartups";

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

  if (user?.userType == "ENTREPRENEUR") {
    return (
      <Flex gap={"3"}>
        <Flex
          className="mx-4 w-3/12 my-32"
          direction="column"
          gap="4"
          justify="center"
        >
          <ImageComp user={user} />
          <UserFieldsUpdate
            fullname={user?.fullName}
            org={company?.name!}
            pass={user.password}
          />
        </Flex>
        <Flex direction="column">
          <ListStartups />
        </Flex>
      </Flex>
    );
  } else return null;
};

export default Dashboard;
