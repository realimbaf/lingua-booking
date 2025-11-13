"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, CheckCircle } from "lucide-react"

export function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    const form = e.currentTarget
    try {
      const fd = new FormData(form)
      const payload = {
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        message: String(fd.get("message") || ""),
      }

      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(
          data?.error || "Ошибка отправки. Попробуйте позже или напишите на hello@linguatrip.com.",
        )
      }

      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
      form.reset()
    } catch (err: any) {
      setError(err?.message || "Не удалось отправить заявку. Напишите на hello@linguatrip.com.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="consultation" className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-4 border-accent text-accent text-base px-4 py-1.5">
              Бесплатная консультация 💬
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Не знаете, с чего начать?</h2>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Наши эксперты с радостью помогут выбрать идеальную школу и программу специально для вас!
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Заполните форму</CardTitle>
              <CardDescription className="text-base">
                Мы свяжемся с вами в течение 24 часов и подберем лучшие варианты 🎯
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-6 py-12 text-center">
                  <div className="flex size-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg animate-bounce">
                    <CheckCircle className="size-10" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold">Спасибо за ваше обращение! 🎉</h3>
                    <p className="text-lg text-muted-foreground">Мы скоро свяжемся с вами.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base font-semibold">
                        Имя *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ваше имя"
                        required
                        className="h-14 text-base border-2 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        className="h-14 text-base border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="h-14 text-base border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-base font-semibold">
                      Расскажите о ваших целях (необязательно)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Например: хочу улучшить разговорный английский для работы в IT..."
                      rows={5}
                      className="text-base border-2 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Отправка..." : "Получить консультацию 🚀"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
