import React, {useEffect, useRef} from "react";
import {Copy} from "../../copy";
import {Stack, Text, Title} from "@mantine/core";
import Image from "next/image";

export const UsSection = ({text}: {text: Copy}) => {
	const imgRef = useRef<HTMLImageElement | null>(null);

	const currentRotation = useRef(0);
	const targetRotation = useRef(0);
	const raf = useRef<number | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			targetRotation.current = window.scrollY * 0.3;

			if (!raf.current) {
				raf.current = requestAnimationFrame(animate);
			}
		};

		const animate = () => {
			const diff = targetRotation.current - currentRotation.current;

			currentRotation.current += diff * 0.08;

			if (imgRef.current) {
				const rect = imgRef.current.getBoundingClientRect();

				// solo rota si está visible en pantalla
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					imgRef.current.style.transform = `rotate(${currentRotation.current}deg)`;
				}
			}

			if (Math.abs(diff) > 0.1) {
				raf.current = requestAnimationFrame(animate);
			} else {
				raf.current = null;
			}
		};
		window.addEventListener("scroll", handleScroll, {passive: true});

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, []);

	return (
		<section className="us-shell" id="us">
			<Stack align="center">
				<Title w="40%">{text.us.title}</Title>

				<Text w="60%">{text.us.description}</Text>

				<Image
					ref={imgRef}
					alt="logo"
					src="/us/us-image.svg"
					width={192}
					height={192}
					loading="lazy"
					style={{
						userSelect: "none",
						willChange: "transform",
					}}
				/>
			</Stack>
		</section>
	);
};
