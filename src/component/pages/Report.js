import '../../styles/pages/module.report.css';
import AppLayout from '../layout/AppLayout';

export default function Report() {
  return (
    <AppLayout>
      <div className="flex flex-row justify-between items-center">
        <h2 className="title-section">Data Report</h2>
        <p>Last update: 2 mins ago</p>
      </div>

      <div className="data-section"></div>
    </AppLayout>
  );
}
