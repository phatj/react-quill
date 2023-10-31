import { HStack, useMultiStyleConfig } from "@chakra-ui/react";
import {
  IconH1,
  IconH2,
  IconH3,
  IconList,
  IconListNumbers,
} from "@tabler/icons-react";
import { FC } from "react";
import { useEditorContext } from "./EditorProvider";
import { MarkButtons } from "./MarkButtons";
import { ToolbarButton } from "./ToolbarButton";
import { ToolbarButtonGroup } from "./ToolbarButtonGroup";

export const Toolbar: FC = () => {
  const styles = useMultiStyleConfig("Editor");
  const editor = useEditorContext();

  if (!editor) {
    return null;
  }

  return (
    <HStack sx={styles.toolbar}>
      <ToolbarButtonGroup>
        <ToolbarButton command="Heading" args={[{ level: 1 }]} icon={IconH1} />
        <ToolbarButton command="Heading" args={[{ level: 2 }]} icon={IconH2} />
        <ToolbarButton command="Heading" args={[{ level: 3 }]} icon={IconH3} />
      </ToolbarButtonGroup>

      <MarkButtons />

      <ToolbarButtonGroup>
        <ToolbarButton command="BulletList" icon={IconList} />
        <ToolbarButton command="OrderedList" icon={IconListNumbers} />
      </ToolbarButtonGroup>
    </HStack>
  );
};
