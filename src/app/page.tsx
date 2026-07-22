import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutSeries from "@/components/AboutSeries";
import Books from "@/components/Books";
import AboutAuthor from "@/components/AboutAuthor";
import Praise from "@/components/Praise";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutSeries />
        <Books />
        <AboutAuthor />
        <Praise />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}
