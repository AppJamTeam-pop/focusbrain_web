import React from 'react';
import * as S from './style';
import Header from "src/components/header";
import UsageTime from "src/components/usageTime";
import ActivityList from "src/components/activityList";

const Main = () => {
    return (
        <S.Wrapper>
            <Header type={2} />
            <S.ContentContainer>
                <UsageTime data={[
                    { name:'일반', percentage: 50, color: "#4caf50", strokeWidth: 10 },
                    { name:'유튜브', percentage: 30, color: "#f32121", strokeWidth: 10 },
                    { name:'인스타', percentage: 20, color: "#ff00fb", strokeWidth: 10 },
                ]}/>
                <ActivityList/>
            </S.ContentContainer>
        </S.Wrapper>
    )
}
export default Main;