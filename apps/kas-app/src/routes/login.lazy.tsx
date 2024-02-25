import { createLazyFileRoute } from '@tanstack/react-router';
import { Button } from '@repo/ui/button';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Button appName="Login">Login</Button>
    </div>
  );
}

export const Route = createLazyFileRoute('/login')({
  component: Login,
});