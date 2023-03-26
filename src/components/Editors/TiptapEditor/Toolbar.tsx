import {
  ButtonGroup,
  ButtonGroupProps,
  HStack,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  IconBold,
  IconH1,
  IconH2,
  IconH3,
  IconItalic,
  IconList,
  IconListNumbers,
  IconStrikethrough,
  IconUnderline,
} from "@tabler/icons-react";
import { FC } from "react";
import { useEditorContext } from "./EditorProvider";
import { ToolbarButton } from "./ToolbarButton";

export const Toolbar: FC = () => {
  const styles = useMultiStyleConfig("Editor");
  const editor = useEditorContext();

  if (!editor) {
    return null;
  }

  const buttonGroupProps: ButtonGroupProps = {
    size: "sm",
    isAttached: true,
  };

  return (
    <HStack sx={styles.toolbar}>
      <ButtonGroup {...buttonGroupProps}>
        <ToolbarButton command="Heading" args={[{ level: 1 }]} icon={IconH1} />
        <ToolbarButton command="Heading" args={[{ level: 2 }]} icon={IconH2} />
        <ToolbarButton command="Heading" args={[{ level: 3 }]} icon={IconH3} />
      </ButtonGroup>

      <ButtonGroup {...buttonGroupProps}>
        <ToolbarButton command="Bold" icon={IconBold} />
        <ToolbarButton command="Italic" icon={IconItalic} />
        <ToolbarButton command="Underline" icon={IconUnderline} />
        <ToolbarButton command="Strike" icon={IconStrikethrough} />
      </ButtonGroup>

      <ButtonGroup {...buttonGroupProps}>
        <ToolbarButton command="BulletList" icon={IconList} />
        <ToolbarButton command="OrderedList" icon={IconListNumbers} />
      </ButtonGroup>
    </HStack>
  );
};
