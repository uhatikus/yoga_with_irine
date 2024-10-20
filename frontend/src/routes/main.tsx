import { Flex } from "@chakra-ui/react";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main")({
  component: Main,
});

function Main() {
  return (
    <Flex maxW="large" h="auto" position="relative">
      <Outlet />
      Hello
    </Flex>
  );
}
