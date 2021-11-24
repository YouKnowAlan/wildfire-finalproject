import '../../styles/features/module.spinner.css';

export default function Spinner() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-base relative">
      <h3 className="title-loading">Wait</h3>
      <div className="spinner-loading"></div>
    </section>
  );
}
