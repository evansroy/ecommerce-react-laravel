import React from 'react'
import { Link } from 'react-router-dom'

 const Sidebar = () => {
  return (
    <div>
      <Link to="#" className="brand">
			<i className='bx bxs-smile'></i>
			<span className="text">AdminHub</span>
		</Link>
		<ul className="side-menu top">Name
			<li className="active">
				<Link to="/admin">
					<i className='bx bxs-dashboard' ></i>
					<span className="text">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link to="#">
					<i className='bx bxs-shopping-bag-alt' ></i>
					<span className="text">My Store</span>
				</Link>
			</li>
			<li>
				<Link to="#">
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Analytics</span>
				</Link>
			</li>
			<li>
				<Link to="#">
					<i className='bx bxs-message-dots' ></i>
					<span className="text">Message</span>
				</Link>
			</li>
			<li>
				<Link to="#">
					<i className='bx bxs-group' ></i>
					<span className="text">Team</span>
				</Link>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
				<Link to="#">
					<i className='bx bxs-cog' ></i>
					<span className="text">Settings</span>
				</Link>
			</li>
			<li>
				<Link to="#" className="logout">
					<i className='bx bxs-log-out-circle' ></i>
					<span className="text">Logout</span>
				</Link>
			</li>
		</ul>
    </div>
  )
}
export default Sidebar
