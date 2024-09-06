"use client";

import { Button, Dialog, Flex, IconButton } from "@radix-ui/themes";
import { signOut } from "next-auth/react";
import { CiUser } from "react-icons/ci";
import ImageComp from "./ImageComp";
import UserFieldsUpdate from "./UserFieldsUpdate";

const UserProf = ({ user }: { user: any }) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <IconButton>
            <CiUser size={18} />
          </IconButton>
        </Dialog.Trigger>
        <Dialog.Content>
          <Flex
            direction="column"
            justify="center"
            className="bg-gray-100 dark:bg-gray-800 px-12 py-4 rounded-lg shadow-md"
            gap="6"
          >
            {user && (
              <>
                <ImageComp user={user} />
                <UserFieldsUpdate
                  email={user.email}
                  fullname={user.fullName}
                  pass={user.password}
                />
              </>
            )}
            <Button onClick={() => signOut()}> Signout </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default UserProf;
