"use client";

import React, { FormEvent, useEffect, useState } from "react";

import { Button } from "../ui/button";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 5)));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newCommentObj = {
      id: comments.length + 1,
      name: "Anonymous",
      email: "anonymous@example.com",
      body: newComment,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <section className="overflow-hidden antialiased lg:container md:py-8 lg:py-16">
      <div className="mb-6 flex w-full items-center justify-between">
        <h2 className="text-lg font-bold text-foreground lg:text-2xl">
          Comments
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="comment" className="sr-only">
          Your Comment
        </label>
        <textarea
          id="comment"
          rows={6}
          placeholder="Your Comment"
          required
          className="min-h-48 w-full rounded-lg border-2 border-gray-300 bg-background p-2 text-sm text-foreground"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <Button
          type="submit"
          className="inline-flex items-center rounded-lg px-4 py-2.5 text-center text-xs font-medium"
        >
          Post Comment
        </Button>
      </form>
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="mb-4 rounded-lg bg-accent p-3 text-base lg:p-6"
        >
          <footer className="mb-2 flex flex-col items-start justify-between rounded-full lg:p-4">
            <div className="flex flex-col items-start justify-between lg:flex-row">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-foreground">
                {comment.email}
              </p>
              <p className="text-xs text-foreground">
                <time>{new Date().toLocaleDateString()}</time>
              </p>
            </div>
          </footer>
          <p className="border-cyan-400 border-y-border py-2 text-sm text-foreground">
            {comment.body}
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <button
              type="button"
              className="text-foregroundhover:underline flex items-center text-sm font-medium"
            >
              <svg
                className="mr-1.5 h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Reply
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Comments;
