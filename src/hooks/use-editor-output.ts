import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

export function useEditorOutput(value: string, prefix = "output") {
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
}
