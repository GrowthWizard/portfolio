import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import '@/styles/tailwind.css'

export const metadata = {
  title: 'Allgemeine Geschäftsbedingungen | steindominik.de',
  description: null,
  robots: {
    index: false,
  },
}

export default async function AGB() {
  const legalTextResponse = await fetch(
    `https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/4a249ffbfe961148eb31066bad622331/document/render/html?language=de`
  )
  const legalText = await legalTextResponse.text()

  return (
    <Container.Outer>
      <SimpleLayout
        title="AGB"
        intro="Die vorliegenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen dem Anbieter und dem Kunden geschlossen werden. Von diesen AGB abweichende Geschäftsbedingungen des Kunden gelten nicht, es sei denn, dass der Anbieter und der Kunde dies ausdrücklich vereinbart haben."
      >
        <div className="legal-content">
          <p>
            <strong>Allgemeine Geschäftsbedingungen</strong>
          </p>
          <p>
            {' '}
            <br />
            Dominik Stein (steindominik.de)<br />
            Pflugstr. 13<br />
            10115 Berlin<br />
            Deutschland<br />
        </p>
          <p>nachfolgend: Anbieter</p>
          <br />
          <h2>Allgemeiner Teil</h2>
          <h3>
            Geltungsbereich und Gegenstand
          </h3>
          <p>
            Die vorliegenden Allgemeinen Geschäftsbedingungen (AGB) gelten für
            alle Verträge, die zwischen dem Anbieter und dem Kunden geschlossen
            werden.
          </p>
          <p>
            Von diesen AGB abweichende Geschäftsbedingungen des Kunden gelten
            nicht, es sei denn, dass der Anbieter und der Kunde dies
            ausdrücklich vereinbart haben.
          </p>
          <p>
            Der Anbieter schließt keine Verträge mit Verbrauchern bzw.
            Privatpersonen. Sein Angebot richtet sich ausschließlich an
            Unternehmer.
          </p>
          <p>
            Das Leistungsangebot des Anbieters umfasst unter anderem die
            Erstellung bzw. Entwicklung von Webseiten. Die im Einzelnen
            vereinbarten Leistungen ergeben sich aus dem zwischen dem Anbieter
            und dem Kunden individuell abgeschlossenen Vertrag.
          </p>
          <div>
            <p>
              Der Anbieter ist berechtigt, in eigenem Namen und auf eigene
              Rechnung die erforderlichen Leistungen an Subunternehmer zu
              vergeben, die ihrerseits ebenfalls Subunternehmer einsetzen
              dürfen. Der Anbieter bleibt hierbei alleiniger Vertragspartner des
              Kunden. Der Anbieter wird Subunternehmer nicht einsetzen, sofern
              für ihn ersichtlich ist, dass der Einsatz berechtigten Interessen
              des Kunden zuwiderläuft.
            </p>
          </div>
          <h3>
            Vertragsschluss
          </h3>
          <p>
            Möchte der Kunde Leistungen des Anbieters in Anspruch nehmen, stellt
            er beim Anbieter zunächst eine Anfrage mit einer möglichst genauen
            Beschreibung der von ihm gewünschten Leistungen. Diese Anfrage
            stellt eine Aufforderung zur Abgabe eines Angebots durch den
            Anbieter dar. Der Anbieter wird nach bestem Wissen und Gewissen
            prüfen, ob die in der Anfrage beschriebenen Wünsche des Kunden
            vollständig, eindeutig, realisierbar, frei von Widersprüchen und für
            die gewünschte Umsetzungsform geeignet sind und auf dieser Basis ein
            Angebot erstellen. Der Anbieter wird jedoch keine rechtliche
            Überprüfung der Kundenwünsche vornehmen. Erst, wenn der Kunde das
            Angebot des Anbieters annimmt, kommt ein Vertrag zwischen dem
            Anbieter und dem Kunden zustande.
          </p>
          <p>
            Sofern das Angebot des Anbieters Entwürfe, Muster oder
            gestalterische Vorschläge enthält, jedoch kein Vertrag zustande
            kommt, hat der Kunde keinen Anspruch auf Herausgabe der Entwürfe,
            Muster, gestalterischen Vorschläge oder ggf. der dazugehörigen
            Quellcodes, Kopien etc. Der Kunde hat in diesem Fall sämtliche
            Kopien zu löschen, zu vernichten und/oder oder an den Anbieter
            herauszugeben.
          </p>
          <h3>
            Mitwirkungspflichten des Kunden
          </h3>
          <div>
            <p>
              Der Kunde ist verpflichtet, dem Anbieter einen Ansprechpartner zu
              benennen, der den Auftrag begleitet und zur Abgabe von
              rechtsverbindlichen Willenserklärungen bevollmächtigt ist. Der
              Anbieter wird dem Kunden ebenfalls einen solchen Ansprechpartner
              benennen.
            </p>
          </div>
          <div>
            <p>
              Sofern für einzelne Leistungen der Abschluss eines Vertrages über
              Auftragsverarbeitung (AV-Vertrag) nach Art. 28 DSGVO erforderlich
              ist, verpflichten sich beide Vertragsparteien, einen solchen
              Vertrag vor Beginn der Erbringung der betreffenden Leistungen
              abzuschließen. Der AV-Vertrag ist grundsätzlich vom Anbieter zu
              stellen.
            </p>
          </div>
          <p>
            Der Kunde ist verpflichtet, die von ihm zum Zwecke der
            Auftragserfüllung zur Verfügung zu stellenden Informationen, Daten
            (z.B. für das Impressum), Werke (Texte, Bilder, Layouts, Grafiken
            etc.) und Zugänge vollständig, rechtzeitig und korrekt mitzuteilen.
          </p>
          <p>
            Für die Beschaffung des Materials zur Ausgestaltung der Webseiten
            und sonstigen Werke (z.B. Grafiken, Texte) ist der Kunde selbst
            verantwortlich, es sei denn, dass der Anbieter und der Kunde
            ausdrücklich etwas anderes vereinbart haben. Stellt der Kunde das
            Material nicht oder nicht rechtzeitig zur Verfügung und macht er
            auch keine weitergehenden Vorgaben, ist der Anbieter berechtigt,
            nach eigener Wahl unter Beachtung der urheberrechtlichen
            Kennzeichnungsvorgaben Bildmaterial gängiger Anbieter (z.B.
            Stockfoto-Anbieter) zu verwenden oder die entsprechenden Teile der
            Webseite mit einem Platzhalter zu versehen.
          </p>
          <p>
            Leistet der Kunde (notwendige) Mit- bzw. Zuarbeit verspätet, haftet
            der Anbieter nicht für dadurch entstehende Verzögerungen und
            Verspätungen bei der Umsetzung von Projekten.
          </p>
          <p>
            Stellt der Kunde dem Anbieter im Rahmen des Auftrags Texte, Bilder
            oder sonstige Inhalte zur Verfügung, ist der Kunde dafür
            verantwortlich, dass diese Inhalte nicht gegen die Rechte Dritter
            (z.B. Urheberrechte) verstoßen. Dem Anbieter ist es von Rechts wegen
            nicht erlaubt, Rechtsberatungsdienstleistungen gegenüber dem Kunden
            zu erbringen. Der Anbieter ist insbesondere nicht verpflichtet und
            nicht berechtigt, das Geschäftsmodell des Kunden und/oder die vom
            Kunden selbst erstellten oder erworbenen Werke (Texte, Bilder,
            Layouts, Grafiken etc.) auf ihre Vereinbarkeit mit dem geltenden
            Recht zu prüfen und wird insbesondere keine Markenrecherchen oder
            sonstigen Schutzrechtskollisionsprüfungen in Bezug auf die vom
            Kunden zur Verfügung gestellten Werke vornehmen. Erteilt der Kunde
            bestimme Weisungen bzgl. des herzustellenden Werks, haftet er
            hierfür selbst.
          </p>
          <p>
            Kommt der Kunde seinen Verpflichtungen aus dieser Ziffer nicht nach,
            kann der Anbieter gegenüber dem Kunden den hierdurch entstehenden
            Zeitaufwand (z.B. Kosten für Stockfotos und Zeitaufwand für deren
            Suche) in Rechnung stellen.
          </p>
          <h3>
            Abnahme
          </h3>
          <p>
            Der Anbieter ist berechtigt, die Abnahme von Werkleistungen in
            Schriftform zu verlangen. Der Kunde schuldet die schriftliche
            Abnahme nur, wenn der Anbieter ihn hierzu auffordert. Die
            Abnahmebestimmungen des Bürgerlichen Gesetzbuches bleiben im Übrigen
            unberührt.
          </p>
          <p>
            Der Anbieter und der Kunde legen die Abnahmefrist im Sinne des § 640
            Abs. 2 S. 1 BGB auf 2 Wochen ab Mitteilung über die Fertigstellung
            des Werks fest, sofern nicht im Einzelfall aufgrund besonderer
            Umstände eine längere Abnahmefrist erforderlich ist, die der
            Anbieter dem Kunden in diesem Fall gesondert mitteilen wird. Sofern
            sich der Kunde innerhalb der Abnahmefrist nicht äußert oder die
            Abnahme nicht wegen eines Mangels verweigert, gilt das Werk als
            abgenommen.
          </p>
          <h3>
            Vergütung
          </h3>
          <p>
            Der Anbieter und der Kunde schließen eine individualvertragliche
            Vereinbarung über die Vergütung des Auftrages, die sich
            grundsätzlich nach dem Angebot richtet.
          </p>
          <div>
            <p>
              Der Anbieter ist berechtigt, seine Preise regelmäßig in dem Umfang
              anzupassen, in dem seine eigenen Kosten für die Erbringung der
              Dienstleistung steigen. Kunden mit bestehenden Verträgen werden
              über die Preisanpassung spätestens einen Monat vor Inkrafttreten
              der Änderung per E-Mail benachrichtigt. Sofern der Kunde nicht
              innerhalb der in der Änderungsmitteilung gesetzten Frist
              widerspricht, gilt dies als Zustimmung. Die Benachrichtigung über
              die beabsichtigte Preisanpassung wird auf die Frist und die Folgen
              des Widerspruchs oder seines Ausbleibens hinweisen. Sofern der
              Kunde der Preisanpassung widerspricht, wird sein Vertrag zum
              Zeitpunkt des Inkrafttretens der Preisanpassung außerordentlich
              gekündigt.
            </p>
          </div>
          <div>
            <h3>
              Vertragslaufzeit bei Dauerschuldverhältnissen
            </h3>
            <p>
              Vorbehaltlich abweichender Bestimmungen inner- und außerhalb
              dieser AGB haben Dauerschuldverhältnisse (z.B. Wartungsverträge)
              eine Mindestlaufzeit von 3 Monaten. Die Kündigungsfrist beträgt 1
              Monat . Wird der Vertrag nicht fristgerecht zum Laufzeitende
              gekündigt, verlängert er sich automatisch um weitere 3 Monate.
            </p>
            <p>
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
              bleibt unberührt.
            </p>
          </div>
          <h3>
            Mängelgewährleistung, Haftung und Freistellung
          </h3>
          <p>
            Ein unwesentlicher Mangel begründet keine Mängelansprüche. Die Wahl
            der Art der Nacherfüllung liegt beim Anbieter. Die Verjährungsfrist
            für Mängel und sonstige Ansprüche beträgt ein (1) Jahr; diese
            Verjährungsverkürzung gilt nicht für Ansprüche, die aus Vorsatz,
            grober Fahrlässigkeit oder aus der Verletzung von Leib, Leben oder
            Gesundheit durch den Anbieter resultieren. Die Verjährung beginnt
            nicht erneut, sofern im Rahmen der Mängelhaftung eine
            Ersatzlieferung erfolgt. Im Übrigen bleibt die gesetzliche
            Mängelgewährleistung unberührt.
          </p>
          <p>
            Die Haftung des Anbieters für sämtliche Schäden wird wie folgt
            beschränkt: Bei einer leicht fahrlässigen Verletzung einer
            wesentlichen Vertragspflicht („Kardinalpflicht“) haftet der Anbieter
            jeweils der Höhe nach begrenzt auf den bei Vertragsschluss
            vorhersehbaren, vertragstypischen Schaden. Kardinalpflichten sind
            solche Pflichten, deren Erfüllung die ordnungsgemäße Durchführung
            des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung eine
            Partei regelmäßig vertrauen darf. Diese Haftungsbeschränkung gilt
            nicht bei grober Fahrlässigkeit oder bei vorsätzlichem Handeln sowie
            im Falle zwingender gesetzlicher Haftung, insbesondere bei Übernahme
            einer Garantie oder bei schuldhafter Verletzung des Lebens, des
            Körpers oder der Gesundheit. Die vorstehende Haftungsregelung gilt
            auch im Hinblick auf die Haftung des Anbieters für seine
            Erfüllungsgehilfen und gesetzlichen Vertreter.
          </p>
          <p>
            Der Kunde stellt den Anbieter von jeglichen Ansprüchen Dritter frei,
            die gegen den Anbieter aufgrund von Verstößen des Kunden gegen diese
            AGB oder gegen geltendes Recht geltend gemacht werden.
          </p>
          <div>
            <h2> Leistungen für Webseiten</h2>
          </div>
          <div>
            <h3>
              Erstellung von Webseiten{' '}
            </h3>

            <p>
              Gegenstand von zwischen dem Anbieter und dem Kunden geschlossenen
              Verträgen zur Erstellung von Webseiten ist grundsätzlich die
              Entwicklung neuer Webseiten oder die Erweiterung bestehender
              Webseiten (z.B. Einbindung neuer Schnittstellen) unter Beachtung
              der technischen und / oder gestalterischen Vorgaben des Kunden.
              Zwischen dem Anbieter und dem Kunden geschlossene Verträge zur
              Erstellung von Webseiten sind Werkverträge im Sinne von §§ 631 ff.
              BGB.
            </p>
            <div>
              <p>
                Sofern der Anbieter und der Kunde nichts anderes vereinbart
                haben, sind die erstellten Webseiten für Mobilgeräte optimiert.
              </p>
            </div>
            <div>
              <p>
                Sofern nichts abweichendes vereinbart wurde, sind die Erstellten
                Webseiten für alle gängigen Browser in ihrer jeweils aktuellen
                Fassungen optimiert (jeweils die letzten zwei Versionen des
                Browsers).
              </p>
            </div>
            <p>
              Die Prüfung oder Beschaffung von Rechten, die Beschaffung von
              Tools (z.B. Statistik) oder Zertifikaten (z.B. SSL / TLS) oder die
              Überlassung von Quellcodes, Entwicklungs-, Anwendungs- oder
              sonstiger Zusatzdokumentation sind vom Anbieter nur dann zu
              erbringen, wenn dies individualvertraglich ausdrücklich vereinbart
              wurde.
            </p>
            <p>
              Nach Fertigstellung der Webseite wird der Anbieter den Kunden zur
              Abnahme der Webseite auffordern.
            </p>
            <div>
              <p>
                Der Kunde kann jederzeit auf die Entwicklungsseite zugreifen und
                Wünsche einbringen, soweit diese vom ursprünglich vereinbarten
                Leistungsumfang umfasst sind. Derartige Anpassungen werden
                Bestandteil des ursprünglichen Vertrags, wenn der Anbieter und
                der Kunde in Textform (z.B. per E-Mail) zustimmen. Im Übrigen
                ist der Anbieter nur zur Herstellung der im Vertrag
                aufgelisteten Funktionen / Positionen bzw. zur Erbringung der
                vereinbarten Dienstleistung (z.B. Wartung) verpflichtet.
                Darüberhinausgehende Leistungen müssen gesondert vereinbart und
                vergütet werden.
              </p>
            </div>
            <div>
              <p>
                Sofern der Kunde für die neue Webseite keine
                Hosting-Dienstleistungen vom Anbieter, sondern von
                Drittanbietern in Anspruch nimmt, übernimmt der Anbieter keine
                Verantwortung für die jeweiligen Server und deren Konfiguration,
                die Datenleitungen und / oder die Abrufbarkeit der Webseite.
              </p>
            </div>
            <p>
              Sofern der Anbieter und der Kunde keine zusätzlichen Wartungs- und
              Pflegeleistungen vereinbart haben, ist nach Abnahme allein der
              Kunde für die technische Instandhaltung und Aktualität der
              Webseite verantwortlich. Der Anbieter haftet gegenüber dem Kunden
              nicht für eventuelle Sicherheitslücken, die durch die Verwendung
              veralteter Software von Dritten zu rechtswidrigen Zwecken
              ausgenutzt werden (Hacking).
            </p>
          </div>
          <div>
            <h3>
              Erstellung des Impressums und der Datenschutzerklärung mit
              Generatoren
            </h3>
            <p>
              Sofern der Anbieter und der Kunde dies vereinbart haben, erstellt
              der Anbieter die Datenschutzerklärung und das Impressum für die
              Webseite des Kunden. Hierzu verwendet der Anbieter Generatoren.
              Der Anbieter schuldet hierbei lediglich die Erstellung der Texte
              mit den Generatoren; für die rechtliche und inhaltliche
              Überprüfung ist der Kunde selbst verantwortlich.
            </p>
            <p>
              Der Kunde ist verpflichtet, dem Anbieter sämtliche notwendigen
              Informationen für die Erstellung rechtzeitig, korrekt und
              vollständig mitzuteilen. Über besondere Informationspflichten im
              Rahmen des Impressums (z.B. Berufshaftpflichtversicherung,
              zulassungspflichtige Berufe etc.) und der Datenschutzerklärung hat
              der Kunde sich und den Anbieter selbstständig zu unterrichten. Es
              wird in diesem Zusammenhang noch einmal darauf hingewiesen, dass
              es dem Anbieter von Rechts wegen nicht erlaubt ist,
              Rechtsberatungsleistungen ggü. dem Kunden zu erbringen.
            </p>
            <p>
              Änderungen, welche die Angaben im Impressum oder in der
              Datenschutzerklärung betreffen, hat der Kunde dem Anbieter
              selbstständig und unverzüglich mitzuteilen.
            </p>
            <p>
              Eine Aktualisierung des Impressums oder der Datenschutzerklärung
              nach Fertigstellung und Abnahme der Webseite hat der Kunde beim
              Anbieter gesondert zu beauftragen, sofern individualvertraglich
              nicht etwas anderes vereinbart wurde.
            </p>
          </div>
          <div>
            <h3>
              Webhosting (Resell)
            </h3>
            <p>
              Der Anbieter und der Kunde können, insbesondere als Zusatzoption
              im Rahmen der Webseitenerstellung, die Erbringung von
              Hostingleistungen vereinbaren. Der spezifische Leistungsumfang
              (Speicherplatz, Zertifikate etc.) ist Gegenstand
              individualvertraglicher Vereinbarungen zwischen den Parteien. Der
              Anbieter ist berechtigt, Leistungen Dritter in jeglicher Form im
              Zusammenhang mit der Ausführung von Hostingleistungen in Anspruch
              zu nehmen.
            </p>
            <p>
              Sofern der Anbieter und der Kunde nichts anderes vereinbart haben,
              übernimmt der Anbieter im Falle einer Beauftragung als Hoster die
              Administration und Verwaltung der Daten. Der Kunde erhält
              grundsätzlich keinen Zugang zum Administrationsbackend des
              Hostingsystems.
            </p>
            <p>
              Die Verfügbarkeit der vom Anbieter zum Zwecke des Hostings
              verwendeten Server liegt bei mindestens 99% im Jahresmittel.
              Hiervon ausgenommen sind diejenigen Zeiten, innerhalb derer die
              Server aufgrund durch vom Anbieter nicht beeinflussbarer
              Ereignisse nicht erreichbar sind (Höhere Gewalt, Handlungen
              Dritter, technische Probleme etc.).
            </p>
            <p>
              Sofern der Anbieter und der Kunde nichts anderes vereinbart haben,
              besteht kein Anspruch des Kunden auf die Zuweisung einer festen
              IP-Adresse für seine Internetpräsenz. Technisch oder rechtlich
              bedingte Änderungen sind jederzeit möglich und bleiben
              vorbehalten.
            </p>
            <p>
              Der Kunde ist verpflichtet, seine Passwörter und sonstigen
              Zugangsdaten – sofern ihm solche vom Anbieter zur Verfügung
              gestellt wurden – nicht an Dritte weiterzugeben und regelmäßig zu
              ändern. Für eventuellen Missbrauch durch Dritte ist der Kunde
              selbst verantwortlich, soweit er diesen zu vertreten hat.
            </p>
            <p>
              Der Kunde ist verpflichtet, regelmäßige Sicherungskopien seiner
              gehosteten Daten zu erstellen. Ist der Kunde hierzu nicht in der
              Lage, hat er den Anbieter oder andere hierzu fachlich geeignete
              Dritte mit der Sicherung zu beauftragen. Für eventuelle
              Datenverluste, die aufgrund mangelnder Datensicherung entstehen,
              haftet der Kunde selbst.
            </p>
          </div>
          <div>
            <h3>
              Domainregistrierung
            </h3>
            <p>
              Der Anbieter und der Kunde können, insbesondere als Zusatzoption
              im Rahmen der Webseitenerstellung, die Erbringung von
              Domainregistrierungsleistungen vereinbaren. Der spezifische
              Leistungsumfang ist Gegenstand individualvertraglicher
              Vereinbarungen zwischen den Parteien.
            </p>
            <p>
              Das zur Registrierung der jeweiligen Domain erforderliche
              Vertragsverhältnis kommt direkt zwischen dem Kunden und der
              jeweiligen Domainvergabestelle bzw. dem jeweiligen Registrar
              zustande. Der Anbieter wird im Verhältnis zwischen Kunde und
              Vergabestelle lediglich als Vermittler tätig, ohne eigenen
              Einfluss auf die Vergabe der Domain zu haben.
            </p>
            <p>
              Der Kunde trägt die alleinige Verantwortung dafür, dass die von
              ihm gewünschte Domain keine Rechte Dritter verletzt. Eine
              Überprüfung der Domain durch den Anbieter ist nicht geschuldet.
            </p>
            <p>
              Für die Registrierung von Domains gelten ergänzend die jeweiligen
              Bedingungen der einzelnen Vergabestellen. Der Anbieter wird den
              Kunden im Falle einer beabsichtigten Registrierung auf eventuelle
              Besonderheiten hinweisen.
            </p>
          </div>
          <div>
            <h3>
              Wartung und Pflege von Webseiten
            </h3>
            <p>
              Nach der Fertigstellung einer Webseite und / oder einzelner Teile
              hiervon kann der Anbieter dem Kunden Wartungs- und
              Pflegeleistungen in Bezug auf die Webseite anbieten. Der Anbieter
              kann auch die Wartung von Drittwebseiten anbieten. Jedoch ist
              weder der Anbieter zu einem solchen Angebot verpflichtet, noch
              muss der Kunde die weitergehenden Leistungsangebote des Anbieters
              in Anspruch nehmen. Entsprechende Vereinbarungen sind
              ausschließlich Gegenstand von Individualvereinbarungen.
            </p>
            <p>
              Gegenstand der Wartungsverträge ist die Beseitigung von
              Funktionsstörungen sowie die anlassbezogene Aktualisierung der
              Webseite für gängige Webbrowser in ihrer jeweils aktuellen Version
              durch den Anbieter. Weitere Details, wie z.B. regelmäßige
              Wartungen, können ggf. individualvertraglich vereinbart werden.
            </p>
            <p>
              Voraussetzung für die Wartung ist, dass die zu wartenden Inhalte
              mit den Systemen des Anbieters kompatibel sind. Die Kompatibilität
              kann insbesondere durch veraltete Komponenten der zu wartenden
              Inhalte oder durch eigenmächtige Änderungen von Seiten des Kunden
              beeinträchtigt werden. Sollte die Kompatibilität nicht
              gewährleistet sein, muss der Kunde diese selbstständig herstellen
              (z.B. durch entsprechende Updates) oder den Anbieter gesondert mit
              der Herstellung der Kompatibilität beauftragen.
            </p>
            <p>
              Der Anbieter haftet nicht für Funktionsstörungen und
              Inkompatibilitäten, die durch eigenmächtige Änderungen des Kunden
              verursacht wurden oder auf sonstigen Fehlern beruhen, die nicht im
              Verantwortungsbereich des Anbieters liegen; die Vorschriften unter
              „Haftung und Freistellung“ bleiben hiervon unberührt.
            </p>
            <p>
              Die Wartung umfasst nur die technische, nicht jedoch die
              inhaltliche Aktualisierung der Webseite, insbesondere nicht die
              Aktualisierung des Impressums oder der Datenschutzerklärung, es
              sei denn, dass der Anbieter und der Kunde dies ausdrücklich
              vereinbart haben.
            </p>
          </div>
          <div>
            <h2>Marketing und Content</h2>
          </div>
          <div>
            <h3>
              SEO-Marketing
            </h3>
            <p>
              Vereinbaren der Anbieter und der Kunde Dienstleistungen im Bereich
              des SEO-Marketings, schuldet der Anbieter im Rahmen der
              Leistungserbringung ausschließlich die Durchführung von Maßnahmen,
              die nach eigener Erfahrung des Anbieters das Suchmaschinen-Ranking
              positiv beeinflussen können oder die vom Auftraggeber ausdrücklich
              verlangt werden. Hierbei handelt es sich um eine Dienstleistung im
              Sinne von §§ 611 ff. BGB. Ein bestimmtes Ergebnis (z.B. ein
              bestimmtes Ranking in der Google Trefferliste) wird im Rahmen der
              SEO-Dienstleistungen nicht geschuldet, es sei denn, dass der
              Anbieter und der Kunde dies ausdrücklich vereinbart haben.
            </p>
            <div>
              <p>
                SEO-Marketing-Leistungen können von beiden Vertragsparteien mit
                einer Kündigungsfrist von einem (1) Monat wieder abbestellt
                werden.
              </p>
            </div>
          </div>
          <div>
            <h3>
              Content-Marketing{' '}
            </h3>
            <p>
              Vereinbaren der Anbieter und der Kunde ein professionelles Content
              Marketing (Texterstellung/Copywriting) , richtet sich die
              Abrechnung und Dauer der Beauftragung nach den Vorgaben des
              angenommenen Angebotes.
            </p>
            <p>
              Die Inhalte der Texte richten sich nach den Vorgaben des Kunden.
              Sobald der vereinbarte Text fertiggestellt wurde, wird der
              Anbieter die erstellten Texte dem Kunden zur Durchsicht und
              Freigabe übersenden.{' '}
            </p>
            <p>
              Soweit nicht anders vereinbart, steht dem Kunden das Recht auf
              zwei Korrektur- bzw. Änderungsschleifen zu. Reklamationen
              hinsichtlich der stilistischen Gestaltung oder die Einbindung
              neuer Informationen in den Text sind nach der zweiten
              Änderungsschleife grundsätzlich ausgeschlossen. Wünscht der Kunde
              darüber hinaus weitere Änderungen, so hat er die Mehrkosten zu
              tragen.
            </p>
            <p>
              Sofern der Anbieter mit der Einbindung der Texte in öffentlichen
              Medien (z.B. Online- oder Printmedien) beauftragt wurde, wird der
              Anbieter nur Texte publizieren, die vom Kunden freigegeben worden
              sind. Für Fehler, die nach der Freigabe entdeckt werden, haftet
              der Anbieter ausschließlich nach Maßgabe der Vorschriften unter
              der Überschrift „Mängelgewährleistung, Haftung und Freistellung“.
            </p>
          </div>
          <div>
            <h2> Beratung und Consulting</h2>
          </div>
          <div>
            <h3>
              Beratungsleistungen
            </h3>
            <p>
              Vereinbaren der Anbieter und der Kunde die Erbringung von
              Beratungsleistungen, schuldet der Anbieter im Rahmen der
              Leistungserbringung ausschließlich eine Beurteilung des
              Beratungsgegenstandes nach bestem Wissen und Gewissen. Es wird
              insbesondere keine Rechtsberatung geschuldet.
            </p>
            <p>
              Bei Beratungsleistungen handelt es sich um eine Dienstleistung im
              Sinne von §§ 611 ff. BGB. Ein bestimmtes Ergebnis wird im Rahmen
              der Dienstleistung in Form der Beratung dagegen nur dann
              geschuldet, wenn der Anbieter und der Kunde dies ausdrücklich
              vereinbart haben.
            </p>
          </div>
          <div>
            <h3>
              UX- / UI-Beratung
            </h3>
            <p>
              Vereinbaren der Anbieter und der Kunde die Erbringung von UX-(User
              Experience) und / oder UI-(User Interface) Beratungsleistungen,
              schuldet der Anbieter im Rahmen der Leistungserbringung
              ausschließlich eine Beurteilung des UX- / UI-Design der mobilen
              Apps / des Webdesign des Kunden und eine Empfehlung für zukünftige
              Designmaßnahmen. Hierbei handelt es sich um eine Dienstleistung im
              Sinne von §§ 611 ff. BGB. Ein bestimmtes Ergebnis (z.B. Conversion
              Rate, Verweildauer) wird im Rahmen der Dienstleistung in Form der
              UX-/ UI-Beratung dagegen nur dann geschuldet, wenn der Anbieter
              und der Kunde dies ausdrücklich vereinbart haben.
            </p>
            <p>
              Die Abrechnung und Dauer der Beauftragung richten sich nach den
              Vorgaben des angenommenen Angebots.
            </p>
          </div>
          <div>
            <h3>
              Marktbeobachtung
            </h3>
            <p>
              Vereinbaren der Anbieter und der Kunde Dienstleistungen im Bereich
              der Marktbeobachtung, schuldet der Anbieter im Rahmen der
              Leistungserbringung ausschließlich die Marktbeobachtungsmaßnahmen,
              die vorab mit dem Kunden abgestimmt wurden. Hierbei handelt es
              sich um eine Dienstleistung im Sinne von §§ 611 ff. BGB. Ein
              bestimmtes Ergebnis (z.B. Verkaufszahlen) kann basierend auf der
              Marktbeobachtung nicht zugesichert werden, es sei denn, dass der
              Anbieter und der Kunde dies ausdrücklich vereinbart haben.
            </p>
            <p>
              Die Abrechnung und Dauer der Beauftragung richten sich nach den
              Vorgaben des angenommenen Angebots.
            </p>
          </div>
          <h2> Schlussbestimmungen</h2>
          <h3>
            Rechteeinräumung/Eigenwerbung
          </h3>
          <p>
            Nach vollständiger Bezahlung des Auftrags durch den Kunden räumt der
            Anbieter dem Kunden den entsprechenden Arbeitsergebnissen im
            Zeitpunkt ihrer Entstehung grundsätzlich ein einfaches Nutzungsrecht
            ein. Weitergehende Rechte können individualvertraglich vereinbart
            werden.
          </p>
          <p>
            Sofern nichts Abweichendes vereinbart wurde, erteilt der Kunde dem
            Anbieter ausdrücklich die Erlaubnis, das Projekt zum Zwecke der
            Eigenwerbung (Referenzen/Portfolio) in angemessener Weise öffentlich
            darzustellen. Insbesondere ist der Anbieter dazu berechtigt, mit der
            Geschäftsbeziehung zu dem Kunden zu werben und auf allen erstellten
            Werbemitteln und bei allen Werbemaßnahmen auf sich als Urheber
            hinzuweisen, ohne dass dem Kunden dafür ein Entgeltanspruch zusteht.
          </p>
          <div>
            <p>
              Ferner ist der Anbieter berechtigt, den eigenen Namen mit
              Verlinkung in angemessener Weise im Footer und im Impressum der
              vom Anbieter erstellten Webseite(n) zu platzieren, ohne dass dem
              Kunden hierfür ein Entgeltanspruch zusteht.
            </p>
          </div>
          <h3>
            Vertraulichkeit
          </h3>
          <p>
            Der Anbieter wird alle ihm zur Kenntnis gelangenden
            Geschäftsvorgänge, insbesondere Druckunterlagen, Layouts,
            Storyboards, Zahlenmaterial, Zeichnungen, Tonbänder, Bilder, Videos,
            DVD, CD-ROMs, interaktive Produkte und solche anderen Unterlagen,
            welche Filme und/oder Hörspiele und/oder sonstige urheberrechtlich
            geschützte Materialien des Kunden oder mit ihm verbundenen
            Unternehmen enthalten, streng vertraulich behandeln.
          </p>
          <p>
            Der Anbieter verpflichtet sich, die Geheimhaltungspflicht sämtlichen
            Angestellten und/oder Dritten (bspw. Lieferanten, Grafikern,
            Programmierern, Filmproduzenten, Tonstudios etc.), welche Zugang zu
            den vorbezeichneten Geschäftsvorgängen haben, aufzuerlegen.
          </p>
          <p>
            Die Geheimhaltungspflicht gilt zeitlich unbegrenzt über die Dauer
            dieses Vertrages hinaus.
          </p>
          <h3>
            Sonstiges
          </h3>
          <p>
            Die zwischen dem Anbieter und den Kunden geschlossenen Verträge
            unterliegen dem materiellen Recht der Bundesrepublik Deutschland
            unter Ausschluss des UN-Kaufrechts.
          </p>
          <p>
            Sofern der Kunde Kaufmann, juristische Person des öffentlichen
            Rechts oder öffentlich-rechtliches Sondervermögen ist oder keinen
            allgemeinen Gerichtsstand in Deutschland hat, vereinbaren die
            Parteien den Sitz des Anbieters als Gerichtsstand für sämtliche
            Streitigkeiten aus diesem Vertragsverhältnis; ausschließliche
            Gerichtsstände bleiben hiervon unberührt.
          </p>
          <div>
            <p>
              Der Anbieter ist berechtigt, diese AGB aus sachlich
              gerechtfertigten Gründen (z.B. Änderungen in der Rechtsprechung,
              Gesetzeslage, Marktgegebenheiten oder der Geschäfts- oder
              Unternehmensstrategie) und unter Einhaltung einer angemessenen
              Frist zu ändern. Kunden mit bestehenden Verträgen werden hierüber
              spätestens zwei Wochen vor Inkrafttreten der Änderung per E-Mail
              benachrichtigt. Sofern der Kunde nicht innerhalb der in der
              Änderungsmitteilung gesetzten Frist widerspricht, gilt dies als
              Zustimmung. Die Benachrichtigung über die beabsichtigte Änderung
              dieser AGB wird auf die Frist und die Folgen des Widerspruchs oder
              seines Ausbleibens hinweisen. Sofern der Kunde der Änderung
              widerspricht, ist der Anbieter berechtigt, den Vertrag zum
              Zeitpunkt des Inkrafttretens der Änderung außerordentlich zu
              kündigen.
            </p>
          </div>
          <br />
          <div>
            <p>
              Im Falle von Abweichungen zwischen der deutschen und der
              englischen Fassung hat die deutsche Fassung Vorrang.
            </p>
          </div>
          <p>
            <strong>Stand:</strong> 01.10.2024
          </p>
        </div>
      </SimpleLayout>
    </Container.Outer>
  )
}
