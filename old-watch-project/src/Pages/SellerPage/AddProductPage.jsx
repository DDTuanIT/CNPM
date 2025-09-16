import { Link } from "react-router-dom";
import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import "./AddProductPage.css";
import axios from "axios";

export function AddProductPage() {
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
  const { user } = useContext(UserContext);
    const nav = useNavigate();
    useEffect(() => {
      if (!user) nav("/LoginPage");
    });
  const [image, setImage] = useState(null);
  const fileName = crypto.randomUUID();
  const handleSubmitButton = async (event) => {
    event.preventDefault();
    const nameData = nameRef.current.value;
    const brandData = brandRef.current.value;
    const priceData = priceRef.current.value;
    const originData = originRef.current.value;
    const modeldata = modelRef.current.value;
    const conditionData = conditionRef.current.value;
    const descriptionData = descriptionRef.current.value;
    const yearData = yearRef.current.value;
    if (
      !nameData ||
      !brandData ||
      !priceData ||
      !originData ||
      !modeldata ||
      !conditionData ||
      !descriptionData ||
      !yearData
    ) {
      alert("Please fill all information");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:6868/api/watchDraff",
        {
          watch_id: fileName,
          seller_id: user.user_id,
          name: nameData,
          brand: brandData,
          price: priceData,
          origin: originData,
          model: modeldata,
          produce_at: yearData,
          status: "pending",
          image: image,
          description: descriptionData,
          condition: conditionData,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      alert("Thêm sản phẩm thành công");
      response;
    } catch (err) {
      alert(`Thêm sản phẩm thất bại ${err}`);
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
              <Link to="/SellerDashBoard">
                <button className="btns btns-outline back-button">
                  ← Quay lại Dashboard
                </button>
              </Link>

              <h1 className="page-title">Thêm sản phẩm mới</h1>
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
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Thương hiệu </label>
                  <input
                    ref={brandRef}
                    type="text"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Giá bán (VNĐ) </label>
                  <input
                    ref={priceRef}
                    type="number"
                    className="form-input"
                    placeholder="VNĐ"
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
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Loại đồng hồ </label>
                  <input
                    ref={modelRef}
                    type="text"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tình trạng </label>
                  <input
                    ref={conditionRef}
                    type="text"
                    className="form-input"
                    required
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
                  />
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
                      placeholder="Nhập mô tả ở đây..."
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
              <Link to="/SellerDashBoard" className="btns btns-outline">
                <button type="button">Hủy</button>
              </Link>

              <button
                type="submit"
                className="btns btn-success btns-outline"
                onClick={handleSubmitButton}
              >
                📝 Đăng sản phẩm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
