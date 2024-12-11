import PropTypes from "prop-types";
Checkout.propTypes = {
  cart: PropTypes.array,
};
export default function Checkout({ cart }) {
  const handleTotalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  ).toFixed(2);
  return (
    <>
    {cart.length > 0 && (
      <div className="p-4 w-96 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-gray-800">Order Summary</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span className="font-medium">${handleTotalPrice}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span className="font-medium">Free</span>
          </div>
          <hr className="border-gray-300 my-2" />
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>${handleTotalPrice}</span>
          </div>
        </div>
        <button className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
          Checkout
        </button>
      </div>
    )}
  </>
  
  );
}
