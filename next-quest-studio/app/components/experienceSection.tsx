type ExperienceSectionProps = Readonly<{
  experiences: {
    company: string;
    startDate: string;
    endDate: string;
    title: string;
    description: string;
    article?: string;
  }[];
}>;

function ExperienceCard({
  company,
  startDate,
  endDate,
  title,
  description,
  article,
}: {
  company: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  article?: string;
}) {
  return (
    <div className="bg-raisin-black p-4 md:p-6 rounded-xl shadow-lg shadow-black/20">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
        <span className="text-platinum font-semibold text-lg">{company}</span>
        <span className="text-magnolia text-sm">
          {startDate} - {endDate}
        </span>
      </div>
      <div className="mb-3">
        <span className="text-magnolia font-semibold text-base">{title}</span>
      </div>
      <div>
        <p className="text-magnolia text-sm md:text-base whitespace-pre-line leading-relaxed">
          {description}
        </p>
      </div>
      {article && (
        <div className="mt-3">
          <a
            href={article}
            className="text-magnolia text-sm underline hover:text-platinum transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Article
          </a>
        </div>
      )}
    </div>
  );
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-platinum text-center md:text-left">
        Experience
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
