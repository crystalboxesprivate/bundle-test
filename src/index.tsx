import "./styles.scss";
import { render } from "react-dom";

import App from "./App";

const _window = window as typeof window & {
  __loadSupportChat: (el: string) => void;
};

_window.__loadSupportChat = (el: string) => {
  const rootElement = document.querySelector(el);
  if (rootElement) {
    render(<App />, rootElement);
  } else {
    throw new Error("element not found");
  }
};
