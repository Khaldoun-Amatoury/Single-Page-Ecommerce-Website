import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
// import { CartContext } from "../store/shopping-cart-context";
//here we removed everything for context and also props related to Cart because here Cart model doesn't need any cart props to make any function so no need for them
const CartModal = forwardRef(function Modal(
  // { cartItems, onUpdateCartItemQuantity, title, actions },
  { title, actions },
  ref
) {
  const dialog = useRef();

  // const { items, updateItemQuantity } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      {/* <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} /> */}
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
