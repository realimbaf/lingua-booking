import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6 gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider">
            <Search className="size-4" />
            Весь каталог
          </Badge>

          <h2 className="mb-4 max-w-3xl text-balance text-2xl font-bold text-primary-foreground md:text-4xl">
            Хотите увидеть больше вариантов?
          </h2>

          <p className="mb-8 max-w-2xl text-pretty text-base text-primary-foreground/90 md:text-lg">
            Просмотрите наш полный каталог из более чем 200+ языковых школ по всему миру
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="gap-2 text-base font-semibold" asChild>
              <a href="https://linguatrip.com" target="_blank" rel="noopener noreferrer">
                Открыть маркетплейс
                <ArrowRight className="size-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
