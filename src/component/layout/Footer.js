import { HeartIcon } from '@heroicons/react/outline';
import '../../styles/layout/footer.module.css';

export default function Footer() {
  return (
    <footer>
      <p>
        built and designed with <HeartIcon className="h-4 w-4 mx-0.5 mt-0.5" />{' '}
        by FiDec team
      </p>
    </footer>
  );
}
