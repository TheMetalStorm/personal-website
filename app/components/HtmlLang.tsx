'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HtmlLang() {
	const pathname = usePathname();

	useEffect(() => {
		document.documentElement.lang = pathname.startsWith('/de') ? 'de' : 'en';
	}, [pathname]);

	return null;
}
