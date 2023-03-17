import "./App.css";
import Sortable, { MultiDrag, Swap } from "sortablejs";

function App() {
  console.log(MultiDrag)
  return (
    <div className="App">
      <header className="font-bold bg-sky-500 text-white">
        <p>sort your webstie</p>
      </header>
      <main>
        <div className="shadow-lg w-[500px] m-auto mt-[100px] p-[15px]">
          <p>asdasd</p>
          <ul id="items">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
