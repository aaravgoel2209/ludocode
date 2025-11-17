type OrderSelectorProps = {
  index: number;
  count: number;
  onChange: ((oldIndex: number, newIndex: number) => void) | null
  className?: string;
  prefix?: string;
};

export function OrderSelector({
  index,
  count,
  onChange,
  className,
  prefix = "#"
}: OrderSelectorProps) {
  return (
    <select
      className={className}
      value={index}
      onChange={(e) => onChange?.(index, Number(e.target.value))}
      onClick={(e) => e.stopPropagation()}
      aria-label="Reorder"
    >
      {Array.from({ length: count }).map((_, i) => (
        <option key={i} value={String(i)}>
          {prefix} {i}
        </option>
      ))}
    </select>
  );
}
