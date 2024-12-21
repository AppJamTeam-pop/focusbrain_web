import styled from "styled-components";
import {theme} from "src/assets/theme";

export const Wrapper = styled.div`
    width: 500px;
    padding: 10px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.Normal};
    cursor: pointer;
`
export const Text = styled.span`
    font-family: Pretendard-Regular, sans-serif;
    font-size: 50px;
    color: white;
`