'use client';

import type { ReactNode } from 'react';
import { useI18n } from '../hooks/useI18n';
import LegalFooter from './LegalFooter';

function Address({ locale }: { locale: 'de' | 'en' }) {
	return (
		<address className="not-italic">
			Simons Software<br />
			{locale === 'de' ? 'Einzelunternehmen' : 'Sole proprietorship'}<br />
			{locale === 'de' ? 'Inhaber' : 'Proprietor'}: Simon Arapoglu<br />
			Steubenstraße 47<br />
			90763 Fürth<br />
			{locale === 'de' ? 'Deutschland' : 'Germany'}
		</address>
	);
}

function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<section className="term-border border-t py-6">
			<h2 className="term-name text-lg font-semibold">{title}</h2>
			<div className="term-desc mt-3 space-y-3 text-sm leading-relaxed sm:text-[15px]">{children}</div>
		</section>
	);
}

function ImprintDE() {
	return (
		<>
			<Section title="Angaben gemäß § 5 DDG"><Address locale="de" /></Section>
			<Section title="Kontakt">
				<p>E-Mail: <a className="term-link" href="mailto:contact@simonarapoglu.com">contact@simonarapoglu.com</a></p>
			</Section>
			<Section title="Verantwortlich für journalistisch-redaktionelle Inhalte">
				<p>Verantwortlich gemäß § 18 Abs. 2 MStV, soweit anwendbar:</p>
				<p>Simon Arapoglu, Anschrift wie oben.</p>
			</Section>
			<Section title="Verbraucherstreitbeilegung">
				<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
			</Section>
		</>
	);
}

function ImprintEN() {
	return (
		<>
			<Section title="Information pursuant to Section 5 DDG"><Address locale="en" /></Section>
			<Section title="Contact">
				<p>Email: <a className="term-link" href="mailto:contact@simonarapoglu.com">contact@simonarapoglu.com</a></p>
			</Section>
			<Section title="Responsibility for editorial content">
				<p>Responsible pursuant to Section 18(2) MStV, where applicable:</p>
				<p>Simon Arapoglu, address as stated above.</p>
			</Section>
			<Section title="Consumer dispute resolution">
				<p>We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
			</Section>
		</>
	);
}

function PrivacyDE() {
	return (
		<>
			<Section title="1. Verantwortlicher">
				<Address locale="de" />
				<p>E-Mail: <a className="term-link" href="mailto:contact@simonarapoglu.com">contact@simonarapoglu.com</a></p>
			</Section>
			<Section title="2. Hosting und Server-Logfiles">
				<p>Diese Website wird bei der checkdomain GmbH, Große Burgstraße 27/29, 23552 Lübeck, gehostet. Beim Aufruf der Website verarbeitet der Hostinganbieter technisch erforderliche Verbindungsdaten. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Datei, Referrer-URL, Browsertyp, Betriebssystem und HTTP-Statuscode gehören.</p>
				<p>Die Verarbeitung erfolgt, um die Website zuverlässig und sicher bereitzustellen und Angriffe sowie technische Störungen erkennen zu können. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und funktionsfähigen Betrieb dieser Website. Protokolldaten werden gelöscht, sobald sie für diese Zwecke nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten oder Sicherheitsgründe eine längere Speicherung erfordern.</p>
				<p>Weitere Informationen: <a className="term-link" href="https://www.checkdomain.de/agb/datenschutz/" target="_blank" rel="noopener noreferrer">Datenschutzhinweise von checkdomain</a>.</p>
			</Section>
			<Section title="3. Theme-Einstellung im Browser">
				<p>Wenn Sie den Hell-/Dunkelmodus umschalten, wird die gewählte Einstellung im lokalen Speicher Ihres Browsers (localStorage) gespeichert. Die Information enthält ausschließlich die Auswahl „light“ oder „dark“, wird nicht an uns übertragen und dient dazu, die ausdrücklich gewählte Darstellung bei späteren Seitenaufrufen beizubehalten.</p>
				<p>Der Zugriff ist für die von Ihnen gewünschte Komfortfunktion erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Sie können die Einstellung jederzeit durch Löschen der Website-Daten in Ihrem Browser entfernen.</p>
			</Section>
			<Section title="4. Kontaktaufnahme per E-Mail">
				<p>Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre E-Mail-Adresse, den Inhalt Ihrer Nachricht und weitere freiwillig übermittelte Angaben zur Bearbeitung Ihrer Anfrage. Bei vorvertraglichen oder vertraglichen Anliegen ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage, in anderen Fällen Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Beantwortung von Anfragen.</p>
				<p>Für den E-Mail-Empfang nutzen wir einen Dienst der checkdomain GmbH, Große Burgstraße 27/29, 23552 Lübeck. Nachrichten zu allgemeinen Anfragen werden in der Regel 30 Tage nach abschließender Bearbeitung gelöscht. Eine längere Speicherung erfolgt nur, soweit gesetzliche Aufbewahrungspflichten bestehen oder sie zur Erfüllung vertraglicher Pflichten beziehungsweise zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</p>
			</Section>
			<Section title="5. Externe Links">
				<p>Diese Website enthält Links zu externen Angeboten, unter anderem GitHub, LinkedIn, itch.io und den Websites dargestellter Projekte. Beim bloßen Anzeigen unserer Seiten wird über diese Links keine Verbindung zu den externen Anbietern hergestellt. Erst wenn Sie einen Link aufrufen, verarbeitet der jeweilige Anbieter Daten nach seinen eigenen Datenschutzbestimmungen. Auf diese Verarbeitung haben wir keinen Einfluss.</p>
			</Section>
			<Section title="6. Cookies, Analyse und Tracking">
				<p>Diese Website setzt derzeit keine Analyse-, Marketing- oder Trackingdienste ein und verwendet keine einwilligungspflichtigen Cookies. Sollte sich der Funktionsumfang ändern, wird diese Datenschutzerklärung entsprechend angepasst und erforderlichenfalls vorab eine Einwilligung eingeholt.</p>
			</Section>
			<Section title="7. Ihre Rechte">
				<p>Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren.</p>
				<p>Für uns zuständig ist grundsätzlich das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, <a className="term-link" href="https://www.lda.bayern.de/" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a>.</p>
			</Section>
			<Section title="8. Aktualität">
				<p>Stand: 19. August 2026. Wir passen diese Datenschutzerklärung an, wenn sich die Website, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern.</p>
			</Section>
		</>
	);
}

function PrivacyEN() {
	return (
		<>
			<Section title="1. Controller">
				<Address locale="en" />
				<p>Email: <a className="term-link" href="mailto:contact@simonarapoglu.com">contact@simonarapoglu.com</a></p>
			</Section>
			<Section title="2. Hosting and server logs">
				<p>This website is hosted by checkdomain GmbH, Große Burgstraße 27/29, 23552 Lübeck, Germany. When the website is accessed, the hosting provider processes connection data required for technical operation. This may include the IP address, date and time, requested file, referrer URL, browser type, operating system and HTTP status code.</p>
				<p>The processing is necessary to provide the website reliably and securely and to detect attacks and technical faults. The legal basis is Article 6(1)(f) GDPR. Our legitimate interest is the secure and functional operation of this website. Log data is deleted once it is no longer needed for these purposes, unless legal retention duties or security reasons require longer storage.</p>
				<p>Further information: <a className="term-link" href="https://www.checkdomain.de/agb/datenschutz/" target="_blank" rel="noopener noreferrer">checkdomain privacy information</a>.</p>
			</Section>
			<Section title="3. Theme preference in your browser">
				<p>When you switch between light and dark mode, your selected preference is stored in your browser's local storage. It contains only the value “light” or “dark”, is not transmitted to us and is used to retain the display setting you expressly requested on later visits.</p>
				<p>Access is required to provide this requested convenience feature (Section 25(2)(2) TDDDG). You can remove the preference at any time by deleting this website's data in your browser.</p>
			</Section>
			<Section title="4. Contact by email">
				<p>If you contact us by email, we process your email address, the content of your message and any information you provide voluntarily in order to respond. For contractual or pre-contractual enquiries, the legal basis is Article 6(1)(b) GDPR; otherwise it is Article 6(1)(f) GDPR. Our legitimate interest is responding to enquiries.</p>
				<p>We use an email service provided by checkdomain GmbH, Große Burgstraße 27/29, 23552 Lübeck, Germany. Messages concerning general enquiries are usually deleted 30 days after the enquiry has been fully resolved. They are retained for longer only where statutory retention duties apply or where this is necessary to perform contractual obligations or to establish, exercise or defend legal claims.</p>
			</Section>
			<Section title="5. External links">
				<p>This website links to external services, including GitHub, LinkedIn, itch.io and the websites of featured projects. Merely viewing our pages does not establish a connection to these providers through those links. Once you follow a link, the respective provider processes data under its own privacy policy. We have no control over that processing.</p>
			</Section>
			<Section title="6. Cookies, analytics and tracking">
				<p>This website currently uses no analytics, marketing or tracking services and no cookies that require consent. If the website's functionality changes, we will update this privacy policy and obtain consent in advance where required.</p>
			</Section>
			<Section title="7. Your rights">
				<p>Subject to the applicable legal requirements, you have rights of access, rectification, erasure, restriction of processing, data portability and objection. You may withdraw consent at any time with future effect. You also have the right to lodge a complaint with a data protection supervisory authority.</p>
				<p>Our competent authority is generally the Bavarian State Office for Data Protection Supervision (BayLDA), Promenade 18, 91522 Ansbach, Germany, <a className="term-link" href="https://www.lda.bayern.de/" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a>.</p>
			</Section>
			<Section title="8. Updates">
				<p>Last updated: 19 August 2026. We will update this privacy policy if the website, the services used or the legal requirements change.</p>
			</Section>
		</>
	);
}

export default function LegalPage({ kind }: { kind: 'imprint' | 'privacy' }) {
	const { locale, t } = useI18n();
	const isImprint = kind === 'imprint';

	return (
		<main className="term-mono mx-auto max-w-3xl px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
			<header className="pb-8">
				<p className="term-dim text-[13px]"><span className="term-accent">$</span> cat {isImprint ? 'imprint.md' : 'privacy.md'}</p>
				<h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t(`${kind}Title`)}</h1>
				{locale === 'en' && <p className="term-dim mt-3 text-sm">This English translation is provided for convenience. The German version is authoritative.</p>}
			</header>
			{isImprint ? (locale === 'de' ? <ImprintDE /> : <ImprintEN />) : (locale === 'de' ? <PrivacyDE /> : <PrivacyEN />)}
			<LegalFooter />
		</main>
	);
}
