const SPONSORS = [
	{ name: "MRDU", type: "HOST INSTITUTION" },
	{ name: "CSE-AIML", type: "ACADEMIC PARTNER" },
	{ name: "YOUR BRAND", type: "PARTNER SLOT OPEN" },
];

export default function Sponsers() {
	return (
		<main className="min-h-[60vh] bg-[#05060b] px-6 py-20 text-white sm:px-10">
			<div className="mx-auto max-w-5xl">
				<p className="font-mono text-xs tracking-[0.25em] text-cyan-400">// NETWORK_PARTNERS</p>
				<h1 className="mt-4 font-display text-3xl tracking-wide sm:text-5xl">Sponsors</h1>
				<p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
					The organizations powering the next generation of builders and responsible AI innovation.
				</p>
				<div className="mt-12 grid gap-4 sm:grid-cols-3">
					{SPONSORS.map((sponsor) => (
						<div key={sponsor.name} className="border border-cyan-400/30 bg-[#0a0e1a] px-6 py-8">
							<p className="font-display text-xl text-cyan-300">{sponsor.name}</p>
							<p className="mt-3 font-mono text-[11px] tracking-[0.15em] text-slate-500">{sponsor.type}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
