import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import { setTargetTexts } from "../util/setTexts";
import { useRecoilState } from "recoil";
import { TargetStringArray } from "../util/atom";

const Home = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState<boolean>();
  const [nickName, setNickName] = useState<string>("");
  const [targetSringArray, setTargetStringArray] =
    useRecoilState(TargetStringArray);
  const onClickStart = () => {
    console.log(targetSringArray);
    navigate("/test");
  };
  const onChangeInputNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  const onInputNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
    }
  };
  useEffect(() => {
    setMobile(isMobile);
    setTargetStringArray(setTargetTexts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <p>홈페이지</p>
      <p>{nickName}</p>
      {mobile ? <div>모바일입니다</div> : <div>모바일이 아닙니다</div>}
      <input
        name="nickName"
        onChange={onChangeInputNickName}
        onInput={onInputNickName}
      />
      <button onClick={onClickStart}>테스트 시작</button>
    </div>
  );
};

export default Home;
