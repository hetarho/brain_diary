import useAuth from "../hooks/useAuth";

export default function SignInButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { login } = useAuth();

  return (
    <button className={className} onClick={login}>
      {children}
    </button>
  );
}
