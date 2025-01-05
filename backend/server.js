const express = require('express')
const app = express()

app.set("view engine", "ejs")
//app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let booking = {


}
const allBookings = []



app.get('/bookTable', (req, res) => {
    res.render('bookTable.ejs', { error: '' }); // Pass an empty error
});
app.post('/bookTable', (req, res) => {

    let { date, time, guests, name, contact } = req.body;

    booking = { date, time, guests, name, contact };
    const isDoubleBooking = allBookings.some(booking =>
        booking.date === date && booking.time === time && booking.guests === guests
    );

    if (isDoubleBooking) {
        let error = 'This time slot is already booked.';

        return res.render('bookTable.ejs', { error });
    }
    if (!isDoubleBooking) {

        allBookings.push({ date, time, guests, name, contact })
    }

    res.redirect('/yourbooking')
})

app.get('/yourbooking', (req, res) => {

    res.render('yourBooking.ejs', { booking })
})
app.get('/allBookings', (req, res) => {

    res.render('allBookings.ejs', { allBookings })
})



const port = 5000;
app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})
