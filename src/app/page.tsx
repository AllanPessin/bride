import SpotifyPlayer from '@/components/spotify-player';
import ImageCarousel from '@/components/image-carousel';
import TextDisplay from '@/components/text-display';
import TimeCounter from '@/components/time-counter';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <header className="text-center mb-4 sm:mb-6">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Ecos Temporais
        </h1>
        <p className="text-muted-foreground font-body text-sm sm:text-base">
          Uma jornada através de sons, imagens, palavras e o tempo que nos une.
        </p>
      </header>
      
      <SpotifyPlayer />
      <ImageCarousel />
      <TextDisplay />
      <TimeCounter />

      <footer className="mt-8 pt-8 border-t border-border w-full max-w-md text-center">
        <p className="text-sm text-muted-foreground font-body">
          Feito com ❤️ para celebrar nossos momentos.
        </p>
      </footer>
    </main>
  );
}
