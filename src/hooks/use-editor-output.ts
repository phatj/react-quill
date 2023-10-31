import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { jobDescription } from "../data/job-description";

export function useEditorOutput(prefix = "output") {
  const [value, setValue] = useState<any>(jobDescription);
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
      console.debug(
        "[%s] (length: %d) =>",
        prefix,
        JSON.stringify(debouncedValue).length,
        debouncedValue
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return [value, setValue] as const;
}
