"use client"
import SiteConfig from '@/app/config/site'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();
    const nav = SiteConfig.nav;
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav?.map((item) => {
                                return (
                                    <li key={item.id} className="mx-1">
                                        {pathname === item.link ? <Link href={item.link} className="bg-indigo-700 hover:bg-indigo-700 text-white rounded-xl">{item.name}</Link> :
                                            <Link href={item.link}>{item.name}</Link>}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl" href="/">{SiteConfig.name}</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav?.map((item) => {
                            return (
                                <li key={item.id} className="mx-1">
                                    {pathname == item.link ? <Link href={item.link} className="bg-indigo-700 hover:bg-indigo-700 text-white rounded-xl">{item.name}</Link> :
                                        <Link className="hover:bg-base-100 border-2 border-base-100 hover:text-indigo-700 hover:border-blue-700 rounded-xl" href={item.link}>{item.name}</Link>}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        href="/admin">Let's GO
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Navbar