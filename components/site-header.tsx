import { LogoLink } from "./logoLink"
import { UserMenuButton } from "./user-menu-button"

export function SiteHeader() {
  return (
    <header className="flex h-full items-center justify-between">
      <LogoLink />
      <div className="inline-flex items-center gap-6">
        <a
          href="/mypurchase"
          className="text-neutral-500 text-base font-medium hover:underline"
        >
          My Purchase
        </a>
        <UserMenuButton />
      </div>
    </header>
  )
}
