export function formatPrice(amount, currency = 'CLP') {
  if (typeof amount !== 'number') {
    throw new Error('Amount debe ser un número');
  }
  
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}