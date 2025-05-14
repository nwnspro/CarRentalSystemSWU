"use client"

import { useState } from "react"

import { SiteHeader } from "@/components/site-header"

function StarRating({
  rating,
  onChange,
}: {
  rating: number
  onChange: (n: number) => void
}) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="focus:outline-none"
        >
          <svg
            className={`w-6 h-6 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        </button>
      ))}
    </div>
  )
}

export default function MyPurchasePage() {
  const [rating, setRating] = useState(4)
  const [review, setReview] = useState("Very comfortable and clean car!")

  return (
    <>
      <div className="sticky top-0 z-40 bg-[hsla(0,0%,100%,.8)] shadow-[inset_0_-1px_0_0_#eaeaea] backdrop-blur-[5px] backdrop-saturate-[1.8]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <SiteHeader />
        </div>
      </div>
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-8 text-left">Order History</h1>
        <div className="bg-white rounded-lg shadow p-8 mb-6 w-full flex flex-row items-start gap-8">
          <img
            src="/assets/images/cars/sedan.jpg"
            alt="Toyota Camry"
            className="w-48 h-32 object-cover rounded-md flex-shrink-0"
          />

          <div className="flex-1 text-left flex flex-col gap-2 justify-between">
            <div>
              <div className="text-xl font-semibold mb-1">Sedan Luxury</div>
              <div className="text-neutral-700 mb-1">
                Location: New York, United States
              </div>
              <div className="text-neutral-700 mb-1">Rental Days: 3</div>
              <div className="text-neutral-700 mb-1">Price per day: $85</div>
              <div className="text-neutral-700 mb-1">
                Accepts different drop-off:{" "}
                <span className="font-semibold text-green-600">Yes</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="font-medium mb-1">Review:</div>
              <div className="flex items-center gap-2">
                <StarRating rating={rating} onChange={setRating} />
                <input
                  type="text"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Write your review..."
                />
                <button
                  type="button"
                  className="bg-black text-white px-3 py-1.5 rounded-md text-sm hover:bg-neutral-800 transition-colors"
                  onClick={() => {
                    setReview("")
                    window.alert("Submitted Successfully")
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between h-full min-w-[160px]">
            <span className="text-sm text-neutral-500">
              Order Date: 2025-05-25
            </span>
            <span className="text-lg font-bold text-black">Total: $255</span>
          </div>
        </div>
      </main>
    </>
  )
}
