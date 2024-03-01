// import styles from "./page.module.css"
import Header from "./components/header/header"
import Cart from "./components/cart/cart"
import Menu from "./components/menu/menu";
import OrderForm from "./components/orderForm/orderForm";
import OrderSummary from "./components/orderSummary/orderSummary";

export default function Home() {
    return (
      <div>
        <Header />
        <Cart />
        <Menu />
        <OrderForm />
        <OrderSummary />
      </div>
    );
  }