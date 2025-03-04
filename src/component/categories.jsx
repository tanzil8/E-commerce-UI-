
import {
  Monitor,
  Gamepad2,
  BookOpen,
  ShoppingBag,
  Globe,
  Palette,
  Zap,
  Music,
  Tv,
  Sparkles,
  Home,
  Headphones,
  Car,
  Camera,
  Wifi,
  Keyboard,
  Smartphone,
  Clock,
  Printer,
  Projector,
  Heart,
  Briefcase,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function ShopCategories() {
  const categories = [
    { name: "Computer & Office", icon: <Monitor className="h-4 w-4" /> },
    { name: "Collectibles & Toys", icon: <Gamepad2 className="h-4 w-4" /> },
    { name: "Books", icon: <BookOpen className="h-4 w-4" /> },
    { name: "Fashion/Clothes", icon: <ShoppingBag className="h-4 w-4" /> },
    { name: "Sports & Outdoors", icon: <Globe className="h-4 w-4" /> },
    { name: "Painting & Hobby", icon: <Palette className="h-4 w-4" /> },
    { name: "Electronics", icon: <Zap className="h-4 w-4" /> },
    { name: "Food & Grocery", icon: <Home className="h-4 w-4" /> },
    { name: "Music", icon: <Music className="h-4 w-4" /> },
    { name: "TV/Projectors", icon: <Tv className="h-4 w-4" /> },
    { name: "Health & beauty", icon: <Sparkles className="h-4 w-4" /> },
    { name: "Home Air Quality", icon: <Home className="h-4 w-4" /> },
    { name: "Gaming/Consoles", icon: <Headphones className="h-4 w-4" /> },
    { name: "Car & Motorbike", icon: <Car className="h-4 w-4" /> },
    { name: "Photo/Video", icon: <Camera className="h-4 w-4" /> },
    { name: "Security & Wi-Fi", icon: <Wifi className="h-4 w-4" /> },
    { name: "Computer Peripherals", icon: <Keyboard className="h-4 w-4" /> },
    { name: "Phone Accessories", icon: <Smartphone className="h-4 w-4" /> },
    { name: "Watches", icon: <Clock className="h-4 w-4" /> },
    { name: "Printers", icon: <Printer className="h-4 w-4" /> },
    { name: "Projectors", icon: <Projector className="h-4 w-4" /> },
    { name: "Skin Care", icon: <Heart className="h-4 w-4" /> },
    { name: "Photo/Video", icon: <Camera className="h-4 w-4" /> },
    { name: "Office Supplies", icon: <Briefcase className="h-4 w-4" /> },
  ]

  return (
    <section className="py-8 antialiased dark:bg-gray-900 md:py-1">
        <h1 className="mb-12 pl-6  font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
  Flash Product
</h1>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">


       
        </div>

        <div className=" flex overflow-x-auto pb-4 gap-4 snap-x scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-[200px] flex-shrink-0 snap-start"
            >
              <span className="me-2 text-gray-900 dark:text-white">{category.icon}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

