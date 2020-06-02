import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Notifications from "../Notifications/index";

import logoPurple from "../../assets/logo-purple.svg";
import { Container, Content, Profile } from "./styles";
import api from "../../services/api";
import profile from "../../assets/do-utilizador.svg";

export default function Header() {
  const [image, setImage] = useState("");

  const { id } = useSelector((state) => state.user.profile);

  useEffect(() => {
    async function handleImageUser() {
      const reponse = await api.get(`files/?id_user=${id}`);
      const { url_avatar } = reponse.data.find(
        (avatar) => avatar.id_user === id
      );

      setImage(url_avatar);
    }

    handleImageUser();
  }, [id]);

  return (
    <>
      <Container>
        <Content>
          <nav>
            <img src={logoPurple} alt="GoBarber" style={{ width: "50px" }} />
            <Link to="/deshboard">DESHBOARD</Link>
          </nav>

          <aside>
            <Notifications />

            <Profile>
              <div>
                <strong>Jakson Lima</strong>
                <Link to="/profile">Meu Perfil</Link>
              </div>
              <img src={profile === null ? image : profile} alt="imageFack" />
            </Profile>
          </aside>
        </Content>
      </Container>
    </>
  );
}
