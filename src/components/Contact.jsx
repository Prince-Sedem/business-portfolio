function Contact() {
  return (
    <section id="contact" className="py-10 bg-blue-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

        <form
          action="https://formsubmit.co/fedostarenterprise@gmail.com"
          method="POST"
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input type="hidden" name="_subject" value="New Contact Message" />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
