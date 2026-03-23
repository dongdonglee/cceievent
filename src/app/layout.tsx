import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, Calendar, Users, PhoneCall, Mail, Settings } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Event Agent",
  description: "Manage events and contact customers with AI agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
            <div className="p-6">
              <h1 className="text-xl font-bold gap-2 text-indigo-600 flex items-center">
                <Users className="w-6 h-6" />
                AI Event Agent
              </h1>
            </div>
            <nav className="flex-1 px-4 space-y-2">
              <Link href="/" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-indigo-600 transition-colors">
                <Home className="w-5 h-5" /> 대시보드
              </Link>
              <Link href="/events" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-indigo-600 transition-colors">
                <Calendar className="w-5 h-5" /> 이벤트 관리
              </Link>
              <Link href="/customers" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-indigo-600 transition-colors">
                <Users className="w-5 h-5" /> 대상자 관리
              </Link>
              <Link href="/ai-calling" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-indigo-600 transition-colors">
                <PhoneCall className="w-5 h-5" /> 통화 로그
              </Link>
              <Link href="/emails" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-indigo-600 transition-colors">
                <Mail className="w-5 h-5" /> 이메일/안내문
              </Link>
            </nav>
            <div className="p-4 border-t border-slate-200">
              <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
                <Settings className="w-5 h-5" /> 설정
              </Link>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
