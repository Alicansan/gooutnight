'use client'

import React, {
  useState,
  useEffect,
  FormEvent,
} from 'react'
import { Button } from '../ui/button'

interface Comment {
  id: number
  name: string
  email: string
  body: string
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<
    Comment[]
  >([])
  const [newComment, setNewComment] =
    useState<string>('')

  useEffect(() => {
    fetch(
      'https://jsonplaceholder.typicode.com/comments'
    )
      .then((response) => response.json())
      .then((data) =>
        setComments(data.slice(0, 5))
      )
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newCommentObj = {
      id: comments.length + 1,
      name: 'Anonymous',
      email: 'anonymous@example.com',
      body: newComment,
    }
    setComments([...comments, newCommentObj])
    setNewComment('')
  }

  return (
    <section className='lg:container md:py-8 lg:py-16 antialiased overflow-hidden'>
      <div className='max-w-2xl mx-auto lg:px-4'>
        <div className='w-full flex justify-between items-center mb-6'>
          <h2 className='text-lg lg:text-2xl font-bold text-foreground'>
            Comments
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className='mb-6'
        >
          <label
            htmlFor='comment'
            className='sr-only'
          >
            Your Comment
          </label>
          <textarea
            id='comment'
            rows={6}
            placeholder='Your Comment'
            required
            className='rounded-lg min-h-48 w-full bg-background p-2 text-sm text-foreground border-2   border-gray-300'
            value={newComment}
            onChange={(e) =>
              setNewComment(e.target.value)
            }
          ></textarea>
          <Button
            type='submit'
            className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg'
          >
            Post Comment
          </Button>
        </form>
        {comments.map((comment) => (
          <article
            key={comment.id}
            className=' p-3 lg:p-6 mb-4 bg-accent text-base rounded-lg'
          >
            <footer className='flex flex-col  justify-between items-start  mb-2  rounded-full lg:p-4'>
              <div className='flex flex-col lg:flex-row items-start justify-between '>
                <p className='inline-flex items-center mr-3 text-sm text-foreground font-semibold'>
                  {comment.email}
                </p>
                <p className='text-xs text-foreground'>
                  <time>
                    {new Date().toLocaleDateString()}
                  </time>
                </p>
              </div>
            </footer>
            <p className='text-sm text-foreground border-y-border py-2 border-cyan-400'>
              {comment.body}
            </p>
            <div className='flex items-center mt-4 space-x-4'>
              <button
                type='button'
                className='flex items-center text-sm text-foregroundhover:underline  font-medium'
              >
                <svg
                  className='mr-1.5 w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 18'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Comments
