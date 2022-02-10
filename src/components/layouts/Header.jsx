import { useEffect, useRef, useState } from "react";
import "../../css/header.css";
import { registerSwipeEvent } from "../../util/windowEvents";

const routes = [
  {
    name: "Home",
    url: "",
  },
  {
    name: "Top Product",
    url: "",
    sub: [
      {
        nameSub: "Kebo keyboard",
        urlSub: "/kebo",
      },
      {
        nameSub: "Calendar",
        urlSub: "/calendar",
      },
    ],
  },
  {
    name: "About us",
    url: "",
  },
  {
    name: "Blog",
    url: "",
  },
  {
    name: "Contact us",
    url: "",
  },
];

const Header = (props) => {
  const currentPage = routes[0].name;
  const navRef = useRef(null);

  const [headerVisible, setHeaderVisible] = useState(true);
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleSctroll = (e) => {
      if (window.pageYOffset >= 70) onTop && setOnTop(false);
      else !onTop && setOnTop(true);
    };
    window.addEventListener("scroll", handleSctroll);
    return () => {
      window.removeEventListener("scroll", handleSctroll);
    };
  }, [onTop, setOnTop]);

  useEffect(() => {
    const cleanupSwipeEvent = registerSwipeEvent(({ direction }) => {
      if (navRef.current) {
        if (direction) setHeaderVisible(false);
        else setHeaderVisible(true);
      }
    });

    return () => {
      cleanupSwipeEvent();
    };
  }, []);

  const scrollToTop = (e) => {
    document.getElementById("top-of-the-page").scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  };

  return (
    <>
      <div id="top-of-the-page" className="header-placeholder"></div>
      <nav
        ref={navRef}
        className={`header-container ${
          headerVisible ? "header-visible" : "header-hide"
        }`}
      >
        <div className="header-logo-container">
          <a href="/">
            <img
              className="header-logo-image"
              src="/imgs/logologo.png"
              alt="Start Nest logo"
            />
          </a>
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
                  onClick={(e)=>{
                    if(route.name.includes("Top Product")) e.preventDefault()
                  }}
                  className={`route-item ${
                    route.name === currentPage && "route-item__selected"
                  }`}
                >
                  {route.name}
                </a>
                {route.sub ? (
                  <ul>
                    {route.sub.map((item, i) => (
                      <li key={i}>
                        <a className="route-sub-item" href={item.urlSub}>
                          {item.nameSub}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
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
      <div className={`button-to-top ${onTop && "button-to-top__hide"}`}>
        <button onClick={scrollToTop}>
          <img alt="Button submit" src="/imgs/arrow-right.svg" />
        </button>
      </div>
    </>
  );
};

export default Header;
