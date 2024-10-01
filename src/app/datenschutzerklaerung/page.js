import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Datenschutzerklärung | steindominik.de',
  description: null,
  robots: {
    index: false,
  },
}

export default async function Datenschutzerklaerung() {
  return (
    <SimpleLayout title="Datenschutzerklärung" intro='Datenschutz ist mir und bei meinen Kundenprojekten sehr wichtig. Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.'>
      <div className="legal-content">
        <h2>Allgemein</h2>
        <p>
          Als Betreiber dieser Webseite und als Unternehmen kommen wir mit Ihren
          personenbezogenen Daten in Kontakt. Gemeint sind alle Daten, die etwas
          über Sie aussagen und mit denen Sie identifiziert werden können. In
          dieser Datenschutzerklärung möchten wir Ihnen erläutern, in welcher
          Weise, zu welchem Zweck und auf welcher rechtlichen Grundlage wir Ihre
          Daten verarbeiten.
        </p>
        <p>
          Für die Datenverarbeitung auf dieser Webseite und in unserem
          Unternehmen ist verantwortlich:
        </p>
        <p>steindominik.de<br />
            Pflugstr. 13<br />
            10115 Berlin<br />
            Deutschland</p>
        <p>Telefon: +4915678554040</p>
        <p>E-Mail: hello@steindominik.de</p>
        <h2>Allgemeine Hinweise</h2>
        <div>
          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Wenn Sie Ihre Daten auf Webseiten eingeben, Online-Bestellungen
            aufgeben oder E-Mails über das Internet verschicken, müssen Sie
            immer damit rechnen, dass unberechtigte Dritte auf Ihre Daten
            zugreifen. Einen vollständigen Schutz vor solchen Zugriffen gibt es
            nicht. Wir setzen jedoch alles daran, Ihre Daten bestmöglich zu
            schützen und die Sicherheitslücken zu schließen, soweit es uns
            möglich ist.
          </p>
          <p>
            Ein wichtiger Schutzmechanismus ist die SSL- bzw.
            TLS-Verschlüsselung unserer Webseite, die dafür sorgt, dass Daten,
            die Sie an uns übermitteln, nicht von Dritten mitgelesen werden
            können. Sie erkennen die Verschlüsselung an dem Schloss-Icon vor der
            eingegebenen Internetadresse in Ihrem Browser und daran, dass unsere
            Internetadresse mit https:// beginnt und nicht mit http://.
          </p>
        </div>
        <h3>Wie lange speichern wir Ihre Daten?</h3>
        <p>
          An manchen Stellen in dieser Datenschutzerklärung informieren wir Sie
          darüber, wie lange wir oder die Unternehmen, die Ihre Daten in unserem
          Auftrag verarbeiten, Ihre Daten speichern. Fehlt eine solche Angabe,
          speichern wir Ihre Daten, bis der Zweck der Datenverarbeitung
          entfällt, Sie der Datenverarbeitung widersprechen oder Sie Ihre
          Einwilligung in die Datenverarbeitung widerrufen.
        </p>
        <p>
          Im Falle eines Widerspruchs oder Widerrufs dürfen wir Ihre Daten
          allerdings weiterverarbeiten, wenn mindestens eine der folgenden
          Voraussetzungen vorliegt:
        </p>
        <ul>
          <li>
            <p>
              Wir haben zwingende schutzwürdige Gründe für die Fortsetzung der
              Datenverarbeitung, die Ihre Interessen, Rechte und Freiheiten
              überwiegen (nur bei Widerspruch gegen die Datenverarbeitung; wenn
              sich der Widerspruch gegen Direktwerbung richtet, können wir keine
              schutzwürdigen Gründe vorbringen).
            </p>
          </li>
          <li>
            <p>
              Die Datenverarbeitung ist erforderlich, um Rechtsansprüche geltend
              zu machen, auszuüben oder zu verteidigen (gilt nicht, wenn sich
              Ihr Widerspruch gegen Direktwerbung richtet).
            </p>
          </li>
          <li>
            <p>Wir sind gesetzlich verpflichtet, Ihre Daten aufzubewahren.</p>
          </li>
        </ul>
        <p>
          In diesem Fall löschen wir Ihre Daten, sobald die Voraussetzung(en)
          entfällt bzw. entfallen.
        </p>
        <div>
          <h3>Datenweitergabe in die USA</h3>
          <p>
            Wir nutzen auf unserer Webseite auch Tools von Unternehmen, die Ihre
            Daten in die USA übermitteln und dort speichern und ggf.
            weiterverarbeiten. Die Europäische Kommission hat einen
            Angemessenheitsbeschluss für den Datenschutzrahmen EU-USA
            angenommen. Dadurch wird festgestellt, dass die USA ein angemessenes
            Schutzniveau für personenbezogene Daten aus der EU gewährleisten,
            die an US-Unternehmen übermittelt werden. Dieser Beschluss basiert
            auf neuen Garantien und Maßnahmen, die von den USA eingeführt
            wurden, um den Datenschutzanforderungen gerecht zu werden. Der
            Angemessenheitsbeschluss beinhaltet unter anderem Beschränkungen und
            Garantien in Bezug auf den Zugang der US-Nachrichtendienste zu den
            Daten. Es wurden verbindliche Garantien eingeführt, um den Zugang
            der US-Nachrichtendienste auf das erforderliche und verhältnismäßige
            Maß zum Schutz der nationalen Sicherheit zu beschränken. Zudem wurde
            eine verstärkte Aufsicht über die Tätigkeiten der
            US-Nachrichtendienste etabliert, um sicherzustellen, dass die
            Beschränkungen für Überwachungstätigkeiten eingehalten werden. Es
            wurde außerdem ein unabhängiges Rechtsbehelfsverfahren eingerichtet,
            um Beschwerden von europäischen Bürgern über den Zugang ihrer Daten
            zu bearbeiten und zu lösen. Der Datenschutzrahmen EU-USA ermöglicht
            es somit europäischen Unternehmen, Daten an zertifizierte
            US-Unternehmen zu übermitteln, ohne zusätzliche Datenschutzgarantien
            einführen zu müssen. Eine Liste aller zertifizierten Unternehmen
            können Sie unter folgendem Link einsehen:{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.dataprivacyframework.gov/s/participant-search"
            >
              https://www.dataprivacyframework.gov/s/participant-search
            </a>
          </p>
          <p>
            Eine Änderung der Entscheidung der Europäischen Kommission kann
            nicht ausgeschlossen werden.
          </p>
        </div>
        <h3>Ihre Rechte</h3>
        <h4>Widerspruch gegen die Datenverarbeitung</h4>
        <p>
          WENN SIE IN DIESER DATENSCHUTZERKLÄRUNG LESEN, DASS WIR BERECHTIGTE
          INTERESSEN FÜR DIE VERARBEITUNG IHRER DATEN HABEN UND DIESE DESHALB
          AUF ART. 6 ABS. 1 SATZ 1 LIT. F) DSGVO STÜTZEN, HABEN SIE NACH ART. 21
          DSGVO DAS RECHT, WIDERSPRUCH DAGEGEN EINZULEGEN. DAS GILT AUCH FÜR EIN
          PROFILING, DAS AUF GRUNDLAGE DER GENANNTEN VORSCHRIFT ERFOLGT.
          VORAUSSETZUNG IST, DASS SIE GRÜNDE FÜR DEN WIDERSPRUCH ANFÜHREN, DIE
          SICH AUS IHRER BESONDEREN SITUATION ERGEBEN. EINE BEGRÜNDUNG IST NICHT
          ERFORDERLICH, WENN SICH DER WIDERSPRUCH GEGEN DIE NUTZUNG IHRER DATEN
          ZUR DIREKTWERBUNG RICHTET.
        </p>
        <p>
          FOLGE DES WIDERSPRUCHS IST, DASS WIR IHRE DATEN NICHT MEHR VERARBEITEN
          DÜRFEN. DAS GILT NUR DANN NICHT, WENN EINE DER FOLGENDEN
          VORAUSSETZUNGEN VORLIEGT:
        </p>
        <ul>
          <li>
            <p>
              WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
              VERTEIDIGUNG VON RECHTSANSPRÜCHEN.
            </p>
          </li>
        </ul>
        <p>
          DIE AUSNAHMEN GELTEN NICHT, WENN SICH IHR WIDERSPRUCH GEGEN
          DIREKTWERBUNG RICHTET ODER GEGEN EIN PROFILING, DAS MIT DIESER IN
          VERBINDUNG STEHT.
        </p>
        <h3>Weitere Rechte</h3>
        <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
        <p>
          Viele Datenverarbeitungsvorgänge erfolgen auf der Grundlage Ihrer
          Einwilligung. Diese erteilen Sie z. B. dadurch, dass Sie bei
          Online-Formularen ein entsprechendes Häkchen setzen, bevor Sie das
          Formular versenden, oder indem Sie bestimmte Cookies zulassen, wenn
          Sie unsere Webseite besuchen. Sie können Ihre Einwilligung jederzeit
          ohne Angabe von Gründen widerrufen (Art. 7 Abs. 3 DSGVO). Ab dem
          Zeitpunkt des Widerrufs dürfen wir Ihre Daten dann nicht mehr
          verarbeiten. Einzige Ausnahme: Wir sind gesetzlich verpflichtet, die
          Daten eine bestimmte Zeit lang aufzubewahren. Solche
          Aufbewahrungsfristen gibt es insbesondere im Steuer- und Handelsrecht.
        </p>
        <h4>Recht zur Beschwerde bei der zuständigen Aufsichtsbehörde</h4>
        <p>
          Wenn Sie der Auffassung sind, dass wir gegen die
          Datenschutzgrundverordnung (DSGVO) verstoßen, haben Sie nach Art. 77
          DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Sie
          können sich an eine Aufsichtsbehörde in dem Mitgliedstaat Ihres
          Aufenthaltsorts, Ihres Arbeitsplatzes oder des Ortes wenden, an dem
          der mutmaßliche Verstoß stattgefunden hat. Das Beschwerderecht besteht
          neben verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfen.
        </p>
        <h4>Recht auf Datenübertragbarkeit</h4>
        <p>
          Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
          eines Vertrages automatisiert verarbeiten, müssen wir Ihnen oder einem
          Dritten in einem gängigen maschinenlesbaren Format aushändigen, wenn
          Sie das verlangen. An einen anderen Verantwortlichen können wir die
          Daten nur übertragen, soweit dies technisch möglich ist.
        </p>
        <h4>Recht auf Datenauskunft, -löschung und -berichtigung</h4>
        <p>
          Sie haben nach Art. 15 DSGVO das Recht, unentgeltlich Auskunft darüber
          zu erhalten, welche personenbezogenen Daten wir von Ihnen gespeichert
          haben, wo die Daten herkommen, an wen wir die Daten übermitteln und zu
          welchem Zweck sie gespeichert werden. Sollten die Daten falsch sein,
          haben Sie ein Recht auf Berichtigung (Art. 16 DSGVO), unter den
          Voraussetzungen des Art. 17 DSGVO dürfen Sie verlangen, dass wir die
          Daten löschen.
        </p>
        <h4>Recht auf Einschränkung der Verarbeitung</h4>
        <p>
          In bestimmten Situationen können Sie nach Art. 18 DSGVO von uns
          verlangen, dass wir die Verarbeitung Ihrer Daten einschränken. Die
          Daten dürfen dann – von der Speicherung abgesehen – nur noch wie folgt
          verarbeitet werden:
        </p>
        <ul>
          <li>
            <p>mit Ihrer Einwilligung</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              zum Schutz der Rechte einer anderen natürlichen oder juristischen
              Person
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaates
            </p>
          </li>
        </ul>
        <p>
          Das Recht auf Einschränkung der Verarbeitung besteht in den folgenden
          Situationen:
        </p>
        <ul>
          <li>
            <p>
              Sie haben die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestritten und wir benötigen Zeit, um dies
              zu überprüfen. Hier besteht das Recht für die Dauer der Prüfung.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zu Unrecht
              oder war in der Vergangenheit unrechtmäßig. Hier besteht das Recht
              alternativ zur Löschung der Daten.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Wir benötigen Ihre personenbezogenen Daten nicht mehr, Sie
              benötigen sie jedoch zur Ausübung, Verteidigung oder
              Geltendmachung von Rechtsansprüchen. Hier besteht das Recht
              alternativ zur Löschung der Daten.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Sie haben Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt und nun
              müssen Ihre und unsere Interessen gegeneinander abgewogen werden.
              Hier besteht das Recht, solange das Ergebnis der Abwägung noch
              nicht feststeht.
            </p>
          </li>
        </ul>
        <div>
          <h2>Hosting und Content Delivery Networks (CDN)</h2>
        </div>
        <div>
          <h3>Externes Hosting</h3>
          <p>
            Unsere Website liegt auf einem Server des folgenden Anbieters für
            Internetdienste (Hosters):
          </p>
          <div>
            <p>Vercel Inc.</p>
          </div>
          <div>
            <p>440 N Barranca Ave #4133</p>
          </div>
          <div>
            <p>Covina, CA 91723</p>
          </div>
          <h4>
            Wurde ein Vertrag über Auftragsverarbeitung mit dem Hoster
            geschlossen oder werden Standardvertragsklauseln (SCC) eingesetzt?
          </h4>
          <p>Ja</p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Der Hoster speichert alle Daten unserer Webseite. Dazu gehören auch
            alle personenbezogenen Daten, die automatisch oder durch Ihre
            Eingabe erfasst werden. Das können insbesondere sein: Ihre
            IP-Adresse, aufgerufene Seiten, Namen, Kontaktdaten und -anfragen
            sowie Meta- und Kommunikationsdaten. Bei der Datenverarbeitung hält
            sich unser Hoster an unsere Weisungen und verarbeitet die Daten
            stets nur insoweit, als dies erforderlich ist, um die
            Leistungspflicht uns gegenüber zu erfüllen.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Da wir über unsere Webseite potenzielle Kunden ansprechen und
            Kontakte zu bestehenden Kunden pflegen, dient die Datenverarbeitung
            durch unseren Hoster der Vertragsanbahnung und -erfüllung und beruht
            daher auf Art. 6 Abs. 1 lit. b) DSGVO. Darüber hinaus ist es unser
            berechtigtes Interesse als Unternehmen, ein professionelles
            Internetangebot bereitzustellen, das die nötigen Anforderungen an
            Sicherheit, Geschwindigkeit und Effizienz erfüllt. Insoweit
            verarbeiten wir Ihre Daten außerdem auf der Grundlage von Art. 6
            Abs. 1 lit. f) DSGVO.
          </p>
        </div>
        <div>
          <h3>Cloudflare</h3>
          <h4>Was ist Cloudflare?</h4>
          <p>Content Delivery Network (CDN) mit Domain-Name-System (DNS)</p>
          <h4>Wer verarbeitet Ihre Daten?</h4>
          <p>Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA</p>
          <h4>
            Wurde ein Vertrag über Auftragsverarbeitung mit Cloudflare
            geschlossen?
          </h4>
          <p>Ja</p>
          <h4>
            Wo finden Sie weitere Informationen über den Datenschutz bei
            Cloudflare?
          </h4>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.cloudflare.com/privacypolicy/"
            >
              https://www.cloudflare.com/privacypolicy/
            </a>
          </p>
          <h4>Auf welcher Grundlage übertragen wir Ihre Daten in die USA?</h4>
          <p>
            Auf Grundlage des Angemessenheitsbeschlusses der Europäischen
            Kommission sowie der entsprechenden Zertifizierung des Unternehmens.
          </p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Wir nutzen für unsere Webseite die Dienste von Cloudflare. Das
            weltweite Content-Delivery-Netzwerk sorgt dafür, dass alle Inhalte,
            die wir online bereitstellen, selbst dann schnell bei Ihnen
            ankommen, wenn dabei große Datenmengen über weite Distanzen bewegt
            werden müssen. Möglich wird das dadurch, dass Cloudflare mit all
            seinen technischen Möglichkeiten und Servern auf der ganzen Welt
            zwischen unsere Webseite und Ihren Browser geschaltet wird, den
            Datenverkehr analysiert und bösartige Daten herausfiltert, bevor sie
            unseren Server erreichen. Dabei kommt Cloudflare auch mit
            personenbezogenen Daten in Kontakt, die über unsere Webseite erfasst
            werden. Zudem kann das Unternehmen Cookies oder sonstige
            Technologien zur Wiedererkennung von Internetnutzern einsetzen. Die
            Datenverarbeitung durch Cloudflare dient stets ausschließlich dem
            Zweck, einen schnellen Datenverkehr zu ermöglichen.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Wir haben ein berechtigtes Interesse daran, den Besuchern unserer
            Webseite ein möglichst schnelles und effizientes Online-Angebot
            bereitzustellen. Die Datenverarbeitung erfolgt damit auf der
            Grundlage von Art. 6 Abs. 1 lit. f) DSGVO.
          </p>
        </div>
        <h2>Datenerfassung auf dieser Website</h2>
        <h3>Server-Log-Dateien</h3>
        <p>
          Server-Log-Dateien protokollieren alle Anfragen und Zugriffe auf
          unsere Webseite und halten Fehlermeldungen fest. Sie umfassen auch
          personenbezogene Daten, insbesondere Ihre IP-Adresse. Diese wird
          allerdings schon nach kurzer Zeit vom Provider anonymisiert, sodass
          wir die Daten nicht Ihrer Person zuordnen können. Die Daten werden
          automatisch von Ihrem Browser an unseren Provider übermittelt.
        </p>
        <h4>Wie verarbeiten wir Ihre Daten?</h4>
        <p>
          Unser Provider speichert die Server-Log-Dateien, um die Aktivitäten
          auf unserer Webseite nachvollziehen zu können und Fehler ausfindig zu
          machen. Die Dateien enthalten die folgenden Daten:
        </p>
        <ul>
          <li>
            <p>Browsertyp und -version</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>verwendetes Betriebssystem</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Referrer-URL</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Hostname des zugreifenden Rechners</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Uhrzeit der Serveranfrage</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>IP-Adresse (ggf. anonymisiert)</p>
          </li>
        </ul>
        <p>
          Wir führen diese Daten nicht mit anderen Daten zusammen, sondern
          nutzen sie lediglich für die statistische Auswertung und zur
          Verbesserung unserer Website.
        </p>
        <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
        <p>
          Wir haben ein berechtigtes Interesse daran, dass unsere Webseite
          fehlerfrei läuft. Auch ist es unser berechtigtes Interesse, einen
          anonymisierten Überblick über die Zugriffe auf unsere Webseite zu
          erhalten. Die Datenverarbeitung ist deshalb gemäß Art. 6 Abs. 1 lit.
          f) DSGVO rechtmäßig.
        </p>
        <div>
          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Sie können uns per E-Mail oder Telefax eine Nachricht zukommen
            lassen oder uns anrufen.
          </p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Wir speichern Ihre Nachricht sowie Ihre selbst gemachten
            Kontaktangaben bzw. die übermittelte Telefonnummer, um Ihre Anfrage
            inklusive Anschlussfragen bearbeiten zu können. Ohne Ihre
            Einwilligung geben wir die Daten nicht an andere Personen weiter.
          </p>
          <h4>Wie lange speichern wir Ihre Daten?</h4>
          <p>
            Wir löschen Ihre Daten, sobald einer der folgenden Punkte eintritt:
          </p>
          <ul>
            <li>
              <p>Ihre Anfrage wurde abschließend bearbeitet.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Sie fordern uns zur Löschung der Daten auf.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Sie widerrufen Ihre Einwilligung zur Speicherung.</p>
            </li>
          </ul>
          <p>
            Das gilt nur dann nicht, wenn wir gesetzlich dazu verpflichtet sind,
            die Daten aufzubewahren.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Sofern Ihre Anfrage mit unserer vertraglichen Beziehung in
            Zusammenhang steht oder der Durchführung vorvertraglicher Maßnahmen
            dient, verarbeiten wir Ihre Daten auf der Grundlage von Art. 6 Abs.
            1 lit. b) DSGVO. In allen anderen Fällen ist es unser berechtigtes
            Interesse, an uns gerichtete Anfragen effektiv zu bearbeiten.
            Rechtsgrundlage der Datenverarbeitung ist somit Art. 6 Abs. 1 lit.
            f) DSGVO. Haben Sie in die Speicherung Ihrer Daten eingewilligt, ist
            Art. 6 Abs. 1 lit. a) DSGVO die Rechtsgrundlage. In diesem Fall
            können Sie Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen.
          </p>
        </div>
        <div>
          <h3>Kommunikation via WhatsApp</h3>
          <h4>Was ist WhatsApp?</h4>
          <p>Instant-Messaging-Dienst</p>
          <h4>Wer verarbeitet Ihre Daten?</h4>
          <p>
            WhatsApp Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour,
            Dublin 2, Irland
          </p>
          <div>
            <h4>
              Wurde ein Vertrag über Auftragsverarbeitung mit WhatsApp
              geschlossen?
            </h4>
            <p>Ja</p>
          </div>
          <h4>
            Wo finden Sie weitere Informationen über den Datenschutz bei
            WhatsApp?
          </h4>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.whatsapp.com/legal/#privacy-policy"
            >
              https://www.whatsapp.com/legal/#privacy-policy
            </a>
          </p>
          <h4>Auf welcher Grundlage übertragen wir Ihre Daten in die USA?</h4>
          <p>
            Auf Grundlage des Angemessenheitsbeschlusses der Europäischen
            Kommission sowie der entsprechenden Zertifizierung des Unternehmens.
          </p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Für die Kommunikation mit unseren Kunden und anderen Personen
            außerhalb unseres Unternehmens nutzen wir den
            Instant-Messaging-Dienst WhatsApp in der Variante „WhatsApp
            Business“.
          </p>
          <p>
            Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung
            (Peer-to-Peer). So wird verhindert, dass WhatsApp oder sonstige
            Dritte Zugriff auf die Kommunikationsinhalte erlangen. Auch haben
            wir unsere Accounts so eingestellt, dass kein automatischer Abgleich
            mit dem Adressbuch auf den verwendeten Smartphones stattfindet.
            WhatsApp erhält jedoch Zugriff auf die Metadaten des
            Kommunikationsvorgangs (z. B. Absender, Empfänger und Zeitpunkt der
            Kommunikation) und teilt diese Daten nach eigener Aussage mit Meta,
            seinem in den USA ansässigen Mutterkonzern.
          </p>
          <h4>Wie lange speichern wir Ihre Daten?</h4>
          <p>
            Wir löschen Ihre Daten, sobald einer der folgenden Punkte eintritt:
          </p>
          <ul>
            <li>
              <p>Der Zweck der Datenverarbeitung ist entfallen.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Sie fordern uns zur Löschung der Daten auf.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Sie widerrufen Ihre Einwilligung zur Speicherung.</p>
            </li>
          </ul>
          <p>
            Das gilt das nur dann nicht, wenn wir gesetzlich dazu verpflichtet
            sind, die Daten aufzubewahren.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Sofern unser Austausch über WhatsApp mit unserer vertraglichen
            Beziehung in Zusammenhang steht oder der Durchführung
            vorvertraglicher Maßnahmen dient, verarbeiten wir Ihre Daten auf der
            Grundlage von Art. 6 Abs. 1 lit. b) DSGVO. In allen anderen Fällen
            ist es unser berechtigtes Interesse, an uns gerichtete Anfragen
            effektiv zu bearbeiten und mit anderen Personen einen geschäftlichen
            Kontakt zu pflegen. Rechtsgrundlage der Datenverarbeitung ist somit
            Art. 6 Abs. 1 lit. f) DSGVO. Haben Sie in die Speicherung Ihrer
            Daten eingewilligt, ist Art. 6 Abs. 1 lit. a) DSGVO die
            Rechtsgrundlage. In diesem Fall können Sie Ihre Einwilligung
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
        </div>
        <div>
          <h3>ProvenExpert</h3>
          <h4>Was ist ProvenExpert?</h4>
          <p>
            Bewertungssiegel und Online-Service zur Einholung von Kundenfeedback
          </p>
          <h4>Wer verarbeitet Ihre Daten?</h4>
          <p>
            Expert Systems AG, Quedlinburger Str. 1, 10589 Berlin, Deutschland
          </p>
          <div>
            <h4>
              Wurde ein Vertrag über Auftragsverarbeitung mit ProvenExpert
              geschlossen?
            </h4>
            <p>Ja</p>
          </div>
          <h4>
            Wo finden Sie weitere Informationen über den Datenschutz bei
            ProvenExpert?
          </h4>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.provenexpert.com/de-de/datenschutzbestimmungen/"
            >
              https://www.provenexpert.com/de-de/datenschutzbestimmungen/
            </a>
          </p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Auf unserer Webseite befindet sich ein Bewertungssiegel von
            ProvenExpert. Über das Siegel werden Bewertungen unseres
            Unternehmens durch unsere Kunden dargestellt und anderen Besuchern
            der Webseite zugänglich gemacht. Wenn Sie unsere Webseite besuchen,
            erfährt der Anbieter von ProvenExpert aufgrund des eingebundenen
            Siegels, dass unsere Webseite über Ihre IP-Adresse besucht wurde.
            Außerdem erfasst ProvenExpert die Spracheinstellungen auf Ihrem
            Gerät, um das Siegel in der passenden Landessprache anzeigen zu
            können.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Wir haben ein berechtigtes Interesse daran, unsere Angebote mit
            einer nachvollziehbaren Darstellung von Kundenbewertungen zu
            bewerben. Grundlage der Datenverarbeitung ist damit Art. 6 Abs. 1
            lit. f) DSGVO. Haben Sie in die Datenverarbeitung eingewilligt,
            verarbeiten wir Ihre Daten ausschließlich auf der Grundlage von Art.
            6 Abs. 1 lit. a) DSGVO. Sie können Ihre Einwilligung jederzeit mit
            Wirkung für die Zukunft widerrufen.
          </p>
        </div>
        <div>
          <h3>Google Forms</h3>
          <h4>Was ist Google Forms?</h4>
          <p>
            Formular-Tool zur Erfassung von Kunden-Anfragen und anderen Daten
          </p>
          <h4>Wer verarbeitet Ihre Daten?</h4>
          <p>
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland
          </p>
          <h4>
            Wo finden Sie weitere Informationen über den Datenschutz bei Google?
          </h4>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://policies.google.com/"
            >
              https://policies.google.com/
            </a>
          </p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Mittels Google Forms können Online-Formulare erstellt und auf
            unserer Website eingebunden werden. Google Forms speichert ein
            Cookie in Ihrem Browser, das eine eindeutige ID enthält. Dieses
            Cookie speichert verschiedene Informationen wie beispielsweise Ihre
            Spracheinstellungen. Die von Ihnen eingegebenen Daten werden auf den
            Servern von Google gespeichert, bis Sie uns zur Löschung auffordern,
            eine abgegebene Einwilligung zur Speicherung widerrufen oder der
            Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche
            Bestimmungen bleiben unberührt.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Wir haben ein berechtigtes Interesse an funktionierenden
            Kundenformularen. Grundlage der Datenverarbeitung ist damit Art. 6
            Abs. 1 lit. f) DSGVO. Haben Sie in die Datenverarbeitung
            eingewilligt, verarbeiten wir Ihre Daten ausschließlich auf der
            Grundlage von Art. 6 Abs. 1 lit. a) DSGVO. Sie können Ihre
            Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
        </div>
        <div>
          <h2>Analyse-Tools und Werbung</h2>
          <p>
            Wir nutzen die folgenden Tools, um das Verhalten unserer
            Webseitenbesucher zu analysieren und Ihnen Werbung zu zeigen.
          </p>
        </div>
        <br />
        <div>
          <h3>VG Wort Zählpixel</h3>
          <p>
            Auf unserer Website sind Texte eingebunden, in denen ein sogenannter
            Tracking-Pixel (METIS-Zählpixel) eingebunden ist. Anbieter ist die
            Verwertungsgesellschaft WORT – VG WORT (Rechtsfähiger Verein kraft
            Verleihung), Untere Weidenstraße 5, 81543 München (nachfolgend VG
            Wort).
          </p>
          <p>
            Das Pixel zählt die Aufrufe von Texten, leitet diese in
            anonymisierter Weise an die VG Wort weiter, um so die geldwerten
            Ausschüttungen für die Autoren zu ermitteln. Der Einsatz des VG Wort
            Pixels erfolgt auf Grundlage unseres berechtigten Interesses, eine
            Vergütung für die auf unserer Website veröffentlichten Texte für
            unsere Autoren bzw. für uns selbst zu erhalten (Art. 6 Abs. 1 lit. f
            DSGVO). Entgegenstehende Interessen der Websitebesucher sind nicht
            ersichtlich, da die Daten in anonymisierter Form an die VG Wort
            übermittelt werden.
          </p>
        </div>
        <div>
          <h3>YouTube (mit erweitertem Datenschutz)</h3>
          <h4>Was ist YouTube?</h4>
          <p>Videoplattform</p>
          <h4>Wer verarbeitet Ihre Daten?</h4>
          <p>
            Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland
          </p>
          <h4>
            Wo finden Sie weitere Informationen über den Datenschutz bei
            YouTube?
          </h4>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.youtube.com/intl/ALL_de/howyoutubeworks/our-commitments/protecting-user-data/?gclid=EAIaIQobChMIztKuysSW-gIVjgwGAB0euwPlEAAYASAAEgLBXfD_BwE"
            >
              https://www.youtube.com/intl/ALL_de/howyoutubeworks/our-commitments/protecting-user-data/?gclid=EAIaIQobChMIztKuysSW-gIVjgwGAB0euwPlEAAYASAAEgLBXfD_BwE
            </a>
          </p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Auf unserer Webseite können Sie sich YouTube-Videos anschauen. Dabei
            erhebt und speichert Google als Anbieter von YouTube bestimmte
            Informationen über Sie. Da wir YouTube im erweiterten
            Datenschutzmodus nutzen, geschieht das allerdings erst dann, wenn
            Sie ein Video starten. Konkret passiert in diesem Fall Folgendes:
          </p>
          <ol>
            <li>
              <p>
                Den Servern von Google wird mitgeteilt, welche unserer Seiten
                von Ihrem Gerät aus besucht wurden. Sind Sie beim Surfen in
                Ihrem YouTube-Account eingeloggt, kann Google Ihr Surfverhalten
                direkt Ihrem persönlichen Profil zuordnen. Wenn Sie das nicht
                möchten, müssen Sie sich aus Ihrem YouTube-Account ausloggen,
                bevor Sie weiter im Internet surfen.
              </p>
            </li>
            <li>
              <p>
                Google erhält über Cookies, Device Fingerprinting oder ähnliche
                Wiedererkennungstechnologien Informationen über die Besucher
                unserer Webseite. Auf dieser Grundlage erstellt das Unternehmen
                dann Videostatistiken, macht seine Anwendung für die Nutzer
                attraktiver und beugt Betrugsversuchen vor.
              </p>
            </li>
            <li>
              <p>
                Gegebenenfalls kommt es auch darüber hinaus zur Verarbeitung
                Ihrer Daten. Details entziehen sich allerdings unserer Kenntnis.
                Auch können wir keinen Einfluss auf die Verarbeitung nehmen.
              </p>
            </li>
          </ol>
          <p>
            Selbst wenn Sie kein YouTube-Video auf unserer Webseite starten,
            stellt Google eine Verbindung zu seinem DoubleClick-Netzwerk und
            ggf. auch zu weiteren Partnern her. Der erweiterte Datenschutzmodus
            bedeutet also nicht, dass Google überhaupt keine Daten von Ihnen
            verarbeitet, wenn Sie unsere Webseite besuchen.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Mit der Einbindung von YouTube-Videos möchten wir unsere Webseite
            sowie unsere Dienste und Angebote ansprechender gestalten. Dies ist
            unser berechtigtes Interesse als Unternehmen und damit rechtmäßig
            nach Art. 6 Abs. 1 lit. f) DSGVO.
          </p>
          <p>
            Haben Sie in die Datenverarbeitung eingewilligt, verarbeiten wir
            Ihre Daten ausschließlich auf der Grundlage von Art. 6 Abs. 1 lit.
            a) DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen. Ab dem
            Zeitpunkt des Widerrufs dürfen wir Ihre Daten nicht mehr
            verarbeiten.
          </p>
        </div>
        <div>
          <h3>Vimeo (ohne Tracking)</h3>
          <h4>Was ist Vimeo?</h4>
          <p>Videoplattform</p>
          <h4>Wer verarbeitet Ihre Daten?</h4>
          <p>
            Vimeo Inc., 330 West 34th Street, 5th Floor, New York, New York
            10001, USA{' '}
          </p>
          <h4>
            Wo finden Sie weitere Informationen über den Datenschutz bei Vimeo?
          </h4>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://vimeo.com/privacy"
            >
              https://vimeo.com/privacy
            </a>
          </p>
          <h4>Auf welcher Grundlage übertragen wir Ihre Daten in die USA? </h4>
          <p>
            Auf der Grundlage von Standardvertragsklauseln der Europäischen
            Kommission und berechtigten Geschäftsinteressen (vgl.{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://vimeo.com/privacy#international_data_transfers_and_certain_user_rights"
            >
              https://vimeo.com/privacy#international_data_transfers_and_certain_user_rights
            </a>
            )
          </p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Auf unserer Webseite können Sie sich Vimeo-Videos anschauen. Sobald
            Sie eine Seite aufrufen, in die wir ein Vimeo-Video eingebettet
            haben, wird dies den Servern von Vimeo mitgeteilt. Dabei erfährt
            Vimeo auch Ihre IP-Adresse. Da wir entsprechende Einstellungen in
            dem Vimeo-Plugin vorgenommen haben, wird Vimeo aber weder Cookies
            auf Ihrem Gerät hinterlassen noch Ihr Surfverhalten verfolgen.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Mit der Einbindung von Vimeo-Videos möchten wir unsere Webseite
            ansprechender gestalten. Dies ist unser berechtigtes Interesse als
            Unternehmen und damit rechtmäßig nach Art. 6 Abs. 1 lit. f) DSGVO.
          </p>
          <p>
            Haben Sie in die Datenverarbeitung eingewilligt, verarbeiten wir
            Ihre Daten ausschließlich auf der Grundlage von Art. 6 Abs. 1 lit.
            a) DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen. Ab dem
            Zeitpunkt des Widerrufs dürfen wir Ihre Daten nicht mehr
            verarbeiten.
          </p>
        </div>
        <div>
          <h3>Google Web Fonts (lokales Hosting)</h3>
          <p>
            Wir setzen auf unserer Webseite Schriften des US-amerikanischen
            Unternehmens Google ein. Die Schriften haben wir lokal installiert,
            sodass keine Verbindung zu den Servern von Google stattfindet, wenn
            Sie unsere Website besuchen.
          </p>
          <p>
            Weitere Informationen zu den Google Web Fonts finden Sie unter{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://developers.google.com/fonts/faq"
            >
              https://developers.google.com/fonts/faq
            </a>{' '}
            und in der Datenschutzerklärung von Google:
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://policies.google.com/privacy?hl=de."
            >
              {' '}
              https://policies.google.com/privacy?hl=de.
            </a>
          </p>
        </div>
        <div>
          <h3>Google Drive</h3>
          <h4>Was ist Google Drive?</h4>
          <p>Cloud-Speicher</p>
          <h4>Wer verarbeitet Ihre Daten?</h4>
          <p>
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland
          </p>
          <div>
            <h4>
              Wurde ein Vertrag über Auftragsverarbeitung mit OneDrive
              geschlossen?
            </h4>
            <p>Ja</p>
          </div>
          <h4>
            Wo finden Sie weitere Informationen über den Datenschutz bei
            OneDrive?
          </h4>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://policies.google.com/privacy"
            >
              https://policies.google.com/privacy
            </a>
          </p>
          <h4>
            <strong>
              Auf welcher Grundlage übertragen wir Ihre Daten in die USA?
            </strong>
          </h4>
          <p>
            Auf Grundlage des Angemessenheitsbeschlusses der Europäischen
            Kommission sowie der entsprechenden Zertifizierung des Unternehmens.
          </p>
          <h4>Wie verarbeiten wir Ihre Daten?</h4>
          <p>
            Auf unserer Webseite können Sie Dateien hochladen. Dafür setzen wir
            den Cloud-Speicher Google Drive ein. Die Dateien werden auf den
            Servern des US-amerikanischen Unternehmens Google gespeichert.
            Besuchen Sie unsere Webseite, wird zudem eine Verbindung zu Google
            hergestellt. Der Cloud-Speicher registriert so, dass unsere Webseite
            über Ihre IP-Adresse aufgerufen wurde.
          </p>
          <h4>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h4>
          <p>
            Wir haben ein berechtigtes Interesse daran, einen zuverlässigen
            Uploadbereich auf unserer Webseite anzubieten. Die Verarbeitung
            Ihrer Daten erfolgt daher auf der Grundlage von Art. 6 Abs. 1 lit.
            f) DSGVO. Haben Sie in die Datenverarbeitung eingewilligt,
            verarbeiten wir Ihre Daten ausschließlich auf der Grundlage von Art.
            6 Abs. 1 lit. a) DSGVO. Sie können Ihre Einwilligung jederzeit mit
            Wirkung für die Zukunft widerrufen.
          </p>
        </div>
        <div>
          <h2>Terminbuchungen</h2>
          <h3>Book Like a Boss</h3>
          <p>
            Wir verwenden für Terminbuchungen den Drittanbieter „Book like a
            boss“, 67-50 180th Street, Fresh Meadows, NY 11365-3516, USA. Book
            Like Boss speichert persönliche Daten fordert in unserem
            Buchungsformular Angaben zu Name, E-Mail Adresse und Telefonnummer,
            die zur Durchführung des Termins benötigt werden. Der Nutzer muss
            allerdings eine Zustimmung zur Verarbeitung seiner Daten geben,
            bevor diese gespeichert oder verarbeitet werden. gespeicherte Daten
            werden nach einem Kundentermin, der Beantwortung der Frage, bei
            Stornierung des Termins oder auf Wunsch gelöscht und nicht dauerhaft
            gespeichert.
          </p>
          <p>
            Eine Data Processing Agreement (DPA) wurde mit dem Anbieter
            abgeschlossen.
          </p>
          <p>
            Zur Datenschutzerklärung von Book Like A Boss:{' '}
            <a href="https://booklikeaboss.com/privacy">
              https://booklikeaboss.com/privacy
            </a>
          </p>
        </div>
        <div>
          <h2>Audio- und Videokonferenzen</h2>
          <p>
            Als Unternehmen sind wir in Kontakt mit vielen Menschen: Kunden,
            Geschäftspartnern, Dienstleistern usw. Dabei nutzen wir für den
            Austausch neben anderen Kommunikationsmitteln auch sogenannte
            Online-Konferenz-Tools. Datenschutzrechtlich relevante Informationen
            zu dem bzw. den Anbietern der von uns genutzten Tools finden Sie am
            Ende dieses Abschnitts. Kommunizieren Sie mit uns über ein solches
            Tool, verarbeiten nicht nur wir, sondern insbesondere der Anbieter
            des jeweiligen Tools Ihre personenbezogenen Daten.
          </p>
          <h3>Wie verarbeiten wir Ihre Daten?</h3>
          <p>
            Online-Konferenz-Tools erfassen und speichern diverse
            personenbezogene Daten, um die Teilnahme an einer Online-Konferenz
            und deren reibungslose Durchführung zu ermöglichen. Neben Anmelde-,
            Konferenz- und technischen Daten betrifft dies auch bestimmte
            Kommunikationsinhalte.
          </p>
          <ul>
            <li>
              <p>
                Anmeldedaten: Ihre E-Mail-Adresse und/oder Telefonnummer und
                ggf. weitere Daten, die Sie bei der Anmeldung zur Konferenz
                angeben.
              </p>
            </li>
            <li>
              <p>
                Konferenzdaten: Beginn, Ende sowie Dauer Ihrer Teilnahme an der
                Konferenz, die Anzahl der Teilnehmer und sonstige Metadaten zur
                Konferenz.
              </p>
            </li>
            <li>
              <p>
                Technische Daten: IP-Adresse, MAC-Adresse, Geräte-ID, Gerätetyp,
                Betriebssystem und -version, Client-Version, Kameratyp, Mikrofon
                oder Lautsprecher sowie die Art der Verbindung.
              </p>
            </li>
            <li>
              <p>
                Kommunikationsinhalte: Cloud-Aufzeichnungen,
                Chat-/Sofortnachrichten, Voicemails hochgeladene Fotos und
                Videos, Dateien, Whiteboards und andere Informationen, die
                während der Nutzung des Dienstes geteilt werden.
              </p>
            </li>
          </ul>
          <p>
            Einzelheiten zur Datenverarbeitung entnehmen Sie bitte den
            Datenschutzerklärungen des jeweiligen Konferenz-Tool-Anbieters.
          </p>
          <h3>Wie lange speichern wir Ihre Daten?</h3>
          <p>
            Wir als Ihr Kommunikationspartner löschen Ihre Daten auf unseren
            Systemen, sobald einer der folgenden Punkte eintritt:
          </p>
          <ul>
            <li>
              <p>Der Zweck der Datenverarbeitung entfällt.</p>
            </li>
            <li>
              <p>Sie fordern uns zur Löschung der Daten auf.</p>
            </li>
            <li>
              <p>Sie widerrufen Ihre Einwilligung zur Speicherung.</p>
            </li>
          </ul>
          <p>
            Das gilt nur dann nicht, wenn wir gesetzlich dazu verpflichtet sind,
            die Daten aufzubewahren.
          </p>
          <p>
            Cookies bleiben so lange auf Ihrem Endgerät, bis Sie sie löschen.
          </p>
          <p>
            Die Anbieter von Konferenz-Tools speichern Ihre Daten auch zu
            eigenen Zwecken. Was das für die Dauer der Speicherung Ihrer Daten
            bedeutet, erfragen Sie bitte direkt bei den Anbietern.
          </p>
          <h3>Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?</h3>
          <p>
            Sind wir bereits vertraglich verbunden oder möchten Sie einen
            Vertrag mit uns abschließen, nutzen wir Konferenz-Tools, um den
            Vertrag zu erfüllen bzw. um Sie über unsere Leistungen oder Produkte
            zu informieren. Die Datenverarbeitung erfolgt insofern auf der
            Grundlage von Art. 6 Abs. 1 lit. b) DSGVO. Ansonsten dient der
            Einsatz von Konferenz-Tools der einfachen und schnellen
            Kommunikation, ohne die wir unser Unternehmen nicht effizient führen
            könnten. Wir haben deshalb auch ein berechtigtes Interesse an der
            Datenverarbeitung gem. Art. 6 Abs. 1 lit. f) DSGVO. Eine weitere
            Rechtsgrundlage kann Ihre Einwilligung sein. Einschlägig ist in
            diesem Fall Art. 6 Abs. 1 lit. a) DSGVO. Diese Grundlage entfällt
            für die Zukunft, wenn Sie die Einwilligung widerrufen.
          </p>
          <h3>Welche Online-Konferenz-Tools nutzen wir?</h3>
        </div>
        <div>
          <h4>Google Hangouts</h4>
          <h5>Was ist Google Hangouts?</h5>
          <p>
            Videokonferenz- und Instant-Messaging-Dienst der Google Ireland Ltd.
          </p>
          <h5>Wer verarbeitet Ihre Daten?</h5>
          <p>
            Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland
          </p>
          <div>
            <h5>
              Wurde ein Vertrag über Auftragsverarbeitung mit Google Hangouts
              geschlossen?
            </h5>
            <p>Ja</p>
          </div>
          <h5>
            Wo finden Sie weitere Informationen über den Datenschutz bei Google
            Hangouts?
          </h5>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://policies.google.com/privacy?hl=de"
            >
              https://policies.google.com/privacy?hl=de
            </a>
          </p>
          <h5>Auf welcher Grundlage übertragen wir Ihre Daten in die USA? </h5>
          <p>
            Google hält sich an die Standardvertragsklauseln der Europäischen
            Kommission (
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://privacy.google.com/businesses/compliance"
            >
              https://privacy.google.com/businesses/compliance
            </a>
            )
          </p>
        </div>
        <div>
          <h2>Datenverarbeitung auf Social Media</h2>
          <h3>Was ist Social Media?</h3>
          <p>
            Mit Social Media meinen wir die sozialen Netzwerke, auf den wir
            öffentlich zugängliche Profile angelegt haben. Welche sozialen
            Netzwerke das konkret sind, lesen Sie weiter unten.
          </p>
          <h3>Wer verarbeitet Ihre Daten?</h3>
          <p>
            Die jeweiligen Betreiberfirmen der sozialen Netzwerke. Die einzelnen
            Betreiber finden Sie weiter unten bei den jeweiligen Netzwerken.
          </p>
          <h3>Wie werden Ihre Daten verarbeitet?</h3>
          <p>
            Die Betreiber sozialer Netzwerke sind in der Regel dazu in der Lage,
            umfassende Daten über das Verhalten von Besuchern und Nutzern des
            Netzwerks zu erfassen und auszuwerten. Es ist uns nicht möglich,
            sämtliche Verarbeitungsvorgänge in den von uns genutzten sozialen
            Netzwerken nachzuvollziehen, weshalb ggf. weitere
            Verarbeitungsvorgänge, die hier nicht aufgeführt sind, von den
            Betreibern der sozialen Netzwerke vorgenommen werden können. In den
            Nutzungsbedingungen und Datenschutzerklärungen der jeweiligen
            sozialen Netzwerke finden Sie hierzu weitere Informationen.
          </p>
          <p>
            Die Verarbeitung Ihrer Daten kann ausgelöst werden, indem Sie die
            Webseite des sozialen Netzwerks oder unsere Profilseite dort
            besuchen. Auch wenn Sie eine Webseite aufrufen, die bestimmte
            Inhalte des Netzwerks, z.B. Like- oder Share-Buttons, verwendet,
            können bereits Daten an die Betreiber des sozialen Netzwerks
            übertragen werden. Sind Sie selbst Nutzer des sozialen Netzwerks und
            in Ihren Nutzer-Account eingeloggt, kann Ihr Besuch unserer
            Profilseite vom Betreiber des sozialen Netzwerks Ihrem Account
            zugeordnet werden. Auch, wenn Sie selbst keinen Nutzer-Account
            registriert haben oder nicht eigeloggt sind, kann es sein, dass der
            Betreiber des Netzwerks trotzdem Ihre personenbezogenen Daten
            erfasst, z.B. indem Ihre IP-Adresse erfasst wird oder Cookies
            gesetzt werden. Mit diesen Daten können die Betreiber auf Ihr
            Verhalten und Ihre Interessen angepasste Nutzerprofile erstellen und
            Ihnen interessenbezogene Werbung innerhalb und außerhalb des
            Netzwerks anzeigen. Wenn Sie registrierter Nutzer des Netzwerks
            sind, kann auch auf allen Geräten, auf denen Sie eingeloggt sind
            oder waren, die interessenbezogene Werbung angezeigt werden.
          </p>
          <h3>Auf welcher Rechtsgrundlage werden Ihre Daten verarbeitet?</h3>
          <p>
            Unsere Profile in den sozialen Netzwerken sollen für eine möglichst
            umfassende Präsenz unseres Unternehmens im Internet sorgen. Daran
            haben wir als Unternehmen ein berechtigtes Interesse. Die
            Datenverarbeitung ist daher nach Art. 6 Abs. 1 lit. f DSGVO
            rechtmäßig.
          </p>
          <p>
            Die von den Betreibern der sozialen Netzwerke selbst vorgenommen
            Datenverarbeitungsvorgänge und Analysen können auf anderen
            Rechtsgrundlagen beruhen. Diese müssen von den Betreibern der
            sozialen Netzwerke angegeben werden.
          </p>
          <h3>
            Wer ist für die Verarbeitung Ihrer Daten verantwortlich und wie
            können Sie Ihre Rechte geltend machen?
          </h3>
          <p>
            Wenn Sie eines unserer Profile in den sozialen Netzwerken besuchen,
            sind wir gemeinsam mit dem Betreiber des jeweiligen Netzwerks für
            die bei diesem Besuch ausgelösten Datenverarbeitungsvorgänge
            verantwortlich. Sie können Ihre Rechte grundsätzlich sowohl uns als
            auch dem Betreiber des jeweiligen Netzwerks gegenüber geltend
            machen.
          </p>
          <p>
            Trotz der gemeinsamen Verantwortlichkeit mit den Betreibern der
            sozialen Netzwerke ist unser Einfluss auf die
            Datenverarbeitungsvorgänge des jeweiligen Betreibers jedoch
            beschränkt und richtet sich in erster Linie nach den Vorgaben des
            Betreibers.
          </p>
          <h3>Wie lange werden Ihre Daten gespeichert?</h3>
          <p>
            Wenn wir Daten über unsere Profile in den sozialen Netzwerken
            erfassen, werden diese von unseren Systemen gelöscht, sobald der
            Zweck für ihre Speicherung entfällt, Sie uns zur Löschung auffordern
            oder Sie Ihre Einwilligung zur Speicherung widerrufen. Gespeicherte
            Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.
            Zwingende gesetzliche Bestimmungen – insb. Aufbewahrungsfristen –
            bleiben unberührt.
          </p>
          <p>
            Wir haben keinen Einfluss darauf, wie lange die Betreiber der
            sozialen Netzwerke Ihre Daten speichern, die die Betreiber zu Ihren
            eigenen Zwecken erfassen. Informationen hierzu erhalten Sie direkt
            beim Betreiber des jeweiligen sozialen Netzwerks, z.B. in der
            jeweiligen Datenschutzerklärung.
          </p>
          <h4>Welche Sozialen Medien nutzen wir?</h4>
        </div>
        <div>
          <h5>Twitter</h5>
          <p>
            <strong>
              Was ist Twitter?
              <br />
            </strong>
            Ein soziales Netzwerk in Form einer Mikro-Blogging-Plattform
          </p>
          <p>
            <strong>Wer verarbeitet Ihre Daten?</strong>
            <br />
            Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA
            94103, USA
          </p>
          <p>
            <strong>
              Werden Ihre Daten in Drittländer übertragen?
              <br />
            </strong>
            Ja, in die USA
          </p>
          <p>
            <strong>
              Wo finden Sie weitere Informationen über den Datenschutz bei
              Twitter?
              <br />
            </strong>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://twitter.com/de/privacy"
            >
              https://twitter.com/de/privacy
            </a>
          </p>
          <p>
            <strong>
              Wo können Sie als Twitter-Nutzer Ihre Werbeeinstellungen anpassen?
              <br />
            </strong>
            Als registrierter Twitter-Nutzer können Sie Ihre
            Datenschutzeinstellungen in Ihrem Nutzer-Account anpassen. Klicken
            Sie hierzu auf folgenden Link und loggen Sie sich ein:
            <strong>
              <br />
            </strong>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://twitter.com/personalization."
            >
              https://twitter.com/personalization.
            </a>
          </p>
        </div>
        <div>
          <h5>LinkedIn</h5>
          <h6>Was ist LinkedIn?</h6>
          <p>Ein soziales Netzwerk für geschäftliche Kontakte</p>
          <h6>Wer verarbeitet Ihre Daten?</h6>
          <p>
            LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland
          </p>
          <h6>Werden Ihre Daten in Drittländer übertragen?</h6>
          <p>Ja</p>
          <h6>
            Wo finden Sie weitere Informationen über den Datenschutz bei
            LinkedIn?
          </h6>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://de.linkedin.com/legal/privacy-policy?trk=homepage-basic_footer-privacy-policy"
            >
              https://de.linkedin.com/legal/privacy-policy?trk=homepage-basic_footer-privacy-policy
            </a>
          </p>
          <h6>
            Wo können Sie als Nutzer Ihre Datenschutz-Einstellungen anpassen?
          </h6>
          <p>
            Als registrierter LinkedIn-Nutzer können Sie Ihre
            Privatsphäre-Einstellungen in Ihrem Nutzer-Account anpassen. Klicken
            Sie hierzu auf folgenden Link und loggen Sie sich ein:
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.linkedin.com/psettings/"
            >
              https://www.linkedin.com/psettings/
            </a>
          </p>
        </div>
        <div>
          <h5>Xing</h5>
          <h6>Was ist Xing?</h6>
          <p>Ein soziales Netzwerk für berufliche Kontakte</p>
          <h6>Wer verarbeitet Ihre Daten?</h6>
          <p>New Work SE, Dammtorstraße 30, 20354 Hamburg, Deutschland</p>
          <h6>Werden Ihre Daten in Drittländer übertragen?</h6>
          <p>
            Ja, zur Erfüllung des Vertrages mit Xing, wenn Sie eine Einwilligung
            erteilt haben, wenn es zur Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen erforderlich ist oder wenn ein
            Angemessenheitsbeschluss nach Art. 45 EU-DSGVO oder geeignete
            Garantien nach Art. 46 EU-DSGVO vorliegen.
          </p>
          <h6>
            Wo finden Sie weitere Informationen über den Datenschutz bei Xing?
          </h6>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://privacy.xing.com/de/datenschutzerklaerung/druckversion"
            >
              https://privacy.xing.com/de/datenschutzerklaerung/druckversion
            </a>
          </p>
          <h6>
            Wo können Sie als Nutzer Ihre Privatsphäre-Einstellungen anpassen?
          </h6>
          <p>
            Als registrierter Xing-Nutzer können Sie Ihre
            Privatsphäre-Einstellungen in Ihrem Nutzer-Account anpassen. Klicken
            Sie hierzu auf folgenden Link und loggen Sie sich ein:
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.xing.com/settings/privacy"
            >
              https://www.xing.com/settings/privacy
            </a>
          </p>
        </div>
        <div>
          <h5>YouTube</h5>
          <p>
            <strong>
              Was ist YouTube?
              <br />
            </strong>
            Ein soziales Netzwerk in Form eines Online-Video-Portals
          </p>
          <p>
            <strong>
              Wer verarbeitet Ihre Daten?
              <br />
            </strong>
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland
          </p>
          <p>
            <strong>
              Werden Ihre Daten in Drittländer übertragen?
              <br />
            </strong>
            Ja
          </p>
          <p>
            <strong>
              Wo finden Sie weitere Informationen über den Datenschutz bei
              YouTube?
              <br />
            </strong>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://policies.google.com/privacy?hl=de"
            >
              https://policies.google.com/privacy?hl=de
            </a>
          </p>
          <p>
            <strong>
              Wo können Sie als Nutzer Ihre Datenschutz-Einstellungen anpassen?
              <br />
            </strong>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://policies.google.com/privacy?hl=de#infochoices"
            >
              https://policies.google.com/privacy?hl=de#infochoices
            </a>
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}
