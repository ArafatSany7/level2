import { Button } from "@/components/ui/button";


export default function HomePage() {
  console.log('Root Route');
  return (
    <div>
      Hello next-ninja-frontend
      <Button
        size="lg" variant="destructive"
      >
        Click me
      </Button>
    </div>
  );
}
