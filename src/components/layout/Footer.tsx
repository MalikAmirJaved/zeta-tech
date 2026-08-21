"use client";

const footerLinks = {
  products: [
    { label: "ConnectHub", href: "#" },
    { label: "CloudHub", href: "#" },
    { label: "Zekil", href: "#" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Careers", href: "#careers" },
  ],
  resources: [
    { label: "Blogs", href: "#insights" },
    { label: "Events", href: "#insights" },
    { label: "News", href: "#insights" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark border-t border-dark">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[144px] py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center mb-6">
              <img
                src="/images/logo.png"
                alt="Zeta Tech"
                className="h-16 w-auto"
              />
            </a>
            <p className="font-sans text-sm text-dark-muted leading-[21px]">
              Powering Sovereign Digital Infrastructure across Pakistan.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-dark-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-dark-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-dark-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-dark-muted">
            © {new Date().getFullYear()} Zeta Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans text-xs text-dark-muted hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-dark-muted hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
