import goalsBg from "@/assets/goals-bg.jpg";
import { Link } from "react-router-dom";

function GoalsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            2026 Environmental Impact Goals
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Our targets for creating a greener, more sustainable future through native tree plantation and biodiversity conservation
          </p>
        </div>
      </section>

      {/* Goals Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🌳",
                title: "Trees Planted",
                target: "10,000",
                desc: "Our target is to plant 10,000 trees across various locations, enhancing green cover and promoting local biodiversity.",
              },
              {
                icon: "🦋",
                title: "Biodiversity Improved",
                target: "Native Species",
                desc: "We aim to improve local ecosystems by increasing native species populations, fostering resilience in wildlife habitats.",
              },
              {
                icon: "💧",
                title: "Water Conservation",
                target: "Sustainable Growth",
                desc: "Our strategy includes water-saving techniques to enhance soil moisture retention, benefiting plants and surrounding ecosystems.",
              },
            ].map((goal) => (
              <div key={goal.title} className="bg-card rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-border">
                <span className="text-5xl mb-4 block">{goal.icon}</span>
                <h3 className="font-heading text-2xl font-bold text-card-foreground mb-2">{goal.title}</h3>
                <p className="text-primary font-heading text-xl font-bold mb-4">{goal.target}</p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Image Section */}
      <section className="relative py-32">
        <img
          src={goalsBg}
          alt="Environmental impact goals - forest landscape"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Building a Greener Tomorrow
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto mb-8">
            Every tree we plant is a step toward a healthier planet. Join us in making a lasting
            environmental impact in Pune and beyond.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Support Our Goals
          </Link>
        </div>
      </section>
    </>
  );
}

export default GoalsPage;
