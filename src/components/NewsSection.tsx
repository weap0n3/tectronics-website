import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const news = [
    {
      date: "15. Jan 2025",
      title: "Neue Gaming-Konsolen eingetroffen",
      description: "Die neuesten Next-Gen Konsolen sind jetzt bei Game Garage verfügbar. Sichere dir jetzt dein Exemplar!",
      category: "Game Garage",
    },
    {
      date: "10. Jan 2025",
      title: "Upgrade unserer Hosting-Infrastruktur",
      description: "Cable-Corner erweitert die Server-Kapazitäten für noch bessere Performance und Zuverlässigkeit.",
      category: "Cable-Corner",
    },
    {
      date: "5. Jan 2025",
      title: "Nachhaltigkeits-Initiative gestartet",
      description: "TecTronics setzt auf papierlose Prozesse und umweltfreundliche Verpackungen.",
      category: "Unternehmen",
    },
  ];

  return (
    <section id="news" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Aktuelle News</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bleib auf dem Laufenden über unsere neuesten Entwicklungen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <Card
              key={item.title}
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3 w-fit">
                  {item.category}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-secondary/50">
                  Weiterlesen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
