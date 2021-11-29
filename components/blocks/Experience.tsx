import React, { useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Project } from "../elements/Project";
import { Container } from "../elements/Container";
import SwiperCore, {
	Autoplay,
	EffectFade,
	Navigation,
	Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../../styles/components/blocks/Experience.module.scss";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

interface Experience {
	experience: [
		{
			id: number;
			name_nl: string;
			name_en: string;
			description_nl: string;
			description_en: string;
			category: string;
			stack: string[];
			website_url: string;
			repository_url: string;
			image_url: string;
		}
	];
	locale: string;
}

export const Experience: React.FC<Experience> = ({ experience, locale }) => {
	const [activeProject, setActiveProject] = useState(experience[0]);
	const { t } = useTranslation("index");

	return (
		<section id="experience" className={styles.experience}>
			<Container classNames={styles.experience__container}>
				<h2 className={styles.experience__heading}>
					{t("experience_heading")}
				</h2>

				<Swiper
					onSlideChange={(slide) =>
						setActiveProject(experience[slide.realIndex])
					}
					className="custom-swiper"
					navigation={true}
					loop={true}
					loopedSlides={experience.length}
					pagination={{ type: "fraction" }}
					slideToClickedSlide={true}
					slidesPerView={"auto"}
				>
					{experience.map((project, index) => {
						return (
							<SwiperSlide key={index}>
								<Image
									src={project.image_url}
									alt={
										locale === "nl"
											? project.name_nl
											: project.name_en
									}
									layout="fill"
									objectFit="cover"
									objectPosition="center"
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Container>

			<Project project={activeProject} locale={locale} />
		</section>
	);
};
