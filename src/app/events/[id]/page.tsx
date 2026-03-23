"use client";

import { useState } from "react";
import { Upload, Users, FileText, Settings, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
// import Papa from "papaparse";

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("customers");

  // Mock data for UI presentation
  const eventName = "2024년 4분기 인사평가(KPI) 제출 안내";
  
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Settings Sub-sidebar */}
      <div className="w-64 border-r border-slate-200 bg-white flex flex-col pt-8">
        <div className="px-6 mb-6">
          <Link href="/events" className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-indigo-600 mb-4 transition-colors">
            <ArrowLeft className="w-3 h-3 mr-1" /> 목록으로
          </Link>
          <h2 className="text-xl font-bold text-slate-800 leading-tight">캠페인 관리</h2>
        </div>
        
        <nav className="flex-1 px-3 space-y-1">
          <button
            onClick={() => setActiveTab("customers")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "customers" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <Users className="w-4 h-4" /> 대상자 업로드
          </button>
          <button
            onClick={() => setActiveTab("notice")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "notice" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <FileText className="w-4 h-4" /> 안내문 및 템플릿
          </button>
          <button
            onClick={() => setActiveTab("survey")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "survey" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <FileText className="w-4 h-4" /> 설문지 설정
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "settings" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <Settings className="w-4 h-4" /> 상세 설정
          </button>
        </nav>

        <div className="p-4 border-t border-slate-200">
           <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all">
             <Play className="w-4 h-4 fill-emerald-100" /> 캠페인 시작하기
           </button>
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
        <header className="mb-8 border-b border-slate-200 pb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">{eventName}</h1>
            <p className="text-sm text-slate-500 mt-1">캠페인 ID: {params.id}</p>
          </div>
          <div className="flex bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
            <span className="px-3 py-1 text-xs font-semibold rounded text-slate-800 bg-slate-100">임시저장</span>
          </div>
        </header>

        {activeTab === "customers" && (
          <div className="max-w-4xl">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center border-dashed mb-6">
              <div className="mx-auto w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">CSV/Excel 파일 업로드</h3>
              <p className="text-slate-500 mt-2 text-sm max-w-sm mx-auto">
                이름, 전화번호, 이메일이 포함된 파일을 업로드하세요. 
                <a href="#" className="text-indigo-600 hover:underline">템플릿 다운로드</a>
              </p>
              
              <div className="mt-8 flex justify-center">
                <label className="cursor-pointer bg-slate-800 hover:bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
                  파일 선택
                  <input type="file" className="hidden" accept=".csv, .xlsx" />
                </label>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
               <div className="px-6 py-4 flex justify-between items-center border-b border-slate-100 bg-slate-50">
                 <h4 className="font-semibold text-slate-700">업로드된 대상자 명단</h4>
                 <span className="text-xs bg-indigo-100 text-indigo-700 font-bold px-2.5 py-1 rounded-full">0명</span>
               </div>
               <div className="p-12 text-center text-slate-500 text-sm flex flex-col items-center">
                 <Users className="w-8 h-8 text-slate-300 mb-3" />
                 아직 등록된 대상자가 없습니다. 파일을 업로드해주세요.
               </div>
            </div>
          </div>
        )}

        {activeTab === "notice" && (
          <div className="max-w-4xl">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-3">안내문 작성 (Email, TTS 공통 활용)</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">제목</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 outline-none placeholder:text-slate-400" placeholder="안내문 제목을 입력하세요." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">내용</label>
                  <textarea rows={10} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 outline-none placeholder:text-slate-400 resize-none" placeholder="여기에 작성된 내용은 이메일 본문으로 발송되며, AI 전화 시 음성으로 안내됩니다."></textarea>
                </div>
                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-colors">저장하기</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Similar tabs for survey and settings... */}
      </div>
    </div>
  );
}
