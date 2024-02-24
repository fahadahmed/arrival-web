import { createLazyFileRoute } from '@tanstack/react-router';
import { Button } from '@repo/ui/button';

function Index() {
  return (
    <div>
      <h1>Index</h1>
      <Button appName="containerApp">Click me</Button>
    </div>
  );
}

export const Route = createLazyFileRoute('/')({
  component: Index,
});