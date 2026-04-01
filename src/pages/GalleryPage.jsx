import gallery1 from "@/assets/gallery/ngog1.jpeg";
import gallery2 from "@/assets/gallery/ngog2.jpeg";
import gallery3 from "@/assets/gallery/ngo31.jpeg";
import gallery4 from "@/assets/gallery/ngog4.jpeg";
import achievement1 from "@/assets/gallery/ngog5.jpeg";
import achievement2 from "@/assets/gallery/ngog6.jpeg";
import achievement3 from "@/assets/gallery/ngog7.jpeg";
import achievement4 from "@/assets/gallery/ngog14.jpeg";
// import achievement5 from "@/assets/gallery/ngog9.jpeg";
// import taljai1 from "@/assets//gallery/ngog10.jpeg";
import taljai2 from "@/assets//gallery/ngog11.jpeg";
import nursery1 from "@/assets//gallery/ngog12.jpeg";
// import nursery2 from "@/assets//gallery/ngog13.jpeg";
import nursery3 from "@/assets//gallery/ngog8.jpeg";

// All gallery images with alt text for SEO
const galleryImages = [
  { src: gallery1, alt: "Sarvesamanah Foundation tree plantation drive in Pune" },
  { src: gallery2, alt: "Native tree planting by Sarvesamanah volunteers" },
  { src: gallery3, alt: "Environmental conservation initiative Pune" },
  { src: gallery4, alt: "Green cover restoration at Taljai Hills" },
  { src: achievement1, alt: "Native saplings planted by Sarvesamanah Foundation" },
  { src: achievement2, alt: "Geo-tagged tree plantation monitoring" },
  { src: achievement3, alt: "Sustainable tree care and maintenance" },
  { src: achievement4, alt: "Healthy native tree growth after plantation" },
  // { src: achievement5, alt: "Sarvesamanah Foundation field work" },
  // { src: taljai1, alt: "Taljai Hills urban forest restoration" },
  { src: taljai2, alt: "Native species at Taljai Forest Zone Pune" },
  { src: nursery1, alt: "Native plant nursery by Sarvesamanah Foundation" },
  // { src: nursery2, alt: "Nursery cultivation of regional native plants" },
  { src: nursery3, alt: "High quality saplings for tree plantation" },
];

function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Photo Gallery
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            See our tree plantation drives, nursery operations, and environmental conservation work in action
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
