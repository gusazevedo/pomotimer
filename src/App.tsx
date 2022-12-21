import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/global";
import { defaultTheme } from "./components/styles/themes/default";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <h1>Hello Pomo Timer</h1>

            <GlobalStyle />
        </ThemeProvider>
    );
}
