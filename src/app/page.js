import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='flex justify-evenly mt-16'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col text-4xl font-bold'>
            <span>Creative</span>
            <span>Thoughts</span>
            <span>Agency.</span>
          </div>
          <div className="flex flex-col text-sm text-gray-500">
            <span>The agency you are looking for. We will</span>
            <span>give you the best scenarion. Keep</span>
            <span>faith on us</span>
          </div>
          <div className='flex gap-6 text-white'>
            <button className='bg-blue-700 px-3 py-1 rounded'>Learn More</button>
            <button className='bg-blue-700 px-3 py-1 rounded'> <Link href="/contact"> Contact</Link></button>
          </div>
        </div>
        <div>
          <Image src="/homepageimage.gif" alt='home-page-image' width={500} height={500}/>
        </div>
      </div>
    </main>
  )
}
