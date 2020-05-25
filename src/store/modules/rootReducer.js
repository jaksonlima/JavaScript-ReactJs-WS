import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import cadastroPedido from "./pedido/reducer";

export default combineReducers({ auth, user, cadastroPedido });
