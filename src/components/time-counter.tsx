"use client";

import { useState, useEffect } from 'react';
import { intervalToDuration } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const START_DATE = new Date('2022-09-04T00:00:00');

interface TimeUnitProps {
    value: number | undefined;
    label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
    const [displayValue, setDisplayValue] = useState(value || 0);

    useEffect(() => {
        if (value !== undefined) {
            // Basic "smooth" increment effect - can be improved with animation libraries
            const difference = value - displayValue;
            if (Math.abs(difference) > 0) {
                // Only update if there's a significant change to avoid jitter on fast updates
                // For seconds, it will update every second. For minutes, less frequently.
                setDisplayValue(value);
            }
        }
    }, [value]);


    return (
        <div className="flex flex-col items-center p-2 sm:p-3 bg-secondary/50 rounded-lg shadow-sm w-16 sm:w-20">
            <span className="text-xl sm:text-3xl font-bold text-primary tabular-nums">
                {String(displayValue || 0).padStart(2, '0')}
            </span>
            <span className="text-xs text-muted-foreground uppercase">{label}</span>
        </div>
    );
}


export default function TimeCounter() {
    const [duration, setDuration] = useState<Duration | null>(null);

    useEffect(() => {
        const calculateDuration = () => {
            const now = new Date();
            setDuration(intervalToDuration({ start: START_DATE, end: now }));
        };

        calculateDuration(); // Initial calculation
        const intervalId = setInterval(calculateDuration, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Card className="w-full max-w-md shadow-xl rounded-xl">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-center text-primary">Eu te amo há</CardTitle>
            </CardHeader>
            <CardContent>
                {duration ? (
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 justify-items-center">
                        <TimeUnit value={duration.years} label="Anos" />
                        <TimeUnit value={duration.months} label="Meses" />
                        <TimeUnit value={duration.days} label="Dias" />
                        <TimeUnit value={duration.hours} label="Horas" />
                        <TimeUnit value={duration.minutes} label="Minutos" />
                        <TimeUnit value={duration.seconds} label="Segundos" />
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">Calculando o tempo...</p>
                )}
            </CardContent>
        </Card>
    );
}
