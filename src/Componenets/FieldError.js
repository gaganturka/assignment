const FieldError = (props) => {

    return (
        <>
            {
                props.error ? <div className="help-block help-block-error">{props.error}</div> : ''
            }
        </>
    )

};

export default FieldError;
