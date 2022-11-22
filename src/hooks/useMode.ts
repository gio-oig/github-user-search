import { useEffect, useState } from "react";

type Mode = "light" | "dark";

const Localstorage = {
  mode: "MODE",
};

// only use this in one place, otherwise use context
const useMode = () => {
  const defaultMode =
    (localStorage.getItem(Localstorage.mode) as Mode) || "light";

  const [mode, setMode] = useState<Mode>(defaultMode);

  const toggleMode = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem(Localstorage.mode, mode);
  }, [mode]);

  return {
    isDarkMode: mode === "dark",
    mode,
    toggleMode,
  };
};

export default useMode;
