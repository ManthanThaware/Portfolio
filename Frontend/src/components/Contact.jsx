

// export default function Contact(){
//     return <>
//     <section id="contact" className="py-20 bg-gray-900">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
//           <p className="text-gray-400 mb-8">📧manthanthaware01@gmail.com</p>
//                     <p className="text-gray-400 mb-8"> 📞+91 772 101 0273</p>
//           <p className="text-gray-400 mb-8">📍 Nagpur, Maharashtra </p>
//                     <p className="text-gray-400 mb-8">LinkedIn: </p>


//           <a href="mailto:manthanthaware01@gmail.com" className="px-8 py-3 bg-blue-500 rounded-xl hover:bg-blue-600">Send Email</a>
//         </div>
//       </section>
//     </>
// }


import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Something went wrong");
      }
    } catch (error) {
      setStatus("❌ Server not reachable");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-2xl space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm text-gray-400">{status}</p>
        )}
      </div>
    </section>
  );
}
