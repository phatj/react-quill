import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";
import { useEditorOutput } from "../hooks";

export const TiptapEditor: FC = () => {
  const [value, setValue] = useEditorOutput("tiptap");

  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: value,
    onUpdate({ editor }) {
      setValue(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};
