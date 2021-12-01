import AppLayout from '../layout/AppLayout';
import Carousel from '../features/Carousel';

import styles from '../../styles/pages/home.module.css';

export default function Home() {
  return (
    <AppLayout>
      <h2 className={styles.title}>
        Little story about <b className="text-primary">FiDec</b>
      </h2>
      <Carousel />
    </AppLayout>
  );
}
