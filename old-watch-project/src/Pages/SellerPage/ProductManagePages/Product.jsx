import axios from "axios";
import { Link } from "react-router-dom";

export function Product({ productDraff, loadProductDraff }) {
  const handleDeleteButton = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:6868/api/watchDraff/${productDraff.watch_id}`
      );
      alert("Xóa thành công");
      loadProductDraff();
      response;
    } catch (e) {
      alert(`ERROR: ${e}`);
    }
  };
  return (
    <>
      <div className="product-card">
        <div className="product-image-container">
          <img
            src={productDraff.image}
            alt="Patek Philippe"
            className="product-image"
          />
          <div className="product-status status-sold">
            {productDraff.status === "sold"
              ? "đã bán"
              : productDraff.status === "selling"
              ? "đang bán"
              : productDraff.status === "pending"
              ? "Chờ duyệt"
              : "Đã ẩn"}
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-title">{productDraff.name}</h3>
          <p className="product-brand">{productDraff.brand}</p>
          <div className="product-price">
            {productDraff.price.toLocaleString("vi-VN")} VNĐ
          </div>
        </div>
        <div className="relation-button">
          <Link to="/EditProductPage" state={{productDraff}}>
            <button className="btn  back-button edit-button">Chỉnh sửa</button>
          </Link>

          <button
            className="btn back-button edit-button"
            onClick={handleDeleteButton}
          >
            Xóa
          </button>
        </div>
      </div>
    </>
  );
}
