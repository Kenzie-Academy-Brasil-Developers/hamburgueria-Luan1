import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeCart, setIsVisible,  removeAllCarts }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.overlayBox} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2>Carrinho de compras</h2>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>

        <ul>
          {cartList.map((product) => (
            <CartItemCard
              key={product.id}
              product={product}
              removeCart={removeCart}
            />
          ))}
        </ul>
        <div className={styles.footerModal}>
          <div>
            <span className="title total" >Total</span>
            <span className="title priceModal">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button onClick={removeAllCarts}>Remover todos</button>
        </div>
      </div>
    </div>
  );
};
