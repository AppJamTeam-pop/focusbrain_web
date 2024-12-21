import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.span`
    font-family: Pretendard-Medium, sans-serif;
    font-size: 48px;
`
export const Svg = styled.svg`
    width: 500px;
    height: 500px;
    transform: rotate(-90deg); /* 시작점을 12시 방향으로 */
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: #ddd;
  stroke-width: ${(props) => props.strokeWidth || 10};
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: ${(props) => props.color || "#4caf50"};
  stroke-width: ${(props) => props.strokeWidth || 10};
  stroke-dasharray: ${(props) => props.circumference};
  stroke-dashoffset: ${(props) =>
    props.circumference - (props.circumference * props.percentage) / 100};
  transition: stroke-dashoffset 0.5s ease-in-out;
`;
export const TextList = styled.div`
    display: flex;
    flex-direction: column;
`
export const Text = styled.span`
    font-family: Pretendard-Medium, sans-serif;
    font-size: 28px
`