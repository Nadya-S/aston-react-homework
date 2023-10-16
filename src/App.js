import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const frameworkList = ["vue", "angular", "ember", "meteor", "aurelia"];
  return (
    <div className="App">
      <Form />
      <List list={frameworkList} />
    </div>
  );
}

export default App;
