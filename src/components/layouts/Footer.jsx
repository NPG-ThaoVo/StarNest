import "../../css/footer.css";

const quickLinks = [
  {
    title: "Top Products",
    subPage: [
      {
        name: "Learn Japanese",
        url: ""
      },
      {
        name: "Learn Korean",
        url: ""
      },
      {
        name: "Lifestyle App",
        url: ""
      },
      {
        name: "Power Tools",
        url: ""
      }
    ]
  },
  {
    title: "Quick Links",
    subPage: [
      {
        name: "Brand Assets",
        url: ""
      },
      {
        name: "Jobs",
        url: ""
      },
      {
        name: "Terms of Service",
        url: ""
      },
      {
        name: "Investor Realtions",
        url: ""
      }
    ]
  },
  {
    title: "Features",
    subPage: [
      {
        name: "Jobs",
        url: ""
      },
      {
        name: "Brand Assets",
        url: ""
      },
      {
        name: "Investor Realtions",
        url: ""
      },
      {
        name: "Power Tools",
        url: ""
      }
    ]
  },
  {
    title: "Resources",
    subPage: [
      {
        name: "Investor Realtions",
        url: ""
      },
      {
        name: "Jobs",
        url: ""
      },
      {
        name: "Terms of Service",
        url: ""
      },
      {
        name: "Brand Assets",
        url: ""
      }
    ]
  }
];

const Footer = (props) => {
  return (
    <div className="footer-container">
      <img className="footer-decor-scratch" src="/imgs/scratch.svg" />
      <div className="footer-quick-link">
        {quickLinks.map((block, index) => (
          <div key={index} className="footer-block">
            <h4 className="footer-block-title">{block.title}</h4>
            <div className="footer-block-links">
              <ul className="block-links-container">
                {block.subPage.map((page, i) => (
                  <li key={i} className="block-links-item">
                    <a href={page.url}>{page.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="footer-block">
          <h4 className="footer-block-title">Newshelter</h4>
          <div className="footer-block-links">
            <ul className="block-links-container">
              <li className="block-links-item">
                You can trust us. We only promo offers.
              </li>
            </ul>
          </div>
          <div className="footer-form">
            <form action="" method="post">
              <div className="form-container">
                <input type="text" placeholder="Your email address" />
                <button type="submit">
                  <img src="/imgs/arrow-right.svg" alt="submit" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">2021 © StarNest</div>
    </div>
  );
};

export default Footer;
