import SummaryCard from '../components/SummaryCard';
import SalesChart from '../components/SalesChart';
import '../styles/dashboard.css';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='summary-grid'>
                <SummaryCard title="Total Orders" value="120" />
                <SummaryCard title="Revenue" value="₹25,000" />
                <SummaryCard title="Active Tables" value="8" />
                <SummaryCard title="Pending Orders" value="5" />    
            </div>
            <div className="chart-section">
                <SalesChart />
                </div>

        </div>

    );
}