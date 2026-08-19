'use client';

import { useI18n, Locale } from '../hooks/useI18n';

export default function LanguageSwitcher() {
	const { locale, setLocale } = useI18n();

	return (
		<div className="term-mono flex items-center gap-2 text-[13px]">
			{(['en', 'de'] as Locale[]).map((code) => {
				const isActive = locale === code;
				return (
					<button
						key={code}
						type="button"
						onClick={() => setLocale(code)}
						disabled={isActive}
						aria-current={isActive ? 'true' : undefined}
						className="term-link uppercase"
						style={isActive ? { color: 'var(--terminal-accent)' } : undefined}
					>
						{code}
					</button>
				);
			})}
		</div>
	);
}
