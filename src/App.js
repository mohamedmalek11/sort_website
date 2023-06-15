import "./App.css";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import SectionModal from "./components/SectionModal/SectionModal";
import data from "./websiteSections.json";
import axios from "axios";

const style = {
  page_title: `font-bold bg-sky-800 text-white p-4 text-2xl`,
  card_container: `shadow-lg w-[90%] max-w-[900px] m-auto mt-[50px] md:mt-[100px] p-[15px] bg-white`,
  action_button: `w-[100%] bg-sky-600 p-2 mt-2 text-white font-bold`,
  item: `bg-sky-100 p-2 mt-4`,
};
function App() {
  const [sections, setSections] = useState(data.sections);
  // adding new section from child component to main section array
  const NewSectionsCallback = () => {
    setSections(data.sections);
    data.sections = sections;
  };
  useEffect(() => {
  }, [sections]);
  const sendButton = () => {
    let finalData = [...sections];
    const apiKey = '5b4ad0cd50b6a6854f650aeaae6109e3';
const token = 'ATTA652ae069bb1e951be7bd35882f3b9f5ee9e6e61ffba569e1d47ef9dd65af0f9eA44FA1AE';
const boardId = '1t06Jy0E';

axios.post(`https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${token}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
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
          <ReactSortable list={sections} setList={setSections}>
            {sections.map((item) => (
              <div
                id={item.id}
                draggable={false}
                className={style.item + " sortableItem"}
                key={item.id}
              >
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
