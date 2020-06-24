import React from "react";

export default function PaginaLivre() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem",
      }}
    >
      <h3>Esta é uma página livre</h3>
      <br />
      <p>Não requer login para ser acessada.</p>
    </div>
  );
}
