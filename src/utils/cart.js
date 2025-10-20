export function calculateTotal(items = []) {
  return items.reduce((acc, item) => {
    const qty = item.qty ?? item.quantity ?? 1;
    const price = typeof item.price === 'number' ? item.price : 0;
    return acc + price * qty;
  }, 0);
}