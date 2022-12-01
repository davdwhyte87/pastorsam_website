import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
//@ts-ignore
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: FC<{ images: { path: string; url: string }[] }> = ({
  images,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          //   slidesToShow: 3,
          //   slidesToScroll: 3,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          //   slidesToShow: 2,
          //   slidesToScroll: 2,
          infinite: false,
          arrows: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {images?.map((val, i) => (
        <Link href={val?.url} key={i}>
          <Image
            src={val?.path}
            alt={"pastor books"}
            width={282}
            height={363}
          />
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;
