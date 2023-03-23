import { FC, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { jobDescription } from "../data/job-description";
import { useEditorOutput } from "../hooks";

export const QuillEditor: FC = () => {
  const [value, setValue] = useState(jobDescription);
  useEditorOutput(value, "quill");

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};
