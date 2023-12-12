import { Texts } from "../Texts";

export const setTargetTexts = (): string[] => {
  let resultArr: string[] = [];
  let indexArr: number[] = [];
  while (indexArr.length < 5) {
    let randomNum: number = Math.floor(Math.random() * (Texts.length - 1));
    if (indexArr.indexOf(randomNum) === -1) {
      indexArr.push(randomNum);
      resultArr.push(Texts[randomNum]);
    }
  }
  return resultArr;
};
