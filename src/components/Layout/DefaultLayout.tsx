import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

export const DefaultLayout: FC = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Outlet />
      </Container>
    </>
  );
};
