import React from 'react';
import * as S from './style';
import banner from 'src/assets/images/img_1.png'
import Header from "src/components/header";
import Button from "src/components/button";

const Start = () => {
    return (
        <S.Wrapper>
            <S.ImageContainer>
                <S.Image src={banner} alt="banner" />
                <S.ImageShadow/>
            </S.ImageContainer>
            <Header type={1}/>
            <S.ContentContainer>
                <S.Title>
                    팝콘 브레인을 위한 솔루션
                </S.Title>
                <S.Text>
                    이 앱은 당신의 집중력을 키우고
                    <br/>
                    팝콘 브레인에서 벗어나는 데
                    <br/>
                    도움을 줄 완벽한 파트너입니다.
                    <br/>
                    지금 시작해보세요!
                </S.Text>
                <Button text='시작하기' url='/main'/>
                <Button text='캘린더' url='/calendar' />
            </S.ContentContainer>
        </S.Wrapper>
    )
}
export default Start;