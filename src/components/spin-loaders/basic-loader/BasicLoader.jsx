import './BasicLoader.scss';

const BasicLoader = ({ withBody = false }) => {
    return withBody ? (
        <div className="h-full flex justify-center items-center">
            <span className="basic-loader"></span>
        </div>
    ) : (
        <span className="basic-loader"></span>
    );
};

export default BasicLoader;
