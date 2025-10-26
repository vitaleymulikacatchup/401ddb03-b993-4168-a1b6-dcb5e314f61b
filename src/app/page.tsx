"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Star, Crown, Bed, Quote, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Grandview Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Beyond Compare"
          description="Discover unparalleled comfort and elegance at Grandview Hotel, where every detail is crafted for your perfect stay"
          tag="5-Star Hotel"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance."
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed to make your stay unforgettable"
          tag="Facilities"
          tagIcon={Crown}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind with our full-service spa featuring premium treatments and relaxation therapies",
              imageSrc: "https://images.pexels.com/photos/3610006/pexels-photo-3610006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A close-up of rolled white towels on a wooden bath tray in a modern bathroom."
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite culinary experiences crafted by our award-winning chefs using the finest ingredients",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant rooftop restaurant with poolside dining at sunset. Perfect for a luxurious dining experience."
            },
            {
              title: "Rooftop Pool & Lounge",
              description: "Relax in our stunning infinity pool while enjoying panoramic city views from our exclusive rooftop deck",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Aerial view of a luxury resort pool surrounded by villas and palm trees."
            }
          ]}
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxurious Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering comfort and elegance"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "suite",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort."
            },
            {
              id: "deluxe",
              name: "Deluxe Room",
              price: "$459/night",
              imageSrc: "https://images.pexels.com/photos/6466285/pexels-photo-6466285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A hotel employee delivers elegant room service with a tray of breakfast in a luxurious hotel setting."
            },
            {
              id: "standard",
              name: "Superior Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant room with ocean view from large windows overlooking the beach in Brasil."
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Read reviews from our satisfied guests who experienced the luxury and comfort of Grandview Hotel"
          tag="Guest Reviews"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Williams",
              role: "Executive Director",
              testimonial: "The attention to detail and exceptional service at Grandview Hotel exceeded all expectations. Every moment of our stay was absolutely perfect.",
              imageSrc: "https://images.pexels.com/photos/8546799/pexels-photo-8546799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Asian woman working on laptop while holding a coffee cup in a modern office."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              testimonial: "From the moment we arrived, the staff went above and beyond to ensure our comfort. The amenities are world-class and the rooms are stunning.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Adult man in pink dress shirt looking stressed while talking on a smartphone indoors."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Travel Blogger",
              testimonial: "I've stayed at hotels worldwide, but Grandview Hotel stands out for its impeccable service and luxurious atmosphere. Truly a five-star experience.",
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of a smiling senior woman wearing glasses against a bright indoor background."
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Corporate Executive",
              testimonial: "The perfect blend of elegance and comfort. The spa treatments were rejuvenating and the dining experience was exceptional. Highly recommended.",
              imageSrc: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up portrait of a serious Asian man in a formal suit indoors. Modern and professional look."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Subscribe to Exclusive Offers"
          description="Be the first to know about special packages, seasonal promotions, and exclusive events at Grandview Hotel"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails from Grandview Hotel. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/7821340/pexels-photo-7821340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Sophisticated hotel lobby with a reception bell and array of international flags in focus."
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Event Planning", href: "events" },
                { label: "Business Center", href: "business" },
                { label: "Transportation", href: "transport" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Book Now", href: "https://booking.example.com" },
                { label: "Contact Us", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Reviews", href: "reviews" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grandview Hotel"
        />
      </div>
    </ThemeProvider>
  );
}