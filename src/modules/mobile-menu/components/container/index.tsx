import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { Fragment } from "react"

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  const { state, close } = useMobileMenu()
  return (
    <Dialog open={state} as="div" className="fixed inset-0 flex z-50" onClose={close}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className=""
          >
            <div className="absolute inset-0 overflow-hidden trans">
              <div className="pointer-events-none fixed inset-y-0 right-left flex max-w-full">
                <div className="relative w-screen pointer-events-auto bg-white text-gray-900 flex flex-col overflow-y-auto">
                  {children}
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default Container
