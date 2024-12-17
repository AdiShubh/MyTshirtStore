import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='border border-red-500     h-screen'>
      <div className='flex flex-col space-y-6 items-center w-1/2 mx-auto  mt-24 border border-red-500 rounded-xl p-10'>
        <h1 className='text-2xl text-blue-500 '>Not Found </h1>
        <p className='text-xl'>Could not find requested resource. </p>
        <p className='m-2'>OR</p>
        <p className='text-xl'>The content is under development.</p>
        <Link href="/" className=' text-2xl'>Return <span className='text-green-500'> Home</span></Link>
      </div>
    </div>
  )
}