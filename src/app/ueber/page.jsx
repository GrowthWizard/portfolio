import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

// imports for Container Area
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/authors/dominik-stein/dominik-stein.png'

// imports for SimpleLayout Area
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayoutH2 } from '@/components/SimpleLayoutH2'

function PublicationSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

/*
* Start declaring Social Media Icons and Links
*/
function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-rosa dark:text-zinc-200 dark:hover:text-rosa"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-rosa" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function ChatIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

function CalenderIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      <path
        fill-rule="evenodd"
        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

/*
* End declaring Social Media Icons and Links
*/

export const metadata = {
  title: 'Über mich - Web-Developer & SEO Experte | Dominik Stein',
  description:
    'Hallo, ich bin Dominik. 8 Jahre Suchmaschinenoptimierung haben meine Herangehensweise an Webseiten geprägt.',
}

export default function About() {
  return (
    <>
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Portrait Dominik Stein, Web Developer"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hallo, ich bin Dominik. 8 Jahre SEO haben meine Herangehensweise an
            Webseiten geprägt.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Seit 2014 optimiere ich Webseiten für Suchmaschinen.
              Interessanterweise überwiegend für Webseiten aus der
              Gesundheitsbranche, obwohl ich mir dieses Fachgebiet nie bewusst
              ausgesucht habe.
            </p>
            <p>
              Auch wenn mich die Themenvielfalt der Suchmaschinenoptimierung bis
              heute begeistert, hat die technische Seite der
              Suchmaschinenoptimierung stets das größere Interesse in mir
              geweckt. So habe ich die Zeit während der Pandemie-Lockdowns
              intensiv dazu genutzt, Programmiersprachen & Frameworks zu
              erlernen und mich als Web-Developer weiterzuentwickeln.
            </p>
            <p>
              Die Erfahrung die ich seitdem als Web-Developer sammeln konnte,
              hat dazu geführt, dass ich mich im Jahr 2022 als
              Frontend-Developer selbstständig gemacht habe. Tatkräftig werde
              ich dabei von Konstantin Nowotny (Design) und FirmCatalyst (SEO)
              interstützt, mit denen ich gemeinsam in einem Kollektiv
              zusammenarbeite.
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Verwendete Technologien
            </h3>
            <p>
              <span className="font-semibold">Programmiersprachen:</span> HTML,
              CSS, JavaScript (ES6), PHP
              <br />
              <span className="font-semibold">Librarys & Frameworks:</span>{' '}
              next.js, React, TailwindCSS, GraphQL, Apollo
              <br />
              <span className="font-semibold">Plattformen:</span> GitHub,
              Vercel, Raidboxes, WordPress
              <br />
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/growthwizard"
              icon={TwitterIcon}
            >
              Auf Twitter folgen
            </SocialLink>
            <SocialLink
              href="https://github.com/growthwizard"
              icon={GitHubIcon}
              className="mt-4"
            >
              Auf Github folgen
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/dominik-stein-seo/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Auf LinkedIn folgen
            </SocialLink>
          </ul>
          <h5 className="pt-8 font-bold">Kontakt</h5>
          <ul role="list">
            <SocialLink
              href="tel:+4915678554040"
              icon={PhoneIcon}
              className="pt-2 mt-4"
            >
              Tel: +4915678554040
            </SocialLink>
            <SocialLink
              href="https://wa.me/+4915678554040"
              icon={ChatIcon}
              className="pt-2 mt-4 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              WhatsApp Business
            </SocialLink>
            <SocialLink
              href="mailto:hello@steindominik.de"
              icon={MailIcon}
              className="pt-2 mt-4 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              hello@steindominik.de
            </SocialLink>
            <SocialLink
              href="https://bookme.name/dominik/lite/beratung"
              icon={CalenderIcon}
              className="pt-2 mt-4 border-t border-zinc-100 dark:border-zinc-700/40"
              target="_blank"
            >
              Termin online buchen
            </SocialLink>
          </ul>
        </div>
      </div>
      <SimpleLayoutH2
      title="Veröffentlichungen"
      intro="Ich wäre heute nicht dort, wo ich heute stehe, wenn ich nicht von anderen gelernt hätte. Vielen Dank an all die Menschen die Ihr Wissen im Internet teilen und zur Verfügung stellen. Um wieder etwas zurück an die Community zu geben, teile ich selbst mein Wissen im Internet. Aber auch Unternehmen können mich gerne als Fachautoren für Ihre Webseite beauftragen. Ein Fachartikel startet bei ca. 490€ zzgl. MwSt."
    >
      <div className="space-y-20">
        <PublicationSection title="Tutorials">
          <Appearance
            href="https://raidboxes.io/blog/online-marketing/seo-audit/?aid=68271"
            title="In 8 Schritten zum SEO Audit: Bessere Rankings für deine Website"
            description="Ein SEO Audit ist die Grundlage jeder professionellen Suchmaschinenoptimierung. In diesem Tutorial erkläre ich, wie sie durchgeführt wird."
            event="Raidboxes.io, März 2022"
            cta="Zum Tutorial"
          />
          <Appearance
            href="https://raidboxes.io/blog/online-marketing/keyword-research/?aid=68271"
            title="Mit der Keyword-Recherche zum SEO Erfolg: Anleitung Schritt für Schritt"
            description="Eine Schritt für Schritt Anleitung mit Anregungen, wie eine Keyword-Recherche durchgeführt werden kann."
            event="Raidboxes.io, März 2022"
            cta="Zum Tutorial"
          />
        </PublicationSection>
        <PublicationSection title="Gastbeiträge">
          <Appearance
            href="https://raidboxes.io/blog/online-marketing/wordpress-seo-plugins/?aid=68271"
            title="Yoast vs Rank Math: WordPress SEO Plugins im Vergleich"
            description="Du hast dich schon immer gefragt welches das beste SEO Plugin für WordPress ist? In diesem Guide vergleiche ich YoastSEO mit RankMath."
            event="Raidboxes.io, August 2022"
            cta="Zum Gastbeitrag"
          />
          <Appearance
            href="https://raidboxes.io/blog/online-marketing/seo-guide-2020/?aid=68271"
            title="SEO Guide 2020: YMYL, EAT, BERT, Structured Data und vieles mehr"
            description="Ein Beitrag darüber, wie sich Webmaster für die Suchmaschinenoptimierung im Jahr 2020 wappnen."
            event="Raidboxes.io, Januar 2020"
            cta="Zum Gastbeitrag"
          />
        </PublicationSection>
        <PublicationSection title="Bücher & E-Books">
          <Appearance
            href="https://raidboxes.io/ebook/seo-audit-tools/?aid=68271"
            title="E-Book: SEO Audit leicht gemacht"
            description="Ich habe das Online-Magazin des WordPress-Hosters Raidboxes mit einem E-Book zum Thema SEO Audit unterstützt."
            event="Raidboxes.io, Juni 2023"
            cta="Zum E-Book"
          />
        </PublicationSection>
      </div>
    </SimpleLayoutH2>
    </Container>
    
    </>
  )
}
