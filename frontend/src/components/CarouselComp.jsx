import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselComp() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full max-h-80 ">
      <CarouselContent className="w-full max-h-80">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="p-1 w-full h-full">
              <Card className="h-full flex justify-center items-center">
                <CardContent className="flex w-full aspect-square items-center justify-center p-6">
                  <img
                    src="hero-img.png"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
