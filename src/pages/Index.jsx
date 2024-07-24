import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const preparationSteps = [
    {
      title: "Choose the Right Paddle Board",
      description: "Select a paddle board suitable for long-distance travel. Look for boards with high volume, stability, and tracking ability. Touring or expedition-specific boards are ideal for crossing the Atlantic.",
    },
    {
      title: "Safety Gear",
      description: "Essential safety gear includes a life jacket, leash, whistle, and waterproof communication devices. Consider a personal locator beacon (PLB) and emergency flares.",
    },
    {
      title: "Training and Fitness",
      description: "Develop a rigorous training routine focusing on endurance, strength, and balance. Practice paddling in various weather conditions and work on your core strength.",
    },
  ];

  const checklist = [
    "Paddle board suitable for long-distance travel",
    "Paddle (primary and spare)",
    "Life jacket",
    "Leash",
    "Waterproof communication devices",
    "Personal locator beacon (PLB)",
    "Emergency flares",
    "First aid kit",
    "Sun protection (sunscreen, hat, sunglasses)",
    "Hydration system",
    "Navigation tools (GPS, compass, maps)",
    "Repair kit for board and equipment",
    "Appropriate clothing for various weather conditions",
    "High-energy, non-perishable food supplies",
    "Waterproof bags for gear storage",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12 relative">
        <img src="/images/atlantic-paddle-board.jpg" alt="Paddle boarder on the Atlantic Ocean" className="w-full h-[400px] object-cover rounded-lg mb-8" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-white">Prepare Your Paddle Board for an Atlantic Crossing</h1>
          <p className="text-xl text-gray-200">Comprehensive Guide to Ensure Your Safety and Success</p>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg">
          Preparing for an Atlantic crossing on a paddle board is a monumental task that requires meticulous planning and preparation. This guide will help you understand the key aspects of getting ready for this incredible journey, ensuring your safety and increasing your chances of success.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Preparation Steps</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preparationSteps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Checklist</h2>
        <Card>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 mb-4">
                  <Checkbox id={`item-${index}`} />
                  <label
                    htmlFor={`item-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-muted-foreground">
        <p className="mb-2">Contact us: info@atlanticcrossing.com | Follow us on social media: @atlanticcrossing</p>
        <p className="mb-4">
          Disclaimer: Attempting an Atlantic crossing on a paddle board involves significant risks. This guide is for informational purposes only and does not guarantee safety or success. Always consult with experienced professionals and authorities before undertaking such a journey.
        </p>
        <Separator className="my-4" />
        <p>&copy; 2024 Atlantic Crossing Preparation Guide. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;