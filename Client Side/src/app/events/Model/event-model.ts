export interface EventModel {
  eventName: string;
  eventDescription: string;
  eventDate: Date;
  eventTime: Date;
  eventImage: string;
  id: number;
  sponsors?: [];
  speakers?: [];
  gallaries?: [];
  eventSchedules?: [];
}
