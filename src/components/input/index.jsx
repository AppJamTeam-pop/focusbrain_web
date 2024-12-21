import React from 'react';
import * as S from './style';

const Input = ({name, value, setValue, type}) => {
    return (
        <S.Wrapper>
            <S.InputTitle>
                {name}
            </S.InputTitle>
            <S.InputBox value={value} onChange={e => setValue(e.target.value)} type={type} />
        </S.Wrapper>
    )
}
export default Input;