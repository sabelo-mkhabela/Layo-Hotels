import {Guest, Booking, Hotel} from "./types";
import type {Room} from "./types";


// Guests

const guest1 = new Guest (
    "1",
    "Thandi", 
    "Mokoena",
    "thandi@example.com",
    "0123456789"
);

console.log(`Guest: ${guest1.fullName()}`);

console.log(`Contact: ${guest1.maskedPhone()}`);

const guest2 = new Guest (
    "2",
    "Sipho", 
    "Dlamini",
    "sipho@example.com",
    "0213456789"
);


// Rooms

const rooms: Room[] = [
    {
        roomNumber: "101",
        roomType: "Standard",
        rate: 850,
        available: true,
        inService: true
    },
    {
        roomNumber: "102",
        roomType: "Standard",
        rate: 850,
        available: true,
        inService: true
    },
    {
        roomNumber: "201",
        roomType: "Deluxe",
        rate: 1450,
        available: true,
        inService: true
    },
    {
        roomNumber: "202",
        roomType: "Deluxe",
        rate: 1450,
        available: true,
        inService: false
    },
    {
        roomNumber: "301",
        roomType: "Suite",
        rate: 2900,
        available: true,
        inService: true
    }
];


const hotel = new Hotel("Layo Hotels, Sea Point", rooms);


// Bookings

const bookings: Booking[] = [
    new Booking (
        "9001",
        guest1,
        rooms[2]!,
        new Date("2026-12-02"),
        new Date("2026-12-05"),
        "Confirmed"
    ),
        new Booking (
        "9002",
        guest2,
        rooms[0]!,
        new Date ("2026-10-06"),
        new Date ("2026-10-07"),
        "CheckedIn"
        ),

        new Booking (
        "9003",
        guest1,
        rooms[4]!,
        new Date("2026-12-10"),
        new Date("2026-12-14"),
        "Cancelled"
        )

];

for (const booking of bookings) {
    console.log(
        `Booking ${booking.bookingId} can cancel: ${booking.canBeCancelled()}`
    );
}

console.log(`Total cost: R${bookings[0]!.totalCost().toFixed(2)}`);

 console.log(`Booking ${bookings[0]!.bookingId}: ${bookings[0]!.nights()} nights`);

// Summary

console.log(hotel.name);
console.log(`${hotel.roomCount()} rooms, ${hotel.roomsInService()} in service`);

for (const booking of bookings) {
    console.log(
        `${booking.bookingId} ${booking.guest.fullName()} ${booking.room.roomNumber} ${booking.nights()} nights ${booking.status}`
    );
}
