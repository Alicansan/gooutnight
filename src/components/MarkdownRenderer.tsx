// import CopyCodeButton from "components/CopyCodeButton";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewerPropsType {
  content: string;
}
const MarkdownPreviewer = ({ content }: MarkdownPreviewerPropsType) => {
  return (
    <div className="markdown-body h-full w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPreviewer;
