import React from 'react';
import * as S from './style';
import Activity from "src/components/activity";

const ActivityList = () => {
    const [activity, setActivity] = React.useState([{title:'스트레칭하기',href:'https://www.youtube.com/results?search_query=스트레칭하기'},{title:'명상하기',href:'https://www.youtube.com/results?search_query=명상하기'},{title:'DIY 만들기',href:'https://www.youtube.com/results?search_query=DIY 만들기'},{title:'프라모델 만들기',href:'https://www.youtube.com/results?search_query=프라모델 만들기'},{title:'도움이 되는 책 읽기',href:'https://www.youtube.com/results?search_query=도움이 되는 책 읽기'},]);
    return (
        <S.Wrapper>
            <S.Title>AI 추천 맞춤 활동</S.Title>
            <S.ListContainer>
                {activity.map((item, i) => (
                    <Activity key={i} title={item.title} href={item.href}></Activity>
                ))}
            </S.ListContainer>
        </S.Wrapper>
    )
}
export default ActivityList;