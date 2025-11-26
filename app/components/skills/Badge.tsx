interface BadgeProps {
    label: string;
    color: string;
  }
  
  export default function Badge({ label, color }: BadgeProps) {
    return (
      <span
        className="px-3 py-0.5 rounded-full text-sm font-medium backdrop-blur-md border skeleton"
        style={{
          color: color,
          borderColor: color + "40",
          backgroundColor: color + "15",
        }}
      >
        {label}
      </span>
    );
  }
  