const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Get In Touch</h2>
        <p className="mt-4 text-lg text-[#B7C2D6] max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear from you. Let's create something amazing together.
        </p>
        
        <div className="mt-12 max-w-lg mx-auto">
            <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
                <input type="text" name="name" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]" />
                <input type="email" name="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]" />
                <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"></textarea>
                <button type="submit" className="cta-button text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105 w-full">
                    Send Message
                </button>
            </form>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-[#B7C2D6]">
            <a href="mailto:achraf.oubella@example.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <MailIcon />
                <span>achraf.oubella@example.com</span>
            </a>
            <a href="tel:+212661283316" className="flex items-center gap-3 hover:text-white transition-colors">
                <PhoneIcon />
                <span>+212 6 61 28 33 16</span>
            </a>
        </div>
      </div>
    </section>
  );
};
