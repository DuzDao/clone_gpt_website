export default function ConversationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>This is history modal</div>
      <div>{children}</div>
    </div>
  );
}
