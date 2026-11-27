import Navigation from "./Navigation";
import {  gsap } from 'gsap'
import { CircleUserRound, Heart, ShoppingBag } from "lucide-react"

function Header(){
  return (
    <div className="bg-transparent flex justify-evenly p-4">
        <div className="flex items-center justify-center">
          <h1 className="text-white">AROVIDO ESSENSIA</h1>
        </div>
        <Navigation />
        <div className="flex items-center justify-evenly gap-3">
          <div className="ring-1 cursor-pointer ring-gray-50 bg-transparent flex justify-center gap-2 items-center w-30.5 h-8.5 rounded-full">
            <ShoppingBag color="white" size={20}/>
            <p className="text-sm text-white">Cart <span>(0)</span></p>
          </div>
          <div className="ring-1 cursor-pointer ring-gray-50 bg-transparent flex justify-center items-center w-8.5 h-8.5 rounded-full">
            <Heart color="white" size={20}/>
          </div>
          <div className="ring-1 cursor-pointer ring-gray-50 bg-transparent flex justify-center items-center w-8.5 h-8.5 rounded-full">
            <CircleUserRound color="white" size={20}/>
          </div>
        </div>
    </div>
  )
}

export default Header