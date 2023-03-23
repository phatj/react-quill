import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC, useState } from "react";
import { jobDescription } from "../data/job-description";
import { useEditorOutput } from "../hooks";

export const TiptapEditor: FC = () => {
  const [value, setValue] = useState("");
  useEditorOutput(value, "tiptap");

  const editor = useEditor({
    extensions: [StarterKit, Link.configure()],
    content: jobDescription,
    onUpdate({ editor }) {
      setValue(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};
