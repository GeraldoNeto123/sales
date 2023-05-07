export const { format: formatPrice } = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export const { format: formatDate } = new Intl.DateTimeFormat("pt-BR");

export const amountInCentsToMoney = (amountInCents: string): number => {
  return Number((Number(amountInCents) / 100).toFixed(2));
};
