import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpotifyPlayer() {
  // Example track: "Here Comes The Sun" by The Beatles
  const trackId = "0q2TQjWHvaPA382227Mtv8"; 
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

  return (
    <Card className="w-full max-w-md shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-center text-primary">Nossa Trilha Sonora</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video_16/5_sm_16/9 md:aspect-auto"> {/* Adjusted aspect ratio for better mobile viewing */}
          <iframe
            title="Spotify Embed Player"
            style={{ borderRadius: '12px' }}
            src={embedUrl}
            width="100%"
            height="152" // Standard compact player height
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="shadow-md"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}
