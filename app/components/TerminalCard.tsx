'use client';

import Link from 'next/link';

export interface TerminalCardAction {
	href: string;
	label: string;
}

interface TerminalCardProps {
	href: string;
	image?: string;
	imageAlt?: string;
	imageContain?: boolean;
	title: string;
	description: string;
	meta: string[];
	actions: TerminalCardAction[];
	viewLabel: string;
}

export default function TerminalCard({
	href,
	image,
	imageAlt,
	imageContain,
	title,
	description,
	meta,
	actions,
	viewLabel,
}: TerminalCardProps) {
	return (
		<article className="term-border flex h-full flex-col border">
			{image && (
				<Link href={href} className="term-border block overflow-hidden border-b">
					<div className={`relative aspect-[16/10] ${imageContain ? 'p-4' : ''}`} style={{ background: 'var(--terminal-bg)' }}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={image}
							alt={imageAlt || title}
							className={`h-full w-full ${imageContain ? 'object-contain' : 'object-cover'}`}
						/>
					</div>
				</Link>
			)}

			<div className="flex flex-1 flex-col p-5">
				<Link href={href} className="term-title text-lg font-semibold sm:text-xl">{title}</Link>
				<p className="term-desc mt-2 flex-1 text-sm leading-relaxed">{description}</p>

				<div className="mt-3 flex flex-wrap gap-2">
					{meta.slice(0, 3).map((m, i) => (
						<span key={i} className="term-border term-dim border px-2 py-0.5 text-[11px]">{m}</span>
					))}
				</div>

				<div className="term-border mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3">
					<div className="flex flex-wrap gap-x-4 gap-y-1">
						{actions.map((a) => (
							<a key={a.href} href={a.href} target="_blank" rel="noopener noreferrer" className="term-link text-xs underline decoration-dotted underline-offset-4 hover:text-[var(--terminal-accent)]">
								{a.label} ↗
							</a>
						))}
					</div>
					<Link href={href} className="term-accent shrink-0 text-sm">{viewLabel} →</Link>
				</div>
			</div>
		</article>
	);
}
