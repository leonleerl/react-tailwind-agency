
import Header from '../widgets/Header';
import Hero from '../widgets/Hero';
import HowItWorks from '../widgets/HowItWorks';
import Solution from '../widgets/Solution';

function Index() {
  return (
    <div className=' container mx-auto p-4'>
      <Header/>
      <main className='mt-20'>
        <Hero/>
        <section className='md:p-20'>
          <Solution/>
        </section>
        <section className='mt-20'>
          <HowItWorks/>
        </section>
      </main>
    </div>
  )
}

export default Index;
