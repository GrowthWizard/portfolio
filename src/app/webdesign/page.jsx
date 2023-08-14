import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Section } from '@/components/Section'
import WebDesignCards from '@/components/WebDesignCards'

export const metadata = {
  title: 'Webdesign: WordPress & next.js | steindominik.de',
  description: 'Du wünscht dir eine SEO-optimierte und schnelle Webseite? Als Web-Developer setze ich dein Web-Design in WordPress und next.js für dich um!',
}

function WebdesignSection({ children, ...props }) {
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
        title="Webdesign"
        intro="Als erfahrener Web-Developer bringe ich dein Webdesign zum Leben und sorge für eine technisch einwandfreie Umsetzung. Mein Hintergrund als SEO-Experte erlaubt es mir, deine Website für Suchmaschinen optimal lesbar zu machen und den Grundpfeiler für gute Rankings zu legen."
      >
        <WebDesignCards />
        <WebdesignSection title="Umsetzung">
          <Appearance
            title="Umsetzung nach Screen Design"
            description="Als professioneller Web-Developer sorge ich dafür, dass dein Webdesign exakt umgesetzt wird. Ich achte darauf, dass die Umsetzung möglichst nah am Design ist und, falls für das Projekt relevant, kann ich auf meine 8 Jahre Erfahrung als Head of SEO zurückgreifen, um Anpassungen vorzuschlagen & Fallstricke zu vermeiden, bevor diese von einem Developer umgesetzt werden. Das spart dir wertvolle Zeit und Geld."
          />
        </WebdesignSection>
        <WebdesignSection title="Design">
          <Appearance
            title="Kein Webdesigner zur Hand?"
            description='Jeder Unternehmer sollte seine Stärken kennen. Meine Stärken liegen in der Strukturierung, Suchmaschinenoptimierung & Web-Development. Design gehört leider nicht dazu. Und da man sich immer darauf konzentrieren sollte, was man am besten kann, werde ich bei der Gestaltung von dem Designer "Konstantin Nowotny" unterstützt. Als Kollektiv setzen wir seit Jahren gemeinsam Webseiten um. Unser Fokus liegt dabei auf Kunden in der Gesundheitsbranche.'
          />
        </WebdesignSection>
        <WebdesignSection title="Anforderungen">
          <Appearance
            title="SEO-Optimiert oder Ads Landingpage?"
            description='In einem ersten Gespräch besprechen wir deine Wünsche und Anforderungen an deine Webseite. Daraufhin ist es wichtig zu bestimmen, für welche Besucher deine Webseite optimiert werden sollen. Eine Ads-Landingpage hat andere Ansprüche als eine Webseite die in den organischen Suchergebnissen ranken möchte. Nur so können wir bestimmen, welche Technologie die beste für Wahl für das Erreichen deines Zieles ist.'
          />
        </WebdesignSection>
        <WebdesignSection title="Entwicklung">
          <Appearance
            title="Transparente Zusammenarbeit"
            description='Während des Development & Design Prozesses haben alle Beteiligten jederzeit die Möglichkeit, den Fortschritt über eine Live-Url einzusehen. Dabei ist jede Partei aktiv in den Prozess eingebunden. Auf Wunsch können wir auch Impressum und Datenschutz bereitstellen und falls gewünscht, können wir auch eine Fortbetreuung der Webseite übernehmen. Als SEO-Experte stehe ich dir gerne zur Verfügung, um deine Webseite zu optimieren und deine Besucherzahlen zu steigern."'
          />
        </WebdesignSection>
      </SimpleLayout>
    </>
  )
}
