import React from "react";
import * as S from "./style";
import {useNavigate} from "react-router-dom";
import userIcon from "src/assets/images/user.png";

const Header = ({type}) => {
    const navigate = useNavigate();
    return (
        <S.Wrapper>
            <S.Title onClick={()=>navigate('/')}>FocusBrain</S.Title>
            {type===1 ?
                <S.UserContainer>
                    <S.SignupText onClick={()=>navigate('/signup')}>회원가입</S.SignupText>
                    <S.LoginText onClick={()=>navigate('/login')}>로그인</S.LoginText>
                </S.UserContainer>
                : null}
            {type===2 ?
                <S.NavContainer>
                    <S.NavText onClick={()=>navigate('/main')}>홈</S.NavText>
                    <S.NavText onClick={()=>navigate('/focus')}>집중 모드</S.NavText>
                    <S.NavText onClick={()=>navigate('/calendar')}>캘린더</S.NavText>
                </S.NavContainer>
                : null}
            {type===2 ? <S.Image src={userIcon} alt="user" onClick={() => navigate('')} /> : null}
        </S.Wrapper>
    )
}
export default Header;