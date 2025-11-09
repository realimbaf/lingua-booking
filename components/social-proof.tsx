import { GraduationCap, Building2 } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "200+",
    label: "Языковых школ",
  },
  {
    icon: GraduationCap,
    value: "10+",
    label: "Лет опыта",
  },
]

export function SocialProof() {
  return (
    <section className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-16 md:gap-24">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
              <div className="flex size-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <stat.icon className="size-8" />
              </div>
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
