import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function RecommendedCar() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Recommended for You
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Based on your preferences, we think you might like this
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/assets/images/cars/suv.jpg"
              alt="SUV Comfort"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">SUV Comfort</h3>
              <p className="text-gray-500 dark:text-gray-400">
                A comfortable gasoline SUV designed for family trips and daily
                driving, featuring a spacious interior and modern amenities for
                a pleasant ride.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">$75</span>
                <span className="text-gray-500 dark:text-gray-400">/day</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
                  Gasoline
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
                  7 Seats
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
                  Heated Seats
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
                  Adaptive Cruise Control
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 mt-2">
              <h4 className="font-semibold mb-1">Sales Analysis</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  Monthly Rentals: <span className="font-bold">128</span>
                </li>
                <li>
                  Year-over-Year Growth:{" "}
                  <span className="font-bold text-green-600">+12%</span>
                </li>
                <li>
                  Customer Satisfaction:{" "}
                  <span className="font-bold">4.7/5</span>
                </li>
                <li>
                  Most Popular in:{" "}
                  <span className="font-bold">Family & Group Travel</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="w-full">
                <Link href="/cars/gasoline-suv-comfort">View Details</Link>
              </Button>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
