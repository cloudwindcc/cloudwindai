import React from 'react';
import { Network } from 'lucide-react';

interface OrganizationChartProps {
  english?: boolean;
}

export const OrganizationChart: React.FC<OrganizationChartProps> = ({ english = false }) => {
  const departments = english
    ? ['Asia Pacific Division', 'China Division', 'Marketing & Services', 'Product & Technology']
    : ['亚太事业部', '中国区事业部', '营销及服务部', '产品及技术部'];

  return (
    <div className="bg-gradient-to-r from-sky-900/30 to-purple-900/30 p-5 md:p-8 rounded-xl">
      <h3 className="text-xl md:text-2xl text-center mb-8 text-sky-300">
        {english ? 'Organization Structure' : '组织架构'}
      </h3>
      <div className="max-w-sm mx-auto rounded-lg border border-sky-400/40 bg-sky-900/40 px-5 py-6 text-center shadow-lg shadow-sky-950/20">
        <Network aria-hidden="true" className="w-7 h-7 text-sky-300 mx-auto mb-3" strokeWidth={1.7} />
        <h4 className="text-lg text-sky-100">{english ? 'CEO Office' : 'CEO办公室'}</h4>
      </div>
      <div className="h-7 w-px bg-sky-400/40 mx-auto" aria-hidden="true" />
      <div className="hidden md:block h-px bg-sky-400/40 mx-[12%]" aria-hidden="true" />
      <div className="grid gap-3 md:grid-cols-4 md:gap-5">
        {departments.map((department) => (
          <div key={department} className="min-w-0">
            <div className="hidden md:block h-7 w-px bg-sky-400/40 mx-auto" aria-hidden="true" />
            <div className="min-h-28 rounded-lg border border-slate-600/60 bg-gray-800/60 px-3 py-5 text-center flex flex-col items-center justify-center">
              <Network aria-hidden="true" className="w-6 h-6 text-sky-400 mb-3" strokeWidth={1.7} />
              <h4 className="text-base text-sky-100 leading-snug">{department}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
