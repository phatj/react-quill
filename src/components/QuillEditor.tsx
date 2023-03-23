import { FC, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDebounce } from "react-use";

export const QuillEditor: FC = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const [, cancel] = useDebounce(
    () => {
      setDebouncedValue(value);
    },
    450,
    [value]
  );

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};
