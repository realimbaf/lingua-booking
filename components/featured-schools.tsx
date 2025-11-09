"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Calendar, Tag, ExternalLink, Images } from "lucide-react"
import { useState } from "react"

const schools = [
  {
    name: "Twin English Centre",
    location: "Лондон, Великобритания",
    image: "https://site.linguacdn.download/en/imageProcessor/process?src=https://mpreserverdata.blob.core.windows.net/data/schools/26731/photos/24408045669_5c9cfabd25_k.jpeg&width=800&height=800&mode=crop&autorotate=true&quality=80&quot",
    photos: [
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/26731/photos/24682205691_3f36036383_o.jpeg&autorotate=true&quality=80&width=800&height=800&mode=crop&",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/26731/photos/24408051549_4a436a2350_o.jpeg&autorotate=true&quality=80&width=800&height=800&mode=crop&",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/26731/photos/24775705205_6fa5e9c36d_o.jpeg&autorotate=true&quality=80&width=800&height=800&mode=crop&",
      "https://site.linguacdn.download/en/imageProcessor/process?src=https://mpreserverdata.blob.core.windows.net/data/review_photos/c9b92413-95a8-426a-b9f8-7dd6e7935a06.jpg&autorotate=true"
    ],
    discount: "-50%",
    videoUrl: "https://www.youtube-nocookie.com/embed/y1X1s5-5EAY",
    offer: "Скидка 50% на все курсы",
    deadline: "28 ноября",
    description: "Престижная школа в центре Лондона с современными классами и опытными преподавателями.",
    link: "https://linguatrip.com/ru/english/united_kingdom/london/twin_english_centre_london/?c.w=48424&c.weeks=2&c.s=2025-11-24&a.f=35764&a.r=33846&a.s=2025-11-23&a.e=2025-12-07&t.id=&t.t=False&t.f=False&spa=true",
    featured: true,
  },
  {
    name: "Erin School of English",
    location: "Дублин, Ирландия",
    image: "https://site.linguacdn.download/en/imageProcessor/process?src=https://mpreserverdata.blob.core.windows.net/data/schools/26673/photos/logo-vert.png&width=800&height=800&mode=crop&autorotate=true&quality=80",
    photos: [
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/26673/photos/door2.jpeg&autorotate=true&quality=80&width=800&height=800&mode=crop",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/26673/photos/group7.jpg&autorotate=true&quality=80&width=800&height=800&mode=crop",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/26673/photos/_DSC6125.JPG&autorotate=true&quality=80&width=800&height=800&mode=crop",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/26673/photos/Photo (07).jpg&autorotate=true&quality=80&width=800&height=800&mode=crop",
    ],
    discount: "Специальное предложение",
    videoUrl: "https://www.youtube-nocookie.com/embed/B9INpe78P2s",
    offer: "Скидки на программы Work and Study",
    deadline: "30 ноября",
    description: "Уникальная программа, сочетающая изучение английского с возможностью работы в Ирландии.",
    link: "https://linguatrip.com/ru/english/ireland/dublin/erin_school_of_english_dublin/?c.w=62232&c.weeks=2&c.s=2025-11-24&a.f=36059&a.r=34596&a.s=2025-11-23&a.e=2025-12-06&t.id=&t.t=False&t.f=False&spa=true",
    featured: false,
  },
  {
    name: "English Path",
    location: "Лондон Гринфорд, Великобритания",
    image: "https://site.linguacdn.download/en/imageProcessor/process?src=https://mpreserverdata.blob.core.windows.net/data/schools/28258/photos/Lobby MS.jpg&width=2400&height=704&mode=crop&autorotate=true&quality=80",
    photos: [
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/28258/photos/classroom 2.jpg&autorotate=true&quality=80&overlay=logo-40.png&quality=80&width=800&height=800&mode=crop",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/28258/photos/computers.jpg&autorotate=true&quality=80&overlay=logo-40.png&overlay.position=10,10&quality=80&width=800&height=800&mode=crop",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/28258/photos/Library shelves.jpg&autorotate=true&quality=80&overlay=logo-40.png&quality=80&width=800&height=800&mode=crop",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/28258/photos/Quay 5 - MS.jpg&autorotate=true&quality=80&overlay=logo-40.png&quality=80&width=800&height=800&mode=crop",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/28258/photos/Quay - MS.jpg&autorotate=true&quality=80&overlay=logo-40.png&quality=80&width=800&height=800&mode=crop",
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/schools/28258/photos/Quay 4 - MS.jpg&autorotate=true&quality=80&overlay=logo-40.png&overlay.position=10,10&quality=80&width=800&height=800&mode=crop"
    ],
    discount: "-35%",
    videoUrl: "https://www.youtube-nocookie.com/embed/7wDrPY597SM",
    offer: "Скидка 35% на Общий, Полу-интенсивный и Интенсивный английский",
    deadline: "28 ноября",
    description: "Инновационные методики обучения и гибкие программы для достижения ваших целей.",
    link: "https://linguatrip.com/ru/english/united_kingdom/london/english_path_london_greenford/?c.w=62396&c.weeks=2&c.s=2025-12-08&a.f=36169&a.r=34656&a.s=2025-12-07&a.e=2025-12-21&t.id=&t.t=False&t.f=False&spa=true",
    featured: false,
  },
]

export function FeaturedSchools() {
  return (
    <section id="schools" className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6 text-center">
          <Badge variant="outline" className="mb-2 border-accent text-accent text-base px-4 py-1.5">
            Эксклюзивные предложения
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Топ-3 предложения Black Friday
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
            Специально отобранные школы с максимальными скидками — только для вас!
          </p>
        </div>

        {/* School Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {schools.map((school) => (
            <SchoolCard key={school.name} school={school} />
          ))}
        </div>

        <div className="text-center py-6 md:py-8">
          <div className="flex justify-center mb-4">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <span className="text-3xl">🌟</span>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3">Хотите увидеть больше вариантов?</h3>
          <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            У нас есть большой каталог из 200+ языковых школ по всему миру! Попробуйте наш маркетплейс, чтобы найти
            идеальную программу для себя.
          </p>
          <Button size="lg" className="text-base font-bold px-8 py-6 shadow-xl" asChild>
            <a href="https://linguatrip.com/ru/english/" target="_blank" rel="noopener noreferrer">
              Перейти в каталог школ
              <ExternalLink className="ml-2 size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function SchoolCard({ school }: { school: (typeof schools)[0] }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<"photos" | "video">("photos")

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
        school.featured ? "border-2 border-accent ring-4 ring-accent/20" : "border-2 border-border/50"
      }`}
    >
      {/* School Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={school.image || "/placeholder.svg"}
          alt={school.name}
          className="size-full object-cover transition-transform hover:scale-105"
        />
        {/* Discount Badge */}
        <div className="absolute right-4 top-4">
          <Badge className="bg-accent text-accent-foreground text-base font-bold px-3 py-1.5 shadow-lg">
            {school.discount}
          </Badge>
        </div>
        {school.featured && (
          <div className="absolute left-4 top-4">
            <Badge className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1">ТОП ВЫБОР</Badge>
          </div>
        )}

        <div className="absolute bottom-4 left-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                variant="secondary"
                className="gap-2 backdrop-blur-sm bg-white/90 hover:bg-white shadow-lg"
              >
                <Images className="size-4" />
                Посмотреть медиа
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{school.name} - Галерея</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex gap-2 border-b">
                  <button
                    onClick={() => setActiveTab("photos")}
                    className={`px-4 py-2 font-semibold transition-colors ${
                      activeTab === "photos"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Фото
                  </button>
                  <button
                    onClick={() => setActiveTab("video")}
                    className={`px-4 py-2 font-semibold transition-colors ${
                      activeTab === "video"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Видео презентация
                  </button>
                </div>

                {activeTab === "photos" ? (
                  <>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <img
                        src={school.photos[currentPhotoIndex] || "/placeholder.svg"}
                        alt={`${school.name} photo ${currentPhotoIndex + 1}`}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {school.photos.map((photo, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPhotoIndex(index)}
                          className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all ${
                            currentPhotoIndex === index ? "border-primary ring-2 ring-primary/50" : "border-border"
                          }`}
                        >
                          <img
                            src={photo || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            className="size-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <iframe
                      src={school.videoUrl}
                      title={`${school.name} presentation`}
                      className="size-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{school.name}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-base">
          <MapPin className="size-4" />
          {school.location}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 flex-grow">
        {/* Offer */}
        <div className="flex items-start gap-2 rounded-xl bg-primary/10 border-2 border-primary/20 p-4">
          <Tag className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm font-semibold leading-relaxed text-primary">{school.offer}</p>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">{school.description}</p>

        {/* Deadline */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="size-4" />
          <span>Забронировать до {school.deadline}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          className="w-full gap-2 font-bold h-12 text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          asChild
        >
          <a href={school.link} target="_blank" rel="noopener noreferrer">
            Узнать подробнее
            <ExternalLink className="size-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}