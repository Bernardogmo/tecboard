import { TituloForm } from "../TituloForm";
import { CampoForm } from "../CampoForm";
import { LabelForm } from "../LabelForm";
import { InputForm } from "../InputForm";
import { BotaoForm } from "../Botao";
import { SelectForm } from "../Select";
import "./form-evento.styles.css";
export function FormDeEvento({ temas, onSubmit }) {
  function handleSubmit(formData) {
    console.log("Ta na hora de criar um novo evento!", formData);
    const novoEvento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("temaEvento");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("tituloEvento"),
    };
    onSubmit(novoEvento);
  }
  return (
    <form className="form-evento" action={handleSubmit}>
      <TituloForm titulo="Preencha para criar um evento:" />
      <div className="campos">
        <CampoForm>
          <LabelForm htmlFor="tituloEvento">Qual o nome do evento?</LabelForm>
          <InputForm
            type="text"
            id="tituloEvento"
            name="tituloEvento"
            placeholder="Summer dev hits"
          />
        </CampoForm>
        <CampoForm>
          <LabelForm htmlFor="capa">
            Qual o endereço da imagem de capa?
          </LabelForm>
          <InputForm
            type="text"
            id="capa"
            name="capa"
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </CampoForm>
        <CampoForm>
          <LabelForm htmlFor="dataEvento">Data do evento</LabelForm>
          <InputForm
            type="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="XX/XX/XXXX"
          />
        </CampoForm>
        <CampoForm>
          <LabelForm htmlFor="temaEvento">Tema do evento</LabelForm>
          <SelectForm id="temaEvento" name="temaEvento" itens={temas} />
        </CampoForm>
      </div>
      <div className="botao">
        <BotaoForm>Criar evento</BotaoForm>
      </div>
    </form>
  );
}
