"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PaymentSuccess() {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      window.alert("Payment successful!")
      router.push("/mypurchase")
    }, 3000)
    return () => clearTimeout(timer)
  }, [router])
  return (
    <div>
      <h2>Payment successful!</h2>
      <p>You will be redirected to your order page in 3 seconds...</p>
    </div>
  )
}
