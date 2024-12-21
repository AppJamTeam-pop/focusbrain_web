import React from 'react';
import * as S from './style';

const Activity = ({title, href}) => {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.Link href={href}>영상 확인하기-></S.Link>
        </S.Wrapper>
    )
}
export default Activity;