import React from "react";
import useFetch from "./custom_hooks/useFetch";
const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const { data, request, error, loading } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    await request("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  if (loading) return <h1>Enviando ...</h1>;
  if (data !== null) return <h1>Formulario Enviado</h1>;
  return (
    <>
      {error ? <h1>Erro</h1> : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={form.senha}
          onChange={handleChange}
          required
        />
        <label htmlFor="cep">Cep</label>
        <input
          type="number"
          id="cep"
          value={form.cep}
          onChange={handleChange}
          required
        />
        <label htmlFor="rua">Rua</label>
        <input
          type="text"
          id="rua"
          value={form.rua}
          onChange={handleChange}
          required
        />
        <label htmlFor="numero">Numero</label>
        <input
          type="number"
          id="numero"
          value={form.numero}
          onChange={handleChange}
          required
        />
        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
          required
        />
        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
          required
        />
        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          value={form.value}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default App;
