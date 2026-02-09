import { motion } from "framer-motion";

export default function HeroSection(){
    return(
        <motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  id="home"
  className="pt-32 pb-24 text-center"
>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span className="text-blue-400">Manthan</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          MCA Graduate | MERN Stack Developer | React & Tailwind Enthusiast
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600">View Projects</a>
          <a href="#contact" className="px-6 py-3 border border-gray-700 rounded-xl hover:border-blue-400">Contact Me</a>
        </div>
      </motion.section>
    );
}