"use client";

import {
  Button,
  Dialog,
  Flex,
  Heading,
  Text,
  TextField,
  Select,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import ImageComp from "./ImageComp";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const softwareTypes = [
  { value: "APPLICATION", label: "Application" },
  { value: "SYSTEM", label: "System" },
  { value: "PLATFORM", label: "Platform" },
  { value: "OTHER", label: "Other" },
];

const domains = [
  { value: "HEALTHCARE", label: "Healthcare" },
  { value: "FINTECH", label: "Fintech" },
  { value: "EDUCATION", label: "Education" },
  { value: "ECOMMERCE", label: "E-commerce" },
  { value: "OTHER", label: "Other" },
];

const InfoBar = ({ startup }: { startup: any }) => {
  const session = useSession();
  if (session.status === "unauthenticated") redirect("/signin");
  const id = startup.id;
  const router = useRouter();

  const [name, setName] = useState(startup.name);
  const [description, setDescription] = useState(startup.description);
  const [type, setType] = useState(startup.type || "");
  const [domain, setDomain] = useState(startup.domain || "");
  const [vision, setVision] = useState(startup.vision || "");
  const [mission, setMission] = useState(startup.mission || "");

  const handleSave = async () => {
    await axios
      .put("/api/user/startup", {
        id,
        name,
        description,
        type,
        domain,
        vision,
        mission,
      })
      .catch(() => toast.error("Error while Updating content"))
      .then(() => {
        toast.success("Information Updated");
        router.refresh();
      });
  };

  return (
    <Flex
      direction="column"
      gap="4"
      className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 w-5/12 max-h-svh overflow-y-scroll hidden-scrollbar"
    >
      <ImageComp id={startup.id} url={startup.imageURL} />
      <Heading align="center" className="mb-2 text-gray-800 dark:text-gray-200">
        {startup.name}
      </Heading>
      <Text align="center" className="mb-2 text-gray-600 dark:text-gray-400">
        {startup.description}
      </Text>
      <Text align="center" className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Software Type:</strong> {startup.type || "NA"}
      </Text>
      <Text align="center" className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Domain:</strong> {startup.domain || "NA"}
      </Text>
      <Text align="center" className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Vision:</strong> {startup.vision || "NA"}
      </Text>
      <Text align="center" className="mb-4 text-gray-700 dark:text-gray-300">
        <strong>Mission:</strong> {startup.mission || "NA"}
      </Text>
      {session.data?.user.id === startup.userId && (
        <Dialog.Root>
          <Dialog.Trigger>
            <Button
              variant="solid"
              className="bg-blue-500 text-white dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800"
            >
              Edit Contents
            </Button>
          </Dialog.Trigger>
          <Dialog.Content className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg">
            <Dialog.Title className="text-gray-800 dark:text-gray-200">
              Edit Startup Profile
            </Dialog.Title>
            <Flex direction="column" gap="4">
              <Flex align="center" gap="3">
                <Text className="text-gray-700 dark:text-gray-300">Name:</Text>
                <TextField.Root
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 p-2 border rounded-md border-gray-300 dark:border-gray-700"
                />
              </Flex>
              <Flex align="center" gap="3">
                <Text className="text-gray-700 dark:text-gray-300">
                  Description:
                </Text>
                <TextField.Root
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="flex-1 p-2 border rounded-md border-gray-300 dark:border-gray-700"
                />
              </Flex>
              <Flex align="center" gap="3">
                <Text className="text-gray-700 dark:text-gray-300">
                  Software Type:
                </Text>
                <Select.Root
                  value={type}
                  onValueChange={(value) => setType(value)}
                >
                  <Select.Trigger className="flex-1 p-2 border rounded-md border-gray-300 dark:border-gray-700">
                    {type || "Select any one type"}
                  </Select.Trigger>
                  <Select.Content>
                    {softwareTypes.map((option) => (
                      <Select.Item key={option.value} value={option.value}>
                        {option.label}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Flex>
              <Flex align="center" gap="3">
                <Text className="text-gray-700 dark:text-gray-300">
                  Domain:
                </Text>
                <Select.Root
                  value={domain}
                  onValueChange={(value) => setDomain(value)}
                >
                  <Select.Trigger className="flex-1 p-2 border rounded-md border-gray-300 dark:border-gray-700">
                    {domain || "Select any one domain"}
                  </Select.Trigger>
                  <Select.Content>
                    {domains.map((option) => (
                      <Select.Item key={option.value} value={option.value}>
                        {option.label}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Flex>
              <Flex align="center" gap="3">
                <Text className="text-gray-700 dark:text-gray-300">
                  Vision:
                </Text>
                <TextField.Root
                  value={vision}
                  onChange={(e) => setVision(e.target.value)}
                  className="flex-1 p-2 border rounded-md border-gray-300 dark:border-gray-700"
                />
              </Flex>
              <Flex align="center" gap="3">
                <Text className="text-gray-700 dark:text-gray-300">
                  Mission:
                </Text>
                <TextField.Root
                  value={mission}
                  onChange={(e) => setMission(e.target.value)}
                  className="flex-1 p-2 border rounded-md border-gray-300 dark:border-gray-700"
                />
              </Flex>
              <Flex justify="center" gap="3">
                <Dialog.Close>
                  <Button
                    variant="solid"
                    onClick={handleSave}
                    className="bg-green-500 text-white dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-800"
                  >
                    Save Changes
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button
                    color="red"
                    className="bg-red-500 text-white dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-800"
                  >
                    Cancel Changes
                  </Button>
                </Dialog.Close>
              </Flex>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      )}
    </Flex>
  );
};

export default InfoBar;
