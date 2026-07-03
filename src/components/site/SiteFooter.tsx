import Link from 'next/link'
import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react'
import { SERVICE_DETAILS, SITE } from '@/lib/site-content'

export default function SiteFooter() {
  const companyLinks = [
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Insights', href: '/insights' },
    { name: 'Karir', href: '/karir' },
    { name: 'Kontak', href: '/kontak' },
  ]

  return (
    <footer className="bg-[#1A1A2E] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-[#0D503C] flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-wider">JAC</span>
              </div>
              <span className="text-white font-semibold text-sm">Jiwa Abdi Cinta</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-3">
              Ekosistem bisnis terintegrasi — perdagangan, jasa, konstruksi, industri sawit, pertanian, dan perizinan.
            </p>
            <p className="text-white/30 text-xs">{SITE.akta}</p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2.5">
              {SERVICE_DETAILS.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 text-sm hover:text-white/70 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                  Portal Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-white/40 text-sm hover:text-white/70 transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-white/40 text-sm hover:text-white/70 transition-colors">
                  {SITE.phone}
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/70 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/70 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">&copy; 2026 PT Jiwa Abdi Cinta. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/kebijakan-privasi" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Kebijakan Privasi
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/syarat-ketentuan" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
