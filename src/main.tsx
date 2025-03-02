import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class">
    <App />
  </ThemeProvider>
);
