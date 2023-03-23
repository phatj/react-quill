import { FC } from "react";
import ReactQuill from "react-quill";
import "../assets/styles/quill.css";
import { useEditorOutput } from "../hooks";

export const QuillEditor: FC = () => {
  const [value, setValue] = useEditorOutput("quill");

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};
