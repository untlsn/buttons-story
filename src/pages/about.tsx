import logo from '~/assets/images/logo.svg';
import Title from '~/providers/Title';

export default function About() {
  return (
    <div className="text-center">
      <Title>App about</Title>
      <header className="App-header">
        <img src={logo} className="App-image" alt="logo" />
        <p>About</p>
        <p>
          <Link to="/" className="text-react-blue text-lg">
            Back to home
          </Link>
        </p>
      </header>
    </div>
  );
}
