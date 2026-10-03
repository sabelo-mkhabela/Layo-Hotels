//1. The Guest 

interface Guest {
    id: string;
    name: string;
    email: string;
    phone: string;
}

const guest: Guest = {
    id: "1",
    name: "Thandi Mokoena",
    email: "thandi@example.com",
    phone: "0123456789",
}
console.log(`Guest: ${guest.name}, ${guest.email}`);

//const g: Guest = {
//    id: "2",
 //   name: "Sipho Dlamini",
 //   email: "sipho@example.com",
 //   phone: "0213456789",
//}
//console.log(`Guest: ${g.name}, ${g.email}`);

// 2. The Room 
interface Room {
    RoomNumber: string;
    type: RoomType;
    Rate: number;
    Available: boolean;
}
type RoomType = "Standard" | "Deluxe" | "Suite";

//const r: Room = {
//    roomType: "Penthouse",
//}

const room: Room = {
    RoomNumber: "201",
    type: "Deluxe",
    Rate: 1450,
    Available: true,
}
console.log(`Room ${room.RoomNumber} at R${room.Rate.toFixed(2)} per night`);

//3. The Booking 
interface Booking {
    bookingId: string;
    guest: Guest;
    room: Room;
    checkInDate: Date;
    checkOutDate: Date;
    status: BookingStatus;
}

type BookingStatus = "Confirmed" | "CheckedIn" | "CheckedOut" | "Cancelled";

const booking: Booking = {
    bookingId: "9001",
    guest: guest,
    room: room,
    checkInDate: new Date ("2026-10-02"),
    checkOutDate: new Date ("2026-10-05"),
    status: "Confirmed"
}
console.log(`Booking ${booking.bookingId}: ${guest.name} in room ${room.RoomNumber}, ${booking.checkInDate} to ${booking.checkOutDate}, ${booking.status}}`);

//Part 2
//4. A list of rooms 

const rooms: Room[] = [
    {
    RoomNumber: "101",
    type: "Standard",
    Rate: 850,
    Available: true,
    },
    {
    RoomNumber: "102",
    type: "Standard",
    Rate: 850,
    Available: true,
    },
    {
    RoomNumber: "201",
    type: "Deluxe",
    Rate: 1450,
    Available: true,
    },
    {
    RoomNumber: "202",
    type: "Deluxe",
    Rate: 1450,
    Available: true,
    },
    {
    RoomNumber: "301",
    type: "Deluxe",
    Rate: 2900,
    Available: true,
    }
    
];


for (const room of rooms) {
	console.log(`${room.RoomNumber}: ${room.type} R${room.Rate.toFixed(2)}`);
}

//5. A function with a typed input and typed output 

function nights (booking: Booking): number {
    let difference = booking.checkOutDate.getTime() - booking.checkInDate.getTime();
    return Math.round(difference/(1000*60*60*24));
}

const booking1: Booking = {
    bookingId: "9001",
    guest: guest,
    room: room,
    checkInDate: new Date("2026-10-04"),
    checkOutDate: new Date("2026-10-07"),
    status: "Confirmed",
}

console.log(`Booking: ${booking1.bookingId}: ${nights(booking1)} nights`);

const booking2: Booking = {
    bookingId: "9002",
    guest: guest,
    room: room,
    checkInDate: new Date("2026-10-06"),
    checkOutDate: new Date("2026-10-07"),
    status: "Confirmed",
}

console.log(`Booking: ${booking2.bookingId}: ${nights(booking2)} nights`);

