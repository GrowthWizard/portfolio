import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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

export const metadata = {
  title: 'Veröffentlichungen | steindominik.de',
  description:
    'Eine Auflistung der Fachartikel zu SEO & Web-Development die ich veröffentlicht habe. Du kannst mich auch als Fachautor für deine Webseite buchen.',
}

export default function Speaking() {
  return (
    <SimpleLayout
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
    </SimpleLayout>
  )
}
