import React, { useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IImage } from "@/constants";

interface ProductCarouselProps {
  images: IImage[];
}

export default function ProductCarousel(props: ProductCarouselProps) {
  const { images } = props;
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <Carousel setApi={setApi} className="w-full max-w-[120px]">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src={image.url}
                className="w-full h-auto"
                alt="image-carousel"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between pt-2">
          <CarouselPrevious />
          <span>
            {current} of {count}
          </span>
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
