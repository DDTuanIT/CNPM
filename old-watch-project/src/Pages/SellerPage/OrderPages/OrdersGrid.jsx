import { Order } from "./Order";

export function OrdersGrid({ orders, watchs, loadData }) {
  return (
    <div className="orders-list">
      {orders.map((order) =>
        order.order_items.map((orderItems) => {
          const watch = watchs.find(
            (w) => w.watch_id === orderItems.watch.watch_id
          );
          if (!watch) return; 

          return (
            <Order
              key={`${order.order_id}-${orderItems.watch.watch_id}`} 
              order={order}
              orderItems={orderItems}
              loadData={loadData}
            />
          );
        })
      )}
    </div>
  );
}
