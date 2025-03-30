"use client";

import { useState, useEffect } from 'react';
import { schedules } from '@/data/schedules';
import { ScheduleCard } from '@/components/ScheduleCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PowerIcon } from 'lucide-react';

export default function Home() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const day = days[new Date().getDay()];
    setCurrentDay(day);

    // Update every 2 hours
    const interval = setInterval(() => {
      const newDay = days[new Date().getDay()];
      setCurrentDay(newDay);
    }, 2 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredSchedules = schedules.filter(schedule =>
    schedule.neighborhood.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedSchedule = selectedNeighborhood
    ? schedules.find(s => s.neighborhood === selectedNeighborhood)
    : null;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8 text-primary">
          <PowerIcon className="h-8 w-8 mr-2" />
          <h1 className="text-3xl font-bold">Power Outage Schedule</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="space-y-2">
            <label className="text-sm font-medium">Search Neighborhood</label>
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select Neighborhood</label>
            <Select
              value={selectedNeighborhood}
              onValueChange={setSelectedNeighborhood}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a neighborhood" />
              </SelectTrigger>
              <SelectContent>
                {filteredSchedules.map((schedule) => (
                  <SelectItem
                    key={schedule.neighborhood}
                    value={schedule.neighborhood}
                  >
                    {schedule.neighborhood}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedSchedule ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedSchedule.schedule.map((day) => (
              <ScheduleCard
                key={day.day}
                day={day}
                isToday={day.day === currentDay}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            Please select a neighborhood to view the schedule
          </div>
        )}
      </div>
    </main>
  );
}