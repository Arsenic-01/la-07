"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../misc/SectionTitle";

const Hero = () => {
  const clients = [
    "Walmart",
    "Costco",
    "Target",
    "Kroger",
    "Safeway",
    "Whole Foods",
    "Metro",
    "Loblaws",
  ];

  const productImages = [
    {
      src: "/assets/hero/hero_icon_cloud/corn.jpg",
      alt: "Premium frozen corn",
      title: "Frozen Corn",
      height: "h-64",
    },
    {
      src: "/assets/hero/hero_icon_cloud/vegetables.jpg",
      alt: "Fresh frozen peas",
      title: "Vegetables",
      height: "h-52",
    },
    {
      src: "/assets/hero/hero_icon_cloud/mix_fruits.jpg",
      alt: "Frozen fruit mix",
      title: "Fruit Mix",
      height: "h-44",
    },
    {
      src: "/assets/hero/hero_icon_cloud/blackraisins.webp",
      alt: "Fresh frozen berries",
      title: "Frozen Raisins",
      height: "h-48",
    },
  ];

  return (
    <section className="py-10 lg:py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Hero Content */}
          <div className="order-2 lg:order-1">
            <SectionTitle
              title="Over 15 Years of Global Import Experience"
              className="hidden lg:inline-flex justify-center lg:justify-start items-center"
            />
            <div className="flex items-center">
              <SectionTitle
                title="Over 15 Years of Experience"
                className="lg:hidden"
              />
            </div>
            <h1 className="text-4xl tracking-tight md:text-5xl xl:text-6xl font-bold text-black text-center lg:text-left mb-6">
              Your Gateway to
              <span className="block mt-2 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Premium Frozen Foods
              </span>
            </h1>

            <p className="text-lg mx-auto lg:mx-0 text-center lg:text-left max-w-xl text-neutral-600 leading-relaxed font-light mb-10">
              We import the highest quality frozen foods from trusted global
              suppliers, delivering premium freshness and exceptional quality to
              your business.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-12">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 border-gray-300 hover:bg-gray-50 transition-colors bg-transparent"
              >
                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  Visit Our Facility
                </span>
              </Button>
              <Button
                size="lg"
                className="px-8 py-3 bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Phone size={18} />
                  Request Quote
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Global Suppliers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
            </div>
          </div>

          {/* Right Side - Pinterest-style Product Grid */}
          <div className="order-1 lg:order-2 hidden lg:block">
            <div className="columns-2 gap-4 space-y-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-4 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={500}
                      height={500}
                      className={`w-full ${image.height} object-cover select-none`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white select-none font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos */}

      <div className="mt-12 py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 font-medium mb-8 text-sm uppercase tracking-wide">
            Trusted by Leading Retailers Worldwide
          </p>
          <div className="relative overflow-hidden mask-gradient">
            <div className="flex animate-infinite-scroll">
              {/* First set */}
              {clients.map((client, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                  <span className="text-gray-400 font-medium text-lg whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {clients.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-8">
                  <span className="text-gray-400 font-medium text-lg whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {clients.map((client, index) => (
                <div key={`third-${index}`} className="flex-shrink-0 mx-8">
                  <span className="text-gray-400 font-medium text-lg whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          width: max-content;
        }

        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
      `}</style>
    </section>
  );
};

export default Hero;
