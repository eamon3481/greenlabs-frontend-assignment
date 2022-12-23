import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModal] = useState(false);
  const close = () => setIsModal(false);
  const open = () => setIsModal(true);

  return { isModalOpen, close, open };
};

export default useModal;
