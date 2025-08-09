// app/layout.tsx ou onde você montar a UI
import SideNavigationBar from "./SideNavigationBar";
import TopNavigationBar from "./TopNavigationBar";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideNavigationBar />

      <div className="flex flex-col flex-1">
        <TopNavigationBar />
        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
