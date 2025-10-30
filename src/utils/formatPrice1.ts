export function formatPrice1(price1:number) {
  return Number(price1).toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  }
);
}