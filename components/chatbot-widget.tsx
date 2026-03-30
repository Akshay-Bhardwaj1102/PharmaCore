"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

const FAQ: { pattern: RegExp; response: string }[] = [
  {
    pattern: /white.?label|own.?brand|custom.?brand/i,
    response:
      "Our white label program lets you sell our medicines under your own brand. We handle manufacturing, packaging, and compliance. Contact us at info@pharmacore.com or use the form on our White Label page to get started.",
  },
  {
    pattern: /tablet|capsule|syrup|injection|product|medicine/i,
    response:
      "We manufacture a wide range of products including tablets, capsules, syrups, and injections. Visit our Products page to browse our full catalogue with compositions and packaging details.",
  },
  {
    pattern: /certif|gmp|iso|license|compliance/i,
    response:
      "PharmaCore is WHO-GMP and ISO 9001:2015 certified, and holds valid Drug Manufacturing Licenses. All our products meet international quality standards. See our Certifications page for full details.",
  },
  {
    pattern: /price|cost|quote|pricing/i,
    response:
      "Pricing depends on product type, volume, and customization. Please fill out our contact form or email info@pharmacore.com with your requirements and we will send you a detailed quote.",
  },
  {
    pattern: /delivery|ship|export|international/i,
    response:
      "We supply domestically across India and export internationally. Lead times vary by order size. Reach out to us via the Contact page for logistics details.",
  },
  {
    pattern: /hello|hi|hey|start|help/i,
    response:
      "Hello! I'm the PharmaCore assistant. I can help you with questions about our products, white label services, certifications, and more. What would you like to know?",
  },
];

const DEFAULT_RESPONSE =
  "Thank you for your question. For detailed assistance, please contact our team at info@pharmacore.com or call +91 12345 67890. You can also fill out the form on our Contact page.";

const WELCOME_MSG: Message = {
  id: 0,
  role: "bot",
  text: "Hi! I'm the PharmaCore assistant. Ask me about our products, white label services, certifications, or anything else!",
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MSG]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), role: "user", text };
    const matched = FAQ.find((f) => f.pattern.test(text));
    const botMsg: Message = {
      id: Date.now() + 1,
      role: "bot",
      text: matched ? matched.response : DEFAULT_RESPONSE,
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat assistant"
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl",
          open && "rotate-90"
        )}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl bg-card border border-border overflow-hidden flex flex-col"
          style={{ maxHeight: "480px" }}>
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">PharmaCore Assistant</p>
              <p className="text-white/70 text-xs">Typically replies instantly</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-muted/30"
            style={{ minHeight: 0 }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-2 items-end",
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                  msg.role === "bot" ? "bg-primary/10 text-primary" : "bg-foreground/10 text-foreground"
                )}>
                  {msg.role === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={cn(
                  "max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed",
                  msg.role === "bot"
                    ? "bg-white border border-border text-foreground rounded-tl-none"
                    : "bg-primary text-primary-foreground rounded-tr-none"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 bg-card border-t border-border flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 text-sm bg-muted rounded-xl px-3 py-2 outline-none border border-transparent focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
