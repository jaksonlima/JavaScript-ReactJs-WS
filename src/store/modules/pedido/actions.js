export function pedidoRequestInSucess(pedido) {
  return {
    type: "@pedido/REQUEST_IN_SUCESS",
    payload: {
      ...pedido,
    },
  };
}

export function pedidoRequestInRequest(pedido) {
  return {
    type: "@pedido/REQUEST_IN_PEDIDO",
    payload: {
      ...pedido,
    },
  };
}
