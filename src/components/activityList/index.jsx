import React from 'react';
import * as S from './style';
import Activity from "src/components/activity";

const ActivityList = () => {
    const [activity, setActivity] = React.useState([{title:'스트레칭하기',href:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},{title:'스트레칭하기',href:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},{title:'스트레칭하기',href:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},{title:'스트레칭하기',href:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},{title:'스트레칭하기',href:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},{title:'스트레칭하기',href:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},{title:'스트레칭하기',href:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},]);
    return (
        <S.Wrapper>
            <S.Title>AI 추천 맞춤 활동</S.Title>
            <S.ListContainer>
                {activity.map((item, i) => (
                    <Activity title={item.title} href={item.href}></Activity>
                ))}
            </S.ListContainer>
        </S.Wrapper>
    )
}
export default ActivityList;