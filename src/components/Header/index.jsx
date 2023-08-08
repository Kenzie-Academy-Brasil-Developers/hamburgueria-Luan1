import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";
import { useState } from "react";

export const Header = ({ cartList, setIsVisible,setValue }) => {
  const[search, setSearch] = useState("")
  const submit = (e) => {
    e.preventDefault();
    setValue(search)
    setSearch("")
  }
  

 
  return (
    <header>
      <div className="container">
        <div className={styles.boxHeader}>
          <div className={styles.boxHeaderTop}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <button className= {styles.carBuy} onClick={() => setIsVisible(true)}>
              <MdShoppingCart size={21} />
              <span className={styles.teste}>{cartList.length}</span>
            </button>
          </div>
            <form onSubmit={submit}>
              <input
                placeholder  = "Digitar pesquisa"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
