import { Link } from 'react-router';

function Navbar() {
  return (
    <div className='bg-blue-600 sticky top-0  '>
    
    <nav className="bg-blue-600 text-2xl p-4 flex justify-between items-center font-[SanSerif]  container mx-auto  ">
      <Link to="/" className="text-[#39ECBC]"> MyApp</Link>
      <ul className="flex gap-6 pr-2 ">
        <li><Link to="/" className="hover:text-gray-200 text-[#0AD8D4] ">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-200 text-[#0AD8D4] ">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-200 text-[#0AD8D4] ">Contact</Link></li>
      </ul>
    </nav>

    </div>
   
  );
}

export default Navbar;
   