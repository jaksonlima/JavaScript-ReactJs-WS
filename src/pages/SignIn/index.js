import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "../../assets/logo-purple.svg";
import { signInRequest } from "../../store/modules/auth/actions";

export default function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Insira seu e-mail valido")
      .required("O e-mail é obrigatorio"),
    password: Yup.string().required("A senha é obrigatoria"),
  });

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" style={{ width: "100px" }} />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Seu senha" />

        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>

        <Link to="/register">Criar sua conta gratuita</Link>
      </Form>
    </>
  );
}
