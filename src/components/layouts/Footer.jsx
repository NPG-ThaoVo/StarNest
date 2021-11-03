import React, { useRef, useState } from "react";
import "../../css/footer.css";
import emailjs from "emailjs-com";

const sendImg = "/imgs/arrow-right.svg";
const loadingImg = "/imgs/puff.svg";
const errorImg = "/imgs/error.svg";
const checkedImg = "/imgs/checked.svg";

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
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState("");
  const [imgSrc, setImgSrc] = useState(sendImg);

  const sendEmail = (e) => {
    e.preventDefault();

    //
    //
    //
  };

  const handleChageMail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="footer-container">
      <img alt="scratch" className="footer-decor-" src="/imgs/scratch.svg" />
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-container">
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={handleChageMail}
                  placeholder="Your email address"
                  disabled={isSending}
                />
                <button type="submit" disabled={isSending}>
                  <img src={imgSrc} alt="submit" />
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
