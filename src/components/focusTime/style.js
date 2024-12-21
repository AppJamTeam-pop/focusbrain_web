import styled from "styled-components";

export const Wrapper = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
`
export const TimeContainer = styled.div`
`
export const Time = styled.span`
    font-family: Pretendard-Regular, sans-serif;
    font-size: 64px;`
export const Start = styled(Time)`
    font-size: 36px;
    cursor: pointer;
`
export const Stop = styled(Time)`
    font-size: 36px;
    cursor: pointer;
    &.true {
        color: green;
        font-weight: bold;
    }
`