"use client";
import Header from "@/components/Header";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Video from 'next-video';
import getStarted from '/videos/video-presentazione.mp4';
import Square from "@/components/Squadre";
import Line from "@/components/Line";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  const [ref, inView] = useInView();
  const line = useAnimation();
  const secondCircle = useAnimation();

  useEffect(() => {
    console.log(inView)
    if(inView){
      sequence()
    }
  }, [inView]);

  const sequence = async () => {
    await line.start("start");
    await secondCircle.start("start");
  }

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
              <p className="text-gray-400 text-[20px] font-light">Pronto a dare una svolta alla tua vita? Clicca su Iscriviti ora!</p>
            </div>
            <button className='rounded-xl bg-[#E2FF32] text-black px-20 py-5 font-semibold w-fit text-xl'>
              ISCRIVITI ORA
            </button>
          </div>
          <div className="absolute w-full bottom-0 xl:flex justify-between items-center gap-8 text-white hidden">
            <div className="flex items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 gap-9 aspect-video">
              <div className="w-20 h-20 bg-black rounded-full text-white flex items-center justify-center">icona</div>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="flex items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 gap-9 aspect-video">
              <div className="w-20 h-20 bg-black rounded-full text-white flex items-center justify-center">icona</div>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="flex items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 gap-9 aspect-video">
              <div className="w-20 h-20 bg-black rounded-full text-white flex items-center justify-center">icona</div>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="flex items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 gap-9 aspect-video">
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
          <Video src={getStarted} />
        </div>
        <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-8 text-white pt-20 ">
            <div className="w-full flex flex-col items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 aspect-video">
              <p className="text-[80px] relative">9 <span className="absolute top-5 text-3xl text-[#E2FF32] leading-none	">+</span></p>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 aspect-video">
              <p className="text-[80px] relative">15 <span className="absolute top-5 text-3xl text-[#E2FF32] leading-none	">+</span></p>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center backdrop-brightness-50 rounded-xl px-4 py-3 aspect-video">
              <p className="text-[80px] relative">300 <span className="absolute top-5 text-3xl text-[#E2FF32] leading-none	">+</span></p>
              <div>
                <p>Workout from anywhere in the world</p>
              </div>
            </div>
          </div>
      </section>
      <section className="flex flex-col items-center justify-cente gap-10 py-8">
        <div className="flex flex-col text-center">
          <h2 >Cosa troverai</h2>
          <p>Workout from anywhere in the world</p>
        </div>
        <div className="flex items-center" ref={ref}>
          <Square alreadyFinish={true} step={1} description="Workout from anywhere in the world"/>
          <Line controls={line} duration={3}/>
          <Square controls={secondCircle} duration={6} step={2} description="Workout from anywhere in the world"/>
          <Line controls={line} duration={9}/>
          <Square controls={secondCircle} duration={12} step={3} description="Workout from anywhere in the world"/>
   
        </div>
      </section>
    </Elements>
  );
}
