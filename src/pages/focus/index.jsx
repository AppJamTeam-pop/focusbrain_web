import React from 'react';
import * as S from './style';
import Header from "src/components/header";
import FocusTime from "src/components/focusTime";

const Focus = () => {
    return (
        <S.Wrapper>
            <Header type={3} />
            <FocusTime/>
        </S.Wrapper>
    )
}
export default Focus;