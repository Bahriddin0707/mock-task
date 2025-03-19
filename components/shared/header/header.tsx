import Link from "next/link";
import MobileMenu from "./menu";

export default function Header() {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              GYMTEAM
            </Link>
          </div>

          <nav className="desktop-menu hidden space-x-8">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/shop" className="text-white hover:text-gray-300">
              Shop
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
