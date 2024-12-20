import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({ productList, addCart }) => {
  return (
    <section>
      <div className="container">
        <ul className={styles.listProducts}>
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} addCart={addCart} />
          ))}
        </ul>
      </div>
    </section>
  );
};
