import React from 'react'
import { styles } from '../css/style'

export default function Header() {



    const headers = [
        {
            "title": "Home",
            to: "/"
        },
        {
            "title": "Product",
            to: "/product"
        },
        {
            title: "Resources",
            to: "/resources"
        },
        {
            title: "Pricing",
            to: '/pricing'
        }
    ]
    return (
        <div className='flex justify-between md:px-32 py-4'>
            <ul className='flex space-x-12 items-center'>
                <li>
                    UNITED UI
                </li>

                {headers.map(item => {
                    return (
                        <a className='text-md font-semibold' href={item.to}>
                            {item.title}
                        </a>
                    )
                })}
            </ul>

            <ul className='flex space-x-12'>
                <button style={styles.outlined_button}>
                Login
                </button>
                <button style={styles.filled_button}>
                Sign up
                </button>
            </ul>
        </div>
    )
}

