import { Form } from '@/types';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }: Form) => {
  return (
    <section className='w-full max-w-full flex flex-col'>
      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(244,101,242,0.2)] backdrop-blur p-5'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{' '}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
          />
        </label>

        <div className='flex justify-end items-center mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary rounded-full text-white hover:bg-black'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
