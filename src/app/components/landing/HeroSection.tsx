'use client';

import {FeatureItem,Button}  from '../ui';
import Image from 'next/image';



export default function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center mx-auto px-6 py-8 md:px-8 lg:py-0 ">
        {/* Left Content */}
        <div className="w-full order-2  lg:order-1 lg:w-[55%] mb-12 lg:mb-0 px-4 lg:px-0 relative z-10">
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6 lg:text-left">
            
            {/* Headlines */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-2xl sm:text-[25px] md:text-[35px] font-[Urbanist] font-bold leading-tight">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              
              <h2 className="text-2xl text-[25px] md:text-[35px] pr-0 lg:pr-25 font-[Urbanist] font-bold text-[#00FFFF] text-shadow-[0_3px_0px_#FC004E] leading-tight">
                Discover your way to success with Fametonic:
              </h2>
            </div>

            {/* Feature List */}
            <FeatureItem />

            {/* CTA Section */}
            <div className="w-full text-center sm:w-4/5 md:w-3/5 space-y-2 order-2 lg:order-1">
              <Button text="GET STARTED" />
              <p className="text-white text-xs">
                1-minute quiz for personalized Insights
              </p>
            </div>

            {/* Legal Text */}
            <div className="space-y-3 text-xs text-center px-5 pb-10 pl-5 pr-5 lg:text-left order-1 lg:order-2 lg:pb-0 lg:pl-0 lg:pr-0">
              <p className="text-white/60 max-w-md">
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
              </p>
              <p className="text-white/60 text-[10px]">
                Fametonic 2025 &copy; All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        {/* Right Content - Phone Mockup with Overlap */}
        <div className="w-full order-1 lg:w-[72%] lg:-ml-[10%] relative">
          <Image
            src="/mobile.png"
            alt="Phone mockup"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
    </section>
  );
}

