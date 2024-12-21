import React, {useState, useRef} from 'react';
import * as S from './style';
import {useNavigate} from "react-router-dom";

const FocusTime = () => {
    const [active, setActive] = useState(false);
    const [exit, setExit] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(undefined);
    const navigate = useNavigate();
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    };
    const startStopwatch = () => {
        if (!active) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 50);
            }, 50);
            setActive(true);
        }
    }
    const stopStopwatch = () => {
        if (!exit) {
            clearInterval(intervalRef.current);
            setExit(true);
            clearInterval(intervalRef.current);
        }
        else navigate('/main')
    }

    return (
        <S.Wrapper>
            <S.Start onClick={startStopwatch}>시작하기</S.Start>
            <S.TimeContainer>
                <S.Time>{formatTime(time)}</S.Time>
            </S.TimeContainer>
            <S.Stop onClick={stopStopwatch} className={exit.toString()}>끝내기</S.Stop>
        </S.Wrapper>
    )
}
export default FocusTime;