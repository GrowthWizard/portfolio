import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-rosa dark:hover:text-rosa"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/ueber">Über</NavLink>
                <NavLink href="https://github.com/GrowthWizard">Github</NavLink>
                <NavLink href="https://www.provenexpert.com/dominik-stein/">Bewertungen</NavLink>
                <NavLink href="/agb">AGB</NavLink>
                <NavLink href="/impressum">Impressum</NavLink>
                <NavLink href="/datenschutzerklaerung">Datenschutzerklärung</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Dominik Stein - Web-Development aus Leidenschaft.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
