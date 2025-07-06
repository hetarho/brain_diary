import NextLink from "next/link";

export default function Link({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}
