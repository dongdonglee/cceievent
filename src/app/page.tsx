import { ArrowRight, Mail, Phone, Users, CheckCircle, Clock, Calendar } from "lucide-react";
import Link from "next/link";
// In real app, import Prisma and fetch data here.
// import prisma from "@/lib/prisma";

export default function Dashboard() {
  return (
    <div className="p-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">대시보드</h2>
          <p className="text-slate-500 mt-1">오늘의 캠페인 현황과 AI 에이전트 작업 리포트입니다.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/events/new" className="px-5 py-2.5 bg-indigo-600 text-white font-medium text-sm rounded-lg hover:bg-indigo-700 transition-all shadow-sm flex items-center gap-2">
            새 이벤트 개설
          </Link>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="진행 중인 이벤트" value="3" icon={<Calendar />} color="indigo" />
        <StatCard title="총 연락 진행률" value="78%" icon={<Users />} color="blue" />
        <StatCard title="이메일 발송 완료" value="1,240" icon={<Mail />} color="emerald" />
        <StatCard title="AI 통화 완료" value="84" icon={<Phone />} color="purple" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Events Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-semibold text-slate-800 text-lg">최근 이벤트 현황</h3>
            <Link href="/events" className="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1">
              모두 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm">
                <tr>
                  <th className="px-6 py-4 font-medium">이벤트명</th>
                  <th className="px-6 py-4 font-medium">유형</th>
                  <th className="px-6 py-4 font-medium">대상자 수</th>
                  <th className="px-6 py-4 font-medium">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {[
                  { id: 1, name: "2024년 3분기 성과관리 체계 안내", type: "이메일", count: "450명", status: "진행중", color: "blue" },
                  { id: 2, name: "HR 최신 트렌드 세미나 초청", type: "전화+이메일", count: "120명", status: "완료", color: "emerald" },
                  { id: 3, name: "부서장 핵심성과지표(KPI) 제출 안내", type: "설문조사", count: "32명", status: "마감임박", color: "amber" },
                ].map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">{row.name}</td>
                    <td className="px-6 py-4 text-slate-600">{row.type}</td>
                    <td className="px-6 py-4 text-slate-600">{row.count}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${row.color}-100 text-${row.color}-700`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Agent Activity Log */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
           <div className="mb-6 flex justify-between items-center">
             <h3 className="font-semibold text-slate-800 text-lg">AI 에이전트 실시간 로그</h3>
             <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
             </span>
           </div>
           
           <div className="space-y-6">
             {[
               { icon: <Phone className="w-4 h-4 text-white" />, bg: "bg-purple-500", text: "김철수 대상자와 통화 완료", time: "방금 전" },
               { icon: <CheckCircle className="w-4 h-4 text-white" />, bg: "bg-emerald-500", text: "이영희 님이 설문지를 제출했습니다", time: "5분 전" },
               { icon: <Mail className="w-4 h-4 text-white" />, bg: "bg-blue-500", text: "성과관리 안내문 120건 발송됨", time: "1시간 전" },
               { icon: <Clock className="w-4 h-4 text-white" />, bg: "bg-amber-500", text: "박지성 님 부재중 - 메시지 녹음됨", time: "2시간 전" },
               { icon: <Users className="w-4 h-4 text-white" />, bg: "bg-indigo-500", text: "신규 대상자 45명 등록됨", time: "어제" },
             ].map((log, i) => (
               <div key={i} className="flex gap-4">
                 <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full ${log.bg} flex items-center justify-center shadow-sm`}>
                   {log.icon}
                 </div>
                 <div>
                   <p className="text-sm font-medium text-slate-800">{log.text}</p>
                   <p className="text-xs text-slate-500 mt-1">{log.time}</p>
                 </div>
               </div>
             ))}
           </div>
           
           <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 font-medium hover:bg-slate-50 transition-colors">
              모든 로그 보기
           </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: any) {
  const colorMap: any = {
    indigo: "bg-indigo-100 text-indigo-600",
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    purple: "bg-purple-100 text-purple-600",
  };
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center text-sm">
        <span className="text-emerald-500 font-medium flex items-center">
          <ArrowRight className="w-3 h-3 mr-1 -rotate-45" />
          12%
        </span>
        <span className="text-slate-400 ml-2">지난 주 대비</span>
      </div>
    </div>
  );
}
