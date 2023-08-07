import styles from "./style.module.scss";

export const ProductCard = ({ product, addCart }) => {
  return (
    <li className={styles.listProducts}>
      <div className= {styles.imgCard}>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h3 className="title titleCard">{product.name}</h3>
        <span className="title subtitle ">{product.category}</span>
        <span className="title price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className="btn" onClick={() => addCart(product)}>
          Adicionar
        </button>
      </div>
    </li>
  );
};
