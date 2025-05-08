import { siteConfig } from "@/config/site"

import { LogoLink } from "./logoLink"
import { Button } from "./ui/button"

const footerLinks = [
  {
    title: "Services",
    links: [
      "Car Rentals",
      "Insurance Options",
      "Corporate Rentals",
      "Special Offers",
      "FAQs",
    ],
  },
  {
    title: "Resources",
    links: [
      "Help Center",
      "Privacy Policy",
      "Terms of Service",
      "Accessibility",
      "Vehicle Guides",
      "Customer Testimonials",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Contact Us",
      "Blog",
      "Partners",
      "Customers",
      "Careers",
      "Press",
    ],
  },
  {
    title: "Social",
    links: ["Youtube", "Twitter", "Instagram", "Facebook"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] py-8">
      <div className="mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 xl:max-w-5xl flex flex-col items-center gap-4">
        <LogoLink />
        <p className="text-[13px] leading-6 text-neutral-600 sm:text-sm text-center">
          © 2025 Carhub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
