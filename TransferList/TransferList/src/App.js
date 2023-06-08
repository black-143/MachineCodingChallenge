import "./styles.css";
import { useState } from "react";
import { ItemList } from "./ItemList";

export default function App() {
  const [listA, setListA] = useState({
    React: false,
    Angular: false,
    Vue: false,
    Svelte: false
  });
  const [listB, setListB] = useState({
    HTML: false,
    CSS: false,
    JS: false,
    TypeScript: false
  });

  const hasNoSelectedItem = (list) => {
    for (let key in list) {
      if (list[key] === true) {
        return false;
      }
    }
    return true;
  };

  const transferCheckedItems = (from, setFrom, to, setTo) => {
    const trannsferFrom = { ...from },
      transferTo = { ...to };

    for (let key in trannsferFrom) {
      if (trannsferFrom[key] === true) {
        transferTo[key] = trannsferFrom[key];
        delete trannsferFrom[key];
      }
    }
    setTo(transferTo);
    setFrom(trannsferFrom);
  };
  return (
    <div>
      <div className="contaner">
        <div>
          <ItemList list={listA} setList={setListA} />
          <div className="buttons">
            <button
              disabled={Object.keys(listB).length === 0}
              onClick={() => {
                setListA({ ...listA, ...listB });
                setListB({});
              }}
            >
              {"<<"}
            </button>
            <button
              disabled={hasNoSelectedItem(listB)}
              onClick={transferCheckedItems(listB, setListB, listA, setListA)}
            >
              {"<"}
            </button>
            <button
              disabled={Object.keys(listA).length === 0}
              onClick={() => {
                setListA({});
                setListB({ ...listA, ...listB });
              }}
            >
              {">>"}
            </button>
            <button
              disabled={hasNoSelectedItem(listA)}
              onClick={transferCheckedItems(listA, setListA, listB, setListB)}
            >
              {">"}
            </button>
          </div>
          <ItemList list={listB} setList={setListB} />
        </div>
      </div>
    </div>
  );
}
