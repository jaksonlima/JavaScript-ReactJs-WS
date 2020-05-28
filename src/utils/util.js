export function handleFormatacaoMonetaria(total) {
  return new Number(total).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
