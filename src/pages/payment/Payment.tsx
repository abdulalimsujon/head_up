import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Footer from "@/shared/Footer";
import { ArrowLeft } from "lucide-react";

const Payment = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#ead4ff] via-white to-[#c4fffc] text-gray-800 ">
        <div className="max-w-7xl mx-auto p-8 my-8 text-urbanist">
          <button className="flex items-center text-gray-800 hover:text-gray-600 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Client Details Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Client Details</h2>
              <div className="bg-white/30 backdrop-blur-lg p-4 rounded-lg">
                <p className="text-gray-700">
                  Already have an account?{" "}
                  <a href="#" className="text-purple-600">
                    Log in
                  </a>{" "}
                  for faster booking
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      className="bg-white/40 border-white/30 backdrop-blur-lg text-gray-800 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      className="bg-white/40 border-white/30 backdrop-blur-lg text-gray-800 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Your Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    className="bg-white/40 border-white/30 backdrop-blur-lg text-gray-800 placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Add Your Message
                  </Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white/40 border-white/30 backdrop-blur-lg rounded-md p-2 text-gray-800 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-6">
              <Card className="bg-white/30 backdrop-blur-lg border-0">
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Booking Details
                  </h3>
                  <Separator className="bg-gray-300" />
                  <div className="space-y-2 text-gray-700">
                    <p>Professional Podcast Setup</p>
                    <p>Studio Location</p>
                    <p>Premium Recording Room</p>
                    <p>2 hrs</p>
                  </div>

                  <div className="space-y-4 mt-8">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Payment Details
                    </h3>
                    <Separator className="bg-gray-300" />
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>$200.00</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax</span>
                      <span>$10.00</span>
                    </div>
                    <Separator className="bg-gray-300" />
                    <div className="flex justify-between font-semibold text-gray-800">
                      <span>Total</span>
                      <span>$210.00</span>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    <Button className="w-full bg-[#8200ff] hover:bg-[#8200ff]/90 text-white">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Payment;
