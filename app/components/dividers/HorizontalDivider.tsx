import gsap from 'gsap';
import { useEffect } from 'react';

const HorizontalLine = () => {
	const color = 'backdrop-invert';
	useEffect(() => {
		document.addEventListener('mousemove', moveCircle);
		return () => document.removeEventListener('mousemove', moveCircle);
	}, []);

	const moveCircle = (e: MouseEvent): void => {
		gsap.to('.horizontalLine', 0, {
			css: {
				top: e.clientY,
			},
		});

		gsap.to('.verticalLine', 0, {
			css: {
				left: e.clientX,
			},
		});
	};

	return (
		<>
			<div className={`horizontalLine ${color} fixed h-[1px] w-[100vw]`} />
			<div className={`verticalLine ${color} fixed w-[1px] h-full`} />
		</>
	);
};

export default HorizontalLine;
