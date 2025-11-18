import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="w-full py-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight border-b pb-2">
          Contact Me
        </h2>

        <p className="text-muted-foreground mt-4">
          I'm open to opportunities, collaborations, and freelance projects.
          Feel free to reach out — I usually reply within 24 hours.
        </p>

        {/* Form */}
        <Card className="mt-10 shadow-none border rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <Input placeholder="Your Name" className="h-12 rounded-xl" />

            <Input
              placeholder="Your Email"
              type="email"
              className="h-12 rounded-xl"
            />

            <Textarea
              placeholder="Your Message"
              className="min-h-[140px] rounded-xl resize-none"
            />

            <Button className="w-full h-12 rounded-xl text-base">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-10 space-y-2 text-muted-foreground">
          <p>📧 brijeshio@duck.com</p>
          <p>💼 linkedin.com/in/brijeshdevio</p>
          <p>🐙 github.com/brijeshdevio</p>
        </div>
      </div>
    </section>
  );
}
