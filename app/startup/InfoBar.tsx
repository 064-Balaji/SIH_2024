import {
  Badge,
  DataList,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import ImageComp from "./ImageComp";

const InfoBar = ({ startup }: { startup: any }) => {
  return (
    <>
      <ImageComp id={startup.id} url={startup.imageURL} />
      <DataList.Root className="mt-4 bg-gray-100 dark:bg-gray-700 rounded-md p-3">
        <DataList.Item align={"center"}>
          <DataList.Label color="grass">Name</DataList.Label>
          <DataList.Value>
            <Heading>{startup.name}</Heading>
          </DataList.Value>
        </DataList.Item>
        <SeparatorCustom />
        <DataList.Item align={"center"}>
          <DataList.Label color="grass">Description</DataList.Label>
          <DataList.Value>
            <Text>{startup.description}</Text>
          </DataList.Value>
        </DataList.Item>
        <SeparatorCustom />
        <DataList.Item align={"center"}>
          <DataList.Label color="grass">Software Type</DataList.Label>
          <DataList.Value>
            <Badge color="cyan" radius="full" variant="outline">
              {startup.type}
            </Badge>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
      <Text align="center" className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Domain:</strong> {startup.domain || "NA"}
      </Text>
      <Text align="center" className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Vision:</strong> {startup.vision || "NA"}
      </Text>
      <Text align="center" className="mb-4 text-gray-700 dark:text-gray-300">
        <strong>Mission:</strong> {startup.mission || "NA"}
      </Text>
    </>
  );
};

export default InfoBar;

export const SeparatorCustom = () => {
  return (
    <DataList.Item>
      <Separator size={"4"} />
      <Separator size={"4"} />
    </DataList.Item>
  );
};
