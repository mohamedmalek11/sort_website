import { useState } from "react";
import data from "../../../websiteSections.json";
import "../style.css";

function Products({ closeButton }) {
  const [openModal, setModal] = useState(false);
  const [productType, setProductType] = useState("الأكثر مبيعا");
  const [productNum, setProductNum] = useState(8);
  const [productSectionName, setProductSectionName] = useState("");
  const [customProduct, setCustomProduct] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProductsSection = {
      id: data.sections.length + 1,
      name: productSectionName,
      image: "https://i.postimg.cc/cJD9hPnZ/new-arrivals.png",
      chosen: false,
      selected: false,
      productType: productType,
      productNum: productNum,
    };
    data.sections.push(newProductsSection);
    console.log(data.sections);
    handleCloseButton();
    closeButton();
  };
  const returnToDefault = () => {
    setProductType("الأكثر مبيعا");
    setProductNum(8);
    setProductSectionName("");
    setCustomProduct("");
  };
  const handleCloseButton = () => {
    setModal((current) => !current);
    returnToDefault();
  };
  return (
    <div>
      <button onClick={handleCloseButton} className="item">
        <img
          src="https://i.postimg.cc/g2HBXxcx/best-sellers.png"
          alt=""
          className="w-[100%]"
        />
        <p>سيكشن منتجات</p>
      </button>
      {openModal ? (
        <div className="modal">
          <div className="modal-content max-w-[900px]">
            <button className="close" onClick={handleCloseButton}>
              ×
            </button>
            <p>اختر تفاصيل سيكشن المنتجات</p>
            <div>
              <form className="form" onSubmit={handleSubmit}>
                <p className="mt-4">اختر نوع السيكشن</p>
                {/* products type section */}
                <div className="product-type">
                  <div
                    onClick={() => {
                      setProductType("الأكثر مبيعا");
                    }}
                  >
                    <input
                      type="radio"
                      id="bestsellers"
                      name="products"
                      value={productType}
                      defaultChecked={productType === "الأكثر مبيعا"}
                    />
                    <label className="p-2" htmlFor="bestsellers">
                      الأكثر مبيعا
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      setProductType("احدث المنتجات");
                    }}
                  >
                    <input
                      type="radio"
                      id="newProducts"
                      name="products"
                      value={productType}
                      defaultChecked={productType === "احدث المنتجات"}
                    />
                    <label className="p-2" htmlFor="newProducts">
                      احدث المنتجات
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      setProductType("الأكثر مشاهدة");
                    }}
                  >
                    <input
                      type="radio"
                      id="mostWatched"
                      name="products"
                      value={productType}
                      defaultChecked={productType === "الأكثر مشاهدة"}
                    />
                    <label className="p-2" htmlFor="mostWatched">
                      الأكثر مشاهدة
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      setProductType("منتجات خاصة");
                    }}
                  >
                    <input
                      type="radio"
                      id="customProducts"
                      name="products"
                      value={productType}
                      defaultChecked={productType === "منتجات خاصة"}
                    />
                    <label className="p-2" htmlFor="customProducts">
                      منتجات خاصة
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      setProductType("تخصيص متقدم");
                    }}
                  >
                    <input
                      type="radio"
                      id="advancedProducts"
                      name="products"
                      value={productType}
                      defaultChecked={productType === "تخصيص متقدم"}
                    />
                    <label className="p-2" htmlFor="advancedProducts">
                      تخصيص متقدم
                    </label>
                  </div>
                </div>
                {/* section details section */}
                <p className="mt-4">اختر تفاصيل السيكشن</p>
                <div className="flex-center">
                  <div>
                    <div className="flex-wrap gap-10">
                      <label htmlFor="productSectionName">اسم السيكشن:</label>
                      <input
                        type="text"
                        id="productSectionName"
                        defaultValue={productSectionName}
                        placeholder="مثال: منتجات جديدة"
                        required
                        onChange={(e) => {
                          setProductSectionName(e.target.value);
                        }}
                      />
                      <label htmlFor="productNumber">
                        عدد المنتجات :(أقصى عدد 20 منتج)
                      </label>
                      <input
                        id="productNumber"
                        type="number"
                        min={1}
                        max={20}
                        defaultValue={productNum}
                        required
                        onChange={(e) => {
                          setProductNum(e.target.value);
                        }}
                      />
                    </div>
                    {/* custom product section */}
                    {productType === "منتجات خاصة" ? (
                      <div className="mt-4">
                        <p>اسماء المنتجات</p>
                        <textarea
                          placeholder="منتج تجريبي 1 , منتج تجريبي 2"
                          required={true}
                          id="productsName"
                          rows="4"
                          defaultValue={customProduct}
                          onChange={(e) => {
                            setCustomProduct(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    ) : null}
                    {/* Advanced product section */}
                    {productType === "تخصيص متقدم" ? (
                      <div className="mt-4" style={{ maxWidth: "750px" }}>
                        <p style={{ color: "#ff0000", marginBottom: "10px" }}>
                          هذه البيانات اختيارية يمكنك تحديد المطلوب منها
                        </p>
                        <div className="flex-wrap gap-10">
                          <div>
                            <label htmlFor="categoryName">اسم القسم:</label>
                            <input
                              type="text"
                              placeholder="قسم العطور"
                              id="categoryName"
                              defaultValue={""}
                              onChange={(e) => {}}
                            ></input>
                          </div>
                          <div>
                            <label htmlFor="brandName">اسم البراند:</label>
                            <input
                              type="text"
                              placeholder="شانيل"
                              id="brandName"
                              defaultValue={""}
                              onChange={(e) => {}}
                            ></input>
                          </div>
                          <div>
                            <label htmlFor="hasDiscount">يحتوي على خصم</label>
                            <input
                              type="number"
                              id="hasDiscount"
                              placeholder="10%"
                              min="0"
                              max="100"
                              defaultValue={""}
                              onChange={(e) => {}}
                            ></input>
                          </div>
                          <div>
                            <label htmlFor="hasDiscount">أعلى سعر:</label>
                            <input
                              type="number"
                              id="hasDiscount"
                              min="0"
                              max=""
                              defaultValue={""}
                              onChange={(e) => {}}
                            ></input>
                          </div>
                          <div>
                            <label htmlFor="hasDiscount">أقل سعر:</label>
                            <input
                              type="number"
                              id="hasDiscount"
                              min="0"
                              max=""
                              defaultValue={""}
                              onChange={(e) => {}}
                            ></input>
                          </div>
                          <div>
                            <label htmlFor="hasDiscount">أقل كمية:</label>
                            <input
                              type="number"
                              id="hasDiscount"
                              min="0"
                              max=""
                              defaultValue={""}
                              onChange={(e) => {}}
                            ></input>
                          </div>
                          <div>
                            <label htmlFor="hasDiscount"> أعلى كمية:</label>
                            <input
                              type="number"
                              id="hasDiscount"
                              min="0"
                              max=""
                              defaultValue={""}
                              onChange={(e) => {}}
                            ></input>
                          </div>
                        </div>
                        <div className="flex-wrap mt-2 gap-10">
                          <div>
                            <label htmlFor="fff">اسم البراند:</label>
                            <input
                              type="text"
                              placeholder="شانيل"
                              id="fff"
                              defaultValue={""}
                              onChange={(e) => {}}
                            ></input>
                          </div>
                          <div>
                            <label for="cars">Choose a car:</label>
                            <select id="cars" name="cars">
                              <option defaultValue="volvo">Volvo</option>
                              <option defaultValue="saab">Saab</option>
                              <option defaultValue="fiat" selected>
                                Fiat
                              </option>
                              <option defaultValue="audi">Audi</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={productSectionName === "" ? true : false}
                  onClick={handleSubmit}
                >
                  حفظ
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Products;
