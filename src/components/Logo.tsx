import React from 'react'
import Image from 'next/image';
import '../app/globals.css'

function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className='flex items-cetner space-x-2'>
            <Image
                className='rounded-full'
                height={50}
                width={50}
                src="https://images.unsplash.com/photo-1691425817624-21bf8d7b3c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3278&q=80"
                alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo