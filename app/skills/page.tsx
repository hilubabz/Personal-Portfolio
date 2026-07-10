import { SKILLS } from "@/constants/skills";
import ScrollAnimate from "@/framer/scroll-animate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "A list of skills learned by Utsarga Manandhar.",
};

export default function Skills() {
  return (
    <div className="page-shell min-h-screen px-4 py-12 sm:px-6 md:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        {SKILLS.map((val, index) => (
          <section
            key={index}
            className="rounded-[2rem] border border-border/40 bg-background/40 p-4 backdrop-blur-sm sm:p-6 lg:p-8"
          >
            <div className="mb-6 text-center sm:mb-8">
              <div className="relative inline-block text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                <ScrollAnimate>
                  {val.name}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-red-700 transition-all duration-500" />
                </ScrollAnimate>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {val.skill.map((value, ind) => (
                <div
                  key={ind}
                  className="page-surface group flex min-h-50 flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center shadow-md transition duration-500 ease-out hover:-translate-y-1 hover:border-red-500/40 hover:shadow-red-500/20"
                >
                  <div className="rounded-2xl bg-red-500/10 p-3 text-red-600 transition duration-300 group-hover:scale-110">
                    <value.icon className="text-2xl sm:text-3xl" />
                  </div>
                  <div className="space-y-1">
                    <ScrollAnimate>
                      <div className="text-base font-semibold text-foreground sm:text-lg">
                        {value.language}
                      </div>
                    </ScrollAnimate>
                    <ScrollAnimate>
                      <div className="px-1 text-[11px] leading-5 text-muted-foreground sm:text-sm">
                        {value.description}
                      </div>
                    </ScrollAnimate>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
