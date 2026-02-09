// import express from "express";
// import Contact from "../models/Contact.js";

// const router = express.Router();

// // POST contact data
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     const newContact = new Contact({
//       name,
//       email,
//       message,
//     });

//     await newContact.save();

//     res.status(201).json({
//       success: true,
//       message: "Message saved successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// });

// export default router;
 


import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields required" });
    }

    // Save to MongoDB
    await Contact.create({ name, email, message });

    // Send Email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ msg: "Message sent successfully!" });
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
