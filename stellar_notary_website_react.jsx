import React from "react";

// Stellar Notary - Single-file React component
// Tailwind-friendly markup. Primary brand color taken from your flyer: #346AD9

export default function StellarNotaryWebsite() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Top bar */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded flex items-center justify-center" style={{backgroundColor: '#346AD9'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M4 20L20 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="6" r="2" fill="white" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Stellar Notary</h1>
              <p className="text-xs text-gray-500">Mobile • RON • Loan Signing</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="tel:+18456567196" className="px-4 py-2 rounded-md text-white font-medium" style={{backgroundColor: '#346AD9'}}>Book Now</a>
          </nav>

          <div className="md:hidden">
            <a href="tel:+18456567196" className="px-3 py-2 rounded-md text-white font-medium" style={{backgroundColor: '#346AD9'}}>Call</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#346AD9] to-[#2b5fc7] text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Certified Notary Services You Can Count On.</h2>
            <p className="mt-4 text-lg max-w-xl text-white/90">Mobile notarizations, remote online notarizations (RON), loan signing agent services, apostilles, hospital visits, and same-day urgent notary appointments across Dutchess, Westchester & The Bronx.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+18456567196" className="inline-block px-6 py-3 rounded-md font-semibold" style={{backgroundColor: 'white', color: '#0f1724'}}>Call to Book</a>
              <a href="#contact" className="inline-block px-6 py-3 rounded-md border border-white/30 text-white">Request Quote</a>
            </div>

            <div className="mt-6 flex gap-4 text-sm text-white/80">
              <div>
                <div className="text-xs">Service Area</div>
                <div className="font-medium">Dutchess • Westchester • Bronx</div>
              </div>

              <div>
                <div className="text-xs">Hours</div>
                <div className="font-medium">Tue–Sat 1–8PM • Sun by appt</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <div className="bg-white rounded-md p-4 text-gray-900">
              <h3 className="font-semibold text-lg">Quick Book</h3>
              <p className="text-sm text-gray-600">Enter details and we'll confirm availability.</p>
              <form className="mt-3 space-y-3">
                <input placeholder="Name" className="w-full border border-gray-200 rounded px-3 py-2 text-sm" />
                <input placeholder="Phone or Email" className="w-full border border-gray-200 rounded px-3 py-2 text-sm" />
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-sm">
                  <option>Mobile Notary</option>
                  <option>Loan Signing</option>
                  <option>Remote Online Notarization</option>
                  <option>Apostille</option>
                </select>
                <button type="button" className="w-full py-2 rounded-md font-medium text-white" style={{backgroundColor: '#346AD9'}}>Request Booking</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold">Services</h3>
        <p className="text-gray-600 mt-2">High-value services tailored for convenience and reliability.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-md">
            <h4 className="font-semibold">Mobile Notary</h4>
            <p className="text-sm text-gray-600 mt-2">We travel to your home, hospital, office or jail for notarizations — with professional ID verification and fast service.</p>
            <div className="mt-3 text-sm text-gray-700 font-medium">Travel fee applies</div>
          </div>

          <div className="p-6 border rounded-md">
            <h4 className="font-semibold">Loan Signing Agent</h4>
            <p className="text-sm text-gray-600 mt-2">Experienced with purchase, refinance, and HELOC packages. Certified and insured for trust-worthy closings.</p>
            <div className="mt-3 text-sm text-gray-700 font-medium">$100–$200+ depending on package</div>
          </div>

          <div className="p-6 border rounded-md">
            <h4 className="font-semibold">Remote Online Notarization (RON)</h4>
            <p className="text-sm text-gray-600 mt-2">Secure, compliant remote notarizations for clients who prefer a fully digital experience.</p>
            <div className="mt-3 text-sm text-gray-700 font-medium">$25–$50 per notarization</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">About Stellar Notary</h3>
            <p className="mt-4 text-gray-700">Stellar Notary is a mobile and remote notary service proudly serving Dutchess County, Westchester County, and The Bronx. We specialize in urgent and priority appointments, hospital and correctional facility visits, apostilles, and professional loan signing. Licensed, insured, and committed to punctuality.</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>• Licensed in Dutchess, Westchester & The Bronx</li>
              <li>• E&O insured & background checked</li>
              <li>• Certified Loan Signing Agent</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551806231-6a4b4f8f0b7b?auto=format&fit=crop&w=900&q=60" alt="notary" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="mt-2 text-gray-700">Stellar Notary — Mobile & Remote Notary Services</p>
            <p className="mt-2 text-gray-700">Phone: <a href="tel:+18456567196" className="font-medium text-[#346AD9]">(845) 656-7196</a></p>
            <p className="mt-1 text-gray-700">Email: <a href="mailto:StellarttLLC@gmail.com" className="font-medium text-[#346AD9]">StellarttLLC@gmail.com</a></p>
            <p className="mt-1 text-gray-500 text-sm">Serving Dutchess • Westchester • Bronx</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Send a Message</h4>
            <form className="mt-3 space-y-3">
              <input placeholder="Name" className="w-full border border-gray-200 rounded px-3 py-2 text-sm" />
              <input placeholder="Phone or Email" className="w-full border border-gray-200 rounded px-3 py-2 text-sm" />
              <textarea placeholder="Message" className="w-full border border-gray-200 rounded px-3 py-2 text-sm h-24" />
              <button type="button" className="w-full py-2 rounded-md font-medium text-white" style={{backgroundColor: '#346AD9'}}>Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-gray-500">© {new Date().getFullYear()} Stellar Notary — All rights reserved.</div>
      </footer>
    </div>
  );
}
