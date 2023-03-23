import { FC, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEditorOutput } from "../hooks";

export const QuillEditor: FC = () => {
  const [value, setValue] = useState("<p>Hello World!</p>");
  useEditorOutput(value, "quill");

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};
