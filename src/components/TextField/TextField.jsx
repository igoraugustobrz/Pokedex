const TextField = ({ textLabel, textPlaceholder }) => {
    return (
        <>
            <div className="text-field">
                <label htmlFor={textLabel} className="label-text-field">{textLabel}</label>
                <input type="text" placeholder={textPlaceholder} name="" id={textLabel} />
            </div>
        </>
    )
}

export default TextField;