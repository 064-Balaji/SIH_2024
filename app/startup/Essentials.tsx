import { Card, Tabs } from "@radix-ui/themes";
import Overview from "./_tabs/Overview";
import Team from "./_tabs/Team";

const Essentials = ({ id }: { id: string }) => {
  return (
    <Card className="my-4">
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="team">Team</Tabs.Trigger>
          <Tabs.Trigger value="contributors">
            Previous Contributors
          </Tabs.Trigger>
          <Tabs.Trigger value="insights">Insights</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="overview" className="p-4">
          <Overview id={id} />
        </Tabs.Content>
        <Tabs.Content value="team" className="p-4">
          <Team />
        </Tabs.Content>
        <Tabs.Content value="contributors">Something</Tabs.Content>
      </Tabs.Root>
    </Card>
  );
};

export default Essentials;
