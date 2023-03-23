import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { jobDescription } from "../data/job-description";

export function useEditorOutput(prefix = "output") {
  const [value, setValue] = useState(jobDescription);
  const [debouncedValue, setDebouncedValue] = useState("");

  useDebounce(
    () => {
      setDebouncedValue(value);
    },
    450,
    [value]
  );

  useEffect(() => {
    if (debouncedValue) {
      console.log("[%s] => %s", prefix, debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return [value, setValue] as const;
}
