"use client";

import Script from "next/script";

/**
 * Loads Luma's checkout embed once per page. Any element carrying
 * data-luma-action="checkout" and data-luma-event-id opens the registration
 * overlay in place. initCheckout() re-binds React-rendered trigger elements.
 */
export default function LumaCheckout() {
  return (
    <Script
      src="https://embed.lu.ma/checkout-button.js"
      strategy="lazyOnload"
      onReady={() => window.luma?.initCheckout?.()}
    />
  );
}
