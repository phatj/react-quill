import { ChakraProvider } from "@chakra-ui/react";
import { FC, ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { theme } from "./theme";

type RootProps = {
  children: ReactNode;
};

const Root: FC<RootProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <StrictMode>{children}</StrictMode>
    </ChakraProvider>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <Root>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Root>
);
