// components/OrderSummary.js
export default function OrderSummary({ subtotal, discount, deliveryFee, total }) {
    return (
      <div className="bg-white p-4 shadow-md rounded">
        <h2 className="font-bold text-xl mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Discount</p>
            <p className="text-red-500">-${discount}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <div className="flex mt-4">
            <input type="text" placeholder="Add promo code" className="border p-2 w-full" />
            <button className="bg-black text-white p-2">Apply</button>
          </div>
          <button className="bg-black text-white p-2 w-full mt-4">Go to Checkout</button>
        </div>
      </div>
    );
  }
  