import Badge from "./Badge";

interface SkillItem {
  name: string;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillItem[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-lg">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill.name} label={skill.name} color={skill.color} />
        ))}
      </div>
    </div>
  );
}
