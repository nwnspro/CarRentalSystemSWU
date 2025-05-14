import type { Stripe } from "stripe"

import { stripe } from "@/lib/stripe"
import PaymentSuccess from "@/components/payment-success"

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { payment_intent: string }
}): Promise<JSX.Element> {
  if (!searchParams.payment_intent)
    throw new Error("Please provide a valid payment_intent (`pi_...`)")

  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.retrieve(searchParams.payment_intent)

  if (paymentIntent.status === "succeeded") {
    return <PaymentSuccess />
  }

  return (
    <>
      <h2>Status: {paymentIntent.status}</h2>
      <h3>Payment failed. Please try again.</h3>
    </>
  )
}
