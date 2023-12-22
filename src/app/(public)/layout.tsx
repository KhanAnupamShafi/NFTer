import NavMenu from '@/components/ui/NavMenu';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="font-sans">
          <NavMenu />
          <main className="overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
