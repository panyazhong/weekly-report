import HeaderMenu from "./Menu";
import RightSet from "./RightSet";
import LogBox from './LogBox'

const Header = () => {
  return (
    <div className="header-box">
      <LogBox></LogBox>

      <HeaderMenu></HeaderMenu>

      <RightSet></RightSet>
    </div>
  );
};

export default Header;
