import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <h1 className='display-4'>This is Dashboard</h1>
                <a href="" className='btn btn-danger'>Logout</a>
            </div>
        </>
    );

}

export default Dashboard;