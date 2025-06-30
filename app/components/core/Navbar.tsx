"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Phone, TruckElectric, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full glass-effect transition-smooth md:backdrop-blur-md border-b border-b-neutral-500/20",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl backdrop-blur-lg md:backdrop-blur-none flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex gap-2 items-center justify-center text-lg sm:text-xl font-bold tracking-tight transition-smooth hover:opacity-90"
          >
            <TruckElectric className="size-8 fill-blue-400 text-blue-300" />
            <span>Exovia Exports</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground/70 font-medium transition-smooth hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground/70 font-medium transition-smooth hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground/70 font-medium transition-smooth hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button className="hidden sm:block bg-gray-900 hover:bg-gray-800 transition-colors">
            <span className="flex items-center gap-2">
              <Phone />
              Request Quote
            </span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden rounded-full"
            onClick={toggleMobileMenu}
            aria-label="toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}

      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md md:hidden  transition-smooth overflow-hidden",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4 p-6 animate-fade-in">
          <Link
            href="/"
            className="text-lg font-medium py-2 border-b border-border/50 transition-smooth hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium py-2 border-b border-border/50 transition-smooth hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium py-2 border-b border-border/50 transition-smooth hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
