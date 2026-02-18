"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MousePointer2, ChevronRight, Copy, Check, Layers, Code2, Sliders } from "lucide-react";

export function TerminalAnimation() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 12);
        }, 1200);
        return () => clearInterval(timer);
    }, []);

    const cursorVariants = {
        initial: { left: "40%", top: "70%" },
        toInspect: { left: "85%", top: "35%" },
        toLeft: { left: "22%", top: "40%" },
        toRight: { left: "48%", top: "40%" },
        toInner: { left: "48%", top: "30%" },
    };

    const getCursorPos = () => {
        if (step <= 1) return "initial";
        if (step === 2) return "toInspect";
        if (step === 3) return "toLeft";
        if (step === 4) return "toRight";
        return "toInner";
    };

    return (
        <div className="relative w-full h-full bg-[#050705] overflow-hidden rounded-sm font-mono text-[10px]">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5 bg-[#0A0D0A]">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    </div>
                    <span className="text-[7px] font-bold uppercase text-white/50 tracking-widest">system.preview</span>
                </div>
            </div>

            <div className="relative h-[calc(100%-25px)] flex">
                {/* Main Website Canvas */}
                <div className="flex-1 p-3 relative bg-[#050705]">
                    <div className="w-full h-full border border-white/10 bg-[#0A0D0A]/40 relative overflow-hidden p-4 space-y-4 rounded-sm">
                        {/* Nav Mockup */}
                        <div className="h-4 w-full bg-white/10 rounded-sm flex items-center px-2">
                            <div className="h-0.5 w-10 bg-white/20 rounded-full" />
                        </div>

                        {/* Grid Items */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Component Left */}
                            <div className="h-28 border border-white/20 bg-white/3 p-2 space-y-2 relative">
                                <motion.div
                                    animate={{ opacity: step === 3 ? 0.6 : 0 }}
                                    transition={{ duration: 0.1 }}
                                    className="absolute inset-0 border border-primary bg-primary/5 pointer-events-none"
                                />
                                <div className="h-1.5 w-10 bg-white/20" />
                                <div className="h-16 w-full bg-white/10 border border-white/10" />
                            </div>

                            {/* Component Right */}
                            <div className="h-28 border border-white/20 bg-white/3 p-2 space-y-2 relative">
                                <motion.div
                                    animate={{ opacity: step === 4 ? 0.6 : step >= 5 ? 1 : 0 }}
                                    transition={{ duration: 0.1 }}
                                    className={`absolute inset-0 border-2 ${step >= 6 ? 'border-primary' : 'border-primary/40'} bg-primary/5 pointer-events-none`}
                                />
                                <div className="h-1.5 w-10 bg-white/20" />
                                <div className="h-16 w-full border border-white/10 flex items-center justify-center p-4">
                                    <motion.div
                                        animate={{
                                            borderColor: step >= 5 ? (step >= 8 ? "#EF4444" : "#2ECC71") : "rgba(255,255,255,0.1)",
                                            width: step >= 7 ? "100%" : "60%",
                                            backgroundColor: step >= 8 ? "rgba(239, 68, 68, 0.1)" : "rgba(46, 204, 113, 0.1)"
                                        }}
                                        className="h-7 border-2 flex items-center justify-center"
                                    >
                                        <div className={`h-1 w-6 ${step >= 8 ? 'bg-red-500/40' : 'bg-primary/40'}`} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Selection Tag */}
                        <AnimatePresence>
                            {step >= 5 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-6 left-6 flex items-center gap-2 bg-[#0A0D0A] border border-white/20 px-2 py-1 rounded-sm shadow-xl"
                                >
                                    <div className={`h-2 w-2 rounded-full animate-pulse ${step >= 8 ? 'bg-red-500' : 'bg-primary'}`} />
                                    <span className="text-[8px] text-white font-bold tracking-tight uppercase">
                                        {step >= 8 ? "DIV.CARD_ERROR" : "DIV.CARD_INNER"}
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Extension Sidebar */}
                <div className="w-48 border-l border-white/20 bg-[#0A0D0A] h-full flex flex-col p-4 relative z-20 shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
                        <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
                            <span className="text-[10px] font-black text-[#050705]">P</span>
                        </div>
                        <span className="font-bold text-[9px] text-white uppercase tracking-widest">PickyEditor</span>
                    </div>

                    <div className="flex-1 space-y-5">
                        <AnimatePresence mode="wait">
                            {step < 5 ? (
                                <motion.div key="inspect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                                    <motion.div
                                        animate={{
                                            borderColor: step === 2 ? "#2ECC71" : "rgba(255,255,255,0.3)",
                                            backgroundColor: step === 2 ? "rgba(46, 204, 113, 0.2)" : "transparent"
                                        }}
                                        className="h-16 border-2 border-dashed rounded-sm flex flex-col items-center justify-center gap-2 transition-colors"
                                    >
                                        <MousePointer2 size={14} className={step >= 2 ? "text-primary" : "text-white/40"} />
                                        <span className={`text-[7px] font-bold uppercase tracking-tight ${step >= 2 ? "text-primary" : "text-white/40"}`}>Inspect Mode</span>
                                    </motion.div>
                                    <div className="space-y-2 opacity-50">
                                        <div className="h-1.5 w-14 bg-white/20" />
                                        <div className="h-1 w-full bg-white/10" />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="tree" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                                    {/* Tree View */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-white font-bold text-[7px] uppercase tracking-wider">
                                            <Layers size={11} className="text-primary" /> DOM Tree
                                        </div>
                                        <div className="space-y-2 border-l border-white/20 ml-1.5 pl-4 font-semibold">
                                            <div className="text-[8px] text-white/70">Body</div>
                                            <div className="text-[8px] text-white/70">Wrapper</div>
                                            <motion.div animate={{ x: [0, 2, 0] }} className="text-[8px] text-primary font-black flex items-center gap-1">
                                                <ChevronRight size={10} strokeWidth={3} /> {step >= 8 ? "Card_Error" : "Card_Inner"}
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Property Adjuster */}
                                    <div className="space-y-3 p-3 bg-white/5 border border-white/10 rounded-sm shadow-inner">
                                        <div className="flex items-center justify-between text-[7px] font-bold text-white/50 uppercase tracking-widest">
                                            <span>Design Tokens</span>
                                            <Sliders size={11} />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-[7px]">
                                                    <span className="text-white/80">Width</span>
                                                    <span className="text-primary font-bold">{step >= 7 ? "100%" : "w-10"}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div animate={{ width: step >= 7 ? "100%" : "60%" }} className="h-full bg-primary shadow-[0_0_8px_rgba(46,204,113,0.5)]" />
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center text-[7px]">
                                                <span className="text-white/80">Border_Color</span>
                                                <motion.div
                                                    animate={{
                                                        backgroundColor: step >= 8 ? "#EF4444" : "#2ECC71",
                                                        boxShadow: step >= 8 ? "0 0 10px rgba(239, 68, 68, 0.4)" : "0 0 10px rgba(46, 204, 113, 0.4)"
                                                    }}
                                                    className="w-3.5 h-3.5 rounded-full border border-white/20"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tailwind Output */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white font-bold text-[7px] uppercase tracking-wider">
                                            <Code2 size={11} className="text-primary" /> Tailwind_Source
                                        </div>
                                        <div className="p-3 bg-black/80 border border-white/10 text-white leading-relaxed break-all font-mono shadow-xl relative overflow-hidden">
                                            <code className="text-[7px]">
                                                class="<span className="text-primary font-bold">
                                                    {step >= 7 ? "w-full" : "w-10"} h-7 border-2
                                                    {step >= 8 ? " border-red-500 bg-red-500/10" : " border-green-500 bg-green-500/10"}
                                                </span>"
                                            </code>
                                        </div>
                                        <div className="flex items-center justify-end">
                                            <motion.div
                                                animate={{ color: step >= 10 ? "#2ECC71" : "rgba(255,255,255,0.5)" }}
                                                className="flex items-center gap-1 text-[7px] font-black tracking-widest italic"
                                            >
                                                {step >= 10 ? <Check size={10} strokeWidth={3} /> : <Copy size={10} />}
                                                {step >= 10 ? "EXECUTED" : "EXPORT"}
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-white/30 text-[6px] font-bold tracking-tighter">
                        <span>READY_FOR_DEPLOY</span>
                        <span>PROD_v1</span>
                    </div>
                </div>

                {/* The Simple "+" Cursor - Calibrated Paths */}
                <motion.div
                    className="absolute z-50 pointer-events-none flex items-center justify-center -translate-x-px -translate-y-px"
                    animate={getCursorPos()}
                    variants={cursorVariants}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    {step >= 3 ? (
                        <div className="text-primary text-2xl font-light leading-none drop-shadow-[0_0_10px_rgba(46,204,113,0.5)]">+</div>
                    ) : (
                        <div className="relative">
                            <MousePointer2 size={18} className="fill-white stroke-black drop-shadow-2xl" />
                            <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute inset-0 bg-white/30 rounded-full blur-md" />
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Global Success Notification */}
            <AnimatePresence>
                {step === 10 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-10 left-1/2 -translate-x-1/2 bg-primary text-[#050705] px-4 py-1.5 rounded-sm font-black text-[8px] z-50 shadow-[0_0_20px_rgba(46,204,113,0.3)] tracking-widest"
                    >
                        CLIPBOARD::CAPTURED
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
