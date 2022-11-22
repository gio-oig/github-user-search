import { useState } from "react";
import Header from "./components/header/header";
import c from "classnames";

import SearchInput from "./components/searchInput/searchInput";
import UserDataCard from "./components/userDataCard/userDataCard";
import fetchGithubUser from "./lib/api";

import { IUser } from "./components/types/models";

import "./App.css";
import useMode from "./hooks/useMode";

function App() {
  const [notFound, setNotFound] = useState(false);
  const [user, setUser] = useState<IUser>();
  const { isDarkMode, toggleMode } = useMode();

  const handleSubmit = async (userInput: string) => {
    setUser(undefined);
    setNotFound(false);
    if (!userInput) return;

    await fetchGithubUser(userInput)
      .then((data) => setUser(data))
      .catch(() => setNotFound(true));
  };

  const appClass = c("App", {
    dark: isDarkMode,
  });

  return (
    <div className={appClass}>
      <div className="min-h-screen bg-gray-100 px-5 pt-[140px] pb-8 dark:bg-black-900 sm:px-24 sm:pt-36">
        <div className="m-auto w-full max-w-3xl">
          <Header isDarkMode={isDarkMode} toggleModel={toggleMode} />
          <SearchInput isNotFound={notFound} onSubmit={handleSubmit} />
          {!!user && <UserDataCard user={user} />}
        </div>
      </div>
    </div>
  );
}

export default App;
