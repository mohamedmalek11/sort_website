import { useState } from "react";
import "./style.css";

const style = {
  sec_button: `w-[100%] p-2 mt-2 text-sky-900 border-solid border border-sky-700`,
  item: `bg-sky-100 p-2 mt-4`,
};
const newSections = [
  {
    id: 1,
    name: "سيكشن منتجات",
    image: "https://i.postimg.cc/g2HBXxcx/best-sellers.png",
  },
  {
    id: 2,
    name: "بنر",
    image: "https://i.postimg.cc/65WNHx74/banner.png",
  },
  {
    id: 3,
    name: "معلومات عن المتجر",
    image: "https://i.postimg.cc/t4BZRnmq/info-blocks.png",
  },
  {
    id: 4,
    name: "اقسام",
    image: "https://i.postimg.cc/yNrjc9M8/category.png",
  },
  {
    id: 5,
    name: "سلايدر",
    image: "https://i.postimg.cc/76GVVh4M/slider.png",
  },
];
function Modal({ sections, handleNewSections }) {
  const [openModal, setModal] = useState(false);
  
  const addSection = (image, name) => {
    sections.push({
      id: sections.length + 1,
      name: name,
      image: image,
      chosen: false,
      selected: false,
    });
    // send new section to parent component
    handleNewSections(sections);
    // close popup
    setModal(false);
  };

  return (
    <>
      <button
        className={style.sec_button + " add_section"}
        onClick={() => {
          setModal(true);
        }}
      >
        أضف سيكشن
      </button>
      <div
        style={{ display: openModal === true ? "block" : "none" }}
        className="modal"
      >
        <div className="modal-content">
          <button
            className="close"
            onClick={() => {
              setModal(false);
            }}
          >
            ×
          </button>
          <p>اضف سيكشن ورتبه داخل الموقع</p>
          <div>
            {newSections.map((item) => {
              return (
                <button
                  onClick={() => {
                    addSection(item.image, item.name);
                  }}
                  key={item.id}
                  className={style.item}
                >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </button>
              );
            })}
            <button className={style.sec_button + " mt-4"}>
              <p>سيكشن مخصص</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
