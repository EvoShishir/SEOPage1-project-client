import "./App.css";
import Column from "./components/Column/Column";

function App() {
  return (
    <div className="homepage">
      <Column heading="Incomplete" />
      <Column heading="To Do" />
      <Column heading="Doing" />
      <Column heading="Under Review" />
      <Column heading="Completed" />
    </div>
  );
}

export default App;
