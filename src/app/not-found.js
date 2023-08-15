import Image from 'next/image'
import Link from 'next/link'
import errorImage from '@/images/404-bg.png';
import { Container } from '@/components/Container';

export default function NotFound() {
    return (
      <Container.Outer>
        <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] lg:grid-cols-[max(50%,36rem),1fr] lg:py-20">
          <div className="mx-auto w-full px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div className="max-w-lg">
              <p className="text-base font-semibold leading-8 text-light-purple dark:text-rosa">404 Fehler</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-5xl">Seite nicht gefunden</h1>
              <p className="mt-6 text-base leading-7 text-zinc-800 dark:text-zinc-200">
              Hoppla! Es sieht so aus, als ob diese Seite gerade den "Schrei" nachahmt, um dich von einer fehlerhaften Url abzulenken. Bei 404 Fehlern handelt es sich meist um Tippfehler, also überprüfe bitte noch einmal deine Url auf Rechtschreibfehler.</p>
              <div className="mt-10">
                <Link href="/" className="text-sm font-semibold leading-7 text-light-purple dark:text-rosa">
                  <span aria-hidden="true">&larr;</span> Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
          <div className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
            <div className="border-t border-gray-100 bg-white py-10 dark:dark:bg-zinc-700/[0.15] dark:border-zinc-700/[0.15]">
              <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 dark:text-zinc-200 lg:px-8">
                <a href="mailto:hello@steindominik.de">Kontaktiere mich!</a>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <a target="_blank" href="https://www.linkedin.com/in/dominik-stein-seo/">LinkedIn</a>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <a target="_blank" href="https://github.com/growthwizard">Github</a>
              </nav>
            </div>
          </div>
          <div className="lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
            <Image
              src={errorImage}
              alt="Illustration von dem Schrei, aber mit einem Programmierer"
              className="lg:absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </Container.Outer>
    )
  }
  