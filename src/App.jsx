import "./App.css";

//no react, componentes são

function FormDeEvento() {
  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="nome">
          Qual o nome do evento?
          <input type="text" id="nome" name="nome" />
        </label>
      </fieldset>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormDeEvento />
    </main>
  );
}

export default App;
