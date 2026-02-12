import "./select.styles.css";

export function SelectForm({ itens, ...rest }) {
  return (
    <select {...rest} className="selectForm" defaultValue="">
      <option className="optionSelect" value="" disabled>
        Selecione um opção
      </option>
      {itens.map((item) => (
        <option key={item.id} value={item.id} className="optionSelect">
          {item.nome}
        </option>
      ))}
    </select>
  );
}
