import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sarvesamanah Foundation" className="h-16 w-16" />
              <span className="font-heading text-lg font-bold">Sarvesamanah Foundation</span>
            </div>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              Branches of Care, Roots of Trust. Nurturing nature through community-driven
              tree plantation and environmental conservation in Pune, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Projects", path: "/projects" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background font-body text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-background/70 font-body text-sm">
              <p>Flat No.4, Saraswati Apartment,</p>
              <p>CTS No.19/A, Erandwane, Pune 411004</p>
              <p>Maharashtra, India</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:sarvesamanah@gmail.com" className="hover:text-background transition-colors">
                  sarvesamanah@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:2025412175" className="hover:text-background transition-colors">
                  +91 20-25412175
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:8956258824" className="hover:text-background transition-colors">
                  +91 89562 58824
                </a>
              </p>
              <p>
                Web:{" "}
                <a href="https://www.sarvesamanah.org" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  www.sarvesamanah.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center">
          <p className="text-background/50 font-body text-sm">
            © {new Date().getFullYear()} Sarvesamanah Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
