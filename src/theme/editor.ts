import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["toolbar", "container"]);

const commonContainer = defineStyle({
  border: "1px",
  px: "4",
  py: "2",
});

const container = defineStyle((props) => {
  return {
    ...commonContainer,
    "h1,h2,h3": {
      mb: "0.25em",
      lineHeight: "1.2",
    },
    h1: {
      fontSize: "2xl",
    },
    h2: {
      fontSize: "xl",
    },
    h3: {
      fontSize: "lg",
    },
    "ol,ul": {
      marginInlineStart: "1.75em",
      mb: "4",
    },
    "div[contenteditable]": {
      outline: "none",
    },
    a: {
      color: mode("blue.600", "cyan")(props),
      textDecor: "underline",
    },
  };
});

const toolbar = defineStyle({
  ...commonContainer,
  gap: "3",
  borderBottom: "0",
});

const baseStyle = definePartsStyle((props) => ({
  container: container(props),
  toolbar,
}));

export const Editor = defineMultiStyleConfig({
  baseStyle,
});
