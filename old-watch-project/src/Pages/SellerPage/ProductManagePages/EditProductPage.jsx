import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";

import "../AddProductPage.css";
import axios from "axios";

export function EditProductPage() {
  const nameRef = useRef(null);
  const brandRef = useRef(null);
  const priceRef = useRef(null);
  const originRef = useRef(null);
  const modelRef = useRef(null);
  const conditionRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const yearRef = useRef(null);

  //
  const location = useLocation();
  const { productDraff } = location.state;

  const fileName = crypto.randomUUID();
  const [image, setImage] = useState(productDraff.image);

  const [stateHide, setStateHide] = useState(false);
  const handleCheckboxChange = () => {
    stateHide ? setStateHide(false) : setStateHide(true);
  };
  //
  const handleSaveButton = async (event) => {
    event.preventDefault();
    const nameData = nameRef.current.value || productDraff.name;
    const brandData = brandRef.current.value || productDraff.brand;
    const priceData = priceRef.current.value || productDraff.price;
    const originData = originRef.current.value || productDraff.origin;
    const modeldata = modelRef.current.value || productDraff.model;
    const conditionData = conditionRef.current.value || productDraff.condition;
    const descriptionData =
      descriptionRef.current.value || productDraff.description;
    const yearData = yearRef.current.value || productDraff.produce_at;
    const imageData = image || productDraff.image;
    const stateData = stateHide ? "hided" : "selling";
    if (
      !nameData ||
      !brandData ||
      !priceData ||
      !originData ||
      !modeldata ||
      !conditionData ||
      !descriptionData ||
      !yearData ||
      !imageData
    ) {
      alert("Please fill all information");
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:6868/api/watchDraff/${productDraff.watch_id}`,
        {
          name: nameData,
          brand: brandData,
          price: priceData,
          origin: originData,
          model: modeldata,
          produce_at: yearData,
          status: stateData,
          image: imageData,
          description: descriptionData,
          condition: conditionData,
        }
      );
      alert("Chỉnh sửa thông tin thành công");
      response;
    } catch (e) {
      alert(`ERROR: ${e}`);
    }
  };
  const handleXButton = () => {
    setImage(null);
  };
  const handleImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "WebStore");
    data.append("cloud_name", "dlizuuhjc");
    data.append("public_id", fileName);

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dlizuuhjc/image/upload",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    const imgUrl = response.data.secure_url;
    setImage(imgUrl);
  };

  return (
    <>
      <div id="add-product-page">
        <div className="container">
          <div className="page-header">
            <div>
              <Link to="/ProductManagePage">
                <button className="btn btns-outline back-button">
                  ← Quay lại Dashboard
                </button>
              </Link>

              <h1 className="page-title">
                Chỉnh sửa thông tin sản phẩm đăng bán
              </h1>
              <p className="page-subtitle">
                Đăng sản phẩm đồng hồ vintage của bạn
              </p>
            </div>
          </div>

          <form className="product-form">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Thông tin cơ bản</h3>
              </div>
              <div className="card-content">
                <div className="form-group">
                  <label className="form-label">Tên sản phẩm </label>
                  <input
                    ref={nameRef}
                    type="text"
                    className="form-input"
                    required
                    placeholder={productDraff.name}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Thương hiệu </label>
                  <input
                    ref={brandRef}
                    type="text"
                    className="form-input"
                    required
                    placeholder={productDraff.brand}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Giá bán (VNĐ) </label>
                  <input
                    ref={priceRef}
                    type="number"
                    className="form-input"
                    placeholder={productDraff.price.toLocaleString("vi-VN")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Xuất xứ </label>
                  <input
                    ref={originRef}
                    type="text"
                    className="form-input"
                    required
                    placeholder={productDraff.origin}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Loại đồng hồ </label>
                  <input
                    ref={modelRef}
                    type="text"
                    className="form-input"
                    required
                    placeholder={productDraff.model}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tình trạng </label>
                  <input
                    ref={conditionRef}
                    type="text"
                    className="form-input"
                    required
                    placeholder={productDraff.condition}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Thời điểm sản xuất (ước lượng){" "}
                  </label>
                  <input
                    ref={yearRef}
                    type="date"
                    className="form-input"
                    required
                    defaultValue={productDraff.produce_at}
                  />
                </div>
                <div className="form-group">
                  <div className="form-options">
                    <div className="form-label">Ẩn sản phẩm</div>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={stateHide}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Mô tả sản phẩm</h3>
              </div>
              <div className="card-content">
                <div className="upload-area">
                  <div className="drop-area">
                    <textarea
                      ref={descriptionRef}
                      id="description"
                      placeholder={productDraff.description}
                    ></textarea>
                  </div>
                </div>
                <div className="image-preview"></div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Hình ảnh sản phẩm</h3>
              </div>
              <div className="card-content">
                <div className="upload-area">
                  {image ? (
                    <div className="image-preview">
                      <img src={image} alt="" />
                      <button
                        type="button"
                        className="x-button"
                        onClick={handleXButton}
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <div
                      className="upload-zone"
                      onClick={() => imageRef.current.click()}
                    >
                      <div className="upload-icon">📷</div>
                      <h4>Kéo thả hoặc click để tải ảnh</h4>
                      <input
                        ref={imageRef}
                        type="file"
                        className="upload-input"
                        multiple
                        accept="image/*"
                        onChange={handleImage}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-actions form-bottom">
              <Link to="/ProductManagePage" className="btn btns-outline">
                <button type="button">Hủy</button>
              </Link>

              <button
                type="submit"
                className="btn btns-success btns-outline"
                onClick={handleSaveButton}
              >
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
