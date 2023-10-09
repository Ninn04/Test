import AboutUs from "@/components/common/aboutUs"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="max-lg:px-10 px-20 bg-black text-white h-full">
      <AboutUs/>
      <Footer/>
    </main>
  )
}
