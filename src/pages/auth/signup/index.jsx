import React from 'react'
import * as S from './style'
import Input from "src/components/input";
import useUser from "src/hooks/useUser";
import Header from "src/components/header";

const Signup = () => {
    const signup = useUser(false);
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <S.Wrapper>
            <Header/>
            <S.Form>
                <S.Title>회원가입</S.Title>
                <Input name='아이디' value={user} setValue={setUser} type={'string'} />
                <Input name='비밀번호' value={password} setValue={setPassword} type={'password'} />
                <S.Button onClick={() => signup.Request(user,password)}>
                    가입하기
                </S.Button>
            </S.Form>
        </S.Wrapper>
    )
}
export default Signup;