import Feed from '@/components/Feed';

const Home = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col'>
      <h1 className='text-center mt-5 font-extrabold text-black text-5xl sm:text-6xl'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='text-center bg-gradient-to-r from-violet-400 via-purple-700 to-purple-300 bg-clip-text text-transparent'>
          AI-Powered Prompts
        </span>
      </h1>
      <p className='text-center mt-5 max-w-2xl text-gray-600 text-lg sm:text-xl'>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
