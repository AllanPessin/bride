import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TextDisplay() {
  const textContent = "Este é um espaço para reflexões, memórias e momentos que ecoam através do tempo. Cada segundo conta uma história, cada imagem guarda uma lembrança, e cada canção embala uma emoção. Permita-se viajar por essas sensações, revivendo o passado, celebrando o presente e sonhando com o futuro que construímos juntos.";
  
  return (
    <Card className="w-full max-w-md shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-center text-primary">Palavras que Ecoam</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 leading-relaxed text-center font-body text-base md:text-lg">
          {textContent}
        </p>
      </CardContent>
    </Card>
  );
}
