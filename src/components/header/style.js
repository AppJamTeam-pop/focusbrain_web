import styled from "styled-components";
import {theme} from "src/assets/theme";
export const Wrapper = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.colors.Light_hover};
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
`
export const Title = styled.span`
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 40px;
    cursor: pointer;
`
export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`
export const NavContainer = styled.div`
    display: flex;
    width: 45%;
    align-items: center;
    justify-content: space-between;
`
export const NavText = styled.span`
    font-family: Pretendard-Regular, sans-serif;
    font-size: 36px;
    cursor: pointer;
`
export const LoginText = styled(NavText)`
    font-size: 24px;
`
export const SignupText = styled(LoginText)`
    padding: 15px;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
`
export const Image = styled.img`
    cursor: pointer;
`