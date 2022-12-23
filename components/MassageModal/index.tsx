import React from "react";
import { Button, Portal, Title } from "components";

type MassageModalProps = {
  title: string;
  description: string;
  isModalOpen: boolean;
  close: () => void;
};
const MassageModal = ({
  title,
  description,
  isModalOpen,
  close,
}: MassageModalProps) => {
  return (
    <>
      {isModalOpen && (
        <Portal backgroundClick={close}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 items-center">
              <Title title={title} />
              <p>{description}</p>
            </div>
            <Button onClick={close}>닫기</Button>
          </div>
        </Portal>
      )}
    </>
  );
};

export default MassageModal;
