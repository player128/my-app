import classes from './MySelect.module.css'

export function MySelect({options, defaultValue, value, onChange}) {
    return (
        <select 
            value={value} 
            className={classes.MySelect}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}