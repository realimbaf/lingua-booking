import { Badge } from "@/components/ui/badge"

export function AboutLinguatrip() {
  return (
    <section className="bg-gradient-to-b from-secondary/20 to-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary text-base px-4 py-1.5">
              О нас
            </Badge>
            <h2 className="mb-6 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Мы — Лингватрип 🌍</h2>
            <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Мы — крупнейший агрегатор языковых школ, который помогает людям находить и бронировать программы обучения
              английскому за рубежом. Специально к Black Friday 2025 мы подготовили эксклюзивные предложения со скидками
              до 50% от топовых школ!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
