
export default function Skills(){
    return(
        <div>
            <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10 text-center">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS'].map(skill => (
              <div key={skill} className="p-6 bg-gray-800 rounded-2xl text-center hover:scale-105 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
}