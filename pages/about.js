import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Hunting Coder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose">
          <h2 className="text-2xl font-bold mb-4">Welcome to Hunting Coder</h2>
          <p className="text-lg mb-6">Your ultimate destination for all things coding, development, and technology!</p>
          
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">At Hunting Coder, we're on a mission to empower individuals to master the art of coding. We believe that coding is not just about writing lines of code; it's about creativity, innovation, and problem-solving. Whether you're a seasoned developer or a curious beginner, we're here to support you on your journey to coding excellence.</p>
          
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">In-Depth Tutorials: Dive deep into various programming languages, frameworks, and tools with our comprehensive tutorials. From beginner basics to advanced techniques, we cover it all.</li>
            <li className="mb-2">Project Ideas: Stuck in a coding rut? Explore our collection of project ideas to spark your creativity and take your coding skills to the next level. From web development to machine learning, there's something for everyone.</li>
            <li className="mb-2">Community Support: Connect with like-minded developers, share your projects, and seek help from our vibrant community of coding enthusiasts. Collaboration is key, and together, we can achieve greatness.</li>
            <li className="mb-2">Latest Tech News: Stay up-to-date with the latest trends, updates, and breakthroughs in the tech industry. From cutting-edge technologies to industry insights, we keep you informed and inspired.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">Join the Hunt</h2>
          <p className="text-lg mb-6">Ready to join the hunt for coding excellence? Whether you're here to learn, collaborate, or simply geek out over technology, Hunting Coder is your ultimate companion on your coding journey. Let's embark on this adventure together and unlock the endless possibilities of the digital world.</p>
          
          <p className="text-lg">Happy coding!</p>
        </div>
        <div className="flex justify-center items-center">
          <img src="/coding.avif" alt="Coding" className="max-w-full rounded-lg shadow-lg"/>
        </div>
      </div>
    </div>
  );
};

export default About;
