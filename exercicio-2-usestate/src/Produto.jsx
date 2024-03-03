const Produto = ({ produto }) => {
  console.log(produto);
  return (
    <div key={produto.id} className="produto">
      <h1>{produto.nome}</h1>
      <h2>R$ {produto.preco}</h2>
      <p>{produto.descricao}</p>
      <p>{!produto.vendido ? "Produto Vendido" : "Produto Disponivel"}</p>
      <img
        key={produto.fotos[0].title}
        src={produto.fotos[0].src}
        alt={produto.fotos[0].title}
      />
    </div>
  );
};

export default Produto;
