export function pedidoRequestInSucess(pedido) {
  return {
    type: "@pedido/REQUEST_IN_SUCESS",
    payload: {
      ...pedido,
    },
  };
}
