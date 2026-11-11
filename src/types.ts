//1. The Guest 

export class Guest {
    constructor (
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    private phone: string
    ) {}

    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    maskedPhone(): string {
    return "******" + this.phone.slice(-4);
}
};


// 2. The Room 
export interface Room {
    roomNumber: string;
    roomType: RoomType;
    rate: number;
    available: boolean;
    inService: boolean;
}

export type RoomType = "Standard" | "Deluxe" | "Suite";



//3. The Booking 
export class Booking {
    constructor (
    public bookingId: string,
    public guest: Guest,
    public room: Room,
    public checkInDate: Date,
    public checkOutDate: Date,
    public status: BookingStatus
    ) {}

    nights(): number {
const difference =
        this.checkOutDate.getTime() -
        this.checkInDate.getTime();

    return Math.round(difference / (1000 * 60 * 60 * 24));
}

totalCost(): number {
        return this.nights() * this.room.rate;
}

        canBeCancelled(): boolean {
    const fortyEightHours = 48 * 60 * 60 * 1000;

    return (
        this.status === "Confirmed" &&
        this.checkInDate.getTime() > Date.now() + fortyEightHours
    );
}
}


export type BookingStatus = "Confirmed" | "CheckedIn" | "CheckedOut" | "Cancelled";

// 4. The Hotel

export class Hotel {
    constructor(
        public name: string,
        public rooms: Room[]
    ) {}

    roomCount(): number {
        return this.rooms.length;
    }

    roomsInService(): number {
        return this.rooms.filter(room => room.inService).length;
    }
}





