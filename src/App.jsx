import "./App.css";
import { Banner } from "./components/Banner";
import { FormDeEvento } from "./components/FormDeEvento";
import { Tema } from "./components/Tema";
import { CardEvento } from "./components/CardEvento";
//no react, componentes são

function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência artificial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  const evento = [
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
      descricao:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormDeEvento temas={temas} />
      {temas.map((tema) => (
        <section key={tema.id}>
          <Tema temas={tema} />
          <CardEvento evento={evento[0]} />
        </section>
      ))}
    </main>
  );
}

export default App;
