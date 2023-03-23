import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC, useState } from "react";
import { useEditorOutput } from "../hooks";

export const TiptapEditor: FC = () => {
  const [value, setValue] = useState("");
  useEditorOutput(value, "tiptap");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
    onUpdate({ editor }) {
      setValue(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};
