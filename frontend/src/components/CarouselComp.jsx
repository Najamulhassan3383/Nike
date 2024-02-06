import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComp = () => {
  return (
    <Carousel className="h-full">
      <CarouselContent className="h-full">
        <CarouselItem className="bg-red-900 h-full">Najam</CarouselItem>
        <CarouselItem>Zain</CarouselItem>
        <CarouselItem>ayan</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComp;
