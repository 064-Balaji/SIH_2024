import { Callout, Heading, Separator, Tabs } from "@radix-ui/themes";
import { BiInfoCircle } from "react-icons/bi";
import SigninComp from "./SigninComp";
import SignupComp from "./SignupComp";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import "server-only";

const Signin = async () => {
  const session = await getServerSession();

  if (session) redirect("/");

  return (
    <div className="flex flex-col gap-4 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Heading
        align="center"
        size="8"
        weight="bold"
        className="text-blue-600 dark:text-blue-400"
      >
        Innovation Hub
      </Heading>
      <Heading
        align="center"
        weight="light"
        size="4"
        className="text-gray-700 dark:text-gray-300"
      >
        Unifying Gujarat&apos;s innovation management.
      </Heading>

      <div className="mx-5 lg:mx-80 min-h-[40rem] md:min-h-[34rem] flex flex-col justify-center mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <Callout.Root className="mb-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-700 p-4">
          <Callout.Icon className="text-blue-500">
            <BiInfoCircle size={24} />
          </Callout.Icon>
          <Callout.Text className="text-blue-700 dark:text-gray-200">
            Login to Register Innovation / Startup / Invest on startup
          </Callout.Text>
        </Callout.Root>

        <Tabs.Root defaultValue="signin">
          <Tabs.List
            justify="center"
            highContrast
            className="bg-gray-200 dark:bg-gray-700 rounded-lg p-1"
          >
            <Tabs.Trigger
              value="signin"
              className="px-4 py-2 text-gray-700 dark:text-gray-200"
            >
              Signin
            </Tabs.Trigger>
            <Tabs.Trigger
              value="signup"
              className="px-4 py-2 text-gray-700 dark:text-gray-200"
            >
              Signup
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="signin" className="mt-4">
            <SigninComp />
          </Tabs.Content>
          <Tabs.Content value="signup" className="mt-4">
            <SignupComp />
          </Tabs.Content>
        </Tabs.Root>
        <Separator orientation="horizontal" size="4" className="my-6" />
      </div>
    </div>
  );
};

export default Signin;
