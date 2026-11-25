import React, { useState, useEffect, useRef } from 'react';
import {
  INITIAL_TERMINAL_LINES,
  TerminalOutputLine,
  executeTerminalCommand,
} from '../utils/terminal.js';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: any) => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [lines, setLines] = useState<TerminalOutputLine[]>(INITIAL_TERMINAL_LINES);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const screenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [lines, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputVal.trim();
    if (!query) return;

    // Record user command in list
    const userLine: TerminalOutputLine = {
      id: crypto.randomUUID(),
      type: 'input',
      content: `$ ${query}`,
    };

    if (query.toLowerCase() === 'clear') {
      setLines([]);
      setInputVal('');
      setHistory((prev) => [...prev, query]);
      setHistoryIndex(-1);
      return;
    }

    const commandResults = executeTerminalCommand(query, onNavigate);

    setLines((prev) => [...prev, userLine, ...commandResults]);
    setHistory((prev) => [...prev, query]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < history.length) {
          setHistoryIndex(nextIndex);
          setInputVal(history[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-gutter bg-surface-container-lowest/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container border-b border-outline-variant/30">
          <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-surface">
            <span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
            <span>vaibhav-jagtap@devbox:~ (Interactive Terminal)</span>
          </div>
          <button
            type="button"
            className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors"
            onClick={onClose}
            aria-label="Close Terminal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Terminal Screen Area */}
        <div
          ref={screenRef}
          className="p-space-md font-label-mono text-label-mono flex flex-col gap-space-xs min-h-[280px] max-h-[400px] overflow-y-auto bg-surface-container-lowest text-on-surface select-text"
        >
          {lines.map((line) => {
            let textColor = 'text-on-surface-variant';
            if (line.type === 'input') textColor = 'text-on-surface font-semibold';
            if (line.type === 'success') textColor = 'text-primary';
            if (line.type === 'error') textColor = 'text-error';
            if (line.type === 'info') textColor = 'text-outline';

            return (
              <div key={line.id} className={`${textColor} whitespace-pre-wrap leading-relaxed`}>
                {line.content}
              </div>
            );
          })}
        </div>

        {/* Terminal Input Line */}
        <form
          className="flex items-center px-space-md py-space-sm bg-surface-container border-t border-outline-variant/30"
          onSubmit={handleSubmit}
        >
          <span className="font-label-mono text-label-mono text-primary mr-2 select-none">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            placeholder="Type 'help', 'resume', 'skills', 'projects', 'contact'..."
            className="flex-1 bg-transparent font-label-mono text-label-mono text-on-surface focus:outline-none placeholder:text-outline/60"
          />
          <button
            type="submit"
            className="px-space-sm py-1 rounded bg-primary hover:bg-primary-fixed text-on-primary font-label-mono text-label-mono font-semibold transition-colors"
          >
            EXEC
          </button>
        </form>
      </div>
    </div>
  );
};
