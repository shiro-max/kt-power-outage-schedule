"use client";

import { DaySchedule } from '@/types/schedule';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { capitalize } from '@/lib/utils';

interface ScheduleCardProps {
  day: DaySchedule;
  isToday: boolean;
}

export function ScheduleCard({ day, isToday }: ScheduleCardProps) {
  return (
    <Card className={`${isToday ? 'border-primary' : ''}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {capitalize(day.day)}
          {isToday && (
            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
              Today
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {day.timeSlots.map((slot, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-muted p-2 rounded-md"
            >
              <span>{slot.start}</span>
              <span className="text-muted-foreground">to</span>
              <span>{slot.end}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}