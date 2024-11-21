import './GeneralLoader.scss';

const GeneralLoader = ({ withBody = false }) => {
  return withBody ? (
    <div className="h-full flex justify-center items-center">
      <span className="general-loader"></span>
    </div>
  ) : (
    <span className="general-loader"></span>
  );
};

export default GeneralLoader;
