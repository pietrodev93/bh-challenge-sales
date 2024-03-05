"use client";
import Header from "@/components/Header";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <Elements stripe={stripePromise}>
      <section className="h-screen bg-hero-section bg-center bg-cover bg-no-repeat px-5 xl:px-20 py-10 flex flex-col">
        <Header />
        <div className="flex flex-col h-full items-start justify-center relative">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <h1 className="text-white text-[80px] font-semibold leading-10">Personal</h1>
              <h1 className="text-[#E2FF32] text-[80px] font-semibold">Online Trainer</h1>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-[40px]">Helping Girls Lose Weight</h2>
              <p className="text-gray-400 text-[20px] font-light">Pronto a dare una svolta alla tua vita? Clicca "Iscriviti ora"!</p>
            </div>
            <button className='rounded-xl bg-[#E2FF32] text-black px-20 py-5 font-semibold w-fit text-xl'>
              ISCRIVITI ORA
            </button>
          </div>
          <div className="absolute w-full bottom-0 xl:flex justify-between items-center gap-8 text-white hidden">
            <div className="flex items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 gap-9">
              <div className="w-20 h-20 bg-black rounded-full text-white flex items-center justify-center">icona</div>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="flex items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 gap-9">
              <div className="w-20 h-20 bg-black rounded-full text-white flex items-center justify-center">icona</div>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="flex items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 gap-9">
              <div className="w-20 h-20 bg-black rounded-full text-white flex items-center justify-center">icona</div>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="flex items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 gap-9">
              <div className="w-20 h-20 bg-black rounded-full text-white flex items-center justify-center">icona</div>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-20 py-20 flex flex-col">
        <div className="flex flex-col xl:flex-row items-center text-center xl:text-left">
          <div className="flex-1">
            <h2 className="text-black text-[40px] font-semibold leading-10">Hello everyone, we are BodyHack,</h2>
            <h2 className="text-black text-[40px] font-semibold">We are what you need!</h2>
          </div>
          <div className="flex flex-wrap flex-col">
            <p>Vuoi sapere perché questa challenge ti cambierà la vita?</p>
            <p>Ancora non lo so, ma Anto sicuramente avrà una risposta da inserire in questo blocco di testo.</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pt-16">
          <iframe className=" rounded-3xl" width="1000" height="500" src="https://www.youtube.com/embed/Yko3GMseY40?si=Lyggdau3qLM0KlDp&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" sandbox loading allowfullscreen></iframe>
        </div>
        <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-8 text-white pt-20">
            <div className="flex flex-col items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3">
              <p className="text-[60px] relative">9 <span className="absolute top-5 text-3xl text-[#E2FF32] leading-none	">+</span></p>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3">
              <p className="text-[60px] relative">15 <span className="absolute top-5 text-3xl text-[#E2FF32] leading-none	">+</span></p>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3">
              <p className="text-[60px] relative">300 <span className="absolute top-5 text-3xl text-[#E2FF32] leading-none	">+</span></p>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
          </div>
      </section>
    </Elements>
  );
}
