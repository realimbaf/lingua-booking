import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 size-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 size-96 rounded-full bg-secondary blur-3xl" />
      </div>

      {/* Floating Shapes for Fun */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute left-[10%] top-[20%] size-12 animate-bounce rounded-lg bg-accent delay-100"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute right-[15%] top-[40%] size-8 animate-bounce rounded-full bg-secondary delay-300"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-[30%] left-[20%] size-10 animate-bounce rounded-lg bg-accent delay-500"
          style={{ animationDuration: "3.5s" }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 md:w-10 md:h-10"
            >
              <path
                d="M9.01266 0C9.5458 0.0549301 9.93931 0.304613 10.1475 0.796487C10.1957 0.911341 10.2186 1.04367 10.2186 1.16851C10.2186 3.1485 10.866 4.89627 12.2115 6.37689C13.2499 7.51794 14.5218 8.29695 16.0628 8.61404C16.398 8.68395 16.7356 8.75137 17.0707 8.81629C17.647 8.92615 17.9339 9.28819 17.9923 9.84997C18.0532 10.4467 17.741 10.8837 17.4541 11.3456C16.3599 13.1008 14.8493 14.3942 12.9376 15.2281C12.1531 15.5702 11.3356 15.8299 10.4699 15.8973C9.87584 15.9447 9.27923 15.9922 8.68515 15.9996C7.04764 16.0146 5.53961 15.5477 4.13059 14.7512C2.34075 13.74 1.01043 12.3068 0.0990123 10.4942C0.0863184 10.4692 0.0330041 10.4617 0 10.4467C0 10.1671 0 9.88992 0 9.61028C0.0380816 9.56533 0.0863184 9.52289 0.111706 9.47295C0.291959 9.10592 0.563608 8.89119 0.992661 8.8088C1.67305 8.67896 2.36106 8.53914 3.00591 8.30194C5.80618 7.26826 7.77881 4.44435 7.79658 1.4132C7.80166 0.591747 8.09616 0.214727 8.88825 0H9.01012L9.01266 0ZM14.8315 10.8237C12.2699 9.9873 10.3633 8.39932 9.01773 6.0548C7.68488 8.39682 5.77825 9.97731 3.24709 10.8187C6.1413 14.4941 11.9805 14.4891 14.8315 10.8237Z"
                fill="white"
              />
            </svg>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide">linguatrip</span>
          </div>

          {/* Urgency Badge */}
          <Badge
            variant="secondary"
            className="mb-6 gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-base font-bold uppercase tracking-wide shadow-lg animate-pulse"
          >
            <Sparkles className="size-5" />
            Black Friday 2025
          </Badge>

          {/* Main Headline */}
          <h1 className="mb-6 max-w-5xl text-balance text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Учи английский за границей со скидкой до 50%! 🎉
          </h1>

          <p className="mb-10 max-w-2xl text-pretty text-lg text-white/95 md:text-xl lg:text-2xl leading-relaxed">
            Мы подготовили эксклюзивные Black Friday предложения от лучших школ Лондона и Дублина. Успей забронировать
            до 30 ноября!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              asChild
            >
              <a href="#schools">
                Смотреть предложения
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm text-lg font-bold px-10 py-7 shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a href="#consultation">Бесплатная консультация</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-2xl">🏫</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">языковых школ</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-2xl">🌍</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave - More Playful */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-16 w-full fill-background md:h-20">
          <path d="M0,50 C200,90 400,20 600,50 C800,80 1000,30 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
