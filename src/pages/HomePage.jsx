import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-main.jpg";
import commitmentImg from "@/assets/commitment-nature.jpg";
import achievement1 from "@/assets/achievement-1.jpg";
import achievement2 from "@/assets/gallery/ngog2.jpeg";
import nursery1 from "@/assets/nursery-1.jpg";
import taljai1 from "@/assets/ngo1.png";
import taljai2 from "@/assets/taljai-2.jpg";
function HomePage() {
  return (
    <>
      {/* SEO Meta is handled in index.html */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src={heroImg}
          alt="Lush green forest landscape in Pune India - Sarvesamanah Foundation tree plantation"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-primary-foreground font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Sarvesamanah Foundation
          </h1>
          <p className="text-primary-foreground/90 font-heading text-xl md:text-2xl mb-4 animate-fade-in-up-delay">
            Branches of Care, Roots of Trust
          </p>
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-8 animate-fade-in-up-delay max-w-2xl mx-auto">
            Nurturing nature through community-driven environmental conservation and native tree plantation in Pune, India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay">
            <Link
              to="/about"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Commitment to Nature
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Sarvesamanah Foundation approaches environmental conservation through a balanced
                framework that integrates awareness, research, practical implementation, and
                ecological restoration. Through community engagement and large-scale native tree
                plantation initiatives, we restore natural ecosystems while promoting environmental
                responsibility across society.
              </p>
              <Link
                to="/about"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Read More About Us
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={taljai1}
                alt="Aerial view of lush green forest canopy - Sarvesamanah Foundation conservation"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { number: "4,500+", label: "Native Trees Planted" },
              { number: "100%", label: "Native Species Only" },
              { number: "2024-25-26", label: "Active Plantation Years" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-primary-foreground font-heading text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80 font-body text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: taljai2,
                title: "Hills in PMC Area Plantation",
                desc: "2,400+ native trees planted in 2024 at Hills in PMC area, Pune, with 4,000+ more in 2025.",
                link: "/projects",
              },
              {
                img: nursery1,
                title: "Native Plant Nursery",
                desc: "Our in-house nursery cultivates native species ensuring high-quality saplings for plantation drives.",
                link: "/projects",
              },
              {
                img: achievement2,
                title: "Geo-Tagged Monitoring",
                desc: "Every plantation activity follows geo-tagging and monitoring for transparency and long-term tracking.",
                link: "/about",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                  <Link
                    to={item.link}
                    className="text-primary font-body font-semibold text-sm hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Collaborate for a Greener Future
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto mb-8">
            Join us in our mission to enhance environmental sustainability through impactful
            initiatives and community-driven projects.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
