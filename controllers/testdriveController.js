// controllers/bookingController.js

const Booking = require('../models/testdriveModel');
const nodemailer = require('nodemailer');
// Controller to handle form submission
exports.saveBookingDetails = async (req, res) => {
  try {
    const { name, email, city, model, date, number } = req.body;

    // Create a new Booking instance
    const newBooking = new Booking({
      name,
      email,
      city,
      model,
      date,
      number,
    });

    // Save the new booking to the database
    const savedBooking = await newBooking.save();

       // Send email to owner
       await sendEmailToOwner(savedBooking);

    res.status(201).json({ success: true, booking: savedBooking });
  } catch (error) {
    console.error('Error saving booking details:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


// Helper function to send email
const sendEmailToOwner = async (bookingData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // secure:true,
      auth: {
        user: 'bobby4footprints@gmail.com', // Replace with your email
        pass: 'jsjn qltq fgnf xoty', // Replace with your email password or app-specific password
      },
    });

    const mailOptions = {
      from: `bobby4footprints@gmail.com`,
      to: 'rekhaupreti7890@gmail.com', // Replace with the owner's email
      subject: 'New Booking',
      text: `
        New Booking Details:

        Name: ${bookingData.name}
        Email: ${bookingData.email}
        City: ${bookingData.city}
        Model: ${bookingData.model}
        Date: ${bookingData.date}
        Mobile: ${bookingData.number}
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
