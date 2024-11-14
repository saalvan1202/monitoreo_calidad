import { Select } from 'antd';

const SelectCite = ({ options = [], defaultValue = "", className = "", setData = () => { } }) => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setData(value)
    };

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