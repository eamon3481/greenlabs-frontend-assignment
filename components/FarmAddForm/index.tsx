import React, { FormEventHandler } from "react";
import { Input, Button } from "components";
import { addFarm } from "apis";

const FarmAddForm = () => {
  /*
    TODO: Q4 Portal 을 활용하여 모달을 구현합니다.
    - 위에서 호출된 결과 값을 화면에 출력 해야 합니다.
    - 예시는 이미지를 참고해 주세요
    TODO: Q4-1
    - 성공시 결과 값을 출력하는 구현해주세요
    TODO: Q4-2
    - 전달하는 값이 없을 경우 진행이 불가능하다는 모달을 출력해 주세요
    TODO: Q4-3
    - 각 모달에는 닫기 버튼을 추가하여 모달이 수동으로 닫혀야 합니다.
  */
  const handleFarmAddSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { farmName, cropName } = e.target as typeof e.target & {
      farmName: { value: string };
      cropName: { value: string };
    };
    try {
      addFarm({ name: farmName.value, crop: cropName.value });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="flex flex-col gap-4 px-2" onSubmit={handleFarmAddSubmit}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label>
            농장 명
            <Input name="farm-name" type="text" />
          </label>
        </div>

        <div className="flex flex-col">
          <label>
            작물명
            <Input name="crop-name" type="text" />
          </label>
        </div>
      </div>
      <Button>저장</Button>
    </form>
  );
};

export default FarmAddForm;
