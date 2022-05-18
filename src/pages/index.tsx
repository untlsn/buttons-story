import logo from '~/assets/images/logo.svg';
import '~/App.css';
import useLocalRef from '~/hooks/useLocalRef';

export default function App() {
  const count = useLocalRef(0);

  return (
    <div className="text-center">
      <header className="App-header">
        <img src={logo} className="App-image" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            className="App-button"
            onClick={() => {
              count.value++;
            }}
          >
            count is: <Observer>{() => count.value}</Observer>
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className="children:text-react-blue">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <span> | </span>
          <a
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <span> | </span>
          <Link to="/about">
            About
          </Link>
        </p>
      </header>
    </div>
  );
}
