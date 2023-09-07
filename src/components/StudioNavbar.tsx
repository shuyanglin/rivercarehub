import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import '../app/globals.css'

function StudioNavbar(props: any) {
  return (
    <>
        <div>
            <Link href="/" className="flex items-center text-[#F7AB0A] p-5">
                <ArrowUturnLeftIcon className='h-6 w-6 mr-2 text-[#F7AB0A]'/>
                Go To Website
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
        
    </>
  )
}

export default StudioNavbar

