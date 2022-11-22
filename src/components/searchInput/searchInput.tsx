import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

type SearchInputProps = {
  isNotFound: boolean;
  onSubmit: (userInput: string) => void;
};

const SearchInput = ({ isNotFound, onSubmit }: SearchInputProps) => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="relative mt-8 h-[69px]">
      <input
        type="text"
        className="border-gray-200 h-full w-full rounded-[15px] pl-16 text-lg shadow-md dark:bg-blue-800 dark:text-white dark:placeholder:text-white"
        placeholder="Search GitHub username…"
        data-testid="searchinput"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        onClick={() => onSubmit(userInput)}
        className="abs-v-center right-2 rounded-[10px] bg-blue-500 px-6 py-3 text-base font-bold text-white hover:bg-[#60ABFF]"
      >
        submit
      </button>
      {isNotFound && (
        <p
          className="abs-v-center right-32 text-[15px] font-bold text-red"
          data-testid="notFoundText"
        >
          No results
        </p>
      )}
      <SearchIcon className="abs-v-center pointer-events-none left-8" />
    </div>
  );
};

export default SearchInput;
