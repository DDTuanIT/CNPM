import { Product } from "./Product";
export function ProductGrid({ tab, productDraffs, loadProductDraff }) {

  return (
    <div className="products-grid">
      {productDraffs.map((productDraff) => {
        if (tab === 1 && productDraff.status === "selling") {
          return (
            <Product key={productDraff.watch_id} productDraff={productDraff} />
          );
        } else if (tab === 2 && productDraff.status === "pending") {
          return (
            <Product key={productDraff.watch_id} productDraff={productDraff} />
          );
        } else if (tab === 3 && productDraff.status === "sold") {
          return (
            <Product key={productDraff.watch_id} productDraff={productDraff} />
          );
        } else if (tab === 4 && productDraff.status === "hidden") {
          return (
            <Product key={productDraff.watch_id} productDraff={productDraff} />
          );
        }
        else if (tab === 0) {
          return (
            <Product key={productDraff.watch_id} productDraff={productDraff} loadProductDraff={loadProductDraff} />
          );
        }
      })}
    </div>
  );
}
