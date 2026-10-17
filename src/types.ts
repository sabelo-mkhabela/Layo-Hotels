//1. The Guest 

export interface Guest {
    id: string;
    name: string;
    email: string;
    phone: string;
}

const guest1: Guest = {
    id: "1",
    name: "Thandi Mokoena",
    email: "thandi@example.com",
    phone: "0123456789"
};


// 2. The Room 
export interface Room {
    roomNumber: string;
    roomType: RoomType;
    Rate: number;
    Available: boolean;
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


//Part 2
//4. A list of rooms 

const rooms: Room[] = [
    {
    roomNumber: "101",
    roomType: "Standard",
    Rate: 850,
    Available: true,
    },
    {
    roomNumber: "102",
    roomType: "Standard",
    Rate: 850,
    Available: true,
    },
    {
    roomNumber: "201",
    roomType: "Deluxe",
    Rate: 1450,
    Available: true,
    },
    {
    roomNumber: "202",
    roomType: "Deluxe",
    Rate: 1450,
    Available: true,
    },
    {
    roomNumber: "301",
    roomType: "Deluxe",
    Rate: 2900,
    Available: true,
    }
    
];


for (const room of rooms) {
	console.log(`${room.roomNumber}: ${room.roomType} R${room.Rate.toFixed(2)}`);
}

//5. A function with a typed input and typed output 

function nights (booking: Booking): number {
    let difference = booking.checkOutDate.getTime() - booking.checkInDate.getTime();
    return Math.round(difference/(1000*60*60*24));
}


