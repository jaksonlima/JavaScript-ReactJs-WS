import React, { useEffect, useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Container } from "./styles";
import { Button } from "../../styles/button";
import history from "../../services/history";
import {
  pedidoStateProdutoSucess,
  pedidoRequestInRequest,
} from "../../store/modules/pedido/actions";
import { handleFormatacaoMonetaria } from "../../utils/util";

export default function Produto() {
  const [total, setTotal] = useState(Number);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    produto: Yup.string().required("Nome Produto é obrigatorio"),
    quantidade: Yup.string().required("Quantidade é obrigatorio"),
    preco: Yup.string().required("Preço é obrigatorio"),
  });

  function handleSubmit(produto) {
    if (produto) {
      const calculoTotal = produto.preco * produto.quantidade;

      setTotal(calculoTotal);

      dispatch(
        pedidoStateProdutoSucess({
          ...produto,
          total: calculoTotal,
          id: Math.random(),
          statusPedido: true,
        })
      );

      toast.success("Item adicionado ao carrinho com sucesso.");
    }
  }

  const cadastroPedido = useSelector((state) => state.cadastroPedido);

  function handleFinalizaPedido() {
    if (cadastroPedido === null || cadastroPedido.produtos.length === 0) {
      toast.error("Cadastro pedido é obrigatorio.");
      return;
    }
    dispatch(pedidoRequestInRequest(cadastroPedido));
  }

  function handleCadastroProduto() {
    history.push("/cadastro");
  }

  function handleProdutos() {
    history.push("/carinho");
  }

  return (
    <Container>
      <header>
        <span>Adicionar Produto Carrinho</span>

        <button type="button" onClick={handleCadastroProduto}>
          Voltar
        </button>
      </header>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="produto" placeholder="Produto" />
        <Input name="quantidade" type="number" placeholder="Quantidade" />
        <Input name="preco" type="number" placeholder="Preço" />
        <span style={{ color: "#ebd634" }}>
          Total: {handleFormatacaoMonetaria(total)}
        </span>

        <Button type="submit" color="#3b9eff">
          Cadastrar
        </Button>
      </Form>
      <Button type="button" color="#2ed961" onClick={handleFinalizaPedido}>
        Finalizar
      </Button>
      <Button type="button" color="#2ed961" onClick={handleProdutos}>
        Meu Carrinho
      </Button>
    </Container>
  );
}
