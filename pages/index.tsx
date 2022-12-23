import React, { FormEventHandler } from "react";
import { ScreenWrap, Container, Input, Button, MassageModal } from "components";
import { useSetRecoilState } from "recoil";
import { userAtom } from "stores";
import { useRouter } from "next/router";
import { useModal } from "hooks";
import { MASSAGE } from "constant";

const Login = () => {
  const router = useRouter();
  const setUser = useSetRecoilState(userAtom);

  const { isModalOpen, open, close } = useModal();
  const handleLoginSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { id, name } = e.target as typeof e.target & {
      id: { value: string };
      name: { value: string };
    };
    if (!id.value || !name.value) {
      open();
      return;
    }

    setUser({ id: id.value, name: name.value });

    router.push("/home");
  };

  return (
    <Container>
      <ScreenWrap>
        <form
          onSubmit={handleLoginSubmit}
          className="w-[90%] flex flex-col gap-2"
        >
          <h1 className="font-bold text-xl">그린랩스 농장관리 서비스</h1>
          <label htmlFor="id">아이디</label>
          <Input
            id="id"
            type="text"
            name="id"
            placeholder="아이디를 입력하세요"
          />
          <label htmlFor="name">이름</label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="이름을 입력하세요"
          />
          <Button>로그인</Button>
        </form>
        <MassageModal
          title={MASSAGE.LOGIN_EMPTY_ERROR.title}
          description={MASSAGE.LOGIN_EMPTY_ERROR.description}
          close={close}
          isModalOpen={isModalOpen}
        />
      </ScreenWrap>
    </Container>
  );
};

export default Login;
