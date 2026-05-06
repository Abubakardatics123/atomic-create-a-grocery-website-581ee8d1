import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Globe as Facebook, MessageCircle as Twitter, Camera as Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Leaf size={18} className="text-white" />
              </div>
              <span>FreshMart</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your neighborhood grocery store, now online. Fresh produce, quality products, and fast delivery right to your door.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" aria-label="Twitter">
                <Twitter size={15} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" aria-label="Instagram">
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "All Products" },
                { href: "/shop?category=Fruits", label: "Fresh Fruits" },
                { href: "/shop?category=Vegetables", label: "Vegetables" },
                { href: "/shop?category=Dairy", label: "Dairy & Eggs" },
                { href: "/cart", label: "My Cart" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {["Bakery", "Beverages", "Snacks", "Meat", "Frozen"].map((cat) => (
                <li key={cat}>
                  <Link href={"/shop?category=" + cat} className="hover:text-green-400 transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-500 mt-0.5 shrink-0" />
                <span>123 Market Street, Fresh City, FC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-500 shrink-0" />
                <span>hello@freshmart.com</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg text-xs text-gray-400">
              <p className="font-medium text-gray-300 mb-1">Store Hours</p>
              <p>Mon–Sat: 7:00 AM – 9:00 PM</p>
              <p>Sunday: 8:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2024 FreshMart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
