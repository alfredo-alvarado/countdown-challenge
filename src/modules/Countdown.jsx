import { useEffect, useState, useCallback, memo } from 'react';
import moment from 'moment-timezone';
import { 
    TimeChildList, 
    HappyBirthdayModal, 
    Loader, 
    SimulateBirthdayButton 
} from './components';
import { getTimeLeft, getStandardDateForBirthday } from '../helpers/countdown';
import { CTO_BIRTHDAY } from '../constants/admin';
import classes from './Countdown.module.css';

export const initialState = {
    Day: 0,
    Hour: 0,
    Min: 0,
    Sec: 0
};

const Countdown = () => {

    const endDateStr = moment(getStandardDateForBirthday(CTO_BIRTHDAY));
    const endDate = moment(endDateStr);

    const [startDate, setStartDate] = useState(moment());
    const [modalIsOpen, setOpenModal] = useState(false);
    const [clickedBtn, setClickedBtn] = useState(false);
    const [loader, setLoader] = useState(true);
    const [formatData, setFormatData] = useState({
        Day: 0,
        Hour: 0,
        Min: 0,
        Sec: 0
    });

    const handleFormatData = useCallback(
        (formatData) => {
            const {days, hours, mins, secs} = formatData;
            setFormatData({
                Day: days,
                Hour: hours,
                Min: mins,
                Sec: secs
            });
        },
        []
    );

    const handleOpenButton = () => setClickedBtn(true);

    const handleCloseButton = () => setClickedBtn(false);

    const handleOpenModal = () => setOpenModal(true);

    const handleCloseModal = () => setOpenModal(false);

    const handleCloseLoader = () => setLoader(false);

    const handleStartDate = date => setStartDate(date);

    const handleDecreaseTimer = useCallback(
        () => {

            handleStartDate(moment());

            const formatData = getTimeLeft(endDate, startDate);

            handleFormatData(formatData);
        },
        [endDate, handleFormatData, startDate]
    );
    
    const onRequestClose = () => {
        handleCloseModal();
        handleCloseButton();
    };

    useEffect(() => {
        setTimeout(() => {
            handleDecreaseTimer();
            handleCloseLoader();
        }, 1000);
    }, [handleDecreaseTimer]);

    useEffect(() => {
        if ((formatData.Day === 0 && !Loader) || clickedBtn) {
            handleOpenModal();
        }
    }, [formatData, clickedBtn]);

    if (loader) {
        return (
            <div className={classes.Countdown}>
                <Loader />
            </div>
        );
    }

    return (
        <div>
            <HappyBirthdayModal 
                modalIsOpen={modalIsOpen}
                handleCloseModal={onRequestClose}
                handleOpenModal={handleOpenModal}
            />
            <TimeChildList formatData={formatData} />
            <div>
                <SimulateBirthdayButton handleClickBirthdayBtn={handleOpenButton} />
            </div>
        </div>
    );
};

export default memo(Countdown);
