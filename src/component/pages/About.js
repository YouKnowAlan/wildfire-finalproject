import '../../styles/pages/module.about.css';
import Disclose from '../features/Disclose';
import AppLayout from '../layout/AppLayout';
import meetingIcon from '../../images/meetingIcon.svg';

export default function About() {
  return (
    <AppLayout>
      <h2 className="title-section">About Project</h2>
      <div className="qna-section">
        <img src={meetingIcon} className="meeting-img" />
        <Disclose />
      </div>
    </AppLayout>
  );
}
