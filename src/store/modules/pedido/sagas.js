import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import { apiPort } from "../../../services/api";
import { pedidoRequestInSucess } from "./actions";

export function* requestIn({ payload }) {
  try {
    const { pedido, produtos } = payload;

    const reponse = yield call(apiPort("8080").put, "pedido", {
      ...pedido,
      pedidoItens: [...produtos].map((pedidoItem) => {
        return {
          ...pedidoItem,
          id: null,
        };
      }),
    });

    if (reponse && reponse.status === 201) {
      yield put(pedidoRequestInSucess(reponse.data));

      toast.success("Pedido gerado com sucesso.");
    }
  } catch (error) {
    toast.error("Falha no cadastro pedido, verifique seus dados.");
  }
}

export function* requestInState() {}

export default all([takeLatest("@pedido/REQUEST_IN_PEDIDO", requestIn)]);
