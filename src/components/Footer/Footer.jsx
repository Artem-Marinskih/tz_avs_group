import './Footer.scss';

export const Footer = ({ title }) => {
  return (
    <footer className="Footer">
      <div className="Footer__logo">
        <div className="Footer__logo-circle"></div>
        <div className="Footer__logo-ellipse"></div>
      </div>
      <div className="Footer__links">
        <a href="URL" className="Footer__link">
          About Us
        </a>
        <a href="URL" className="Footer__link">
          Privacy Policy
        </a>
      </div>
      <form className="Footer__form" action="">
        <input className="Footer__input" name="Email" placeholder="Enter your email" />
        <button type="submit" className="Footer__button">
          Sign Up Now
        </button>
      </form>
    </footer>
  );
};
