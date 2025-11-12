'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white font-light">
      {/* ===== Top Section ===== */}
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-12 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* Column 1 */}
          <FooterColumn
            title="Explore"
            links={[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' },
              { label: 'Our Story', href: '/our-story' },
              { label: 'Gift Card', href: '/gift-card' },
              { label: 'Contact', href: '/contact' },
              { label: 'Locations', href: '/locations' },
            ]}
          />

          {/* Column 2 */}
          <FooterColumn
            title="Support"
            links={[
              { label: 'FAQ', href: '/faq' },
              { label: 'Terms & Conditions', href: '/terms-conditions' },
              { label: 'Shipping Policy', href: '/shipping-policy' },
              { label: 'Refund Policy', href: '/refund-policy' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Accessibility', href: '/accessibility' },
            ]}
          />

          {/* Column 3: Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm uppercase tracking-widest text-white/60 mb-3">
              Contact
            </h3>
            <address className="not-italic text-white/80 leading-6">
              340, 341, Diamond Village, Mahidarpura,
              <br />
              Surat, 395007
            </address>
            <div className="mt-3 space-y-1 text-white/70 text-sm">
              <a
                href="mailto:contact@grandeurjewels.in"
                className="hover:text-white transition"
              >
                contact@grandeurjewels.in
              </a>
              <div>
                <a
                  href="tel:+919638222738"
                  className="hover:text-white transition"
                >
                  +91 9638222738
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/60 mb-3">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2 text-white/70 text-sm">
              <Social href="https://instagram.com">Instagram</Social>
              <Social href="https://twitter.com">Twitter</Social>
              <Social href="https://facebook.com">Facebook</Social>
              <Social href="https://pinterest.com">Pinterest</Social>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Brand Section ===== */}
      <div className="flex flex-col items-center justify-center py-10 border-b border-white/10 text-center">
        <span className="tracking-[0.35em] text-[36px] md:text-[64px] font-semibold text-white/90">
          GLEVERA
        </span>
        <p className="text-xs mt-3 text-white/50">
          Luxury crafted for timeless elegance.
        </p>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10 py-6 text-xs flex flex-col md:flex-row items-center justify-between text-white/50 gap-4">
        <p>© 2035 GLEVERA. All rights reserved.</p>
        <p>
          Built on{' '}
          <a
            href="https://www.wix.com/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Wix Studio
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-widest text-white/60 mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
