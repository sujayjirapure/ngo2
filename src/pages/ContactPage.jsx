import { useState } from "react";

function ContactPage() {

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.target;

    const data = {
      name: form.name.value,
      organization: form.organization.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok) {

        setSuccessMessage(
          "Thank you for contacting Sarvesamanah Foundation. Our team will reach out shortly."
        );

        form.reset();

      } else {
        setErrorMessage(result.error || "Failed to send message.");
      }

    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>

      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Connect with Sarvesamanah Foundation for partnership opportunities,
            CSR collaborations, or general inquiries
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>

              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">

                <div className="flex items-start gap-4 bg-secondary rounded-xl p-5">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                      Our Office
                    </h3>

                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      Flat No.4, Saraswati Apartment,<br/>
                      CTS No.19/A, Erandwane, Pune 411004,<br/>
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-secondary rounded-xl p-5">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl shrink-0">
                    📧
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                      Email Us
                    </h3>

                    <a
                      href="mailto:sarvesamanah@gmail.com"
                      className="font-body text-primary hover:underline"
                    >
                      sarvesamanah@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-secondary rounded-xl p-5">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl shrink-0">
                    📞
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                      Call Us
                    </h3>

                    <a
                      href="tel:02025412175"
                      className="font-body text-primary hover:underline"
                    >
                      020-25412175
                    </a>
                  </div>
                </div>

              </div>
              <div className="mt-8 bg-primary rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
                  Partnership Opportunities
                </h3>
                <p className="font-body text-primary-foreground/80 text-sm leading-relaxed mb-3">
                  Join us in our mission to enhance environmental sustainability through impactful
                  initiatives and community-driven projects that benefit both nature and society.
                </p>
                <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
                  By partnering with us, your organization can contribute to meaningful change,
                  fostering biodiversity and promoting ecological awareness throughout local communities.
                </p>
              </div>

            </div>

            {/* Google Map */}
            <div>

              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Find Us Here
              </h2>

              <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
                <iframe
                  title="Sarvesamanah Foundation Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8300!3d18.5100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0!2sErandwane%2C%20Pune%2C%20Maharashtra%20411004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

            </div>

          </div>

        </div>
        
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary">

        <div className="container mx-auto px-4 max-w-3xl">

          <div className="bg-white rounded-xl shadow-lg p-10">

            <h2 className="text-3xl font-heading font-bold text-center mb-6">
              Send Us a Message
            </h2>

            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-md mb-6 text-center">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-6 text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                name="name"
                placeholder="Full Name"
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              />

              <input
                name="organization"
                placeholder="Organization"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              />

              <input
                name="subject"
                placeholder="Subject"
                className="md:col-span-2 border border-gray-300 rounded-md px-3 py-2 text-sm"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="md:col-span-2 border border-gray-300 rounded-md px-3 py-2 text-sm"
              />

              <div className="md:col-span-2 text-center">

                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 rounded-md font-medium text-white ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:opacity-90"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

    </>
  );
}

export default ContactPage;