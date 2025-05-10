import { redirect } from "next/navigation"
import type { Stripe } from "stripe"

import { stripe } from "@/lib/stripe"

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { payment_intent: string }
}): Promise<JSX.Element> {
  if (!searchParams.payment_intent)
    throw new Error("Please provide a valid payment_intent (`pi_...`)")

  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.retrieve(searchParams.payment_intent)

  // 如果支付成功，重定向到首页
  if (paymentIntent.status === "succeeded") {
    redirect("/")
  }

  // 如果支付失败，显示错误信息
  return (
    <>
      <h2>Status: {paymentIntent.status}</h2>
      <h3>Payment failed. Please try again.</h3>
    </>
  )
}
