import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Эдуард",
 
    image: "/review_1.jpeg",
    rating: 5,
    review:
      "Это были замечательные каникулы! Учителя просто космос!!! Каждый день школа проводит мероприятия и различные экскурсии. Также предоставляет скидки на платные экскурсии по Лондону и не только. Был приятно удивлен, когда директор школы с учительским составом во время урока зашли и поздравили меня с днём рождения.",
  },
  {
    name: "Расул",
    image: "/review_2.jpeg",
    rating: 5,
    review:
      "Я в восторге от поездки. Поехал с pre-intermediate и вернулся, как мне кажется, с intermediate. Школа была очень хорошая. Программы предлагали, и проблем ни с чем не возникало.",
  },
  {
    name: "Елена",
    image: "/review_3.jpeg",
    rating: 5,
    review:
      "Бронировала курс на неделю, также брала визовое сопровождение. Всё на высшем уровне! Обратная связь быстрая и оперативная. Очень много советов присылают на электронную почту. Сильно повысить уровень языка за неделю не получилось, но преодолеть языковой барьер — вполне. Отличная развлекательная программа от школы, есть скидки в музеи. Хочется сказать Linguatrip СПАСИБО за качественный сервис и незабываемую поездку!",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Отзывы студентов
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Более 30,000 студентов уже достигли своих целей
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Присоединяйтесь к тысячам студентов, которые выбрали наш сервис для обучения за рубежом
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2]">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Отзыв ${testimonial.name}`}
                    className="size-full object-cover"
                  />
                  {/* Rating Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-card/95 p-3 backdrop-blur-sm">
                    <div className="mb-1 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-card-foreground">{testimonial.name}</p>
                    {testimonial.program && (
                      <p className="text-xs text-muted-foreground">{testimonial.program}</p>
                    )}
                  </div>
                </div>
                {/* Review Text */}
                {testimonial.review && (
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{testimonial.review}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
