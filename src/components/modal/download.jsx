import React from 'react'

export default function Download(props) {
    return (
        <div className={!props.showOptions ?
            "hidden"
            :
            " z-10 w-auto bg-white divide-y divide-gray-100 shadow dark:bg-gray-700"}>
            <ul className='md:inline-flex lg:inline-flex flex md:-my-4 lg:-my-4 -my-4  items-center justify-center text-sm text-gray-700 dark:text-gray-200 '>
                <li>
                    <a href="/"
                        className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Orignal
                    </a>
                </li>
                <li>
                    <a href="/"
                        className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Large
                    </a>
                </li>
                <li>
                    <a href="/"
                        className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Medium
                    </a>
                </li>
                <li>
                    <a href="/"
                        className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Small
                    </a>
                </li>
            </ul>
        </div>
    )
}
