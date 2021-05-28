import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Flip from "react-reveal/Flip";
import { theme } from "./styles/theme";
import { useAppSelector } from "./hooks";
import { Gameplay, Main } from "./pages";

export const App: React.FC = () => {
  const { hasStarted } = useAppSelector((state) => state.game);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {hasStarted ? (
          <Flip bottom>
            <Gameplay />
          </Flip>
        ) : (
          <>
            <Flip top>
              <Main />
            </Flip>
          </>
        )}
      </ThemeProvider>
    </>
  );
};
