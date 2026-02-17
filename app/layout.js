import "./globals.css";

export const metadata = {
  title: "HLY Dashboard",
  description: "Your Safe Study Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans">
        {/* Top Header */}
        <header className="top-header p-4 flex items-center gap-3 bg-white shadow-md sticky top-0 z-50">
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
          <span className="text-gray-700 font-medium text-sm">Welcome, username</span>
        </header>

        {/* Main Content */}
        <main className="px-8 py-6">{children}</main>
      </body>
    </html>
  );
}
