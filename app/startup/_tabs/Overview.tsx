import {
  Button,
  Card,
  Dialog,
  Flex,
  Grid,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import { CiUser } from "react-icons/ci";
import {
  PiProjectorScreenBold,
  PiProjectorScreenChartLight,
} from "react-icons/pi";
import OverviewCard from "./OverviewCard";

const Overview = async ({ id }: { id: string }) => {
  const over = await prisma.overview.findUnique({ where: { startupId: id } });
  return (
    <Flex direction={"column"} gap={"3"}>
      <Heading>Company's Essential Details</Heading>
      <Grid columns={"2"} gap={"3"} rows={"2"}>
        <OverviewCard text="Number of Employees" count="432" Icon={CiUser} />
        <OverviewCard
          text="Current Project"
          count="142"
          Icon={PiProjectorScreenChartLight}
        />
        <OverviewCard
          text="Previous Projects"
          count="337"
          Icon={PiProjectorScreenBold}
        />
        <OverviewCard text="Funds Raised" count="432" Icon={CiUser} />
      </Grid>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Edit Overview</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Insights</Dialog.Title>
          <Dialog.Description>
            Give the Insight of your Company
          </Dialog.Description>
          <Flex direction={"column"} gap={"2"} className="mt-4">
            <Flex direction={"column"}>
              <Text>Number of Employees</Text>
              <TextField.Root placeholder="count of Employees">
                <TextField.Slot>
                  <CiUser size={"20"} />
                </TextField.Slot>
              </TextField.Root>
            </Flex>
            <Flex direction={"column"}>
              <Text>No of Projects</Text>
              <TextField.Root placeholder="no of projects">
                <TextField.Slot>
                  <PiProjectorScreenChartLight size={"20"} />
                </TextField.Slot>
              </TextField.Root>
            </Flex>
            <Flex direction={"column"}>
              <Text>No of Customers</Text>
              <TextField.Root placeholder="no of projects">
                <TextField.Slot>
                  <PiProjectorScreenChartLight size={"20"} />
                </TextField.Slot>
              </TextField.Root>
            </Flex>
          </Flex>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};

export default Overview;
