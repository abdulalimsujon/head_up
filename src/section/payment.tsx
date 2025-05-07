import { ArrowLeft } from "lucide-react";

const Payment = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <button className="flex items-center text-gray-800 hover:text-gray-600 mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </button>

      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        {/* Client Details Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Client Details</h2>

          <div className="bg-white/30 backdrop-blur-lg p-4 rounded-lg">
            <p className="text-gray-700">
              Already have an account?{" "}
              <a href="#" className="text-purple-600 underline">
                Log in
              </a>{" "}
              for faster booking
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-md bg-white/40 border border-white/30 backdrop-blur-lg p-2 text-gray-800 placeholder:text-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md bg-white/40 border border-white/30 backdrop-blur-lg p-2 text-gray-800 placeholder:text-gray-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium"
              >
                Your Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full rounded-md bg-white/40 border border-white/30 backdrop-blur-lg p-2 text-gray-800 placeholder:text-gray-500"
                placeholder="+1 (555) 555-5555"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Add Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md bg-white/40 border border-white/30 backdrop-blur-lg p-2 text-gray-800 placeholder:text-gray-500"
                placeholder="Your message..."
              />
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="space-y-6">
          <div className="rounded-lg bg-white/30 backdrop-blur-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Booking Details
            </h3>
            <hr className="border-gray-300 mb-4" />
            <div className="space-y-2 text-gray-700">
              <p>Professional Podcast Setup</p>
              <p>April 16, 2025 at 2:00 pm</p>
              <p>Studio Location</p>
              <p>Premium Recording Room</p>
              <p>2 hrs</p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold text-gray-800">
                Payment Details
              </h3>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>$200.00</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax</span>
                <span>$10.00</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total</span>
                <span>$210.00</span>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <button className="w-full bg-[#8200ff] hover:bg-[#8200ff]/90 text-white font-medium py-2 px-4 rounded-md">
                Book Now
              </button>
              <button className="w-full border border-gray-300 text-gray-700 hover:bg-white/20 backdrop-blur-lg font-medium py-2 px-4 rounded-md">
                View Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
