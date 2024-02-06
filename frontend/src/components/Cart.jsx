import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItems from "./CartItems";

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } =
    useContext(CartContext);
  console.log(cartItems);
  let totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.newPrice) * Number(item.qty),
    0
  );
  let afterDiscount = totalPrice - 50;
  console.log(totalPrice);
  return (
    <section>
      <div className="mx-auto max-w-screen-sm px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold  sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-2 w-full  m-auto">
              {cartItems.length === 0 ? (
                <h1 className="text-center font-bold text-coral-red text-3xl">
                  Oops! Its not Looking Like a Wow
                  <br />
                  Its Empty, Head over to Products
                  <br /> to Make it Awesome
                </h1>
              ) : (
                cartItems.map((item) => (
                  <CartItems
                    key={item._id}
                    item={item}
                    removeFromCart={removeFromCart}
                    updateCartItemQuantity={updateCartItemQuantity}
                  />
                ))
              )}
            </ul>

            {cartItems.length !== 0 ? (
              <div className="mt-8 flex justify-end border-t border-coral-red pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm ">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>{`$ ${totalPrice}`}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-$50</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>{`$${afterDiscount} `}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
