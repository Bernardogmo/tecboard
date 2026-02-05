import "./App.css";
import { FormDeEvento } from "./components/FormDeEvento";
//no react, componentes são

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
