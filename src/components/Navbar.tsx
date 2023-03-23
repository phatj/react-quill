import { HStack } from "@chakra-ui/react";
import { FC } from "react";
import { ToggleColorMode } from "./ToggleColorMode";

export const Navbar: FC = () => {
  return (
    <HStack mb="6" justify="end">
      <ToggleColorMode>Toggle</ToggleColorMode>
    </HStack>
  );
};
