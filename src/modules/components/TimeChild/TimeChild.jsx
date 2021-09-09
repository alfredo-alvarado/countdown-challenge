const TimeChild = props => {
    
    const { nameItem, valueItem } = props;

    const responseAccordingNameAndValue = (
        nameItem, valueItem
    ) => {
        if (valueItem !== 1) {
            return nameItem + 's';
        }
        return nameItem;
    };

    const getUnit = () => responseAccordingNameAndValue(nameItem, valueItem); 
    
    return (
        <span className="countdown-col">
            <strong>{valueItem}</strong>&nbsp;
            <span>{getUnit()}</span>
        </span>
    );
}

export default TimeChild;