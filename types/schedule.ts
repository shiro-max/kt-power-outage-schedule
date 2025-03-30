export interface TimeSlot {
  start: string;
  end: string;
}

export interface DaySchedule {
  day: string;
  timeSlots: TimeSlot[];
}

export interface NeighborhoodSchedule {
  neighborhood: string;
  schedule: DaySchedule[];
}