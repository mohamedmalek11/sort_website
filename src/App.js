import "./App.css";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Modal from "./components/modal/modal";

const style = {
  page_title: `font-bold bg-sky-800 text-white p-4 text-2xl`,
  action_button: `w-[100%] bg-sky-600 p-2 mt-2 text-white font-bold`,
  item: `bg-sky-100 p-2 mt-2`,
};
function App() {
  const [state, setState] = useState([
    {
      id: 1,
      name: "سلايدر",
      image:
        "https://img.ltwebstatic.com/images3_ach/2023/03/06/16780934610e62b2eede76d496ebdb4b4eb3f7322f_thumbnail_1920x.webp",
    },
    {
      id: 2,
      name: "الأقسام",
      image:
        "https://img.ltwebstatic.com/images3_ach/2023/03/06/16780934610e62b2eede76d496ebdb4b4eb3f7322f_thumbnail_1920x.webp",
    },
    {
      id: 3,
      name: "الأكثر مبيعا",
      image:
        "https://img.ltwebstatic.com/images3_ach/2023/03/06/16780934610e62b2eede76d496ebdb4b4eb3f7322f_thumbnail_1920x.webp",
    },
    {
      id: 4,
      name: "بنر عرضي",
      image:
        "https://img.ltwebstatic.com/images3_ach/2023/03/06/16780934610e62b2eede76d496ebdb4b4eb3f7322f_thumbnail_1920x.webp",
    },
    {
      id: 5,
      name: "احدث المنتجات",
      image:
        "https://img.ltwebstatic.com/images3_ach/2023/03/06/16780934610e62b2eede76d496ebdb4b4eb3f7322f_thumbnail_1920x.webp",
    },
    {
      id: 6,
      name: "الماركات",
      image:
        "https://img.ltwebstatic.com/images3_ach/2023/03/06/16780934610e62b2eede76d496ebdb4b4eb3f7322f_thumbnail_1920x.webp",
    },
  ]);
  const sendButton = () => {
    let sections = [];
    state.map((item) => {
      return sections.push(item.name);
    });
    console.log(sections);
  };
  return (
    <div className="App">
      <header className={style.page_title}>
        <p>sort your Website</p>
      </header>
      <main>
        <div className="shadow-lg w-[80%] max-w-[500px] m-auto mt-[100px] p-[15px]">
          <p className="pb-2">Your Website Sections</p>
          <Modal />
          <ReactSortable animation={200} list={state} setList={setState}>
            {state.map((item) => (
              <div className={style.item} key={item.id}>
                <img src={item.image} alt="" />
                <p style={{direction:'rtl'}}>
                  <span>{item.id}</span> {item.name}
                </p>
              </div>
            ))}
          </ReactSortable>
          <div className="mt-4">
            <button className={style.action_button} onClick={() => {}}>
              أضف سيكشن
            </button>
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
