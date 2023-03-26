import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["toolbar", "container"]);

const common = definePartsStyle({
  container: {
    border: "1px",
    px: "4",
    py: "2",
  },
});

const container = definePartsStyle({
  container: {
    ...common.container,
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
  },
});

const toolbar = definePartsStyle({
  toolbar: {
    ...common.container,
    gap: "3",
    borderBottom: "0",
  },
});

export const Editor = defineMultiStyleConfig({
  baseStyle: {
    ...container,
    ...toolbar,
  },
});
