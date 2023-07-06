import React from "react";
import ReactDOM from "react-dom/client";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

// 3. extend the theme
const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
})

require("dotenv").config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
