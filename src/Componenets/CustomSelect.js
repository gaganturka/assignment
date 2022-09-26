import Select from "react-select";

export const CustomSelect = ({onChange, options, value, isMulti, placeholder, isClearable}) => {
    return (
        <Select
            placeholder={placeholder}
            isClearable={isClearable}
            options={options}
            onChange={(val) => val != null ?
                isMulti
                    ? onChange(val.map((c) => c.value))
                    : onChange(val.value)
                : onChange(null)
            }
            value={
                options != null && options.length > 0 ?
                    isMulti
                        ? options.filter((c) => value.includes(c.value))
                        : options.find((c) => c.value === value)
                    : null
            }
            isMulti={isMulti}
        />
    )
}
