import { useState } from "react"
import { HomePage } from "./pages/HomePage"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CartModal } from "./components/CartModal";
import "./styles/index.scss"
import { useEffect } from "react";


const App = () => {
  const [isVisible, setIsVisible]= useState(false);
  const localCartList = localStorage.getItem("@PRODUCTS");

  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []
  );
  useEffect(() => {
    localStorage.setItem("@PRODUCTS", JSON.stringify(cartList));
  }, [cartList]);

  const addCart = (addProduct) => {
    if (!cartList.some((product) => product.id === addProduct.id)) {
      setCartList([...cartList, addProduct]);
      toast.success("Produto adicionado ao carrinho");
    } else {
      toast.error(" O produto ja está no carrinho");
    }
  };
  const removeCart = (cartId) => {
    const newCartList = cartList.filter((cart) => cart.id !== cartId)
    toast.success("Produto removido com sucesso");
    setCartList(newCartList);
  };
  const removeAllCarts = (cartId) => {
    const CartsAllDelete = cartList.filter((cart) => cart.id !== cartId)
    toast.success("Todos os produtos removidos com sucesso");
    setCartList([]);
  }
  return (
    <>
      <HomePage cartList={cartList} addCart={addCart} setIsVisible={setIsVisible} />
      {isVisible ?  <CartModal cartList={cartList} setIsVisible={setIsVisible}  removeCart={removeCart} removeAllCarts={removeAllCarts} />:null  }
      
      <ToastContainer autoClose={2 * 1000} />
    </>
  )
}

export default App
