import { produce } from "immer";

const INITIAL_STATE = {
  pedido: null,
};

export default function pedido(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@pedido/REQUEST_IN_SUCESS": {
        draft.pedido = action.payload;
        break;
      }
    }
  });
}
