import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { FC } from "react";
import { QuillEditor, TiptapEditor } from "../components/Editors";

export const Home: FC = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Quill</Tab>
          <Tab>Tiptap</Tab>
        </TabList>

        <TabPanels>
          {/* quill */}
          <TabPanel>
            <Heading mb="6">React Quill Example</Heading>
            <QuillEditor />
          </TabPanel>

          {/* tiptap */}
          <TabPanel>
            <Heading mb="6">TipTap Example</Heading>
            <TiptapEditor />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
