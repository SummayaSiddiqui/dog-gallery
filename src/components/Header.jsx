import Title from "./Title";

const Header = () => {
  return (
    <header>
      <Title />

      <img src={`${process.env.PUBLIC_URL}/Banner1.png`} alt="Header" />

      {/* <button className="btn">Fetch Images</button> */}
    </header>
  );
};

export default Header;
