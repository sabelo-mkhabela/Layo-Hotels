//1. The Guest 

export interface Guest {
    id: string;
    name: string;
    email: string;
    phone: string;
};


// 2. The Room 
export interface Room {
    roomNumber: string;
    roomType: RoomType;
    rate: number;
    available: boolean;
}
export type RoomType = "Standard" | "Deluxe" | "Suite";



//3. The Booking 
export interface Booking {
    bookingId: string;
    guest: Guest;
    room: Room;
    checkInDate: Date;
    checkOutDate: Date;
    status: BookingStatus;
}

export type BookingStatus = "Confirmed" | "CheckedIn" | "CheckedOut" | "Cancelled";






