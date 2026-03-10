import taljai1 from "@/assets/taljai-1.jpg";
import taljai2 from "@/assets/taljai-2.jpg";
import taljai3 from "@/assets/taljai-3.jpg";
import nursery1 from "@/assets/nursery-1.jpg";
import nursery2 from "@/assets/nursery-2.jpg";
import nursery3 from "@/assets/nursery-3.jpg";
import achievement1 from "@/assets/achievement-1.jpg";
import achievement2 from "@/assets/achievement-2.jpg";
import achievement3 from "@/assets/achievement-3.jpg";

function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Projects
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Explore our tree plantation projects, native plant nursery, and environmental sustainability initiatives in Pune
          </p>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Key Achievements in Sustainability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <ul className="space-y-4">
                {[
                  "By 2025, more than 4,500 native trees have been successfully planted across Pune.",
                  "Dedicated team ensures proper watering, monitoring, and fire hazard protection year-round.",
                  "Saplings aged 2–3 years with 5–6 feet height improve survival rates significantly.",
                  "Geo-tagging and monitoring system ensures transparency and long-term tracking.",
                  "100% native species: Jambhul, Karanj, Bhehda, Neem, and other regional varieties.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                    <p className="font-body text-muted-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={taljai1} alt="Taljai Hills tree plantation Pune" className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              <img src={taljai2} alt="Native trees at Taljai Forest Zone" className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              {/* <img src={achievement1} alt="Native tree plantation in Pune" className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              <img src={achievement2} alt="Geo-tagged plantation monitoring" className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              <img src={achievement3} alt="Sustainable plantation care" className="rounded-lg shadow-md w-full h-40 object-cover col-span-2" loading="lazy" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Taljai Hills Project */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-4">
            Taljai Hills Plantation Project
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Urban forest restoration in Pune's Taljai Forest Zone
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                In 2024, Sarvesamanah Foundation successfully planted 2,400+ native trees in the
                Taljai Forest Zone (PMC area), Pune. In 2025, an additional 4,000+ native trees
                were planted, further expanding the urban forest restoration effort.
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Regular Maintenance:</h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Watering and seasonal plant care",
                  "Grass cutting and site maintenance",
                  "Continuous plant survival monitoring",
                  "Protection from fire hazards and environmental stress",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                The foundation has invested in Auger drilling machines and grass cutting machinery
                for efficient plantation work. The entire project is self-funded, reflecting our
                commitment to environmental restoration.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={taljai1} alt="Taljai Hills tree plantation Pune" className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              <img src={taljai2} alt="Native trees at Taljai Forest Zone" className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              {/* <img src={taljai2} alt="Taljai Hills plantation maintenance" className="rounded-lg shadow-md w-full h-40 object-cover col-span-2" loading="lazy" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Native Plant Nursery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-4">
            Native Plant Nursery
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Cultivating Biodiversity: Our In-House Nursery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-3 gap-4">
              <img src={nursery1} alt="Native plant nursery saplings" className="rounded-lg shadow-md w-full h-48 object-cover" loading="lazy" />
              <img src={nursery2} alt="Nursery cultivation of native species" className="rounded-lg shadow-md w-full h-48 object-cover" loading="lazy" />
              <img src={nursery3} alt="High quality native tree saplings" className="rounded-lg shadow-md w-full h-48 object-cover" loading="lazy" />
            </div>
            <div>
              <ul className="space-y-4">
                {[
                  "In-house nursery dedicated to cultivation of native tree species",
                  "Healthy, well-nurtured plants sourced from suitable ecological regions",
                  "Scientific nurturing with focus on strong root development and field readiness",
                  "Supports large-scale plantation, CSR partnerships, and community drives",
                  "Ensures long-term sustainability, better survival, and transparency",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">🌿</span>
                    <p className="font-body text-muted-foreground leading-relaxed text-sm">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="font-body text-muted-foreground text-xs mt-4">
                📍 Shop No 1, Pandit Phar Nagar, Karvenagar, Pune
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
