import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Impressum | steindominik.de',
  description: null,
  robots: {
    index: false,
  },
}

export default async function Impressum() {
  return (
    <SimpleLayout title="Impressum" intro='Wussten Sie, dass in Deutschland eine Impressumspflicht gilt? Auch Anbieterkennzeichnung genannt. Für bestimmte Unternehmensformen und Berufsgruppen gelten unterschiedliche Regeln. Eine erfolgreiche Kundenbetreuung bedeutet, sich auch mit diesen Besonderheiten auseinanderzusetzen.'>
      <div className="legal-content">
        <h2>Anbieter:</h2>

        <p>
          steindominik.de
          <br />
          Pflugstr. 13
          <br />
          10115 Berlin
          <br />
          Deutschland
        </p>
        <div>
          <p>Umsatzsteuer-Identifikationsnummer: DE296041107</p>
        </div>

        <p>Telefonnummer: +4915678554040</p>
        <p>E-Mail-Adresse: hello@steindominik.de</p>

        <div>
          <h2>Verantwortlich für journalistisch-redaktionelle Inhalte:</h2>

          <p>
            Dominik Stein
            <br />
            steindominik.de
            <br />
            Pflugstr. 13
            <br />
            10115 Berlin
            <br />
            Deutschland
          </p>

          <p>Telefonnummer: +4915678554040</p>

          <p>E-Mail-Adresse: hello@steindominik.de</p>

          <br />
        </div>
      </div>
    </SimpleLayout>
  )
}
