import AppLayout from '../layout/AppLayout';
import Carousel from '../features/Carousel';

import '../../styles/pages/module.home.css';

export default function Home() {
  return (
    <AppLayout>
      <h2 className="title-jumbotron">
        Little story about <b className="text-primary">Wildfire</b>
      </h2>
      <Carousel />
    </AppLayout>
  );
}
