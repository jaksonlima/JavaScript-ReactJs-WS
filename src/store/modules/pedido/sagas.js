import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import { apiPort } from "../../../services/api";
import { pedidoRequestInSucess } from "./actions";

export function* requestInSucess({ payload: pedido }) {
  try {
    const reponse = yield call(apiPort("8080").put, "pedido", { ...pedido });

    if (reponse && reponse.status === 201) {
      yield put(pedidoRequestInSucess(reponse.data));

      toast.success("Pedido gerado com sucesso.");
    }
  } catch (error) {
    toast.error("Falha no cadastro pedido, verifique seus dados.");
  }
}

export default all([takeLatest("@pedido/REQUEST_IN_PEDIDO", requestInSucess)]);
