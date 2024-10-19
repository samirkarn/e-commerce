"use client"

import { usePathname } from "next/navigation"
import { IoIosArrowForward } from "react-icons/io";

const pages = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Stores',
    path: '/stores'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'Categories',
    path: '/categories'
  },
  {
    name: 'Promotions',
    path: '/promotions'
  },
  {
    name: 'Reports',
    path: '/reports'
  },
  {
    name: 'Docs',
    path: '/docs'
  },
  {
    name: 'Settings',
    path: '/settings'
  },
]

const SideMenubar = () => {
  const pathName = usePathname()

  return (
    <>
      <div className="md:min-w-[21%] border-r border-r-gray-200 flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto">
          <div className="px-6">
            <div className="border-b border-b-gray-200">
              <a href="/">
                <img src="/images/logo.jpeg" className="mt-6 mb-4" style={{ width: '104px', height: '48px' }} />
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <div>
              <nav>
                <ul>
                  {pages.map((page, index) => (
                    <li key={index} className="mb-3">
                      <a href={page.path}>
                        <div className="px-6">
                          <div className={`flex gap-2 p-2 items-center ${pathName === page.path ? 'bg-[#ECF7FF] rounded-sm text-[#1F8CD0]' : ''}`}>
                            <div className="rounded-sm bg-[#F8F8F8] border border-gray-300 p-2">
                              {''}
                            </div>
                            <p className="text-xs font-medium">{page.name}</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="px-6 ">
          <div className="py-5 border-t border-t-gray-200">
            <a href="/my-account">
              <div className="flex gap-2 items-center">
                <img src="/images/avatar.jpg" alt="Andy Samberg" style={{ width: '45px', height: "45px", borderRadius: '50%' }} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-xs font-medium">Andy Samberg</p>
                    <p className="text-xs font-medium text-[#8C8C8C]">andy.samberg@gmail.com</p>
                  </div>
                  <IoIosArrowForward className="text-[#1F8CD0] text-md right-0" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenubar
