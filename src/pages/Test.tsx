import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TargetStringArray } from "../util/atom";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [started, setStarted] = useState<boolean>(false);
  const [targetArray] = useRecoilState<string[]>(TargetStringArray);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();
  const onInputStart = () => {
    setStarted(true);
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === targetArray[currentIndex]) {
      if (currentIndex === 4) {
        navigate("/result");
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      e.target.value = "";
    }
  };
  useEffect(() => {
    if (targetArray.length < 5) {
      navigate("/");
    }
  });
  return (
    <div>
      <h1>{targetArray[currentIndex]}</h1>
      <input
        onChange={onChangeInput}
        onInput={() => {
          if (!started) {
            onInputStart();
          }
        }}
      />
    </div>
  );
};

export default Test;
