"use client";

import React, { FormEvent, useEffect, useState } from "react";

import { Button } from "../ui/button";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comments = () => {
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
    <section className="container md:py-8 lg:py-16">
      <div className="rounded-lg bg-accent p-8">
        <div className="flex w-full items-center">
          <h2 className="text-lg font-bold text-foreground lg:text-xl">
            Add a Comment
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="my-4">
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
            className="mt-2 inline-flex items-center rounded-lg px-4 py-2.5 text-center text-xs font-medium"
          >
            Post Comment
          </Button>
        </form>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <h2 className="text-lg font-bold text-foreground lg:text-xl">
          Comments
        </h2>
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="rounded-lg border border-border bg-accent p-6"
          >
            <div className="flex flex-col items-start rounded-full">
              <div className="flex flex-row items-center gap-4">
                <p className="text-sm font-semibold text-foreground">
                  {comment.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  <time>{new Date().toLocaleDateString()}</time>
                </p>
              </div>
            </div>
            <p className="py-2 text-sm text-foreground">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Comments;
