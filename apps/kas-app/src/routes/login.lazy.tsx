import { createLazyFileRoute } from '@tanstack/react-router';

function Login() {
  return <div>Login</div>;
}

export const Route = createLazyFileRoute('/login')({
  component: Login,
});