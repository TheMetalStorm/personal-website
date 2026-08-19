'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '../hooks/useI18n';

export default function LegalFooter() {
	const { t } = useI18n();
	const pathname = usePathname();
	const prefix = pathname.startsWith('/de') ? '/de' : pathname.startsWith('/en') ? '/en' : '';

	return (
		<footer className="term-border mt-10 border-t pt-6">
			<div className="term-dim flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
				<span><span className="term-accent">[ OK ]</span> {t('landing.systemReady')}</span>
				<span>{t('landing.location')}</span>
				<a href="mailto:contact@simonarapoglu.com" className="term-link">contact@simonarapoglu.com</a>
				<Link href={`${prefix}/imprint`} className="term-link">{t('imprint')}</Link>
				<Link href={`${prefix}/privacy`} className="term-link">{t('privacy')}</Link>
			</div>
		</footer>
	);
}
