import { ConfigProvider } from 'antd';
import PropTypes from 'prop-types';

const TotalProvider = ({
  children,
  propsComponentes = {},
  borderRadius = '',
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: borderRadius,
        },
        components: {
          Button: {
            ...propsComponentes,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default TotalProvider;

TotalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  propsComponentes: PropTypes.object,
  borderRadius: PropTypes.string,
};
