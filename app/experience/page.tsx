import { MdWork } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import SlideAnimate from "@/framer/slide-animate";
import PopUpAnimate from "@/framer/pop-up-animate";

export default function Page() {
  const professional = [
    {
      institute: "Global Square IT Company",
      position: "Frontend Intern",
      sector: "React",
      description:
        "Working on modern web applications using React.js and related technologies, focusing on building responsive and interactive user interfaces.",
      date: "Sept 2025 - Present",
      type: "work",
      active: true,
    },
    {
      institute: "National College of Computer Studies (Tribhuvan University)",
      position: "Bachelors",
      sector: "Bachelors in Computer Science & Information Technology",
      description:
        "Pursuing advanced studies in Computer Science with focus on software development, algorithms, and modern web technologies.",
      date: "April 2021 - Present",
      type: "education",
      active: true,
    },
    {
      institute: "+2 (High Level Education)",
      position: "Science",
      sector: "Higher Secondary Education",
      description:
        "Completed higher secondary education with focus on Science and Mathematics, laying the foundation for Computer Science studies.",
      date: "2019 - 2021",
      type: "education",
      active: false,
    },
  ];

  return (
    <div className="page-shell min-h-screen px-6 pt-20 pb-20 md:px-10 lg:px-20">
      <div className="mb-16 space-y-4 text-center">
        <h1 className="text-4xl font-bold bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Work & Education Timeline
        </h1>
        <p className="mx-auto max-w-2xl px-4 text-muted-foreground">
          My professional journey through education and work experience
        </p>
      </div>

      <div className="flex flex-col items-center relative space-y-16">
        <div className="absolute max-md:left-11 h-full w-1 bg-linear-to-b from-red-700 via-red-500 to-red-700 rounded-full" />

        {professional.map((val, index) => (
          <div
            key={index}
            className="grid grid-cols-[2.5fr_1fr_2.5fr] max-md:grid-cols-[10%_80%] z-20 justify-items-center w-[85%] max-w-300 items-start group max-md:gap-7"
          >
            <div className="w-full flex h-15 justify-end items-center pr-8 max-md:hidden">
              <SlideAnimate content={false}>
                <div className="text-right">
                  <div className="mb-1 font-semibold text-red-500">
                    {val.date}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {val.type === "work"
                      ? "Professional Experience"
                      : "Academic Journey"}
                  </div>
                </div>
              </SlideAnimate>
            </div>
            <div className="relative">
              <PopUpAnimate>
                <div className="h-14 w-14 rounded-full bg-linear-to-br from-red-500 to-red-700 shadow-lg flex items-center justify-center text-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/50">
                  {val.type === "work" ? (
                    <MdWork className="text-white" />
                  ) : (
                    <HiAcademicCap className="text-white" />
                  )}
                </div>
                {val.active && (
                  <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-red-500 transition-all duration-500 animate-ping" />
                  </>
                )}
              </PopUpAnimate>
            </div>
            <SlideAnimate content={true}>
              <div className="w-full">
                <div className="page-surface relative transform p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 before:absolute before:-left-2 before:top-6 before:h-4 before:w-4 before:rotate-45 before:bg-card/80">
                  <h3 className="mb-2 text-xl font-bold text-red-500">
                    {val.position}
                  </h3>
                  <h4 className="mb-2 text-lg text-foreground">
                    {val.institute}
                  </h4>
                  <div className="mb-3 text-sm text-red-400">{val.sector}</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {val.description}
                  </p>
                </div>
              </div>
            </SlideAnimate>
          </div>
        ))}
        <PopUpAnimate>
          <div className="h-14 w-14 rounded-full bg-linear-to-br from-red-500 to-red-700 shadow-lg flex items-center justify-center text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 max-md:hidden">
            <IoIosStar />
          </div>
        </PopUpAnimate>
      </div>
    </div>
  );
}
