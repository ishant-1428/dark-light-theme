import logo from "./logo.svg";
import "./App.css";
import useTheme from "./useTheme";
import { lightTheme, darkTheme } from "./themes";

function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <div
      style={{
        ...theme === 'dark' ? darkTheme : lightTheme,
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Toggle Theme</h1>
      <p></p>
      <button
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 4,
          color: "white",
          backgroundColor: "black",
          marginLeft: 5,
        }}
        onClick={toggleTheme}
      >
        Change Theme!
      </button>
    </div>
  );
}

export default App;
