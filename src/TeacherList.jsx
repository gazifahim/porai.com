import teacher1 from "./assets/gazifahim.jpg";
import teacher2 from "./assets/mahin.jpg";
import teacher3 from "./assets/zubayer.jpg";
import teacher4 from "./assets/shahadat.jpg";
import teacher5 from "./assets/ibrahim.jpg";
import teacher6 from "./assets/yusuf 1.jpg";
const teachers = [
  {
    name: "Gazi Fahim",
    desc: "Founder of পড়াই.com\nWeb-developer & Teacher\n Experience?? over 10 years😅\n Expert in mentorship for SSC & HSC students",
    img: teacher1,
  },
  {
    name: "Mahin Ahsan",
    desc: " Chemistry Department\nDhaka College\nExperienced in teaching both HSC & SSC level students😃",
    img: teacher2,
  },
  {
    name: "MD Shahadat Hossain",
    desc: "Department of Economics \n Dhaka College\n Expert in teaching SSC level students😊",
    img: teacher4,
  },

  {
    name: "Md. Ibrahim Chowdhury",
    desc: "Started MBA from BUP\n Bringing eight years of experience in teaching SSC-level students, along with personalized one-to-one counselling😁",
    img: teacher5,
  },
  {
    name: "Zubayer hasan",
    desc: "Civil Department\n United International University\n Expert in teaching SSC level students😊",
    img: teacher3,
  },
   {
    name: " Md Yousuf Ali",
    desc: "Department of CSE\n University Of Asia Pacific\n Expert in teaching SSC level students😊",
    img: teacher6,
  },
];

export default function TeacherList() {
  return (
    <div className="px-6 sm:px-10 pt-24 pb-24">
      <h2 className="text-2xl font-bold text-red-600 mb-6 text-center italic ">
        TOP MENTORS
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {teachers.map((teacher, idx) => (
          <div
            key={idx}
            className="w-[260px] sm:w-[280px] md:w-[300px] bg-slate-800 rounded-2xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 p-6 flex flex-col items-center border-2 border-white"
          >
            {/* Rounded top image */}
            <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-2 text-left">
              <p className="text-lg font-bold text-center text-yellow-500">
                {teacher.name}
              </p>
              <p className="text-sm text-gray-300 mt-2 whitespace-pre-line">
                {teacher.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
