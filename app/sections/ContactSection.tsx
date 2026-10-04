"use client";

import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import SectionHeader from "../components/ui/SectionHeader";
import { useState } from "react";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: LuMail,
    label: "Email",
    value: "syedalaibashah52@gmail.com",
    href: "mailto:syedalaibashah52@gmail.com",
  },
  {
    icon: LuPhone,
    label: "Phone",
    value: "+92 348 1307099",
    href: "tel:+923481307099",
  },
  {
    icon: LuMapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
  },
];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "1731cb58-19f0-4922-bd4d-03b1ea434e4e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    // setResult(data.success ? "Success!" : "Error");
    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error("Error Submitting form");
    }

    setLoading(false);
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

      <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
        <SectionHeader
          title="Let's build"
          highlight="something great"
          badge="Contact"
          description="Have a project in mind? I'd love to hear about it. Let's connect."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left form */}
          <form
            onSubmit={onSubmit}
            className="p-6 rounded-2xl border border-border bg-surface space-y-5"
          >
            <h3 className="text-lg font-semibold text-text">Send a message</h3>

            {/* name */}
            <div className="">
              <label className="text-sm text-gray-400 block mb-1">Name</label>

              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 rounded-lg border-border border bg-background text-text outline-none focus:border-primary transition"
              />
            </div>

            {/* email */}
            <div className="">
              <label className="text-sm text-gray-400 block mb-1">
                Your Email
              </label>

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 rounded-lg border-border border bg-background text-text outline-none focus:border-primary transition"
              />
            </div>

            {/* message */}
            <div className="">
              <label className="text-sm text-gray-400 block mb-1">
                Message
              </label>

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg border-border border bg-background text-text outline-none focus:border-primary transition resize-none"
              />
            </div>

            {/* button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full py-3 rounded-full bg-primary text-gray-200 font-medium hover:opacity-90 transition flex items-center justify-center cursor-pointer gap-2"
            >
              {loading ? (
                <>
                  <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full  animate-spin"></span>
                  Sending Message...
                </>
              ) : (
                <>
                  <LuSend className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* right contact info */}
          <div className="p-2">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                return (
                  <a
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                    key={index}
                    href={item.href}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary " />
                    </div>

                    <div>
                      <div className="text-gray-400 text-sm">{item.label}</div>

                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
