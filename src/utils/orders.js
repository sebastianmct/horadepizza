export function generateOrderId() {
  // Formato: HP-<timestamp>-<4digitos>
  const ts = Date.now();
  const random4 = Math.floor(Math.random() * 9000) + 1000;
  return `HP-${ts}-${random4}`;
}