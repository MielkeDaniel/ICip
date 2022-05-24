import logo from "../../assets/images/logo.svg";

const TopNav = () => {
  return (
    <nav className="navbar-top">
      <img className="nav-logo" src={logo} alt="Logo" />
      <div className="flex-container">
        <li>How it works</li>
        <li>Roadmap</li>
        <li>Run a node</li>
        <li>About DFINITY</li>
        <li>Contact formula</li>
      </div>
    </nav>
  );
};

export default TopNav;
