import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpotifyPlayer() {

  const trackId = "50x1Ic8CaXkYNvjmxe3WXy"; 
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

  return (
    <div className="aspect-video_16/5_sm_16/9 md:aspect-auto">
      <iframe
        title="Spotify Embed Player"
        style={{ borderRadius: '12px' }}
        src={embedUrl}
        width="100%"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
