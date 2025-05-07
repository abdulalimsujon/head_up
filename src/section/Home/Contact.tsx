/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      number: data.number,
      message: data.message,
      to_email: data.email,
      reply_to: data.email,
    };

    try {
      // ✅ Send notification email to studio only
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full max-w-[1200px] mx-auto px-4 py-16 flex flex-col justify-center mt-[20px] md:mt-[150px]"
      id="contact"
    >
      {/* Title Section */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="text-[#8200FF] font-urbanist text-md md:text-2xl font-medium mb-2">
          CONTACT
        </div>
        <div className="font-playfair text-3xl md:text-[42px] lg:text-[64px] font-medium tracking-[0%] text-[#515756] leading-[130%]">
          <div className="text-[#515756]">Book Now and Contact</div>
          <div className="text-[#7600E8] italic font-urbanist">Details</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-[#6E7272] font-urbanist font-light text-sm md:text-[20px] lg:text-[24px]">
            Let Head Up Studio capture your special moments with our
            professional photo, video and equipment services.
          </p>
          <h3 className="text-sm md:text-[20px] lg:text-[24px] font-urbanist text-[#515756]">
            We are here to help you:
          </h3>
          <p className="text-[#6E7272] font-urbanist font-light text-sm md:text-[20px] lg:text-[24px]">
            Our experts are available to answer any questions you might have.
            We’ve got the answers.
          </p>

          <div className="mt-5">
            <p className="text-[#8200FF] font-urbanist font-medium text-sm md:text-[20px] lg:text-[24px]">
              VISIT US
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <p className="text-[#515756] font-urbanist font-[#515756] text-sm md:text-[20px] lg:text-[24px]">
              Current Office:
            </p>
            <p className="text-[#6E7272] font-urbanist font-light text-sm md:text-[20px] lg:text-[24px]">
              API trio tower, Sheikh Zayed Road, Barsha 1, Dubai Al Barsha 1,
              Dubai.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[#515756] font-urbanist font-[#515756] text-sm md:text-[20px] lg:text-[24px]">
              New Office:
            </p>
            <p className="text-[#6E7272] font-urbanist font-light text-sm md:text-[20px] lg:text-[24px]">
              API trio tower, Sheikh Zayed Road, Barsha 1, Dubai Al Barsha 1,
              Dubai.
            </p>
          </div>

          <div className="mt-4 flex-1 flex flex-col gap-4">
            <p className="text-[#8200FF] font-urbanist font-medium text-sm md:text-[20px] lg:text-[24px]">
              Office Hours
            </p>
            <p className="text-[#6E7272] font-urbanist font-light text-sm md:text-[20px] lg:text-[24px]">
              Sunday – Friday (10:00 AM - 07:00 PM)
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 border border-[#33FFF5] rounded-[40px] p-6 md:p-10 bg-cyan-50 h-max">
          <h3 className="text-[20px] md:text-3xl font-medium mb-9 text-[#006B66]">
            Directly Message us for Booking.
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 font-urbanist"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="First Name*"
                  className="bg-transparent border-[#33FFF5] !placeholder-[#9B9E9E] !font-light !text-[16px] !px-3"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Last Name*"
                  className="bg-transparent border-[#33FFF5] !placeholder-[#9B9E9E] !font-light !text-[16px] !px-3"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Enter email here*"
                  className="bg-transparent border-[#33FFF5] !placeholder-[#9B9E9E] !font-light !text-[16px] !px-3"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Phone Number*"
                  className="bg-transparent border-[#33FFF5] !placeholder-[#9B9E9E] !font-light !text-[16px] !px-3"
                  {...register("number", {
                    required: "Phone Number is required",
                  })}
                />
                {errors.number && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.number.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Textarea
                placeholder="Write a message*"
                className="min-h-[190px] max-h-[250px] bg-transparent border-[#33FFF5] !placeholder-[#9B9E9E] !font-light !text-[16px] !px-3"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full md:w-[508px] h-[52px] rounded-full px-6 py-2 text-[#006B66] bg-[#00FFF2] hover:bg-[#33FFF5] text-sm md:text-2xl font-medium mx-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Book Now"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>New Booking Inquiry - Head Up Studio</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
//     <h2 style="color: #006B66; text-align: center;">New Booking Inquiry Received</h2>
//     <p>Dear Head Up Studio Team,</p>
//     <p>A new booking inquiry has been submitted with the following details:</p>
//     <ul>
//       <li><strong>First Name:</strong> {{firstName}}</li>
//       <li><strong>Last Name:</strong> {{lastName}}</li>
//       <li><strong>Email:</strong> {{email}}</li>
//       <li><strong>Phone Number:</strong> {{number}}</li>
//       <li><strong>Message:</strong> {{message}}</li>
//     </ul>
//     <p>Please review and follow up with the client accordingly.</p>
//     <p>Best regards,<br>Head Up Studio System</p>
//   </div>
// </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Thank You for Your Booking Inquiry - Head Up Studio</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
//     <h2 style="color: #006B66; text-align: center;">Thank You for Your Inquiry!</h2>
//     <p>Dear {{firstName}} {{lastName}},</p>
//     <p>Thank you for reaching out to Head Up Studio! We’ve received your booking inquiry with the following details:</p>
//     <ul>
//       <li><strong>Email:</strong> {{email}}</li>
//       <li><strong>Phone Number:</strong> {{number}}</li>
//       <li><strong>Message:</strong> {{message}}</li>
//     </ul>
//     <p>Our team is reviewing your request and will contact you within 24-48 hours to discuss next steps. If you have any urgent questions, please feel free to reach us</p>
//     <p>We’re excited to assist you!</p>
//     <p>Best regards,<br>The Head Up Studio Team</p>
//   </div>
// </body>
// </html>

// VITE_EMAILJS_SERVICE_ID=service_15gwyr9
// VITE_EMAILJS_TEMPLATE_ID=template_mpjyrek
// VITE_EMAILJS_USER_ID=9qGIosseECAmmQ3bJ
// VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_zi6sn6t
