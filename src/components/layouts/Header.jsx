import "../../css/header.css";

const routes = [
  {
    name: "Home",
    url: ""
  },
  {
    name: "About us",
    url: ""
  },
  {
    name: "Blog",
    url: ""
  },
  {
    name: "Contact us",
    url: ""
  }
];

const Header = (props) => {
  const currentPage = routes[0].name;

  return (
    <nav className="header-container">
      <div className="header-logo-container">
        <img
          className="header-logo-image"
          src="/imgs/logologo.png"
          alt="Start Nest logo"
        />
      </div>
      <input
        className="header-menu-checkbox"
        type="checkbox"
        id="nav-menu-mobile"
      />
      <div className="header-routes  header-routes-mobile">
        <ul className="header-routes-container">
          {routes.map((route, index) => (
            <li key={index} className="header-routes-item">
              <a
                href={route.url}
                className={`route-item ${
                  route.name === currentPage && "route-item__selected"
                }`}
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="header-menu-button">
        <label htmlFor="nav-menu-mobile">
          <img src="/imgs/menu.svg" alt="menu button" />
        </label>
      </div>
    </nav>
  );
};

export default Header;
