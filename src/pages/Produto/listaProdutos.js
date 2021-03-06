import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { toast } from "react-toastify";

import { Container, ContainerGrid, Header, Grid } from "./stylesListProdutos";
import { handleFormatacaoMonetaria } from "../../utils/util";
import {
  pedidoStateProdutoRemove,
  pedidoRequestInRequest,
} from "../../store/modules/pedido/actions";
import TransitionsModal from "../../components/Modal";
import history from "../../services/history";

export default function CardProdutos() {
  const [viewModal, setViewModal] = useState(false);
  const [idProduto, setIdProduto] = useState();
  const [produtos, setProduto] = useState([]);

  const dispatch = useDispatch();

  const usuario = useSelector((state) => state.user.profile, shallowEqual);

  const cadastroPedido = useSelector(
    (state) => state.cadastroPedido,
    shallowEqual
  );

  const produts = useSelector(
    (state) => state.cadastroPedido.produtos,
    shallowEqual
  );

  useEffect(() => {
    setProduto(produts);
    setViewModal(false);
  }, [produts]);

  function handleCadastroProduto() {
    history.push("/produto");
  }

  function handleRemoverProduto(idProduto) {
    const validaStatus = validaStatusPedido(idProduto);
    if (validaStatus) {
      dispatch(pedidoStateProdutoRemove(idProduto));
    }
  }

  function handleEditarProduto(idProduto) {
    const validaStatus = validaStatusPedido(idProduto);

    setViewModal(validaStatus);
    setIdProduto(idProduto);
  }

  function handlViewModal() {
    setViewModal(false);
  }

  function validaStatusPedido(idProduto) {
    const produto = produtos.filter((produto) => produto.id === idProduto);

    if (produto !== null && produto.statusPedido === false) {
      toast.error("Pedido com status fechado.");
      return false;
    }
    return true;
  }

  function handleTotalProdutos() {
    if (produtos.length > 0) {
      const totalProduto = produtos
        .map((produto) => produto.total)
        .reduce((totalCount, total) => totalCount + total);

      return handleFormatacaoMonetaria(totalProduto);
    }
    return 0;
  }

  function handleTotalItems() {
    if (produtos.length > 0) {
      return produtos
        .map((produto) => produto.quantidade)
        .reduce((totalCount, quantidade) => totalCount + quantidade);
    }
    return 0;
  }

  function handleFinalizaPedido() {
    if (cadastroPedido === null || cadastroPedido.produtos.length === 0) {
      toast.error("Cadastro pedido é obrigatorio.");
      return;
    }
    dispatch(pedidoRequestInRequest(cadastroPedido));
  }

  return (
    <>
      <Container>
        <Header>
          <span>CHECKOUT</span>

          <div>
            <button
              type="button"
              color="#2ed961"
              onClick={handleFinalizaPedido}
            >
              Finalizar
            </button>
            <button type="button" onClick={handleCadastroProduto}>
              Voltar
            </button>
          </div>
        </Header>
        <ContainerGrid>
          <main>
            <strong>Resumo Pedido:</strong>

            <strong>Usuário</strong>
            <p>{usuario.name}</p>

            <strong>Total do pedido:</strong>
            <p>{handleTotalProdutos()}</p>

            <strong>Quantidade de produtos:</strong>
            <p>{produtos.length}</p>

            <strong>Quantidade Itens:</strong>
            <p>{handleTotalItems()}</p>

            {cadastroPedido.pedido && (
              <>
                <strong>Situação:</strong>
                <p>{cadastroPedido.pedido?.status ? "Aberto" : "Fechado"}</p>

                <strong>Razão social:</strong>
                <p>{cadastroPedido.pedido?.razaoSocial}</p>

                <strong>CNPJ:</strong>
                <p>{cadastroPedido.pedido?.cnpj}</p>

                <strong>Numero Pedido:</strong>
                <p>{cadastroPedido.pedido?.id}</p>

                <strong>Data:</strong>
                <p>{cadastroPedido.pedido?.dhCriacao}</p>
              </>
            )}
          </main>

          <Grid>
            {produtos.map((produto, key) => (
              <li key={key}>
                <strong>Produto:</strong>
                <p>{produto.produto}</p>

                <strong>Quantidade:</strong>
                <p>{produto.quantidade}</p>

                <strong>Valor Unitario:</strong>
                <p>{handleFormatacaoMonetaria(produto.preco)}</p>

                <strong>Valor Total:</strong>
                <p>{handleFormatacaoMonetaria(produto.total)}</p>

                <button
                  type="button"
                  onClick={() => handleRemoverProduto(produto.id)}
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>

                <button
                  type="button"
                  className="button2"
                  onClick={() => handleEditarProduto(produto.id)}
                >
                  <AiOutlineEdit size={20} color="#a8a8b3" />
                </button>
              </li>
            ))}
          </Grid>

          {viewModal && (
            <TransitionsModal
              isView={viewModal}
              callViewModal={handlViewModal}
              idProduto={idProduto}
            />
          )}
        </ContainerGrid>
      </Container>
    </>
  );
}
