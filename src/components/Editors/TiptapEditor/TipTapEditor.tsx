import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";
import { useEditorOutput } from "~/src/hooks";
import { EditorProvider } from "./EditorProvider";
import { LinkBubbleMenu } from "./LinkBubbleMenu";
import { MarkBubbleMenu } from "./MarkBubbleMenu";
import { Toolbar } from "./Toolbar";

export const TiptapEditor: FC = () => {
  const [value, setValue] = useEditorOutput("tiptap");
  const styles = useMultiStyleConfig("Editor");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Underline,
    ],
    content: value,
    onUpdate({ editor }) {
      setValue(editor.getJSON());
    },
  });

  return (
    <EditorProvider editor={editor}>
      {/* menus */}
      <Toolbar />
      <LinkBubbleMenu />
      <MarkBubbleMenu />

      {/* editor */}
      <Box __css={styles.container}>
        <EditorContent editor={editor} tabIndex={-1} />
      </Box>
    </EditorProvider>
  );
};
