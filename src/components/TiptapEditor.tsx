import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";

export const TiptapEditor: FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
    onUpdate({ editor }) {
      console.log(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};
