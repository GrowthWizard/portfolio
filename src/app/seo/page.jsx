import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Section } from '@/components/Section'
import SeoCards from '@/components/SeoCards'

export const metadata = {
  title: 'Beauftrage einen SEO-Experten | steindominik.de',
  description: 'Die Rankings bleiben aus? Besucher wählen lieber die veraltete Seite der Konkurrenz? Beauftrage mich als SEO-Experten und wir ändern das!',
}

function SeoSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16 mb-7">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3">{title}</Card.Title>
      {/*
       * Not needed for now
       * <Card.Eyebrow decorate>{event}</Card.Eyebrow>
       */}
      <Card.Description>{description}</Card.Description>
      {/*
       * Not needed for now.
       * <Card.Cta>{cta}</Card.Cta>
       * */}
    </Card>
  )
}

export default function Projects() {
  return (
    <>
      <SimpleLayout
        title="Suchmaschinenoptimierung"
        intro="Gute Inhalte sind der Schlüssel zu erfolgreicher Suchmaschinenoptimierung (SEO). Linkbuilding, Speedoptimierung und E.A.T & YMYL sind zwar wichtig, aber nach meiner Herangensweise sollte der Fokus auf Verbesserung der User-Experience und Content-Strategie liegen, um nachhaltige Erfolge zu erzielen."
      >
        <SeoCards />
        <SeoSection title="Ziele">
          <Appearance
            title="Warum Suchmaschinenoptimierung?"
            description="Suchmaschinenoptimierung ist der nachhaltigste Weg, um dauerhaft mehr Traffic aus den Suchergebnissen zu generieren. Algorithmen entscheiden, welche Ergebnisse am relevantesten für den Nutzer sind, und ich optimiere deine Webseite entsprechend, damit diese in den Suchergebnissen besser rankt. Durch SEO können nicht nur neue Kunden erreicht werden, sondern auch die Probleme einer Zielgruppe besser verstanden werden aus denen Ideen für neue Produkte gewonnen werden können."
          />
        </SeoSection>
        <SeoSection title="Kosten">
          <Appearance
            title="Was kostet Suchmaschinenoptimierung?"
            description='Die Kosten für eine Suchmaschinenoptimierung hängen von der Größe, der Konkurrenz und den Zielen deiner Webseite ab. In der Regel vereinbaren wir ein Budget, das in die Optimierung deiner Webseite investiert wird. Ich glaube, dass eine erfolgreiche SEO-Kampagne unter 1.000€ pro Monat nicht zielführend ist, da meine Möglichkeiten als Dienstleister in diesem Fall eingeschränkt sind.'
          />
        </SeoSection>
        <SeoSection title="Dauer">
          <Appearance
            title="SEO-Optimiert oder Ads Landingpage?"
            description='Suchmaschinenoptimierung ist ein fortlaufender Prozess, der die Zusammenarbeit zwischen Kunden und Dienstleistern erfordert. Zusammen arbeiten wir an einer Strategie, um deine Webseite in den Suchmaschinen zu verbessern und deine Ziele zu erreichen. In der Regel dauert eine Zusammenarbeit zwischen 3 und 6 Monaten, wobei wir bereits nach einem Monat positive Veränderungen in den Suchmaschinen erwarten.'
          />
        </SeoSection>
        <SeoSection title="Transparenz">
          <Appearance
            title="Transparente Berichte"
            description='Ja! Mit Google Data Studio biete ich dir die Möglichkeit, Daten aus der Google Search Console, Google Analytics und Semrush zentral in einem übersichtlichen Dashboard zu visualisieren. Durch die Integration von Keyword-Tracking in deinem SEO-Betreuungspaket, kannst du den Erfolg deiner SEO-Maßnahmen jederzeit transparent verfolgen und analysieren.'
          />
        </SeoSection>
      </SimpleLayout>
    </>
  )
}
