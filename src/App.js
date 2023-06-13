import "./App.css";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import SectionModal from "./components/SectionModal/SectionModal";
import data from "./websiteSections.json";

const style = {
  page_title: `font-bold bg-sky-800 text-white p-4 text-2xl`,
  card_container: `shadow-lg w-[90%] max-w-[900px] m-auto mt-[50px] md:mt-[100px] p-[15px] bg-white`,
  action_button: `w-[100%] bg-sky-600 p-2 mt-2 text-white font-bold`,
  item: `bg-sky-100 p-2 mt-4`,
};
function App() {
  const [sections, setSections] = useState(data.sections);
  // adding new section from child component to main section array
  const NewSectionsCallback = (newSections) => {
    setSections(newSections);
    console.log(newSections);
  };
  const sendButton = () => {
    let finalData = [];
    sections.map((item) => {
      return finalData.push(item.name);
    });
    console.log(finalData);
  };
  return (
    <div className="App bg-[#fafafa]">
      <header className={style.page_title}>
        <p>sort your Website</p>
      </header>
      <main>
        <div className={style.card_container}>
          <p className="pb-2">Your Website Sections</p>
          <div className={style.item}>
            <img
              src="https://i.postimg.cc/8c7bZ5Vm/header.png"
              alt="صورة الهيدر"
              className="w-[100%]"
            />
            <p>هيدر</p>
          </div>
          <ReactSortable animation={200} list={sections} setList={setSections}>
            {sections.map((item) => (
              <div draggable={false} className={style.item} key={item.id}>
                <img
                  src={item.image}
                  alt={"صورة " + item.name}
                  className="w-[100%]"
                />
                <p>{item.name}</p>
              </div>
            ))}
          </ReactSortable>
          {/* <div className={style.item}>
            <img
              src="https://i.postimg.cc/65nYG86d/footer.png"
              alt="صورة الفوتر"
              className="w-[100%]"
            />
            <p>فوتر</p>
          </div> */}
          <div className="mt-4">
            <SectionModal handleNewSections={NewSectionsCallback} />
            <button className={style.action_button} onClick={sendButton}>
              ارسال
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
