import Image from 'next/image'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import { useState, useContext  } from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderRight from './HeaderRight'
import {Store} from '../utils/Store'


function Header() {
  const { state, dispatch } = useContext(Store);
  
  const router = useRouter()


  const changeMenu=()=>{
    dispatch({type:"CHANGE_MENU"})
  }
 
 
    return (
      <header className="fixed top-0 z-50 w-full bg-gray-100 mx-auto h-20">
        {/* top header */}
        <div className="relative">
        <div className="flex items-center justify-between  h-20">
         <div className="flex items-center justify-center space-x-4">
          <div className="p-0  rounded-full flex items-center relative h-16 w-16">
            <Image
              onClick={() => router.push("/")}
              src="/logo1.png"
              layout="fill"
              // width={"60"}
              // height={"60"}
              // objectFit="cover"
              className="cursor-pointer"
            />
          </div>
          <h1 className="font-bold text-xl text-gray-700">BaliJava Spirit</h1>
          </div>


          {/* right */}
          <div className="hidden lg:flex flex-wrap  w-2/3 mr-10">
              <HeaderRight/>
          </div>
          <div className="flex items-center justify-around
          
          ">
          {/* <ShoppingCartIcon className="h-8 mr-10" /> */}
          <div
                onClick={changeMenu}
                className="lg:hidden link mx-4 relative flex items-center"
              >
                <MenuIcon className="h-8" />
    
              </div>
        </div>
        </div>
        {/* bottom header */}
        <div>
       <HeaderMenu 
       menu={state.menuItem}
       changeMenu={changeMenu}/>
       </div>
       </div>
      </header>
    );
}

export default Header
