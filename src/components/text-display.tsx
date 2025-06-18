import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TextDisplay() {
    const textContent = "Obrigado por sempre comemorar as datas e torna-las especiais, obrigado pelos presentes e por ser uma mulher tão incrível na minha vida.";

    return (
        <Card className="w-full max-w-md shadow-xl rounded-xl">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-center text-primary">Para meu amor</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/80 leading-relaxed text-center font-body text-base md:text-lg">
                    {textContent}
                </p>
            </CardContent>
        </Card>
    );
}
