import teacher1 from "./assets/bullettrain.jpg";
import teacher2 from "./assets/bullettrain.jpg";
import teacher3 from "./assets/bullettrain.jpg";

const teachers = [
  {
    name: "মোঃ আব্দুল্লাহ",
    desc: "HSC Science teacher with 5 years of experience in Physics and Math.",
    img: teacher1,
  },
  {
    name: "সাবিনা আক্তার",
    desc: "English and ICT expert, helping students excel in language skills.",
    img: teacher2,
  },
  {
    name: "রফিকুল ইসলাম",
    desc: "SSC Science teacher focusing on Chemistry and Biology fundamentals.",
    img: teacher3,
  },
  {
    name: "রফিকুল ইসলাম",
    desc: "SSC Science teacher focusing on Chemistry and Biology fundamentals.",
    img: teacher3,
  },
];

export default function TeacherList() {
  return (
    <div className="px-6 sm:px-10 pt-24 pb-24">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
        যারা পড়াই
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {teachers.map((teacher, idx) => (
          <div
            key={idx}
            className="w-[260px] sm:w-[280px] md:w-[300px] bg-slate-800 rounded-2xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 p-6 flex flex-col items-center"
          >
            {/* Rounded top image */}
            <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-4 text-center">
              <p className="text-lg font-bold text-cyan-300">{teacher.name}</p>
              <p className="text-sm text-gray-300 mt-2">{teacher.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
