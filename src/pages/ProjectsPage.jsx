
import taljai1 from "@/assets/taljai-1.jpg";
import taljai2 from "@/assets/taljai-2.jpg";
import taljai3 from "@/assets/ngo2.png";
import taljai4 from "@/assets/ngo4.png";

import nursery1 from "@/assets/nursery-1.jpg";
import nursery2 from "@/assets/nursery-2.jpg";
import nursery3 from "@/assets/nursery-3.jpg";
import nursery4 from "@/assets/ngoA2.png";

import achievement1 from "@/assets/ngo3.png";
import achievement2 from "@/assets/ngoA3.png";
import achievement3 from "@/assets/ngo2.png";
import achievement4 from "@/assets/ngo4.png";

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            
            {/* Text */}
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

            {/* Images */}
            <div className="grid grid-cols-2 gap-4 max-h-[300px]">
  
  {/* Left */}
  <img
    src={achievement3}
    className="rounded-lg shadow-md w-full h-full object-contain bg-white"
    loading="lazy"
  />

  {/* Right */}
  <img
    src={achievement4}
    className="rounded-lg shadow-md w-full h-full object-contain bg-white"
    loading="lazy"
  />
              {/* <div className="grid grid-rows-2 gap-4">
                <img
                  src={achievement1}
                  className="rounded-lg shadow-md w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <img
                  src={achievement3}
                  className="rounded-lg shadow-md w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div> */}

            </div>

          </div>
        </div>
      </section>

      {/* Taljai Hills Project */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4">

          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-4">
            Hills in PMC Area Plantation Project
          </h2>

          <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Urban forest restoration in Pune's Hills in PMC area
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">

            {/* Text */}
            <div>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                In 2024, Sarvesamanah Foundation successfully planted 2,400+ native trees in the
                Hills in PMC area, Pune. In 2025, an additional 4,500+ native trees
                were planted, further expanding the urban forest restoration effort.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Regular Maintenance:
              </h3>

              <ul className="space-y-2 mb-4">
                {[
                  "Watering and seasonal plant care",
                  "Grass cutting and site maintenance",
                  "Continuous plant survival monitoring",
                  "Protection from fire hazards and environmental stress",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span className="font-body text-muted-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                The foundation has invested in Auger drilling machines and grass cutting machinery
                for efficient plantation work. The entire project is self-funded, reflecting our
                commitment to environmental restoration.
              </p>
            </div>

            {/* Images */}
           <div className="flex flex-col items-end gap-4 w-full">
  <img
    src={taljai1}
    className="rounded-lg shadow-md w-full md:w-[450px] h-60 object-cover"
  />
  <img
    src={taljai2}
    className="rounded-lg shadow-md w-full md:w-[450px] h-62 object-cover"
  />
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

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <img src={nursery1} className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              <img src={nursery2} className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              <img src={nursery3} className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
              <img src={nursery4} className="rounded-lg shadow-md w-full h-40 object-cover" loading="lazy" />
            </div>

            {/* Text */}
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
                    <p className="font-body text-muted-foreground leading-relaxed text-sm">
                      {item}
                    </p>
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