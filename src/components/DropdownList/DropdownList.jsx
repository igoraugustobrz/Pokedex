const DropdownList = ({ textLabel, items }) => {
    return (
        <>
            <div className="dropdown-list">
                <label htmlFor={{ textLabel }}>{textLabel}</label>
                <select id={{ textLabel }}>
                    {items.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </div>
        </>
    )
}

export default DropdownList;