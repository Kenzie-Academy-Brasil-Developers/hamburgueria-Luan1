import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ cartList, setIsVisible,value,setValue }) => {
  

  return (
    <header>
      <div className="container">
        <div className={styles.boxHeader}>
          <div className={styles.boxHeaderTop}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <button onClick={() => setIsVisible(true)}>
              <MdShoppingCart size={21} />
              <span>{cartList.length}</span>
            </button>
          </div>
            <form>
              <input
               
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className={styles.buttonSearch} type="submit">
                <MdSearch size={21} />
              </button>
            </form>
        </div>
      </div>
    </header>
  );
};
