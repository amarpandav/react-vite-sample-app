import { useRef } from 'react';

import CartModal, {CartModalHandle} from './CartModal.jsx';
import {ShoppingCart} from "../pages/ElegantContextHomePage.tsx";
import {EntityId} from "../../models/base/EntityId.ts";

interface Props {
    cart: ShoppingCart;
    onUpdateCartItemQuantityCallback: (productId: EntityId<string>, quantity: number) => void;
}

export default function Header({ cart, onUpdateCartItemQuantityCallback }: Props) {
  const modal = useRef<CartModalHandle>(null);

  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current?.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        title="Your Cart"
        actions={modalActions}
        onUpdateCartItemQuantityCallback={onUpdateCartItemQuantityCallback}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
