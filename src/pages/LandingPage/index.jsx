import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FeaturesOverviewSection from "./FeaturesOverviewSection";
import HeroSection from "./HeroSection";
import HeroSection1 from "./HeroSection1";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import TreeBIShowcaseSection from "./TreeBIShowcaseSection";
import React from "react";

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>AI Analytics Platform - Transform Data into Insights | TreeBI</title>
        <meta
          name="description"
          content="Discover TreeBI, the AI-powered analytics platform that simplifies data analysis. Uncover trends, gain insights, and make informed decisions with intuitive AI tools and a familiar spreadsheet interface."
        />
      </Helmet>
      <div className="bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-1 w-full overflow-x-scroll">
        <div className="bg-v0_integrate_ai_with_google_sheets_33hr6hg29_vercel_app-mountain_meadow-1">
          <Header />

          {/* hero section */}
          <HeroSection />

          {/* features overview section */}
          <FeaturesOverviewSection />

          {/* tree b i showcase section */}
          <TreeBIShowcaseSection />

          {/* testimonials section */}
          <TestimonialsSection />

          {/* pricing section */}
          <PricingSection />

          {/* hero section */}
          <HeroSection1 />
          <Footer />
        </div>
      </div>
    </>
  );
}
