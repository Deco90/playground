import "./styles.css";
import { useDarkMode } from "../src/hooks/useDarkMode";
import sunIcon from "../src/assets/sun.svg";
import moonIcon from "../src/assets/moon.svg";

export default function ThemeSwitch() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="toggle-wrapper">
      <button
        className={`toggle-btn ${isDark ? "active" : ""}`}
        onClick={() => !isDark && toggleDarkMode()}
      >
        <img src={moonIcon} alt="Dark Mode" />
      </button>
      <button
        className={`toggle-btn ${!isDark ? "active" : ""}`}
        onClick={() => isDark && toggleDarkMode()}
      >
        <img src={sunIcon} alt="Light Mode" />
      </button>
    </div>
  );
}
