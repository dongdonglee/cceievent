"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function SurveyResponsePage({ params }: { params: { id: string } }) {
  const [submitted, setSubmitted] = useState(false);

  // Mock Survey Title
  const title = "부서장 핵심성과지표(KPI) 제출 안내 설문";

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-slate-100 p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">응답이 완료되었습니다</h2>
          <p className="text-slate-600">
            소중한 의견을 내주셔서 감사합니다. <br/>성공적으로 제출되었습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="h-3 bg-indigo-600 w-full"></div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
            <p className="text-slate-600 mb-6">
              본 설문은 2024년 4분기 인사평가 진행을 위한 기초 자료로 활용됩니다.<br/>
              기한 내에 반드시 제출해주시기 바랍니다. (마감일: 2024.11.30)
            </p>
            <div className="text-sm font-medium text-red-500">* 필수항목</div>
          </div>
        </div>

        {/* Question 1 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-slate-800">
              1. 소속 본부 및 팀명을 정확히 기재해주세요. <span className="text-red-500">*</span>
            </h3>
          </div>
          <input type="text" className="w-full border-b border-slate-300 focus:border-indigo-600 py-2 outline-none transition-colors" placeholder="내 답변" />
        </div>

        {/* Question 2 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-slate-800">
              2. 2024년도 주요 성과 요약 (300자 이내) <span className="text-red-500">*</span>
            </h3>
          </div>
          <textarea rows={4} className="w-full border border-slate-300 focus:border-indigo-600 rounded-lg p-3 outline-none transition-colors resize-none" placeholder="여기에 작성해주세요..."></textarea>
        </div>

        {/* Question 3 (Multiple Choice) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-slate-800">
              3. 본인의 업무 만족도를 평가해주세요. <span className="text-red-500">*</span>
            </h3>
          </div>
          <div className="space-y-3 mt-4">
            {["매우 만족", "만족", "보통", "불만족", "매우 불만족"].map((opt, i) => (
              <label key={i} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                <input type="radio" name="satisfaction" className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-600" />
                <span className="text-slate-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-between items-center pt-4">
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">양식 지우기</button>
          <button 
            onClick={() => setSubmitted(true)}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}
