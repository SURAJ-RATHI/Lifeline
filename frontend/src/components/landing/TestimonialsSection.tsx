"use client";
import { testimonials } from "@/lib/constant";
import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const averageRating = (
    testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) /
    testimonials.length
  ).toFixed(1);
  const displayedReviewCount = "25,000+ verified Indian reviews";

  const scrollSlider = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -360 : 360;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-center lg:text-left mb-6">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Voices from across India
            </p>
            <h2 className="text-3xl font-bold text-primary">
              Patients trust Lifeline care
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-foreground">
                  {averageRating}
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {displayedReviewCount}
                </p>
                <p className="text-sm text-muted-foreground">
                  Real stories from metro and tier-2 cities.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary/10"
                aria-label="View previous reviews"
                onClick={() => scrollSlider("left")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                variant="default"
                size="icon"
                className="rounded-full bg-primary text-white hover:bg-primary/90"
                aria-label="View next reviews"
                onClick={() => scrollSlider("right")}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonila slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`${testimonial.bgColor} min-w-[280px] max-w-[320px] flex-shrink-0 border border-border hover:shadow-lg transition-shadow duration-200 snap-start`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-foreground mb-6 leading-relaxed flex-1">
                    {testimonial.text}
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="text-chart-2 hover:text-chart-2/80 font-medium transition-colors duration-200">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
