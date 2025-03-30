import { NeighborhoodSchedule } from '@/types/schedule';

export const schedules: NeighborhoodSchedule[] = [
  {
    neighborhood: "Hledan",
    schedule: [
      {
        day: "monday",
        timeSlots: [
          { start: "09:00", end: "11:00" },
          { start: "15:00", end: "17:00" }
        ]
      },
      {
        day: "wednesday",
        timeSlots: [
          { start: "09:00", end: "11:00" },
          { start: "13:00", end: "15:00" }
        ]
      }
    ]
  },
  {
    neighborhood: "Yankin",
    schedule: [
      {
        day: "tuesday",
        timeSlots: [
          { start: "10:00", end: "12:00" },
          { start: "14:00", end: "16:00" }
        ]
      },
      {
        day: "thursday",
        timeSlots: [
          { start: "11:00", end: "13:00" },
          { start: "16:00", end: "18:00" }
        ]
      }
    ]
  }
];