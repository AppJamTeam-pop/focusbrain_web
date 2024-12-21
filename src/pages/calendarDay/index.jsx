import React from 'react';
import * as S from './style';
import UsageTime from "src/components/usageTime";
import Header from "src/components/header";

const CalendarDay = () => {
    return (
        <S.Wrapper>
            <Header type={2}/>
            <UsageTime data={[
                { name:'일반', percentage: 20, color: "#4caf50", strokeWidth: 10 },
                { name:'유튜브', percentage: 50, color: "#f32121", strokeWidth: 10 },
                { name:'인스타', percentage: 30, color: "#ff00fb", strokeWidth: 10 },
            ]}/>
        </S.Wrapper>
    )
}
export default CalendarDay;