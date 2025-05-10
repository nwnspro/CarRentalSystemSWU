"use client"

import { useEffect } from "react"

import { useToast } from "@/components/ui/use-toast"

export function PaymentSuccessToast() {
  const { toast } = useToast()

  useEffect(() => {
    // 检查是否是从支付页面返回
    const isFromPayment = sessionStorage.getItem("fromPayment")
    if (isFromPayment) {
      // 显示成功提示
      toast({
        title: "Payment Successful!",
        description: "Your car reservation has been confirmed.",
        duration: 5000,
      })
      // 清除标记
      sessionStorage.removeItem("fromPayment")
    }
  }, [toast])

  return null
}
