"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const images = [
  { src: "/images/image1.jpeg", alt: "Imagem de uma paisagem serena", hint: "serene landscape" },
  { src: "/images/image1.jpeg", alt: "Imagem de uma paisagem serena", hint: "serene landscape" },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 300);
  };

  const nextSlide = () => {
    changeSlide((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    changeSlide((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000); // Auto-play every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Card className="w-full max-w-md shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-center text-primary">Nossas Memórias</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-hidden rounded-lg aspect-[9/16] shadow-inner">
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              priority={index === 0} // Prioritize loading the first image
              className={cn(
                "absolute w-full h-full object-cover transition-opacity duration-300 ease-in-out",
                index === currentIndex ? "opacity-100 z-10" : "opacity-0",
                isFading && index === currentIndex ? "opacity-0" : "", // current image fades out
                isFading && index === (currentIndex + 1) % images.length && "opacity-100" // next image fades in (simplified)
              )}
              data-ai-hint={image.hint}
            />
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/50 hover:bg-background/75 text-primary rounded-full"
            aria-label="Imagem Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/50 hover:bg-background/75 text-primary rounded-full"
            aria-label="Próxima Imagem"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              aria-label={`Ir para imagem ${index + 1}`}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                currentIndex === index ? "bg-primary" : "bg-muted hover:bg-primary/50"
              )}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
