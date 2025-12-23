import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, PawPrint, Sparkles } from 'lucide-react';
import { createChatSession, sendMessage } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from "@google/genai";

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Meow there! 🐾 I'm Dr. Pawtrot. How can I help you pick the purr-fect meal for your cat today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await sendMessage(chatSessionRef.current, userMsg);

    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-105 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-pawtrot-brown'}`}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <div className="relative">
             <MessageCircle className="w-8 h-8 text-white" />
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border-2 border-pawtrot-brown flex flex-col max-h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-pawtrot-brown p-4 flex items-center gap-3">
             <div className="bg-pawtrot-yellow p-2 rounded-full border border-white">
                <PawPrint className="w-5 h-5 text-pawtrot-brown" />
             </div>
             <div>
               <h3 className="text-white font-display font-bold text-lg">Dr. Pawtrot</h3>
               <p className="text-pawtrot-yellow text-xs flex items-center gap-1">
                 <Sparkles className="w-3 h-3" /> AI Nutritionist
               </p>
             </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-orange-50/50">
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                   msg.role === 'user' 
                     ? 'bg-pawtrot-brown text-white rounded-br-none' 
                     : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
                 }`}>
                   {msg.text}
                 </div>
               </div>
             ))}
             {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                 </div>
               </div>
             )}
             <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
             <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={handleKeyPress}
                 placeholder="Ask about ingredients..."
                 className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-500"
               />
               <button 
                 onClick={handleSend}
                 disabled={!input.trim() || isLoading}
                 className="text-pawtrot-brown hover:text-red-500 disabled:opacity-50"
               >
                 <Send className="w-5 h-5" />
               </button>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
