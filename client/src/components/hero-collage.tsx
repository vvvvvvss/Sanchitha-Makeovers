import { Button } from "@/components/ui/button";
const hexes = [
	{ type: "image", src: "https://picsum.photos/id/1015/400/400", alt: "Hex 1" },
	{ type: "image", src: "https://picsum.photos/id/1016/400/400", alt: "Hex 2" },
	{ type: "color", color: "var(--purple-primary)" },
	{ type: "image", src: "https://picsum.photos/id/1018/400/400", alt: "Hex 3" },
	{ type: "image", src: "https://picsum.photos/id/1019/400/400", alt: "Hex 4" },
	{ type: "color", color: "var(--purple-secondary)" },
	{ type: "image", src: "https://picsum.photos/id/1020/400/400", alt: "Hex 5" },
	{ type: "image", src: "https://picsum.photos/id/1021/400/400", alt: "Hex 6" },
	{ type: "color", color: "var(--purple-deep)" },
	{ type: "image", src: "https://picsum.photos/id/1022/400/400", alt: "Hex 7" },
];

export default function HeroCollage() {
	return (
		<section className="relative min-h-screen bg-[linear-gradient(to_bottom_right,var(--purple-light),var(--cream))] pt-20 pb-10 px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center justify-between">
			{/* Left Puzzle Hex Collage */}
			<div className="hex-container">
				{hexes.map((hex, idx) => (
					<div
						key={idx}
						className={`hex hex-${idx + 1}`}
						style={{
							backgroundColor: hex.type === "color" ? hex.color : undefined,
						}}
					>
						{hex.type === "image" && (
							<img
								src={hex.src}
								alt={hex.alt}
								className="w-full h-full object-cover"
							/>
						)}
					</div>
				))}
			</div>

			{/* Right Content */}
			<div className="text-left mt-8 sm:mt-0 max-w-xl flex flex-col items-start justify-center h-full">
				<h1 className="font-playfair text-4xl sm:text-5xl font-bold text-[var(--purple-primary)] leading-tight">
					Sanchitha
					<br />
					<span className="text-[var(--purple-deep)]">Makeovers</span>
				</h1>
				<p className="text-lg sm:text-xl italic font-inter text-[var(--purple-accent)] mt-4">
					where every moment becomes a timeless masterpiece
				</p>
				<div className="signature-text mb-4 self-end text-right">
					— Savitha & Chethana
				</div>
				<div className="flex flex-col sm:flex-row gap-4 mt-6 justify-start sm:justify-start">
					<button
						className="rounded-full px-5 py-2 text-white font-medium"
						style={{ backgroundColor: "var(--purple-primary)" }}
					>
						Book Consultation
					</button>
					<button
						className="rounded-full px-5 py-2 border font-medium"
						style={{
							borderColor: "var(--purple-primary)",
							color: "var(--purple-primary)",
						}}
					>
						View Portfolio
					</button>
				</div>
			</div>
		</section>
	);
}
