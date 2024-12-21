// components/Calendar.js
import React, { useState } from "react";
import * as S from "./style";
import {useNavigate} from "react-router-dom";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState({});
    const navigate = useNavigate();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const getDaysInMonth = () => {
        const days = [];
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            days.push(i);
        }
        return days;
    };

    const addEvent = (day) => {
        if (day <= currentDate.getDate()) navigate(`/calendarDay/${Math.floor((Math.random() * (10000 - 1) + 1))}`)
        // const event = prompt("Enter event details:");
        // if (event) {
        //     setEvents({ ...events, [day]: event });
        // }
    };

    return (
        <S.CalendarContainer>
            <S.Header>
                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
                    Prev
                </button>
                <h2>{currentDate.toLocaleDateString("en-US", { year: "numeric", month: "long" })}</h2>
                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
                    Next
                </button>
            </S.Header>
            <S.DaysOfWeek>
                {daysOfWeek.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </S.DaysOfWeek>
            <S.DaysGrid>
                {getDaysInMonth().map((day) => (
                    <S.Day
                        key={day}
                        isCurrentDay={new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()}
                        onClick={() => addEvent(day)}
                    >
                        {day}
                        {events[day] && <div className="event">{events[day]}</div>}
                    </S.Day>
                ))}
            </S.DaysGrid>
        </S.CalendarContainer>
    );
};

export default Calendar;
