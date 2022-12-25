export const MASSAGE = {
  LOGIN_EMPTY_ERROR: {
    title: "로그인 실패!",
    description: "아이디와 이름을 입력해주세요!",
  },
  ADD_FARM_EMPTY_ERROR: {
    title: "농장 추가 실패!",
    description: "농장명과 작물명을 입력해주세요!",
  },
  ADD_FARM_SUCCESS: {
    title: "농장 추가 성공!",
    description: ({ name, crop }: { name: string; crop: string }) =>
      `농장명 : ${name} , 작물명 : ${crop}`,
  },
} as const;
