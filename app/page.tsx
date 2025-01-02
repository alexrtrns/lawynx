import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Scale, Clock, Video, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
          Expert Legal Advice at Your Fingertips
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with qualified lawyers instantly or schedule consultations at your convenience.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/instant-consultation">Get Instant Help</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/lawyers">Find a Lawyer</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            icon: Scale,
            title: "Expert Lawyers",
            description: "Connect with qualified legal professionals across various specializations",
          },
          {
            icon: Clock,
            title: "24/7 Availability",
            description: "Get legal assistance any time with our instant consultation feature",
          },
          {
            icon: Video,
            title: "Video Consultations",
            description: "Face-to-face consultations from the comfort of your home",
          },
          {
            icon: MessageSquare,
            title: "Secure Chat",
            description: "Private and secure communication with your legal advisor",
          },
        ].map((feature, index) => (
          <Card key={index} className="p-6">
            <feature.icon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Choose Your Lawyer",
              description: "Browse through our network of verified lawyers or get instantly matched",
            },
            {
              step: "2",
              title: "Book Consultation",
              description: "Schedule a meeting or start an instant consultation",
            },
            {
              step: "3",
              title: "Get Legal Advice",
              description: "Connect via chat, audio, or video call for your consultation",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {item.step}
              </div>
              <Card className="pt-8 p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}