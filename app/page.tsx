'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FEATURED_PRODUCTIONS = [
  {
    id: 1,
    title: "The Last Symphony",
    description: "A gripping drama about a renowned conductor's final performance and the secrets that threaten to destroy everything.",
    image: "/productions/symphony.jpg",
    genre: "Drama",
    duration: "2h 15m"
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    description: "An epic sci-fi adventure that explores humanity's first interstellar journey to save Earth.",
    image: "/productions/horizon.jpg",
    genre: "Sci-Fi",
    duration: "2h 30m"
  },
  {
    id: 3,
    title: "Urban Legends",
    description: "A documentary series unveiling the truth behind the most infamous urban myths and legends.",
    image: "/productions/legends.jpg",
    genre: "Documentary",
    duration: "Series"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Academy Graduate, now Director",
    quote: "ChanceTv Studios' academy transformed my passion for storytelling into a successful career in directing.",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Actor, 'The Last Symphony'",
    quote: "The professional environment and world-class production quality at ChanceTv Studios are unmatched.",
    image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Production Manager",
    quote: "Joining the ChanceTv team was the best decision of my career. The opportunities for growth are endless.",
    image: "/testimonials/emma.jpg"
  }
];

const ACHIEVEMENTS = [
  { number: "50+", label: "Productions Completed" },
  { number: "1000+", label: "Academy Graduates" },
  { number: "25", label: "Industry Awards" },
  { number: "100M+", label: "Global Viewers" }
];

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLearnMore = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await router.push('/about');
      setShowSuccess(true);
    } catch (error) {
      console.error('Navigation error:', error);
      setError('Failed to navigate. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setShowSuccess(false);
        setError(null);
      }, 3000);
    }
  };

  const handleViewEvents = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await router.push('/events');
      setShowSuccess(true);
    } catch (error) {
      console.error('Navigation error:', error);
      setError('Failed to navigate. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setShowSuccess(false);
        setError(null);
      }, 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Video */}
      <section className="relative h-[92vh] bg-black overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B0000_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#000_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3B000040_0%,transparent_70%)] animate-pulse" />
        
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 transform motion-safe:animate-[slowZoom_20s_ease-in-out_infinite]"
        >
          <source src="/showreel.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-shimmer" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-shimmer" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/50 to-transparent animate-shimmer" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/50 to-transparent animate-shimmer" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="max-w-5xl animate-fadeIn relative">
            {/* Decorative circles */}
            <div className="absolute -left-4 -top-4 w-72 h-72 border border-red-500/10 rounded-full animate-spin-slow opacity-50" />
            <div className="absolute -right-4 -bottom-4 w-72 h-72 border border-red-500/10 rounded-full animate-spin-slow-reverse opacity-50" />
            
            {/* Main content */}
            <div className="relative px-4 py-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5">
              <div className="inline-block mb-6">
                <span className="text-red-500 text-lg font-semibold tracking-wider uppercase block animate-slideDown">
                  Welcome to the Future of Film
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)] motion-safe:animate-slideUp">
                Where Stories{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    Come to Life
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-red-500 to-red-600 transform origin-left scale-x-0 animate-expandWidth" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed mx-auto max-w-3xl [text-shadow:_0_2px_8px_rgb(0_0_0_/_30%)] motion-safe:animate-slideUp motion-safe:animation-delay-200">
                Join ChanceTv Studios in creating the next generation of entertainment. 
                From production to education, we're shaping the future of film.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center motion-safe:animate-slideUp motion-safe:animation-delay-400 relative z-20">
                <div className="relative group/tooltip">
                  <button
                    onClick={handleLearnMore}
                    disabled={isLoading}
                    className="group relative bg-gradient-to-r from-red-600 to-red-500 text-white px-12 py-5 rounded-lg text-center text-lg font-semibold shadow-lg hover:shadow-red-500/30 hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 w-full sm:w-auto min-w-[200px] cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden focus-visible:ring-4"
                    aria-label="Learn more about ChanceTv Studios"
                  >
                    <span className="relative z-10 group-hover:text-white/90 flex items-center justify-center pointer-events-none">
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : showSuccess ? (
                        <svg className="h-5 w-5 mr-3 text-white animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : null}
                      Learn More
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg pointer-events-none" />
                    <div className="absolute inset-0 -m-1 bg-gradient-to-r from-red-400 to-red-500 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none" />
                  </button>
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm whitespace-nowrap">
                    Discover our story and mission
                  </div>
                </div>

                <div className="relative group/tooltip">
                  <button
                    onClick={handleViewEvents}
                    disabled={isLoading}
                    className="group relative bg-transparent backdrop-blur-sm border-2 border-white/80 text-white px-12 py-5 rounded-lg text-center text-lg font-semibold w-full sm:w-auto min-w-[200px] cursor-pointer select-none overflow-hidden transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 hover:border-red-400/80 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-4"
                    aria-label="View upcoming events"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-red-100 flex items-center justify-center pointer-events-none">
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : showSuccess ? (
                        <svg className="h-5 w-5 mr-3 text-white animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : null}
                      View Events
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none" />
                    <div className="absolute inset-0 -m-1 bg-gradient-to-r from-red-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none" />
                  </button>
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm whitespace-nowrap">
                    Check out our upcoming events
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-4 text-red-400 bg-red-950/50 px-4 py-2 rounded-lg backdrop-blur-sm animate-fadeIn">
                  {error}
                </div>
              )}

              {/* Quick Navigation Buttons */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                  onClick={() => scrollToSection('achievements')}
                  className="text-white/60 hover:text-white transition-colors duration-300 focus:outline-none"
                  aria-label="Scroll to achievements"
                >
                  <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 bg-black text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3B0000_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {ACHIEVEMENTS.map((achievement) => (
              <div key={achievement.label} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent rounded-xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <div className="relative">
                  <div className="text-6xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transform transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-base text-gray-300 uppercase tracking-wider font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Productions */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#FDF2F2_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-gray-700 to-red-600 bg-clip-text text-transparent">
              Latest Productions
            </h2>
            <p className="text-xl text-gray-600">
              Discover our latest works that are pushing the boundaries of storytelling and cinematography.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURED_PRODUCTIONS.map((production) => (
              <div key={production.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-red-500/5">
                <div className="relative h-80">
                  <Image
                    src={production.image}
                    alt={production.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 text-white text-sm mb-3">
                      <span className="bg-gradient-to-r from-red-600 to-red-500 px-4 py-1.5 rounded-full font-medium">{production.genre}</span>
                      <span className="opacity-90">{production.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-red-600 group-hover:to-red-500 bg-clip-text text-transparent transition-all duration-300">
                    {production.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 text-lg">
                    {production.description}
                  </p>
                  <Link
                    href="/streaming"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group/link"
                  >
                    Watch Now
                    <span className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#FDF2F2_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for every aspect of film production and education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ServiceCard
              title="Film Academy"
              description="Learn from industry professionals and start your journey in film."
              link="/academy"
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              }
            />
            <ServiceCard
              title="Auditions"
              description="Find your next role in upcoming productions."
              link="/auditions"
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              }
            />
            <ServiceCard
              title="Events"
              description="Join us for premieres, workshops, and special screenings."
              link="/events"
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <ServiceCard
              title="Careers"
              description="Join our team and be part of creating amazing content."
              link="/careers"
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B0000_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What People Say
            </h2>
            <p className="text-xl text-gray-300">
              Hear from our community of filmmakers, actors, and industry professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-gray-800 transition-all duration-500 hover:-translate-y-2 relative">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-red-500 ring-offset-2 ring-offset-gray-800">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-red-400 transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-red-400 group-hover:text-red-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FF0000_0%,transparent_50%)] opacity-20" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay" />
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Whether you're an aspiring filmmaker, actor, or industry professional,
              ChanceTv Studios has a place for you.
            </p>
            <Link
              href="/auth"
              className="group inline-block bg-white text-red-600 px-12 py-5 rounded-lg transition-all duration-500 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text group-hover:text-transparent transition-all duration-500">
                Join Us Today
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  link,
  icon,
}: {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={link}
      className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="text-red-600 mb-6 transform group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 text-lg">
          {description}
        </p>
        <span className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700">
          Learn More
          <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
        </span>
      </div>
    </Link>
  );
}


