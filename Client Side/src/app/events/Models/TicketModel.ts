export class Ticket 
{
    
    constructor(
        public  ticketId:number,
        public ticketType:string,
        public ticketPrice:number,
        public ticketQuentity:number,
        public ticketDetails:string,
        public eventId:number,
        public eventName:string,
        public eventDate:any,
        public eventTime:any,
        public purchase:any,

    )
    {

    }
}