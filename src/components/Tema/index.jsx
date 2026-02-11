import "./tema.styles.css";

export function Tema({ temas }) {
  return <h3 className="titulo-tema">{temas.nome}</h3>;
}
