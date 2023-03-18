import "./App.css";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Modal from "./components/modal/modal";

const style = {
  page_title: `font-bold bg-sky-800 text-white p-4 text-2xl`,
  card_container: `shadow-lg w-[90%] max-w-[900px] m-auto mt-[50px] md:mt-[100px] p-[15px] bg-white`,
  action_button: `w-[100%] bg-sky-600 p-2 mt-2 text-white font-bold`,
  item: `bg-sky-100 p-2 mt-4`,
};
const website_sections = [
  {
    id: 1,
    name: "سلايدر",
    image: "https://i.postimg.cc/76GVVh4M/slider.png",
  },
  {
    id: 2,
    name: "الأقسام",
    image: "https://i.postimg.cc/yNrjc9M8/category.png",
  },
  {
    id: 3,
    name: "الأكثر مبيعا",
    image: "https://i.postimg.cc/g2HBXxcx/best-sellers.png",
  },
  {
    id: 4,
    name: "بنر عرضي",
    image: "https://i.postimg.cc/65WNHx74/banner.png",
  },
  {
    id: 5,
    name: "احدث المنتجات",
    image: "https://i.postimg.cc/cJD9hPnZ/new-arrivals.png",
  },
  {
    id: 6,
    name: "اراء العملاء",
    image: "https://i.postimg.cc/zDQ7Vnnt/reviews.png",
  },
  {
    id: 7,
    name: "الماركات",
    image: "https://i.postimg.cc/pXnZ8pC2/brands.png",
  },
];
function App() {

  const [sections, setSections] = useState(website_sections);
// adding new section from child component to main section array
  const NewSectionsCallback = (newSections) => {
    setSections(newSections)
    console.log(newSections)
  }
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
            <Modal sections={website_sections} handleNewSections={NewSectionsCallback} />
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
