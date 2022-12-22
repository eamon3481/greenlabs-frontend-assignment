import React, { FormEventHandler } from 'react';
import { ScreenWrap, Container, Input, Button } from 'components';
import { useSetRecoilState } from 'recoil';
import { userAtom } from 'stores';

//TODO: Q1-1 로그인 상태 관리
// 상태관리 라이브러리 (context, redux, recoil 등) 을 활용해서 로그인 상태를 관리하는 기능을 개발 해주세요
// 라이브러리 사용은 자율입니다.
// 로그인이 완료되면 /home 라우터로 이동해야합니다.

const Login = () => {
 const handleLoginSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  const { id, name } = e.target as typeof e.target & {
   id: { value: string };
   name: { value: string };
  };

  console.log(id.value, name.value);
 };
 return (
  <Container>
   <ScreenWrap>
    <form onSubmit={handleLoginSubmit} className="w-[90%] flex flex-col gap-2">
     <h1 className="font-bold text-xl">그린랩스 농장관리 서비스</h1>
     <label htmlFor="id">아이디</label>
     <Input id="id" type="text" name="id" placeholder="아이디를 입력하세요" />
     <label htmlFor="name">이름</label>
     <Input id="name" type="text" name="name" placeholder="이름을 입력하세요" />
     <Button>로그인</Button>
    </form>
   </ScreenWrap>
  </Container>
 );
};

export default Login;
