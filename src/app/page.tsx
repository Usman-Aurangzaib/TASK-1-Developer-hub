import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Homepage from "@/components/Homepage/page"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
