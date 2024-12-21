import styled from "styled-components";
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`
export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`
export const ImageShadow = styled(ImageContainer)`
    background-image: linear-gradient(rgba(0,0,0,0),rgba(30,30,30,1));
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`
export const ContentContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.span`
    margin-bottom: 40px;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 50px;
    color: white;
`
export const Text = styled(Title)`
    font-size: 28px;
    text-align: center;
`