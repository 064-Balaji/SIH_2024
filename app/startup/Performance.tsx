"use client";

import {
  Button,
  Dialog,
  Flex,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Performance = ({
  perform,
  startupId,
}: {
  perform: any;
  startupId: string;
}) => {
  // State variables for the form fields
  const [turnOver, setTurnOver] = useState("");
  const [profit, setProfit] = useState("");
  const [year, setYear] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    axios
      .post("/api/user/startup/performance", {
        startupId,
        turnOver,
        profit,
        year,
      })
      .catch((e) => toast.error("Error in creating the performance log"))
      .then(() => {
        toast.success("Performance logged successfully");
        router.refresh();
      });
  };

  return (
    <Flex className="w-full" direction="column" gap="6">
      <Flex direction={"column"} gap="4">
        {perform.map((p: any) => (
          <Flex
            key={p.id}
            direction="column"
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <Heading size="3" className="text-gray-900 dark:text-gray-100">
              Year: {p.year}
            </Heading>
            <Flex gap="3" className="mt-2">
              <Text className="text-gray-700 dark:text-gray-300">
                TurnOver: {p.turnover}
              </Text>
              <Text className="text-gray-700 dark:text-gray-300">
                Profit: {p.profit}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Add Performance
          </Button>
        </Dialog.Trigger>
        <Dialog.Content className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Add new Performance log
          </Dialog.Title>
          <Flex direction="column" gap="4" className="mt-4">
            <Flex align="center" gap="3">
              <Text className="text-gray-700 dark:text-gray-300">
                TurnOver:
              </Text>
              <TextField.Root
                value={turnOver}
                onChange={(e) => setTurnOver(e.target.value)}
                className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
              />
            </Flex>
            <Flex align="center" gap="3">
              <Text className="text-gray-700 dark:text-gray-300">Profit:</Text>
              <TextField.Root
                value={profit}
                onChange={(e) => setProfit(e.target.value)}
                className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
              />
            </Flex>
            <Flex align="center" gap="3">
              <Text className="text-gray-700 dark:text-gray-300">Year:</Text>
              <TextField.Root
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
              />
            </Flex>
            <Flex justify="end" gap="3">
              <Button
                color="green"
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Update Changes
              </Button>
              <Dialog.Close>
                <Button
                  color="red"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Cancel Change
                </Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};

export default Performance;
