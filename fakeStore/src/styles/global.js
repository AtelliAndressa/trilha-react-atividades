import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, :root {
        min-height: 100%;
    }

    body {
        background:${(props) => props.theme.color.background};
        color:${(props) => props.theme.color.text};
    }
`;