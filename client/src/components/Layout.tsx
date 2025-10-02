import Header from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="container d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <footer className="bg-light text-center py-3 mt-auto">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
