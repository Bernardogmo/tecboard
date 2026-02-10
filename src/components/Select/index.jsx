import "./select.styles.css";

export function SelectForm() {
  return (
    <select className="selectForm">
      <option value="" className="optionSelect">
        Selecione o tema do evento
      </option>
      <option value="ia" className="optionSelect">
        IA
      </option>
      <option value="frontend" className="optionSelect">
        Front-end
      </option>
      <option value="backend" className="optionSelect">
        Backend
      </option>
      <option value="devops" className="optionSelect">
        Devops
      </option>
      <option value="dataScience" className="optionSelect">
        Data Science
      </option>
      <option value="cloud" className="optionSelect">
        Cloud
      </option>
    </select>
  );
}
// const options = [
//   { value: "", label: "" },
//   { value: "ia", label: "IA" },
//   { value: "frontend", label: "Front-end" },
//   { value: "backend", label: "Backend" },
//   { value: "devops", label: "Devops" },
//   { value: "dataScience", label: "Data Science" },
//   { value: "cloud", label: "Cloud" },
// ];
// export function SelectForm() {
//   return (
//     <select className="selectForm">
//       {options.map((option) => (
//         <option
//           key={option.value}
//           value={option.value}
//           className="optionSelect"
//         >
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// }
