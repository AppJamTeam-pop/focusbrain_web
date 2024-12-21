import React from 'react';
import * as S from './style';
import Header from "src/components/header";
import Calendar from "src/components/calendar";

const CalendarPage = () => {
    return (
        <S.Wrapper>
            <Header type={2} />
            <Calendar/>
        </S.Wrapper>
    )
}
export default CalendarPage;