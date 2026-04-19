// import about1 from "@/assets/about-1.jpg";
// import about2 from "@/assets/gallery/ngog5.jpeg";
// import mission1 from "@/assets/gallery/ngog14.jpeg";
// import mission2 from "@/assets/gallery/ngog3.jpeg";
// import taljai2 from "@/assets/taljai-2.jpg";

// function AboutPage() {
//   return (
//     <>
//       {/* Page Header */}
//       <section className="bg-primary pt-32 pb-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
//             About Sarvesamanah Foundation
//           </h1>
//           <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
//             Our commitment to nature, environmental conservation, and sustainable development in Pune, India
//           </p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
//                 Our Commitment to Nature
//               </h2>
//               <p className="font-body text-muted-foreground leading-relaxed mb-4">
//                 Sarvesamanah Foundation approaches environmental conservation through a balanced
//                 framework that integrates awareness, research, practical implementation, and
//                 ecological restoration. These guiding pillars shape our efforts to address pressing
//                 environmental challenges such as loss of urban green cover, biodiversity decline,
//                 and climate change impacts.
//               </p>
//               <p className="font-body text-muted-foreground leading-relaxed">
//                 Through community engagement, educational outreach, and large-scale native tree
//                 plantation initiatives, the foundation works to restore natural ecosystems while
//                 promoting environmental responsibility across society. Special emphasis is placed
//                 on inspiring the younger generation and supporting communities that have limited
//                 access to environmental resources.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <img src={taljai2} alt="Environmental conservation work by Sarvesamanah Foundation" className="rounded-lg shadow-md w-full h-48 object-cover" loading="lazy" />
//               <img src={mission1} alt="Tree plantation initiative in Pune" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" loading="lazy" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="section-gradient py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
//               <img src={mission2} alt="Mission of Sarvesamanah Foundation - environmental stewardship" className="rounded-lg shadow-md w-full h-48 object-cover" loading="lazy" />
//               <img src={about2} alt="Community enrichment through tree planting" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" loading="lazy" />
//             </div>
//             <div className="order-1 md:order-2">
//               <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
//                 Our Mission
//               </h2>
//               <h3 className="font-heading text-xl text-primary mb-4">
//                 Environmental Stewardship & Community Enrichment
//               </h3>
//               <p className="font-body text-muted-foreground leading-relaxed mb-4">
//                 Sarvesamanah Foundation is committed to promoting practical and sustainable
//                 solutions to environmental challenges such as climate change, biodiversity loss,
//                 and the rapid decline of urban green spaces.
//               </p>
//               <p className="font-body text-muted-foreground leading-relaxed">
//                 By combining scientific understanding with on-ground action, we strive to create
//                 greener ecosystems and inspire communities and institutions to participate in
//                 long-term environmental stewardship. Our guiding approach is simple — to actively
//                 practice sustainable change and encourage society to be part of building a
//                 healthier planet for future generations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
//             Our Core Values
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: "🌱", title: "Awareness", desc: "Raising environmental consciousness in communities and institutions" },
//               { icon: "🔬", title: "Research", desc: "Scientific approach to understanding ecological challenges" },
//               { icon: "🌳", title: "Implementation", desc: "Large-scale native tree plantation and restoration" },
//               { icon: "♻️", title: "Sustainability", desc: "Long-term ecological balance and responsible practices" },
//             ].map((value) => (
//               <div key={value.title} className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
//                 <span className="text-4xl mb-4 block">{value.icon}</span>
//                 <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{value.title}</h3>
//                 <p className="font-body text-muted-foreground text-sm">{value.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default AboutPage;import about1 from "@/assets/about-1.jpg";


function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Sarvesamanah Foundation
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
           Sarvesamanah is a Section 8 not-for-profit organization committed to driving sustainable development,
            environmental responsibility, and community empowerment. Our initiatives focus on environmental conservation,
            circular economy solutions, social impact projects and plastic waste management aligned with national sustainability goals.
          </p>
          <br></br>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
           We collaborate with corporates, institutions, and government bodies to implement measurable CSR programs
            that create long-term value for society and the environment.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">
            About Sarvesamanah
          </h2>

          <p className="font-body text-muted-foreground leading-relaxed mb-6 text-center">
            Sarvesamanah is a Section 8 not-for-profit organization committed to driving sustainable development,
            environmental responsibility, and community empowerment. Our initiatives focus on environmental conservation,
            circular economy solutions, social impact projects and plastic waste management aligned with national sustainability goals.
          </p>

          <p className="font-body text-muted-foreground leading-relaxed mb-10 text-center">
            
          </p> */}

          {/* Certifications */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
              Certifications & Registrations
            </h3>
            <ul className="space-y-2 text-muted-foreground max-w-2xl mx-auto">
              {[
                "Registered as Section 8 Company under Companies Act, 2013",
                "CSR-1 Registered with Ministry of Corporate Affairs (MCA)",
                "Income Tax Department PAN and TAN Registered",
                "Nitiayog- Darpan ID",
                "12A and 80G registered organisation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
              We Offer
            </h3>
            <ul className="space-y-2 text-muted-foreground max-w-2xl mx-auto">
              {[
                "End-to-end CSR project execution",
                "Environmental sustainability initiatives",
                "Plastic waste management & circular economy projects",
                "ESG aligned impact projects",
                "Monitoring, evaluation & impact reporting",
                "Utilization certificates & compliance documentation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CSR Areas */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">
              Areas of CSR Implementation
            </h3>
            <ul className="space-y-2 text-muted-foreground max-w-2xl mx-auto">
              {[
                "Plastic waste collection & recycling",
                "Sustainable livelihood initiatives",
                "Community infrastructure support",
                "School & rural sustainability projects",
                "Climate action and circular economy initiatives",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CSR Partnership */}
          <div className="text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              CSR Partnership
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We invite corporates to partner with Sarvesamanah for meaningful CSR initiatives that create measurable
              social and environmental impact. Contact us for CSR collaboration and project proposals.
            </p>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌱", title: "Awareness", desc: "Raising environmental consciousness in communities and institutions" },
              { icon: "🔬", title: "Research", desc: "Scientific approach to understanding ecological challenges" },
              { icon: "🌳", title: "Implementation", desc: "Large-scale native tree plantation and restoration" },
              { icon: "♻️", title: "Sustainability", desc: "Long-term ecological balance and responsible practices" },
            ].map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{value.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;