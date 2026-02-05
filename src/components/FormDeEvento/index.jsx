import { TituloForm } from "../TituloForm";
import { CampoForm } from "../CampoForm";
import { LabelForm } from "../LabelForm";
import { InputForm } from "../InputForm";
import { BotaoForm } from "../Botao";
import "./form-evento.styles.css";

export function FormDeEvento() {
  return (
    <form className="form-evento">
      <TituloForm titulo="Preencha para criar um evento:" />
      <div className="campos">
        <CampoForm>
          <LabelForm htmlFor="nomeEvento">Qual o nome do evento?</LabelForm>
          <InputForm
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
          />
        </CampoForm>
        <CampoForm>
          <LabelForm htmlFor="dataEvento">Data do evento</LabelForm>
          <InputForm
            type="text"
            id="dataEvento"
            name="dataEvento"
            placeholder="XX/XX/XXXX"
          />
        </CampoForm>
      </div>
      <div className="botao">
        <BotaoForm />
      </div>
    </form>
  );
}
