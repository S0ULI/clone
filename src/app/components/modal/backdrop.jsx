import SectionWrapper from '../layout/SectionWrapper';
import Modal from './modal';
import ModalConfirm from './ModalConfirm';

const Backdrop = ({ cancelHandler, confirmHandler, task }) => {
  return (
    <SectionWrapper mSt="fixed inset-0 z-[100] flex justify-center items-center">
      <div className="fixed inset-0 bg-dark-background-color-p/95" onClick={cancelHandler}></div>
      {!task ? (
        <Modal cancelHandler={cancelHandler} />
      ) : (
        <ModalConfirm
          cancelHandler={cancelHandler}
          confirmHandler={confirmHandler}
          task={task}
        />
      )}
    </SectionWrapper>
  );
};

export default Backdrop;
