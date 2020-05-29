import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { handleFormatacaoMonetaria } from "../../utils/util";
import { Button } from "../../styles/button";
import { Container } from "./styles";
import { pedidoStateProdutoEditar } from "../../store/modules/pedido/actions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function TransitionsModal({ isView, idProduto }) {
  const [total, setTotal] = useState(Number);
  const [open, setOpen] = useState(false);
  const [produto, setProduto] = useState();

  const classes = useStyles();

  const dispatch = useDispatch();

  const produtos = useSelector(
    (state) => state.cadastroPedido.produtos,
    shallowEqual
  );

  useEffect(() => {
    setOpen(isView);
  }, [isView]);

  useEffect(() => {
    const produto = produtos.filter((pedido) => pedido.id === idProduto);

    if (produto !== null && produto.length > 0) {
      setProduto(produto[0]);
    }
  }, [produtos]);

  const handleClose = () => {
    setOpen(false);
  };

  const schema = Yup.object().shape({
    produto: Yup.string().required("Nome Produto é obrigatorio"),
    quantidade: Yup.string().required("Quantidade é obrigatorio"),
    preco: Yup.string().required("Preço é obrigatorio"),
  });

  function handleSubmit(produto) {
    console.log(produto);
    if (produto) {
      const calculoTotal = produto.preco * produto.quantidade;

      setTotal(calculoTotal);

      dispatch(
        pedidoStateProdutoEditar({
          ...produto,
          total: calculoTotal,
          id: Math.random(),
          statusPedido: true,
        })
      );

      toast.success("Item editado com sucesso.");
    }
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container>
            <Form
              schema={schema}
              initialData={{ ...produto }}
              onSubmit={handleSubmit}
            >
              <Input name="produto" placeholder="Produto" />
              <Input name="quantidade" type="number" placeholder="Quantidade" />
              <Input name="preco" type="number" placeholder="Preço" />
              <span style={{ color: "#4f4f4f" }}>
                Total: {handleFormatacaoMonetaria(total)}
              </span>

              <Button type="submit" color="#55c4e6">
                Cadastrar
              </Button>
            </Form>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}
