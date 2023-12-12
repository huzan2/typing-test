import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onClickStart = () => {
    navigate("/test");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <p>홈페이지</p>
      <button onClick={onClickStart}>테스트 시작</button>
    </div>
  );
};

export default Home;
