import { useState } from "react";

const CartItems = ({ item, updateCartItemQuantity, removeFromCart }) => {
  const [itemQty, setItemQty] = useState(item.qty);

  const handleQuantityChange = (newQuantity) => {
    setItemQty(newQuantity);
    updateCartItemQuantity(item._id);
  };

  const handleIncrement = () => {
    const newQuantity = itemQty + 1;
    handleQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = itemQty - 1;
    if (newQuantity >= 1) {
      handleQuantityChange(newQuantity);
    }
  };

  return (
    <li className="grid grid-cols-4  w-full  gap-12 ">
      <img src={item.img} alt="" className="h-16 w-16 rounded object-contain" />

      <div>
        <h3 className="text-md ">{item.title}</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-300">
          <div>
            <dt className="inline">Size:</dt>
            <dd className="inline">7</dd>
          </div>

          <div>
            <dt className="inline">Color:</dt>
            <dd className="inline">{item.color}</dd>
          </div>
        </dl>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="text-gray-600 transition hover:text-red-600"
          onClick={handleDecrement}
        >
          <span className="sr-only">Decrease quantity</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </button>

        <input
          type="number"
          min="1"
          value={itemQty}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
          className="h-8 w-12 rounded border-gray-200 bg-black p-0 text-center text-xs text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        <button
          className="text-gray-600 transition hover:text-green-600"
          onClick={handleIncrement}
        >
          <span className="sr-only">Increase quantity</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </button>
      </div>

      <button
        className="text-gray-600 w-4  transition hover:text-red-600"
        onClick={() => removeFromCart(item._id)}
      >
        <span className="sr-only">Remove item</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </li>
  );
};

export default CartItems;
