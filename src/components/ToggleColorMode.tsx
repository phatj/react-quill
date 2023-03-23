import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export const ToggleColorMode = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const { toggleColorMode } = useColorMode();
    const ColorModeIcon = useColorModeValue(MoonIcon, SunIcon);

    return (
      <Button
        variant="transparent"
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        ref={ref}
        gap="3"
        {...props}
      >
        <ColorModeIcon fontSize="xl" />
      </Button>
    );
  }
);
