import React from 'react'

function BookTable() {
    return (
        <div className='w-full h-full flex justify-center'>
            <div className='py-32  '>
                <div className="bg-white shadow-xl rounded-lg p-6 w-[30rem] border-2">
                    <h1 className="text-2xl font-semibold text-center mb-6 text-blue-500 ">Make a Reservation</h1>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date:</label>
                            <input type="date" id="date" name="date" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Time:</label>
                            <input type="time" id="time" name="time" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">Number of Guests:</label>
                            <input type="number" id="guests" name="guests" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300" min={1} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact Details:</label>
                            <input type="text" id="contact" name="contact" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300" required />
                        </div>
                        <div className="flex justify-between">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                                Check Availability
                            </button>
                            <button type="button" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookTable