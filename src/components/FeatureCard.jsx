import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ icon: Icon, title, description, color = "primary" }) => {
  const colorClasses = {
    primary: "text-primary bg-primary/10",
    secondary: "text-secondary bg-secondary/10",
    accent: "text-accent bg-accent/10",
  };

  const selectedColor = colorClasses[color] || colorClasses.primary;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_-4px_hsl(193_82%_31%/_0.1)] rounded-xl">
      <CardContent className="p-6 flex flex-col items-start">
        <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 mt-2 ${selectedColor}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className={`text-xl font-semibold mb-2 transition-colors group-hover:text-${color}`}>
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
