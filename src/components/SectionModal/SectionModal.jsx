import { useState } from "react";
import "./style.css";

import Products from "./sectionsType/products";

const style = {
  sec_button: `w-[100%] p-2 mt-2 text-sky-900 border-solid border border-sky-700`,
  item: `bg-sky-100 p-2 mt-4 w-[100%]`,
};
// const newSections = [
//   {
//     id: 1,
//     name: "سيكشن منتجات",
//     image: "https://i.postimg.cc/g2HBXxcx/best-sellers.png",
//   },
//   {
//     id: 2,
//     name: "بنر",
//     image: "https://i.postimg.cc/65WNHx74/banner.png",
//   },
//   {
//     id: 3,
//     name: "معلومات عن المتجر",
//     image: "https://i.postimg.cc/t4BZRnmq/info-blocks.png",
//   },
//   {
//     id: 4,
//     name: "اقسام",
//     image: "https://i.postimg.cc/yNrjc9M8/category.png",
//   },
//   {
//     id: 5,
//     name: "سلايدر",
//     image: "https://i.postimg.cc/76GVVh4M/slider.png",
//   },
// ];
function SectionModal({ handleNewSections }) {
  const [openModal, setModal] = useState(false);
  const handleCloseButton = () => {
    setModal((current) => !current);
    handleNewSections();
  };

  return (
    <div>
      <button
        className={style.sec_button + " add_section"}
        onClick={() => {
          setModal(true);
        }}
      >
        أضف سيكشن
      </button>
      {openModal ? (
        <div className="modal">
          <div className="modal-content max-w-[900px]">
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
              <Products closeButton={handleCloseButton} />
              <button className={style.sec_button + " mt-4"}>
                <p>سيكشن مخصص</p>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SectionModal;
