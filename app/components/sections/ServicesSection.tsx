import {useEffect, useMemo, useRef, useState} from "react";
import {SectionProps} from "../Sections";
import {Card, Container, Text, Title} from "@mantine/core";

export function ServicesCarousel({text}: {text: any}) {
	const services = text.services ?? [];
	const count = services.length;

	const loop = useMemo(() => [...services, ...services], [services]);

	const HOLD_MS = 3000;
	const MOVE_MS = 600;

	const [index, setIndex] = useState(0); // 0..count-1
	const [paused, setPaused] = useState(false);
	const [animate, setAnimate] = useState(true);

	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		if (!count) return;

		const schedule = () => {
			// hold
			timerRef.current = window.setTimeout(() => {
				setAnimate(true);
				setIndex((i) => i + 1);
			}, HOLD_MS);
		};

		if (!paused) schedule();

		return () => {
			if (timerRef.current) window.clearTimeout(timerRef.current);
		};
	}, [paused, count, index]);

	// cuando pasamos al duplicado (index === count), hacemos “snap” a 0 sin animación
	useEffect(() => {
		if (!count) return;

		if (index === count) {
			// terminamos de animar hacia la copia duplicada...
			const t = window.setTimeout(() => {
				setAnimate(false); // desactiva transition
				setIndex(0); // snap al inicio
				// reactivamos animación en el próximo frame
				requestAnimationFrame(() => setAnimate(true));
			}, MOVE_MS);

			return () => window.clearTimeout(t);
		}
	}, [index, count]);

	if (!count) return null;

	return (
		<section className="services-shell" id="services">
			<Container size="xl" className="services-shell__inner">
				<div className="services-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
					<div className="services-viewport">
						<h3 style={{color: "rgba(0, 211, 223, 1)", margin: 0, textAlign: "center"}}>{text.nav.services}</h3>
						<div
							className={`services-track ${animate ? "is-animating" : ""}`}
							style={{
								transform: `translateX(-${index * 100}%)`,
								["--moveMs" as any]: `${MOVE_MS}ms`,
							}}>
							{loop.map((service, idx) => (
								<div className="services-slide" key={`${service.title}-${idx}`}>
									<Card padding="lg" radius="md" withBorder className="services-card" w="100%" h="100%">
										<Title order={1} className="services-card__title" c="rgba(245, 247, 250, 1)" fw={700}>
											{service.title}
										</Title>
										<Text c="rgba(245, 247, 250, 1)" size="md">
											{service.description}
										</Text>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export function ServicesSection({text}: SectionProps) {
	return <ServicesCarousel text={text} />;
}
