import { useToggle } from 'react-use';
import buttonStore from '~/stores/buttonStore';

function ButtonDataEdit() {
  const [show, toggleShow] = useToggle(true);

  return (
    <nav className={`fixed top-4 right-0 bg-white border-(1 gray-200) shadow-lg p-4 transition-transform ${show ? '' : 'translate-x-100%'}`}>
      <button
        className="-translate-x-10 w-6 bg-white border-(1 gray-200 r-0) rounded-l-lg"
        type="button"
        onClick={toggleShow}
      >
        <i className="i-mdi-chevron-left text-2xl" />
      </button>
      <p>Text:</p>
      <O>{() => (
        <input
          className="border-(1 black) shadow rounded-lg px-1"
          value={buttonStore.text}
          onChange={(ev) => {
            buttonStore.text = ev.currentTarget.value;
          }}
        />
      )}
      </O>
    </nav>
  );
}

export default ButtonDataEdit;
