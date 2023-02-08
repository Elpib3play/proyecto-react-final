import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content"></div>
      </div>
      <div className="footer__copyright">
        <p>
          &copy; {year} Tecno Pc - Designed by:{" "}
          <span>Ezequiel</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
