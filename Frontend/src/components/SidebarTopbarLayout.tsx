// app/layout.tsx ou onde você montar a UI
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function SidebarTopbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
