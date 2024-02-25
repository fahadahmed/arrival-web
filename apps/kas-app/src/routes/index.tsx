import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@repo/ui/button';
import { useAppStore } from '../utils/useAppStore';

function Index() {
  const { user, setUser } = useAppStore();
  return (
    <div>
      <h1>Index</h1>
      <Button appName="containerApp">Click me</Button>
      <p>User: {user}</p>
      <button onClick={() => setUser('user')}>Set User</button>

    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});