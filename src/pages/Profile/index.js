import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";
import { updateProfileRequest } from "../../store/modules/user/actions";
import { signOut } from "../../store/modules/auth/actions";
import AvatarInput from "./AvatarInput/index";

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleSubmint(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmint}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input name="senhaAtual" type="password" placeholder="Senha Atual" />
        <Input name="novaSenha" type="password" placeholder="Nova Senha" />
        <Input
          name="confSenha"
          type="password"
          placeholder="Confirmação de Senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
