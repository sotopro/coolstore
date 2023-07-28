export const sumTotal = (items) =>
  items.map((item) => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0);

export const formatCurrency = (value) => {
  return value.toLocaleString('us-US', {
    style: 'currency',
    currency: 'USD',
  });
};
