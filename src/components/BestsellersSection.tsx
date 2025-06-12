
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BestsellersSection = () => {
  const bestsellers = [
    {
      name: "Shrimp Bowl",
      price: "₹349",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b4?w=400",
      tag: "Most Popular"
    },
    {
      name: "Butter Chicken Kit",
      price: "₹299",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
      tag: "Chef's Special"
    },
    {
      name: "Marinated Wings",
      price: "₹199",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400",
      tag: "Trending"
    },
    {
      name: "Fish Curry",
      price: "₹279",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400",
      tag: "Coastal Special"
    }
  ];

  return (
    <section className="py-20 bg-delwingz-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold delwingz-red mb-4">
            INSTAGRAM POPULARS
          </h2>
          <p className="text-xl text-muted-foreground">
            Our most loved dishes that are breaking the internet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-delwingz-red/30 hover:-translate-y-2"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-delwingz-red text-delwingz-off-white">
                  {item.tag}
                </Badge>
                <Badge className="absolute top-3 right-3 bg-delwingz-black text-delwingz-off-white">
                  ★ {item.rating}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold delwingz-red">{item.price}</span>
                </div>
                <Button className="w-full bg-delwingz-black hover:bg-delwingz-black/90 text-delwingz-off-white">
                  Quick Add
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
