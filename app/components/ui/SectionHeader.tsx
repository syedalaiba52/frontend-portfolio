interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

const SectionHeader = ({
  badge,
  title,
  highlight,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4">
      {/* badge */}
      {badge && (
        <span className="inline-block px-6 py-2 text-sm text-primary rounded-full border border-border">
          {badge}
        </span>
      )}

      {/* title */}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-text">
        {title} {""}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>

      {/* description */}
      {description && (
        <p className="text-gray-400 max-w-xl mx-auto"> {description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
