import Modal from 'react-modal';
import BirthdayCard from '../../../assets/img/happy-birthday-card.jpeg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const HappyBirthdayModal = props => {

  const { 
      modalIsOpen, 
      handleOpenModal, 
      handleCloseModal 
    } = props;

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={handleOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Happy Birthday CTO!"
      >
        <img src={BirthdayCard} alt={'Happy Birthday CTO!'} />
      </Modal>
    </>
  );
}

export default HappyBirthdayModal;