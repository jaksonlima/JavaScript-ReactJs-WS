import { produce } from "immer";

const INITIAL_STATE = {
  pedido: null,
  produtos: [],
};

export default function pedido(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    // console.log(action);
    switch (action.type) {
      case "@pedido/REQUEST_IN_SUCESS": {
        // draft.pedido = { ...action.payload };
        // draft.produtos.push({ ...action.payload });
        break;
      }
      case "@pedido/STATE_PEDIDO_SUCESS": {
        draft.pedido = { ...action.payload };
        break;
      }
      case "@pedido/STATE_PRODUTO_SUCESS": {
        draft.produtos.push({ ...action.payload });
        break;
      }
      case "@pedido/STATE_PRODUTO_REMOVER": {
        draft.produtos.splice(
          draft.produtos.findIndex(
            (produto) => produto.id === action.payload.id
          ),
          1
        );
        break;
      }
    }
  });
}
