export function formatSheetName() {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `Sheet_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
    now.getDate()
  )}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
}

export function formatOrdersData(orders: any[]): any[][] {
  return orders.map(order => {
    const customer = order.customer
      ? `${order.customer.first_name} ${order.customer.last_name}`
      : "Desconocido";
    const items = order.line_items
      .map((item: any) => `${item.name} x ${item.quantity}`)
      .join(", ");
    return [
      order.id,
      customer,
      new Date(order.created_at).toLocaleString(),
      items,
      `$${order.total_price}`,
    ];
  });
}
