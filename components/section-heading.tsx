interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-8xl">
      <span className={`text-lg font-bold uppercase ${dark ? "text-[#cfa8ff]" : "text-[#bd5b32]"}`}>{eyebrow}</span>

      <h2
        className={`display-heading mt-6 text-5xl font-black tracking-tight sm:text-7xl xl:text-8xl leading-none ${
          dark ? "text-[#f4f0fa]" : "text-[#0f0119]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-3xl text-lg font-normal leading-relaxed sm:text-xl ${
            dark ? "text-[#c5b6df]" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
