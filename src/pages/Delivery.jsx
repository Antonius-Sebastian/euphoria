import React from "react";
import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <div className="mx-auto w-11/12 max-w-7xl pt-5 pb-24 md:w-4/5">
      <div className="flex w-full flex-col md:w-2/3">
        {/* Shipping Address */}
        <div className="border-grayLight border-b py-7">
          <h3 className="font-coreSans text-grayDark2 text-[22px] font-bold">
            Shipping Adddress
          </h3>
          <p className="font-causten text-grayDark2 mt-1 text-base">
            Select the address that matches your card or payment method.
          </p>
          <div className="bg-secondary mt-7 rounded-xl px-9 py-3">
            <div className="border-grayLight flex items-center gap-5 border-b py-6">
              <input
                type="radio"
                name="shipping-address"
                id="same-address"
                className="accent-grayDark2 h-4 w-4"
              />
              <label
                htmlFor="same-address"
                className="font-causten text-grayDark2 text-xl font-bold"
              >
                Same as billing address
              </label>
            </div>
            <div className="flex items-center gap-5 py-6">
              <input
                type="radio"
                name="shipping-address"
                id="diff-address"
                className="accent-grayDark2 h-4 w-4"
              />
              <label
                htmlFor="diff-address"
                className="font-causten text-grayDark2 text-xl font-bold"
              >
                Use a different shipping address
              </label>
            </div>
          </div>
        </div>

        {/* Shipping Method */}
        <div className="border-grayLight border-b py-7">
          <h3 className="font-coreSans text-grayDark2 text-[22px] font-bold">
            Shipping Adddress
          </h3>

          <div className="bg-secondary mt-7 rounded-xl px-9 py-3">
            <p className="font-causten text-grayDark2 border-grayLight border-b py-6 text-xl font-bold">
              Arrives by Monday, June 7
            </p>
            <div className="py-6">
              <div className="font-causten text-grayDark2 flex items-center justify-between text-xl font-bold">
                <p>Delivery Charges</p>
                <p>$5.00</p>
              </div>
              <p className="font-causten text-grayDark mt-1 text-base font-medium">
                Additional fees may apply
              </p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="py-7">
          <h3 className="font-coreSans text-grayDark2 text-[22px] font-bold">
            Payment Method
          </h3>
          <p className="font-causten text-grayDark2 mt-1 text-base">
            All transactions are secure and encrypted .
          </p>
          <div className="bg-secondary mt-7 rounded-xl px-9 py-3">
            <div className="border-grayLight flex items-center gap-5 border-b py-6">
              <input
                type="radio"
                name="payment-method"
                id="credit-card"
                className="accent-grayDark2 h-4 w-4"
              />
              <label
                htmlFor="credit-card"
                className="font-causten text-grayDark2 text-xl font-bold"
              >
                Credit Card
                <p className="text-base font-normal">
                  We accept all major credit cards.
                </p>
              </label>
            </div>
            <div className="border-grayLight flex items-center gap-5 border-b py-6">
              <input
                type="radio"
                name="payment-method"
                id="cash-on-delivery"
                className="accent-grayDark2 h-4 w-4"
              />
              <label
                htmlFor="cash-on-delivery"
                className="font-causten text-grayDark2 text-xl font-bold"
              >
                Cash on Delivery
                <p className="text-base font-normal">
                  Pay with cash upon delivery.
                </p>
              </label>
            </div>
            <div className="flex items-center gap-5 py-6">
              <input
                type="radio"
                name="payment-method"
                id="paypal"
                className="accent-grayDark2 h-4 w-4"
              />
              <label
                htmlFor="paypal"
                className="font-causten text-grayDark2 text-xl font-bold"
              >
                Paypal
              </label>
            </div>
          </div>
        </div>

        <Link
          to="/order-confirmed"
          className="font-causten bg-primary mt-5 w-fit rounded-lg px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#6620C1] active:translate-y-0 lg:py-4 lg:text-lg"
        >
          Pay Now
        </Link>
      </div>
    </div>
  );
};

export default Delivery;
