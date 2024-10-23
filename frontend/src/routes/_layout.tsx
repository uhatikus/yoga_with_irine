import { Flex } from "@chakra-ui/react";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    throw redirect({
      to: "/main",
    });
  },
});

function Layout() {
  return (
    <Flex maxW="large" h="auto" position="relative">
      <Outlet />
    </Flex>
  );
}
