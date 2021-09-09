import TimeChild from "../TimeChild/TimeChild";
import { initialState } from "../../Countdown";

const builtTimeChildList = (formData={...initialState}) => {

    const arrItem = Object.keys(formData);

    return arrItem.map(nameItem => {
        const valueItem = formData[nameItem];
        return (
            <TimeChild 
                key={nameItem} 
                nameItem={nameItem} 
                valueItem={valueItem} 
            />
        );
    })
};

const TimeChildList = props => {
    return (<>{
        builtTimeChildList(props.formatData)
    }</>);
};

export default TimeChildList;