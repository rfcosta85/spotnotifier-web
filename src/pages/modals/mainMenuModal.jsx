import { ChevronDownIcon, InformationCircleIcon, LockClosedIcon, PhoneIcon, PlayCircleIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/20/solid'


const solutions = [
  { name: 'Perfil', href: '/profile', icon: UsersIcon },
  { name: 'Sobre nós', href: '/about-us', icon: InformationCircleIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function MainMenuModal() {
  return (
    <div className='fixed top-28 rounded-lg right-40 bg-white bg-opacity-75 p-3'>
      {solutions.map((item) => (
        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center">
          <div className="mt-0 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
          </div>
          <div>
            <a href={item.href} className="text-gray-900">
              {item.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

