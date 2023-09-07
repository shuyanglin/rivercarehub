import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">       
        <div className='flex items-center space-x-2'>
            <Link href="/">
            <Image
                className='rounded-full'
                height={50}
                width={50}
                src="https://images.unsplash.com/photo-1691425817624-21bf8d7b3c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3278&q=80"
                alt="logo"
            />
            </Link>
            <h1>River Care Interface</h1>
        </div>
        <div>
            <Link href="/studio"
                className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
                Go to Dashboard
            </Link>
        </div>
    </header>
  )
}

export default Header