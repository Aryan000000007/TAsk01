import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
           
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src="data:image/jpeg;base64,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"
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Techouts Jobs</span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</NavLink>
                <NavLink
                  href="/jobs"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</NavLink>
                
                <NavLink
                  to="/add-job"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</NavLink>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

   </>
  )
}

export default Navbar