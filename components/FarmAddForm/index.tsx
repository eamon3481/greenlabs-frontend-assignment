import React, { FormEventHandler, useState } from "react";
import { Input, Button, Portal, Title } from "components";
import { addFarm } from "apis";
import useModal from "hooks/useModal";
import { MASSAGE } from "constant";

const FarmAddForm = () => {
  const { isModalOpen, open, close } = useModal();
  const [postResult, setPostResult] = useState<null | {
    name: string;
    crop: string;
  }>(null);

  const handleFarmAddSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { name, crop } = e.target as typeof e.target & {
      name: { value: string };
      crop: { value: string };
    };

    if (!name.value || !crop.value) {
      open();
      return;
    }

    try {
      await addFarm({
        name: name.value,
        crop: crop.value,
      });
      setPostResult({ name: name.value, crop: crop.value });
    } catch (e) {
      console.error(e);
    }
    open();
  };

  return (
    <>
      <form className="flex flex-col gap-4 px-2" onSubmit={handleFarmAddSubmit}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label>
              농장 명
              <Input name="name" type="text" />
            </label>
          </div>

          <div className="flex flex-col">
            <label>
              작물명
              <Input name="crop" type="text" />
            </label>
          </div>
        </div>
        <Button>저장</Button>
      </form>
      {isModalOpen && (
        <Portal backgroundClick={close}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 items-center">
              <Title
                title={
                  postResult
                    ? MASSAGE.ADD_FARM_SUCCESS.title
                    : MASSAGE.ADD_FARM_EMPTY_ERROR.title
                }
              />
              <p>
                {postResult
                  ? MASSAGE.ADD_FARM_SUCCESS.description(postResult)
                  : MASSAGE.ADD_FARM_EMPTY_ERROR.description}
              </p>
            </div>
            <Button onClick={close}>닫기</Button>
          </div>
        </Portal>
      )}
    </>
  );
};

export default FarmAddForm;
