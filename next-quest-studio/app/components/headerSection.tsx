import Image from "next/image";

type HeaderSectionProps = Readonly<{
  name: string;
  title: string;
  bio: string;
  interests: string[];
  techStack: { icon: string; name: string }[];
}>;

export default function HeaderSection({
  name,
  title,
  bio,
  interests,
  techStack,
}: HeaderSectionProps) {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0">
        <div className="relative w-[200px] h-[300px] md:w-[200px] md:h-[300px] mx-auto md:mx-0 rounded-xl overflow-hidden drop-shadow-xl drop-shadow-black/20">
          <Image
            src="/user.png"
            alt="Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-1 flex-col md:ml-8">
          <div className="h-auto md:h-[220px] flex flex-col rounded-xl overflow-hidden drop-shadow-xl drop-shadow-black/20 bg-raisin-black p-4 md:justify-around">
            <div className="flex flex-col sm:flex-row pt-2 md:pt-4 px-0 md:px-4 text-center sm:text-left">
              <span className="text-white text-lg font-semibold">{name}</span>
              <span className="mx-4 text-white hidden sm:inline">|</span>
              <span className="text-white text-lg font-semibold">{title}</span>
            </div>
            <div className="w-[95%] mx-auto md:ml-4 h-0.5 bg-magnolia/50 my-4 md:my-0"></div>
            <div className="md:p-4 justify-center flex items-center">
              <p className="text-magnolia text-base md:text-lg text-center md:text-left">
                {bio}
              </p>
            </div>
          </div>
          <div className="h-auto md:h-18 mt-4 rounded-xl overflow-hidden drop-shadow-xl drop-shadow-black/20 bg-raisin-black flex flex-col md:flex-row items-center justify-center p-4 md:p-0">
            <div className="text-platinum ml-0 md:ml-4 mr-0 md:mr-4 text-xl font-semibold mb-4 md:mb-0">
              Interests
            </div>
            <div className="bg-magnolia/50 h-0.5 md:h-[70%] w-full md:w-0.5 mx-2 mb-4 md:mb-0"></div>
            <div className="text-magnolia flex flex-col sm:flex-row justify-around flex-1 gap-2">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="text-lg md:text-xl bg-black/30 px-3 py-2 justify-center flex items-center rounded-full"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Tech stack */}

      <div className="flex flex-row flex-wrap justify-center md:justify-around bg-raisin-black p-4 mt-8 rounded-xl overflow-hidden drop-shadow-xl drop-shadow-black/20 items-center gap-2">
        <div className="text-platinum text-xl font-semibold w-full text-center md:w-auto mb-4 md:mb-0">
          Tech Stack
        </div>
        {techStack.map(({ icon, name }, index) => (
          <div
            key={index}
            className="flex items-center bg-black/30 px-3 py-2 rounded-full"
          >
            <Image src={icon} alt={name} width={12} height={12} />
            <span className="ml-2 text-magnolia text-sm font-semibold">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
