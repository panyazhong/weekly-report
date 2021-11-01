import { lightTheme, darkTheme } from "./variable";
import cssVars from "css-vars-ponyfill";

export const initTheme = (theme) => {
  document.documentElement.setAttribute(
    "data-theme",
    theme === "light" ? "light" : "dark"
  );
  cssVars({
    watch: true,
    variables: theme === "light" ? lightTheme : darkTheme,
    onlyLegacy: false,
  });
};
