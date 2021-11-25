import React, { useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Accomplisment } from "../elements/Accomplisment";
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
import styles from "../../styles/components/blocks/Accomplisments.module.scss";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

interface Accomplisments {
	accomplisments: [
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

export const Accomplisments: React.FC<Accomplisments> = ({
	accomplisments,
	locale,
}) => {
	const [activeAccomplisment, setActiveAccomplisment] = useState(
		accomplisments[0]
	);
	const { t } = useTranslation("index");

	return (
		<section id="accomplisments" className={styles.accomplisments}>
			<Container classNames={styles.accomplisments__container}>
				<h2 className={styles.accomplisments__heading}>
					{t("accomplisments_heading")}
				</h2>

				<Swiper
					onSlideChange={(slide) =>
						setActiveAccomplisment(accomplisments[slide.realIndex])
					}
					className="custom-swiper"
					navigation={true}
					loop={true}
					loopedSlides={accomplisments.length}
					pagination={{ type: "fraction" }}
					slideToClickedSlide={true}
					slidesPerView={"auto"}
				>
					{accomplisments.map((accomplisment, index) => {
						return (
							<SwiperSlide key={index}>
								<Image
									src={accomplisment.image_url}
									alt={
										locale === "nl"
											? accomplisment.name_nl
											: accomplisment.name_en
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

			<Accomplisment
				accomplisment={activeAccomplisment}
				locale={locale}
			/>
		</section>
	);
};
