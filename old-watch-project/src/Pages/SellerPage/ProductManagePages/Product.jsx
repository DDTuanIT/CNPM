import axios from "axios";

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
          <div className="product-actions">
            <button className="action-btn" title="Xem chi tiết">
              👁️
            </button>
            <button
              className="action-btn"
              title="Xóa sản phẩm"
              onClick={handleDeleteButton}
            >
              <img
                className="delete-img"
                src="../../../../public/delete-icon.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-title">{productDraff.name}</h3>
          <p className="product-brand">{productDraff.brand}</p>
          <div className="product-price">
            {productDraff.price.toLocaleString("vi-VN")} VNĐ
          </div>
        </div>
      </div>
    </>
  );
}
