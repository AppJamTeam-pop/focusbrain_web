import styled from "styled-components";
import {theme} from "src/assets/theme";

export const Wrapper = styled.div`
    width: max(485px);
    //height: min(100px);
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.Normal};
    border-radius: 10px;
    
`
export const Title = styled.span`
    font-family: Pretendard-Regular, sans-serif;
    font-size: 24px;
`
export const Link = styled.a`
    font-family: Pretendard-Regular, sans-serif;
    text-decoration: none;
    color: #7c7c7c;
`