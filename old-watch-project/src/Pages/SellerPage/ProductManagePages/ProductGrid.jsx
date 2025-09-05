import { Product } from "./Product";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
export function ProductGrid({ tab, productDraffs, loadProductDraff }) {
  const { user } = useContext(UserContext);
  return (
    <div className="products-grids">
      {productDraffs.map((productDraff) => {
        if (productDraff.seller_id === user.user_id) {
          if (tab === 1 && productDraff.status === "selling") {
            return (
              <Product
                key={productDraff.watch_id}
                productDraff={productDraff}
              />
            );
          } else if (tab === 2 && productDraff.status === "pending") {
            return (
              <Product
                key={productDraff.watch_id}
                productDraff={productDraff}
              />
            );
          } else if (tab === 3 && productDraff.status === "sold") {
            return (
              <Product
                key={productDraff.watch_id}
                productDraff={productDraff}
              />
            );
          } else if (tab === 4 && productDraff.status === "hidden") {
            return (
              <Product
                key={productDraff.watch_id}
                productDraff={productDraff}
              />
            );
          } else if (tab === 0) {
            return (
              <Product
                key={productDraff.watch_id}
                productDraff={productDraff}
                loadProductDraff={loadProductDraff}
              />
            );
          }
        }
      })}
    </div>
  );
}
