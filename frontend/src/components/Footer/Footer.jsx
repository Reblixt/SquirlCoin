import { NavLink } from 'react-router-dom';
import signalImg from '../../content/img/signal.png';
import telegramImg from '../../content/img/telegram.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <NavLink to={"/"}>Squirl Coin</NavLink>
        <NavLink to={"/transact"}>Nut trading</NavLink>
        <NavLink to={"/blockchain"}>Blockchain</NavLink>
        <NavLink to={"/block"}>Block</NavLink>
      </div>
      <div className="copyright">
        <p>© 2024 No nuts given, no nuts lost.</p>
      </div>
      <div className="social-links">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={signalImg}
            alt="Signal"
          />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={telegramImg}
            alt="Telegram"
          />
        </a>
      </div>
    </footer>
  );
};