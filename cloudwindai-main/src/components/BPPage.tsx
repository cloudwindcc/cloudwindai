import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

export const BPPage: React.FC = () => {
    const revenueChartRef = useRef<HTMLCanvasElement>(null);
    const fundingChartRef = useRef<HTMLCanvasElement>(null);
    const revenueChartInstance = useRef<Chart | null>(null);
    const fundingChartInstance = useRef<Chart | null>(null);

    const [marketSize, setMarketSize] = useState(0);
    const targetMarketSize = 8110;
    const duration = 2000;

    const [activeTab, setActiveTab] = useState('panel-1');

    useEffect(() => {
        // Animated Counter
        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / targetMarketSize));

        const timer = setInterval(() => {
            start += Math.ceil(targetMarketSize / (duration / stepTime));
            if (start > targetMarketSize) {
                start = targetMarketSize;
            }
            setMarketSize(start);
            if (start === targetMarketSize) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    useEffect(() => {
        // Chart.js - Revenue Chart
        if (revenueChartRef.current) {
            if (revenueChartInstance.current) {
                revenueChartInstance.current.destroy(); // Destroy existing chart if any
            }
            const revenueCtx = revenueChartRef.current.getContext('2d');
            if (revenueCtx) {
                revenueChartInstance.current = new Chart(revenueCtx, {
                    type: 'bar',
                    data: {
                        labels: ['第一年 (2025)', '第二年 (2026)', '第三年 (2027)'],
                        datasets: [{
                            label: '預計年收入 (萬 HKD)',
                            data: [50, 200, 580],
                            backgroundColor: [
                                'rgba(14, 116, 144, 0.6)', // sky-700
                                'rgba(2, 132, 199, 0.6)', // sky-600
                                'rgba(56, 189, 248, 0.6)' // sky-400
                            ],
                            borderColor: [
                                'rgba(14, 116, 144, 1)',
                                'rgba(2, 132, 199, 1)',
                                'rgba(56, 189, 248, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return ` ${context.dataset.label}: ${context.raw.toLocaleString()} 萬 HKD`;
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: '收入 (萬 HKD)'
                                }
                            }
                        }
                    }
                });
            }
        }

        // Chart.js - Funding Chart
        if (fundingChartRef.current) {
            if (fundingChartInstance.current) {
                fundingChartInstance.current.destroy(); // Destroy existing chart if any
            }
            const fundingCtx = fundingChartRef.current.getContext('2d');
            if (fundingCtx) {
                fundingChartInstance.current = new Chart(fundingCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['產品研發與人力 (40%)', '市場與銷售 (20%)', '行政與運營儲備 (30%)', '技術與基礎設施 (10%)'],
                        datasets: [{
                            label: '資金使用規劃',
                            data: [40, 20, 30, 10],
                            backgroundColor: [
                                'rgba(14, 116, 144, 0.8)',
                                'rgba(2, 132, 199, 0.8)',
                                'rgba(56, 189, 248, 0.8)',
                                'rgba(125, 211, 252, 0.8)'
                            ],
                            borderColor: '#ffffff',
                            borderWidth: 2,
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed !== null) {
                                            label += `${context.parsed}% (${(context.parsed * 10000).toLocaleString()} HKD)`;
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        return () => {
            if (revenueChartInstance.current) {
                revenueChartInstance.current.destroy();
            }
            if (fundingChartInstance.current) {
                fundingChartInstance.current.destroy();
            }
        };
    }, []);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <div className="antialiased pt-16" style={{ fontFamily: "'Noto Sans HK', sans-serif", backgroundColor: '#f8f9fa', color: '#343a40' }}>
            <main>
                {/* Hero Section - Removed as it's part of main app */}

                {/* Opportunity Section */}
                <section id="opportunity" className="py-20">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center mb-2 text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #0c4a6e, #0c4a6e)' }}>市場機遇與痛點</h3>
                        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">我們正處於“AI應用元年”的歷史性拐點。一個巨大的市場正在形成，但傳統企業卻面臨著一道難以逾越的鴻溝，這正是雲風智能的價值所在。</p>

                        <div className="text-center mb-16">
                            <p className="text-lg text-gray-600 mb-2">預計2028年中國AI產業規模將達到</p>
                            <p id="market-size-counter" className="text-6xl md:text-8xl font-bold text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #0c4a6e, #0c4a6e)' }}>{marketSize.toLocaleString()}</p>
                            <p className="text-2xl font-bold text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #0c4a6e, #0c4a6e)' }}>億港元</p>
                            <p className="text-sm text-gray-400 mt-2">5年複合增長率高達 30.6%</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-red-500">
                                <h4 className="font-bold text-xl mb-2">數據主權與隱私</h4>
                                <p className="text-gray-600">企業核心數據是生命線，通用AI平台存在數據控制權喪失和隱私洩露風險。</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yellow-500">
                                <h4 className="font-bold text-xl mb-2">缺乏行業知識庫</h4>
                                <p className="text-gray-600">通用模型不懂行業“黑話”，無法提供符合行業規範的精準決策支持。</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-500">
                                <h4 className="font-bold text-xl mb-2">品牌形象稀釋</h4>
                                <p className="text-gray-600">使用千篇一律的AI工具進行客戶互動，難以塑造和推廣企業獨特的品牌形象。</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-green-500">
                                <h4 className="font-bold text-xl mb-2">集成與實施困難</h4>
                                <p className="text-gray-600">傳統企業普遍缺乏將AI技術有效集成到現有業務流程中的專業人才與經驗。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section id="solution" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center mb-2 text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #0c4a6e, #0c4a6e)' }}>我們的解決方案</h3>
                        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">雲風智能提供一套以“AI降本增效”為核心的整合方案。我們不只提供工具，更是企業信賴的“AI後台專家”，通過標準化流程快速交付可量化的商業價值。</p>

                        <div className="flex flex-col md:flex-row gap-12">
                            {/* Product Tabs */}
                            <div className="w-full md:w-1/3">
                                <div id="product-tabs" className="flex flex-col space-y-2">
                                    <button
                                        data-target="panel-1"
                                        className={`tab-button text-left p-4 rounded-lg font-semibold ${activeTab === 'panel-1' ? 'bg-sky-100 text-sky-800' : 'hover:bg-sky-50'}`}
                                        onClick={() => handleTabClick('panel-1')}
                                    >
                                        AI智能營銷
                                        <span className="block text-sm font-normal text-gray-600">降低獲客成本，提升品牌影響力</span>
                                    </button>
                                    <button
                                        data-target="panel-2"
                                        className={`tab-button text-left p-4 rounded-lg font-semibold ${activeTab === 'panel-2' ? 'bg-sky-100 text-sky-800' : 'hover:bg-sky-50'}`}
                                        onClick={() => handleTabClick('panel-2')}
                                    >
                                        AI運營優化
                                        <span className="block text-sm font-normal text-gray-600">提升內部效率，自動化繁瑣工作</span>
                                    </button>
                                    <button
                                        data-target="panel-3"
                                        className={`tab-button text-left p-4 rounded-lg font-semibold ${activeTab === 'panel-3' ? 'bg-sky-100 text-sky-800' : 'hover:bg-sky-50'}`}
                                        onClick={() => handleTabClick('panel-3')}
                                    >
                                        AI戰略決策
                                        <span className="block text-sm font-normal text-gray-600">挖掘私有數據價值，提供商業洞察</span>
                                    </button>
                                    <button
                                        data-target="panel-4"
                                        className={`tab-button text-left p-4 rounded-lg font-semibold ${activeTab === 'panel-4' ? 'bg-sky-100 text-sky-800' : 'hover:bg-sky-50'}`}
                                        onClick={() => handleTabClick('panel-4')}
                                    >
                                        AI智能體
                                        <span className="block text-sm font-normal text-gray-600">實現崗位自動化，顯著降低人力成本</span>
                                    </button>
                                </div>
                            </div>
                            {/* Product Content */}
                            <div className="w-full md:w-2/3">
                                <div id="panel-1" className={`tab-panel ${activeTab === 'panel-1' ? '' : 'hidden'}`}>
                                    <h4 className="text-2xl font-bold mb-4 text-sky-800">AI智能營銷套件</h4>
                                    <p className="text-gray-600 mb-4">針對企業營銷痛點，我們提供一站式解決方案，將傳統耗時數月的開發工作壓縮至數天，並持續賦能內容創作。</p>
                                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                                        <li><strong>AI網站/APP生成：</strong>快速生成符合現代審美、移動端優先的網站或輕量級APP。</li>
                                        <li><strong>AI內容引擎：</strong>為公眾號、小紅書等渠道提供持續的文案與圖像創作支持。</li>
                                        <li><strong>提示詞倉庫：</strong>建立客戶專屬的Prompt庫，確保AI生成內容符合品牌調性。</li>
                                    </ul>
                                </div>
                                <div id="panel-2" className={`tab-panel ${activeTab === 'panel-2' ? '' : 'hidden'}`}>
                                    <h4 className="text-2xl font-bold mb-4 text-sky-800">AI運營優化引擎</h4>
                                    <p className="text-gray-600 mb-4">直接針對企業內部運營的低效率環節，旨在通過智能化手段顯著降低人力和時間成本。</p>
                                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                                        <li><strong>AI輔助編程：</strong>為內部IT團隊提供開發增效服務，加快代碼編寫、審查和調試速度。</li>
                                        <li><strong>AI定制化圖像生成：</strong>為產品設計、工業設計等專業場景訓練模型，大幅縮短設計週期。</li>
                                    </ul>
                                </div>
                                <div id="panel-3" className={`tab-panel ${activeTab === 'panel-3' ? '' : 'hidden'}`}>
                                    <h4 className="text-2xl font-bold mb-4 text-sky-800">AI戰略決策引擎</h4>
                                    <p className="text-gray-600 mb-4">我們的核心高價值服務，將客戶獨一無二的內部數據轉化為安全的“企業知識庫”，構建長期競爭壁壘。</p>
                                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                                        <li><strong>私有化知識庫：</strong>整合歷史銷售、CRM、生產報告等數據，保障數據安全。</li>
                                        <li><strong>定制化決策輔助：</strong>提供真正基於自身運營實際的、具有高度戰略價值的洞察與建議。</li>
                                    </ul>
                                </div>
                                <div id="panel-4" className={`tab-panel ${activeTab === 'panel-4' ? '' : 'hidden'}`}>
                                    <h4 className="text-2xl font-bold mb-4 text-sky-800">AI智能體 (Agents)</h4>
                                    <p className="text-gray-600 mb-4">AI正從被動工具進化為主動的任務執行者。我們提供一系列智能體，自動化高頻、重複性工作流程。</p>
                                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                                        <li><strong>AI智能客服：</strong>7x24小時智能應答，大幅降低人工客服成本。</li>
                                        <li><strong>AI法務助手：</strong>輔助合同草擬、風險篩查、合規性自查。</li>
                                        <li><strong>AI財務分析師：</strong>自動分析財務報表，生成報告，預測現金流。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20">
                            <h4 className="text-2xl font-bold text-center mb-10 text-gray-700">核心競爭力: 30天標準化交付流程 (SOP)</h4>
                            <div className="relative">
                                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-sky-200 -translate-y-1/2"></div>
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center relative">
                                    <div className="sop-step">
                                        <div className="bg-sky-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1-2</div>
                                        <h5 className="font-semibold">需求探索</h5>
                                        <p className="text-sm text-gray-500">48小時內出具6頁方案</p>
                                    </div>
                                    <div className="sop-step">
                                        <div className="bg-sky-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                                        <h5 className="font-semibold">項目啟動</h5>
                                        <p className="text-sm text-gray-500">客戶確認方案</p>
                                    </div>
                                    <div className="sop-step">
                                        <div className="bg-sky-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4-8</div>
                                        <h5 className="font-semibold">Demo開發</h5>
                                        <p className="text-sm text-gray-500">5天快速原型</p>
                                    </div>
                                    <div className="sop-step">
                                        <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">9-25</div>
                                        <h5 className="font-semibold">全面實施</h5>
                                        <p className="text-sm text-gray-500">敏捷迭代開發</p>
                                    </div>
                                    <div className="sop-step">
                                        <div className="bg-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">26-28</div>
                                        <h5 className="font-semibold">項目驗收</h5>
                                        <p className="text-sm text-gray-500">客戶確認成果</p>
                                    </div>
                                    <div className="sop-step">
                                        <div className="bg-sky-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">29+</div>
                                        <h5 className="font-semibold">轉入維護</h5>
                                        <p className="text-sm text-gray-500">持續訂閱服務</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center mt-8 text-gray-600">“固定週期、固定價格、原型先行”的模式，極大降低了客戶的決策風險和心理負擔。</p>
                        </div>
                    </div>
                </section>

                {/* Strategy Section */}
                <section id="strategy" className="py-20">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center mb-2 text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #0c4a6e, #0c4a6e)' }}>商業模式與戰略</h3>
                        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">我們採用靈活的混合定價模式以最大化客戶生命週期價值，並通過清晰的三步走戰略，確保公司穩健、有序地實現從0到N的跨越。</p>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h4 className="text-2xl font-bold mb-6 text-center text-gray-700">三步走增長戰略 (2025-2028+)</h4>
                                <div className="space-y-8 relative">
                                    {/* Timeline Line */}
                                    <div className="absolute left-4 top-2 h-full border-l-2 border-sky-200"></div>

                                    <div className="pl-12 relative">
                                        <div className="absolute left-0 top-1 w-8 h-8 bg-sky-800 rounded-full border-4 border-white"></div>
                                        <p className="font-bold text-sky-800">第一階段 (2025): 從0到1 - 驗證</p>
                                        <p className="text-gray-600">聚焦AI營銷，獲取5-10家種子客戶，完成**100萬HKD**種子輪融資，驗證商業模式。</p>
                                    </div>
                                    <div className="pl-12 relative">
                                        <div className="absolute left-0 top-1 w-8 h-8 bg-sky-600 rounded-full border-4 border-white"></div>
                                        <p className="font-bold text-sky-600">第二階段 (2026-27): 從1到10 - 複製</p>
                                        <p className="text-gray-600">擴充產品線，深耕2-3個垂直行業，完成**200萬HKD** Pre-A輪融資，實現模式複製。</p>
                                    </div>
                                    <div className="pl-12 relative">
                                        <div className="absolute left-0 top-1 w-8 h-8 bg-sky-400 rounded-full border-4 border-white"></div>
                                        <p className="font-bold text-sky-400">第三階段 (2028+): 從10到N - 規模化</p>
                                        <p className="text-gray-600">全面市場擴張，完成**600萬HKD** A輪融資，達成穩定盈利，目標年收入600萬HKD。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <h4 className="text-2xl font-bold mb-6 text-center text-gray-700">混合定價，持續收益</h4>
                                <div className="space-y-4">
                                    <div className="border rounded-lg p-4">
                                        <h5 className="font-bold text-lg">一次性部署包</h5>
                                        <p className="text-sky-800 font-bold text-2xl">10,000 HKD 起</p>
                                        <p className="text-gray-500 text-sm">降低合作門檻，針對單一痛點快速見效。</p>
                                    </div>
                                    <div className="border rounded-lg p-4">
                                        <h5 className="font-bold text-lg">訂閱服務</h5>
                                        <p className="text-sky-800 font-bold text-2xl">1,500 - 5,000 HKD/月</p>
                                        <p className="text-gray-500 text-sm">建立經常性收入，提供持續的技術支持與更新。</p>
                                    </div>
                                    <div className="border rounded-lg p-4">
                                        <h5 className="font-bold text-lg">專家諮詢服務</h5>
                                        <p className="text-sky-800 font-bold text-2xl">500 HKD/小時</p>
                                        <p className="text-gray-500 text-sm">提供高附加值的深度定制與企業戰略規劃。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Financials Section */}
                <section id="financials" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center mb-2 text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #0c4a6e, #0c4a6e)' }}>財務預測與融資計劃</h3>
                        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">我們制定了清晰的財務預測和分階段融資路徑。每一筆資金都將高效用於推動公司達成關鍵里程碑，為投資者創造可觀回報。</p>

                        <div className="grid lg:grid-cols-5 gap-8">
                            <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <h4 className="text-xl font-bold text-center mb-6 text-gray-700">三年營業收入預測 (HKD)</h4>
                                <div className="relative w-full max-w-700px mx-auto h-350px md:h-400px max-h-50vh">
                                    <canvas ref={revenueChartRef}></canvas>
                                </div>
                            </div>
                            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <h4 className="text-xl font-bold text-center mb-6 text-gray-700">種子輪資金使用規劃 (100萬)</h4>
                                <div className="relative w-full max-w-700px mx-auto h-350px md:h-400px max-h-50vh">
                                    <canvas ref={fundingChartRef}></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-2xl font-bold text-center mb-8 text-gray-700">分階段融資計劃</h4>
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-sky-800">
                                    <h5 className="text-xl font-bold text-sky-800">種子輪 (Y1)</h5>
                                    <p className="text-3xl font-bold my-2">100萬</p>
                                    <p className="text-gray-600">出讓 10% 股權</p>
                                    <p className="text-sm text-gray-400">投後估值: 1000萬</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-sky-600">
                                    <h5 className="text-xl font-bold text-sky-600">Pre-A輪 (Y2)</h5>
                                    <p className="text-3xl font-bold my-2">200萬</p>
                                    <p className="text-gray-600">出讓 10% 股權</p>
                                    <p className="text-sm text-gray-400">投後估值: 2000萬</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-sky-400">
                                    <h5 className="text-xl font-bold text-sky-400">A輪 (Y3)</h5>
                                    <p className="text-3xl font-bold my-2">600萬</p>
                                    <p className="text-gray-600">出讓 20% 股權</p>
                                    <p className="text-sm text-gray-400">投後估值: 3000萬</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section id="team" className="py-20">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center mb-2 text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #0c4a6e, #0c4a6e)' }}>鑽石組合: 創始團隊</h3>
                        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">雲風智能的核心競爭力源於我們優勢互補的創始團隊，確保了公司在戰略、技術和市場三個維度上的均衡發展。</p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                                <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="CEO Kevin" className="w-32 h-32 rounded-full mx-auto mb-4 ring-4 ring-white object-cover" />
                                <h4 className="text-xl font-bold">Kevin</h4>
                                <p className="text-sky-800 font-semibold mb-2">首席執行官 (CEO)</p>
                                <p className="text-gray-600">負責公司總體戰略、市場方向、關鍵客戶關係及融資活動。</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                                <img src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="CTO Yifan" className="w-32 h-32 rounded-full mx-auto mb-4 ring-4 ring-white object-cover" />
                                <h4 className="text-xl font-bold">Yifan</h4>
                                <p className="text-sky-800 font-semibold mb-2">首席技術官 (CTO)</p>
                                <p className="text-gray-600">負責產品架構、技術路線規劃、研發團隊管理及前沿技術預研。</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                                <img src="https://images.pexels.com/photos/3760068/pexels-photo-3760068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="CMO Mary" className="w-32 h-32 rounded-full mx-auto mb-4 ring-4 ring-white object-cover" />
                                <h4 className="text-xl font-bold">Mary</h4>
                                <p className="text-sky-800 font-semibold mb-2">首席營銷官 (CMO)</p>
                                <p className="text-gray-600">負責市場營銷與銷售策略，包括品牌建設、客戶獲取和渠道管理。</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="invest" className="bg-gray-800 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-4">成為雲風智能的合作夥伴</h3>
                    <p className="max-w-2xl mx-auto mb-8 text-gray-300">我們正在尋找志同道合的基石投資者，與我們一同把握AI時代的巨大機遇，共創價值。</p>
                    <div className="bg-gray-700 p-8 rounded-lg inline-block">
                        <p className="text-lg">聯繫人: CEO - Kevin</p>
                        <p className="text-lg">郵箱: contact@cloudwindai.com (預期)</p>
                        <p className="text-sm mt-4 text-gray-400">&copy; 2025 雲風智能有限公司 (CloudWind AI Limited). All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
