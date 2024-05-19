import logo from '../content/img/sqrrrl-logo.png';

export const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="mobile-logo" />
      <h1>SQUIRL COIN</h1>
      <article>Nut trading made easy!</article>
    </div>
  )
}