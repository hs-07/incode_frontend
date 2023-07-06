import React, {useState} from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const items =[
  {id: '1', label: "City", url: '', src:'/assets/icons/car.svg'},
  {id: '2', label: "Request History", url: '', src:'/assets/icons/Clock.svg'},
  {id: '3', label: "Rentals", url: '', src:'/assets/icons/Globe.svg'},
  {id: '4', label: "Freight", url: '', src:'/assets/icons/container.svg'},
  {id: '5', label: "Safety", url: '', src:'/assets/icons/Shield_Check.svg'},
  {id: '6', label: "Settings", url: '', src:'/assets/icons/Settings.svg'},
  {id: '7', label: "FAQ", url: '', src:'/assets/icons/Info.svg'},
  {id: '8', label: "Support", url: '', src:'/assets/icons/Chat.svg'},
]


const index: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="px-4 py-3">
    <div className="flex z-99 justify-between items-center">
            <a href="/" className="p-1">
              <img
                src="/assets/icons/logo.svg"
                alt=""
                className="w-8"
              />
            </a>
            <button
              type="button"
              className="inline-flex items-center bg-white justify-center rounded-3xl shadow-xl opacity-100 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
    <Dialog
          as="div"
          className="z-99"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-99" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-99 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
              <a href="#" className="p-1.5">
                <img
                  src="/assets/icons/user.svg"
                  alt=""
                  className="w-12"
                />
              </a>
              <div className="flex flex-col">
              <h1 className="text-lg">Parth Agarwal</h1>
              <p className="text-gray-400 text-sm">Newbie</p>
              </div>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 flex flex-col justify-between divide-y divide-gray-500/10">

                {/* mobile navbar links */}
                <div className="space-y-2 py-6">
                  {items.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      className="-mx-3 flex block rounded-lg px-3 py-2 text-base font-barlow font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                    >
                      <img src={item.src} alt="" className="pr-2"/>
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="text-base py-2 px-6 rounded-md text-white font-semibold leading-6 font-barlow bg-[#A7E92F]"
                  >
                    Driver Mode
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        </nav>
  );
};

export default index;
