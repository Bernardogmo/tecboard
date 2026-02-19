import "./App.css";
import { Banner } from "./components/Banner";
import { FormDeEvento } from "./components/FormDeEvento";
import { Tema } from "./components/Tema";
import { CardEvento } from "./components/CardEvento";
import { useState, useEffect } from "react";
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

  const [eventos, setEventos] = useState(() => {
    const eventosArmazenados = localStorage.getItem("eventos");
    if (eventosArmazenados) {
      const eventos = JSON.parse(eventosArmazenados);
      // Reconecta os temas e converte datas
      return eventos.map((evento) => ({
        ...evento,
        data: new Date(evento.data),
        tema: temas.find((t) => t.id === evento.tema.id) || evento.tema,
      }));
    }
    return [
      {
        capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
        tema: temas[0],
        data: new Date(),
        titulo: "Mulheres no Front",
        descricao:
          "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
      },
    ];
  });

  // Salva os eventos no localStorage sempre que mudam
  useEffect(() => {
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }, [eventos]);

  function addEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormDeEvento temas={temas} onSubmit={addEvento} />
      <section className="conteiner">
        {temas.map((tema) => {
          if (eventos.some((evento) => evento.tema.id === tema.id)) {
            return (
              <section key={tema.id}>
                <Tema temas={tema} />
                <div className="eventos">
                  {eventos
                    .filter((evento) => evento.tema.id === tema.id)
                    .map((eventos, index) => (
                      <CardEvento evento={eventos} key={index} />
                    ))}
                </div>
              </section>
            );
          }
          return null;
        })}
      </section>
    </main>
  );
}

export default App;
