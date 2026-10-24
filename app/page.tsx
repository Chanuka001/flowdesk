import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sections = [
  { id: "features", title: "Features" },
  { id: "how-it-works", title: "How it works" },
  { id: "pricing", title: "Pricing" },
  { id: "faq", title: "FAQ" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="waitlist" className="py-32">
          <Container>
            <SectionHeading
              eyebrow="Test"
              title="Hero goes here"
              description="Temporary section so we can test the navbar."
            />
          </Container>
        </section>
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="min-h-[70vh] py-24">
            <Container>
              <SectionHeading eyebrow="Section" title={s.title} />
            </Container>
          </section>
        ))}
      </main>
    </>
  );
} 