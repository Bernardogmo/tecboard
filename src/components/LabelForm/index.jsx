import "./label.styles.css";

export function LabelForm({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
}
