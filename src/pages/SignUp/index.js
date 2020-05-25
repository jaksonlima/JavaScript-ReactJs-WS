import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signUpRequest } from "../../store/modules/auth/actions";
import logo from "../../assets/logo-purple.svg";

export default function SignUp() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatorio"),
    email: Yup.string()
      .email("Insira seu e-mail valido")
      .required("O e-mail é obrigatorio"),
    password: Yup.string()
      .min(6, "No minimo 6 caracteres")
      .required("A senha é obrigatoria"),
  });

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" style={{ width: "100px" }} />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Seu senha" />

        <button type="submit">Acessar</button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
