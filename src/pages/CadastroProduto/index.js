import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Container } from "./styles";
import { pedidoStatePedidoSucess } from "../../store/modules/pedido/actions";
import history from "../../services/history";

export default function CadastroProduto() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    razaoSocial: Yup.string().required("Razão Social é obrigatorio"),
    cnpj: Yup.string()
      .matches(
        "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})",
        "Insira um CNPJ valido"
      )
      .required("CNPJ é obrigatorio"),
    telefone: Yup.string().required("Telefone é obrigatorio"),
    email: Yup.string()
      .email("Insira seu e-mail valido")
      .required("E-mail é obrigatorio"),
  });

  function handleSubmit(props) {
    if (props) {
      dispatch(pedidoStatePedidoSucess(props));
      toast.success("Cadastro pedido realizado com sucesso");
    }
  }

  function handleProduto() {
    history.push("/produto");
  }

  return (
    <Container>
      <div>
        <h1>Solicitação pedido e-commerce</h1>
      </div>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="razaoSocial" placeholder="Razão Social" />
        <Input name="cnpj" placeholder="CNPJ 00.0000.000/0000-00" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="telefone" placeholder="Telefone" />

        <button type="submit">Cadastrar</button>
      </Form>

      <button type="button" onClick={handleProduto}>
        Adicionar produto
      </button>
    </Container>
  );
}
