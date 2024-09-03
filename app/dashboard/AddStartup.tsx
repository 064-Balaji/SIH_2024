"use client";

import { Button, Flex, Popover, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddStartup = ({ id }: { id: string }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    await axios
      .post("/api/user/startup", { id, name, desc })
      .catch(() => toast.error("Unable to create Startup"))
      .then(() => {
        toast.success("Startup created");
        router.refresh();
      });
  };

  return (
    <>
      <Popover.Root>
        <Popover.Trigger className="mx-12">
          <Button variant="outline">Add Startup</Button>
        </Popover.Trigger>
        <Popover.Content
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96"
          sideOffset={8}
        >
          <Flex direction="column" gap="3">
            <TextField.Root
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md"
              placeholder="Name of the Startup"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextArea
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md"
              placeholder="Description of the Startup"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
            />
            <Flex justify="center" gap="3" className="mt-4">
              <Popover.Close>
                <Button color="red" variant="soft">
                  Cancel
                </Button>
              </Popover.Close>
              <Button
                color="green"
                variant="solid"
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                Create
              </Button>
            </Flex>
          </Flex>
        </Popover.Content>
      </Popover.Root>
    </>
  );
};

export default AddStartup;
