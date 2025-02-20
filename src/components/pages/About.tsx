import Hero from "../Hero/Hero"


const About = () => {
  return (
    <main className="min-h-screen mx-auto mt-16 font-semibold bg-secondary-200 bg-[url('../yellow-200-bg.svg')] bg-repeat-y bg-cover">
      <Hero className="z-0">Website for searching and sorting in different movies</Hero>

      <section className="px-4 md:px-8 max-w-4xl mx-auto mb-16 py-8 z-50 bg-white/40 rounded-3xl backdrop-blur-sm [box-shadow:_5px_4px_20px_-10px_rgba(0,0,0,1);]">
        <div className="space-y-6 text-lg lg:text-2xl text-black">
          <p className="leading-relaxed">
            Welcome to my movie exploration platform! This project tries to showcases my some of my skills using React,
            React Router DOM for seamless navigation and TMDB API integration for movie data with React Query.
          </p>

          <p className="leading-relaxed">
            The application features modular components,
            custom hooks, and utility functions for maintainable code.
            I tried as much as posible to write a clean code, check it out on the github page.
            Responsive design made with Tailwind CSS, providing a smooth user experience
            across all devices with hover animations and consistent styling.

          </p>

        </div>
      </section>
    </main>
  )
}

export default About