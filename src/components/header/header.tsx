import { ReactComponent as MoonSvg } from "../../assets/icons/moon.svg";
import { ReactComponent as SunSvg } from "../../assets/icons/sun.svg";

type HeaderProps = {
  isDarkMode: boolean;
  toggleModel: () => void;
};

const Header = ({ isDarkMode, toggleModel }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[26px] font-bold  text-black-800 dark:text-white">
        devfinder
      </p>
      <div
        className="switch v-center cursor-pointer gap-2"
        onClick={toggleModel}
      >
        {isDarkMode ? "LIGHT" : "DARK"}
        {isDarkMode ? <SunSvg /> : <MoonSvg />}
      </div>
    </div>
  );
};

export default Header;
