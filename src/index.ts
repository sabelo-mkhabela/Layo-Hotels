import type { Guest, Room, Booking, roomType, BookingStatus } from "./types";

//import type { Guest, Room, Booking } from "./type";

// Guests

const guest1: Guest = {
    id: "1",
    name: "Thandi Mokoena",
    email: "thandi@example.com",
    phone: "0123456789"
};

const guest2: Guest = {
    id: "2",
    name: "Sipho Dlamini",
    email: "sipho@example.com",
    phone: "0213456789"
};


// Rooms

const rooms: Room[] = [
    {
        roomNumber: "101",
        roomType: "Standard",
        rate: 850,
        available: true
    },
    {
        roomNumber: "102",
        roomType: "Standard",
        rate: 850,
        available: true
    },
    {
        roomNumber: "201",
        roomType: "Deluxe",
        rate: 1450,
        available: true
    },
    {
        roomNumber: "202",
        roomType: "Deluxe",
        rate: 1450,
        available: true
    },
    {
        roomNumber: "301",
        roomType: "Suite",
        rate: 2900,
        available: true
    }
];


// Function from question 5

function nights(booking: Booking): number {
    const difference =
        booking.checkOutDate.getTime() -
        booking.checkInDate.getTime();

    return Math.round(difference / (1000 * 60 * 60 * 24));
}


// Bookings

const bookings: Booking[] = [
    {
        bookingId: "9001",
        guest: guest1,
        room: rooms[2]!,
        checkInDate: new Date("2026-10-02"),
        checkOutDate: new Date("2026-10-05"),
        status: "Confirmed"
    },
    {
        bookingId: "9002",
        guest: guest2,
        room: rooms[0]!,
        checkInDate: new Date("2026-10-06"),
        checkOutDate: new Date("2026-10-07"),
        status: "CheckedIn"
    },
    {
        bookingId: "9003",
        guest: guest1,
        room: rooms[4]!,
        checkInDate: new Date("2026-10-10"),
        checkOutDate: new Date("2026-10-14"),
        status: "Cancelled"
    }
];


// Summary

console.log("Layo Hotels");
console.log(`${rooms.length} rooms, ${bookings.length} bookings`);

for (const booking of bookings) {
    console.log(
        `${booking.bookingId} ${booking.guest.name} ${booking.room.roomNumber} ${nights(booking)} ${nights(booking) === 1 ? "night" : "nights"} ${booking.status}`
    );
}