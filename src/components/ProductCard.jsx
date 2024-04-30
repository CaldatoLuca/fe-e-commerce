function ProductCard({ product }) {
  return (
    <div className="product-card mb-5">
      {/* image */}
      <img
        src="/jumbo.avif"
        alt={product.nome}
        className=" block img-fluid  object-contain mb-3"
      />

      {/* info */}
      <div className="text-lg font-bold">{product.nome}</div>
      <div>{product.tipo}</div>
      <div>{product.colore}</div>
      <div className="font-bold">{product.prezzo}$</div>
    </div>
  );
}

export default ProductCard;
