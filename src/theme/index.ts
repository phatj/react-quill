import { extendTheme } from "@chakra-ui/react";
import { Editor } from "./editor";

export const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },

  components: {
    Editor,
  },
});
