import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeCart }) => {
  return (
    <li>
      <div className={styles.boxProducts}>
        <div>
          <img src={product.img} alt={product.name} />
          <h3 className="title titleCard">{product.name}</h3>
        </div>
        <button
          onClick={() => removeCart(product.id)}
          aria-label="delete"
          title="Remover item"
        >
          <MdDelete size={21} />
        </button>
      </div>
    </li>
  );
};
