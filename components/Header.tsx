import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userAtom } from "stores";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <header className="border-b p-2 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold" onClick={() => router.push("home")}>
          농장관리시스템
        </h1>
        <span className="text-sm">
          {user?.name}({user?.id})
        </span>
      </div>
    </header>
  );
};

export default Header;
