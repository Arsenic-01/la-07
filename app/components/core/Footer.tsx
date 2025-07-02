import WhatsappIcon from "@/public/assets/footer/whatsapp.svg";
import XIcon from "@/public/assets/footer/x.svg";
import { Globe, Linkedin, TruckElectric } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 mt-16 border-t border-t-neutral-300 ">
      <div className="container px-6 lg:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="grid grid-cols-4 sm:justify-items-center gap-8 mb-12">
          <div className="md:col-span-2 col-span-4">
            <div className="mb-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-foreground w-fit"
              >
                <TruckElectric className="size-8 fill-blue-400 text-blue-300" />

                <span className="font-medium text-xl tracking-tight">
                  Exovia Exports
                </span>
              </Link>
            </div>
            <p className="text-foreground/70 max-w-md mb-6">
              Delivering the finest frozen foods from around the world, ensuring
              quality and freshness for your business.
            </p>
            <div className="col-span-2 md:col-span-1">
              <div className="flex space-x-4">
                <SocialLink
                  href="tel:+9975278911"
                  icon={
                    <Image
                      src={WhatsappIcon}
                      alt="Whatsapp"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  }
                  label="Whatsapp"
                />

                <SocialLink
                  href="https://www.linkedin.com/in/vedant-bhor-39287828b/"
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://x.com/arsenic_dev"
                  icon={
                    <Image
                      src={XIcon}
                      alt="Whatsapp"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  }
                  label="Twitter"
                />
                <SocialLink
                  href="https://vedantbhor.vercel.app/"
                  icon={<Globe className="h-5 w-5" />}
                  label="Portfolio"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-medium text-lg mb-4">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/public">Licenses</FooterLink>
              <FooterLink href="/public">Cookie Policy</FooterLink>
              <FooterLink href="#features">Copyright</FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Company</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="https://github.com/Arsenic-01/cloudgram">
                About
              </FooterLink>
              <FooterLink href="https://vedantbhor.vercel.app/">
                Portfolio
              </FooterLink>
              <FooterLink href="mailto:vedantbhorofficial@gmail.com?subject=Hello%20I%27m%20____%20from%20____%20company&body=I%20want%20to%20start%20a%20new%20project%20about%20____%20and%20time%20duration%20is%20___%20days.">
                Contact
              </FooterLink>
            </nav>
          </div>
        </div>

        <div className="border-t border-t-neutral-200 pt-8 ">
          <div className="text-foreground/60 text-center text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Exovia Exports. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-secondary smooth-transition"
    aria-label={label}
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  small?: boolean;
}

const FooterLink = ({ href, children, small = false }: FooterLinkProps) => (
  <a
    href={href}
    className={`text-foreground/70 hover:text-foreground smooth-transition ${
      small ? "text-sm" : ""
    }`}
  >
    {children}
  </a>
);

export default Footer;
