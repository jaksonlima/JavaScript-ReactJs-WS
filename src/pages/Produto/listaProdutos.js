import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import history from "../../services/history";

import { Container } from "./stylesListProdutos";
import { handleFormatacaoMonetaria } from "../../utils/util";
import {
  pedidoStateProdutoRemove,
  pedidoStateProdutoEditar,
} from "../../store/modules/pedido/actions";
import TransitionsModal from "../../components/Modal";
import { toast } from "react-toastify";

export default function CardProdutos() {
  const [viewModal, setViewModal] = useState(false);
  const [idProduto, setIdProduto] = useState();
  const [produtos, setProduto] = useState([]);

  const dispatch = useDispatch();

  const produts = useSelector(
    (state) => state.cadastroPedido.produtos,
    shallowEqual
  );

  useEffect(() => {
    setProduto(produts);
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

  function validaStatusPedido(idProduto) {
    const produto = produtos.filter((produto) => produto.id === idProduto);

    if (produto !== null && produto.statusPedido === false) {
      toast.error("Pedido com status fechado.");
      return false;
    }
    return true;
  }

  return (
    <>
      <Container>
        <header>
          <span>Seja Bem vindo</span>

          <button type="button" onClick={handleCadastroProduto}>
            Voltar
          </button>
        </header>

        <main>resumo</main>

        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
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
        </ul>

        {viewModal && (
          <TransitionsModal isView={viewModal} idProduto={idProduto} />
        )}
      </Container>
    </>
  );
}
