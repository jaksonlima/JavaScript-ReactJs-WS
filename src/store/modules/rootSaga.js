import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";
import cadastroPedido from "./pedido/sagas";

export default function* rootSaga() {
  return yield all([auth, user, cadastroPedido]);
}
