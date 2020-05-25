import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";

import api from "../../../services/api";
import { Container } from "./styles";
import profile from "../../../assets/profile.png";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file",
      });
    }
  }, [ref, registerField]);

  async function handleOnChange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", e.target.files[0].name);

    const { id, url } = response;

    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={preview || profile}
          alt="profile"
          style={{ width: "70px", height: "70px" }}
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleOnChange}
        />
      </label>
    </Container>
  );
}
