import { Button } from 'antd';

import PropTypes from 'prop-types';
import TotalProvider from '../styles-providers/TotalProvider';

const defaultStyle = {};

const ButtonAcc = ({
  children,
  className = '',
  type = 'default',
  htmlType = 'button',
  disabled = false,
  danger = false,
  ghost = false,
  icon = null,
  size = 'middle',
  title = '',
  borderRadius = 'none',
  propsComponentes = defaultStyle,
  onClick = () => {},
}) => {
  return (
    <TotalProvider
      borderRadius={borderRadius}
      propsComponentes={propsComponentes}
    >
      <Button
        className={className}
        type={type}
        htmlType={htmlType}
        disabled={disabled}
        danger={danger}
        ghost={ghost}
        icon={icon}
        onClick={onClick}
        size={size}
        title={title}
      >
        {children}
      </Button>
    </TotalProvider>
  );
};

export default ButtonAcc;

ButtonAcc.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  htmlType: PropTypes.string,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
  ghost: PropTypes.bool,
  icon: PropTypes.node,
  size: PropTypes.string,
  title: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
};
