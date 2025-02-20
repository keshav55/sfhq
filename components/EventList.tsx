import { ReactMarkdown } from 'react-markdown';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EventListProps {
  content: string;
}

interface MarkdownComponentProps {
  children: ReactNode;
  href?: string;
}

export default function EventList({ content }: EventListProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl"
      >
        <ReactMarkdown
          components={{
            h2: ({ children }: MarkdownComponentProps) => (
              <div className="sticky top-0 bg-black/90 backdrop-blur-sm z-10 -mx-6 px-6 py-3">
                <h2 className="text-xl font-medium text-zinc-200">
                  {children}
                </h2>
              </div>
            ),
            ul: ({ children }: MarkdownComponentProps) => (
              <ul className="space-y-4 mt-4 mb-8">
                {children}
              </ul>
            ),
            li: ({ children }: MarkdownComponentProps) => (
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                {children}
              </motion.li>
            ),
            strong: ({ children }: MarkdownComponentProps) => (
              <strong className="font-semibold text-white">
                {children}
              </strong>
            ),
            a: ({ children, href }: MarkdownComponentProps) => (
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span className="mr-1">{children}</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </motion.div>
    </div>
  );
} 