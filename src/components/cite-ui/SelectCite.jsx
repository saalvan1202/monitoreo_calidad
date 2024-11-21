import { Select } from 'antd';

const SelectCite = ({ options = [], defaultValue, className = "", handleChange = () => { } }) => {

    return (
        <Select
            className={`w-full text-start ${className}`}
            size='large'
            defaultValue={defaultValue}
            onChange={handleChange}
            options={options}
        />
    )
};

export default SelectCite;