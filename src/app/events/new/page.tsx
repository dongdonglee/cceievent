import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
// import { redirect } from "next/navigation";
// import prisma from "@/lib/prisma";

export default function NewEventPage() {
  
  /* 
  // Example Server Action
  async function createEvent(formData: FormData) {
    "use server"
    const name = formData.get("name") as string;
    const type = formData.get("type") as string;
    const description = formData.get("description") as string;
    
    await prisma.event.create({
      data: { name, type, description }
    });
    redirect("/events");
  }
  */

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          돌아가기
        </Link>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">새 이벤트 개설</h2>
        <p className="text-slate-500 mt-1">캠페인의 기본 정보와 유형을 설정하세요.</p>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <form className="p-8 space-y-8" action={/* createEvent */ undefined}>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2">기본 정보</h3>
            
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  이벤트 명칭 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="예: 2024년 4분기 인사평가(KPI) 제출 안내"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                  이벤트 유형 <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all appearance-none bg-white text-slate-700"
                >
                  <option value="">유형을 선택하세요</option>
                  <option value="성과관리">성과관리 고지/안내</option>
                  <option value="트렌드설명회">세미나/설명회 초청</option>
                  <option value="설문조사">내부 설문조사 취합</option>
                  <option value="기타">기타 캠페인</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                  상세 설명 (선택)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="이벤트의 목적이나 내부 참고용 메모를 남겨주세요."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300 resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
            <Link href="/" className="px-6 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">
              취소
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              이벤트 저장 및 다음 단계 이동
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
