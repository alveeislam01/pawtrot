import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in-up py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-pawtrot-brown mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">Have a question about our ingredients or shipping? We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-pawtrot-nav text-white rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div>
              <h2 className="font-display text-3xl mb-8">Contact Info</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold opacity-70 text-xs uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-lg">+880 1712-345678</p>
                    <p className="text-sm opacity-70">Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold opacity-70 text-xs uppercase tracking-wider mb-1">Email</p>
                    <p className="text-lg">contact@pawtrot.com</p>
                    <p className="text-sm opacity-70">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold opacity-70 text-xs uppercase tracking-wider mb-1">Office</p>
                    <p className="text-lg">123 Purrfect Lane</p>
                    <p className="text-sm opacity-70">Dhaka, Bangladesh 1212</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
               <p className="font-serif italic text-center opacity-80">"The only thing we love more than cats is hearing from their owners."</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="font-display text-3xl text-pawtrot-brown mb-6">Send Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" placeholder="Inquiry" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" placeholder="How can we help?"></textarea>
              </div>

              <button type="button" className="w-full bg-pawtrot-brown text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                 SEND MESSAGE <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;