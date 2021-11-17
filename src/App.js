import "./App.scss";
import Header from "./header/Header";
import DraggableContainer from "./body/DraggableContainer";

function App() {
  return (
    <div className="app">
      <Header />
      <DraggableContainer>
        <div className="drag__item" />
      </DraggableContainer>
    </div>
  );
}

export default App;
