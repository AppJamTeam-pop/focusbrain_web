import React from 'react'
import * as S from './style'
import Input from "src/components/input";
import useUser from "src/hooks/useUser";
import Header from "src/components/header";

const Login = () => {
    const login = useUser(true);
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <S.Wrapper>
            <Header/>
            <S.Form>
                <S.Title>로그인</S.Title>
                <Input name='아이디' value={user} setValue={setUser} type={'string'} />
                <Input name='비밀번호' value={password} setValue={setPassword} type={'password'} />
                <S.Button onClick={() => login.Request(user,password)}>
                    확인
                </S.Button>
            </S.Form>
        </S.Wrapper>
    )
}
export default Login;