import Link from 'next/link';

const Header = () => {
    return <header className='header'>
        <div className='container'>
            <div className='logo'>
                JC Icaro
            </div>
            <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
        </ul>
        </div>
    </header>
}

export default Header;