// navbar with header and a logo justify between has tailwind installed
import Github from '../../assets/github.svg'

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-16 p-4">
        <h1 className='text-3xl font-medium'>BankScan</h1>
        <img src={Github} alt="logo" className="h-8" />
        </nav>
    )
}
