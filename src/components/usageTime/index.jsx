import React from 'react';
import * as S from './style';

const UsageTime = ({data= []}) => {
    const centerX = 100;
    const centerY = 100;
    const radiusBase = 70; // 첫 번째 원의 반지름
    const strokeGap = 15; // 원 사이의 간격
    return (
        <S.Wrapper>
            <S.Title>
                시청시간
            </S.Title>

            <S.Svg viewBox="0 0 200 200">
                {data.map((item, index) => {
                    const radius = radiusBase - index * strokeGap; // 각 원의 반지름 계산
                    const circumference = 2 * Math.PI * radius;

                    return (
                        <g key={index}>
                            {/* 배경 원 */}
                            <S.CircleBackground
                                cx={centerX}
                                cy={centerY}
                                r={radius}
                                strokeWidth={item.strokeWidth || 10}
                            />
                            {/* 진행 원 */}
                            <S.CircleProgress
                                cx={centerX}
                                cy={centerY}
                                r={radius}
                                strokeWidth={item.strokeWidth || 10}
                                circumference={circumference}
                                percentage={item.percentage}
                                color={item.color}
                            />
                        </g>
                    );
                })}
                {/*/!* 중앙 텍스트 *!/*/}
                {/*<S.Text x={centerX} y={centerY} size="1.2rem">*/}
                {/*    {data.reduce((sum, item) => sum + item.percentage, 0) / data.length}%*/}
                {/*</S.Text>*/}
            </S.Svg>
            <S.TextList>
                {data.map((item, index) => (
                    <S.Text>{item.name} 사용량: {item.percentage}%</S.Text>
                ))}
            </S.TextList>
        </S.Wrapper>
    )
}
export default UsageTime;