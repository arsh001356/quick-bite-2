// In-memory data for bookings
const bookings = {};

// Available times per day (hardcoded, could be dynamic)
const availableTimes = {
    '2025-01-01': ['12:00', '14:00', '16:00', '18:00'],
    '2025-01-02': ['12:00', '14:00', '16:00', '18:00'],
    // More dates can be added here
};

// Function to check availability
const getAvailability = (date) => {
    if (!availableTimes[date]) {
        return [];
    }
    // Filter out times that are already booked for the given date
    const bookedTimes = bookings[date] || [];
    return availableTimes[date].filter(time => !bookedTimes.includes(time));
};

// Function to create a booking
const createBooking = (date, time, guests, name, contact) => {
    if (!availableTimes[date] || !availableTimes[date].includes(time)) {
        return { error: 'The selected time is not available' };
    }

    // Initialize booking for the day if not already initialized
    if (!bookings[date]) {
        bookings[date] = [];
    }

    // Check if the time is already booked
    if (bookings[date].includes(time)) {
        return { error: 'The selected time is already booked' };
    }

    // Book the table
    bookings[date].push(time);

    // Return the booking confirmation
    return {
        date,
        time,
        guests,
        name,
        contact,
    };
};

module.exports = { getAvailability, createBooking };
