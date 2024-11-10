import './SpinLoader.scss';

const SpinLoader = ({ withBody = false }) => {
  return withBody ? (
    <div className="h-full flex justify-center items-center">
      <span className="loader"></span>
    </div>
  ) : (
    <span className="loader"></span>
  );
};

export default SpinLoader;
