import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemeProvider
      themes={["rainbow", "ocean", "midnight", "blossom"]}
      defaultTheme="rainbow"
      attribute="data-theme"
    >
      {children}
    </NextThemeProvider>
  );
}
