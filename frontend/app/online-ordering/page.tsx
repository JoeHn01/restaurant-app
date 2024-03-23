// import styles from "./page.module.css"
import Header from "./components/header/header"
import MenuCart from "./components/menuCart/menuCart";
import OrderForm from "./components/orderForm/orderForm";
import OrderSummary from "./components/orderSummary/orderSummary";

export default function Home() {
    return (
      <>
        <Header />
        <MenuCart />
        {/* <OrderForm />
        <OrderSummary /> */}
      </>
    );
  }