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

export function pedidoStatePedidoSucess(pedido) {
  return {
    type: "@pedido/STATE_PEDIDO_SUCESS",
    payload: {
      ...pedido,
    },
  };
}

export function pedidoStateProdutoSucess(produto) {
  return {
    type: "@pedido/STATE_PRODUTO_SUCESS",
    payload: {
      ...produto,
    },
  };
}

export function pedidoStateProdutoRemove(idProduto) {
  return {
    type: "@pedido/STATE_PRODUTO_REMOVER",
    payload: {
      id: idProduto,
    },
  };
}

export function pedidoStateProdutoEditar(idProduto) {
  return {
    type: "@pedido/STATE_PRODUTO_EDITAR",
    payload: {
      id: idProduto,
    },
  };
}
