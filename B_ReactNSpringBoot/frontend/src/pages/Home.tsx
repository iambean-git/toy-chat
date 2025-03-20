import Section1 from "../components/Home/Section1"
export default function Home() {
  return (
    <div className='w-full h-full p-5 flex flex-col space-y-5'>
      <Section1></Section1>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <section>section2</section>
        <section>section3</section>
      </div>

    </div>
  )
}
