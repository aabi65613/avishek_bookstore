// src/app/contact/page.tsx
import React from 'react';
import { MapPin, Phone } from 'lucide-react'; // Import icons

const ContactPage = () => {
  const address = "Shyamnagar, Laxmiraya Club, Kolkata";
  const phoneNumber = "7059068366"; // Corrected phone number

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-8 text-center">
          We'd love to hear from you! Reach out to us using the details below.
        </p>

        <div className="space-y-6">
          {/* Address Section */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <MapPin className="h-6 w-6 text-primary-color" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Our Address</h2>
              <p className="text-gray-600">{address}</p>
              {/* Optional: Add a link to Google Maps */}
              {/* <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-color hover:underline mt-1 inline-block"
              >
                Get Directions
              </a> */}
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <Phone className="h-6 w-6 text-primary-color" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Phone Number</h2>
              <a href={`tel:${phoneNumber}`} className="text-gray-600 hover:text-primary-color text-lg">
                {phoneNumber}
              </a>
              <p className="text-sm text-gray-500 mt-1">Call us for inquiries or support.</p>
            </div>
          </div>

          {/* Optional: Add Email or Contact Form here if needed */}
          {/* Example Email:
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <Mail className="h-6 w-6 text-primary-color" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <a href="mailto:info@books.shyamnagar" className="text-gray-600 hover:text-primary-color">
                info@books.shyamnagar
              </a>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

