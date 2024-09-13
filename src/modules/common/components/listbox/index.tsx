import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Dropdown({
    title,
    items,
    value,
    handleChange,
    className,
    variant = 'default'
}: {
    title: string,
    items: Array<any>
    value: any
    handleChange: (value: string) => void,
    className: string,
    readonly variant?: keyof typeof variants
}) {

  return (
    <div className="w-52 text-right h-full">
      <Menu>
        <MenuButton className="inline-flex h-full mr-2 w-full md:w-[150px] items-center gap-2 rounded-md bg-white border border-[#6c4b2b] text-black py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
           {value.label}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-[#6C4B2B] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
            {items.map((item, index) => (
                <MenuItem key={index}>
                    <button
                        onClick={() => handleChange(item)}
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                    >
                        {item.label}
                    </button>
                </MenuItem>
            ))}
        </MenuItems>
      </Menu>
    </div>
  )
}