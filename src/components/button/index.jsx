import React from 'react';
import * as S from './style';
import {useNavigate} from "react-router-dom";

const Button = ({text,url}) => {
    const navigate = useNavigate();
    return (
        <S.Wrapper onClick={() => navigate(url)}>
            <S.Text>{text}</S.Text>
        </S.Wrapper>
    )
}
export default Button;