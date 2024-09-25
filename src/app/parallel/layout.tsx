import { ReactNode } from "react";

export default function Layout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div>
      {sidebar}
      {children}
    </div>
  );
}
