import './ButtonNotPressed.scss'

export default function ButtonNotPressed({ children }) {
  return (
    <button type="button" className="button button-not-pressed">
      {children}
    </button>
  );
}