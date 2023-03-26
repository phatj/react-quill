import {
  IconBold,
  IconItalic,
  IconLink,
  IconStrikethrough,
  IconUnderline,
  IconUnlink,
} from "@tabler/icons-react";
import { FC } from "react";
import { useEditorContext } from "./EditorProvider";
import { ToolbarButton } from "./ToolbarButton";
import { ToolbarButtonGroup } from "./ToolbarButtonGroup";

export const MarkButtons: FC = () => {
  const editor = useEditorContext();

  if (!editor) {
    return null;
  }

  return (
    <ToolbarButtonGroup>
      <ToolbarButton command="Bold" icon={IconBold} />
      <ToolbarButton command="Italic" icon={IconItalic} />
      <ToolbarButton command="Underline" icon={IconUnderline} />
      <ToolbarButton command="Strike" icon={IconStrikethrough} />
      <ToolbarButton command="Link" icon={IconLink} activeIcon={IconUnlink} />
    </ToolbarButtonGroup>
  );
};
