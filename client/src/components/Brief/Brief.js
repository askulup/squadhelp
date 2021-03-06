import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { updateContest, changeEditContest, clearUpdateContestStore } from '../../actions/actionCreator';
import ContestForm from '../ContestForm/ContestForm';
import styles from './Brief.module.sass';
import ContestInfo from '../Contest/ContestInfo/ContestInfo';
import Error from '../Error/Error';

const Brief = (props) => {
  const setNewContestData = (values) => {
    const data = new FormData();
    Object.keys(values).forEach((key) => {
      if (key !== 'file' && values[key]) data.append(key, values[key]);
    });
    if (values.file instanceof File) data.append('file', values.file);
    // eslint-disable-next-line react/prop-types
    data.append('contestId', props.contestData.id);
    // eslint-disable-next-line react/prop-types
    props.update(data);
  };


  const getContestObjInfo = () => {
    const {
      // eslint-disable-next-line react/prop-types,max-len
      focusOfWork, industry, nameVenture, styleName, targetCustomer, title, brandStyle, typeOfName, typeOfTagline, originalFileName, contestType,
      // eslint-disable-next-line react/prop-types
    } = props.contestData;
    const data = {
      focusOfWork,
      industry,
      nameVenture,
      styleName,
      targetCustomer,
      title,
      brandStyle,
      typeOfName,
      typeOfTagline,
      originalFileName,
      contestType,
    };
    const defaultData = {};
    Object.keys(data).forEach((key) => {
      if (data[key]) {
        if (key === 'originalFileName') {
          defaultData.file = { name: data[key] };
        } else {
          defaultData[key] = data[key];
        }
      }
    });
    return defaultData;
  };


  const {
    // eslint-disable-next-line react/prop-types
    isEditContest, contestData, role, goChat,
  } = props;
    // eslint-disable-next-line react/prop-types
  const { error } = props.updateContestStore;
  // eslint-disable-next-line react/prop-types
  const { id } = props.userStore.data;
  if (!isEditContest) {
    return (
      <ContestInfo
        userId={id}
        contestData={contestData}
        changeEditContest={changeEditContest}
        role={role}
        goChat={goChat}
      />
    );
  }
  return (
    <div className={styles.contestForm}>
      {error && <Error data={error.data} status={error.status} clearError={clearUpdateContestStore} />}
      <ContestForm
        contestType={contestData.contestType}
        defaultData={getContestObjInfo()}
        submitData={setNewContestData}
      />
      {isEditContest
        ? <div onClick={() => updateContest()} className={styles.changeData}>Set Data</div> : null}
    </div>
  );
};


const mapStateToProps = (state) => {
  const { isEditContest } = state.contestByIdStore;
  const { updateContestStore, userStore } = state;
  return { updateContestStore, userStore, isEditContest };
};

const mapDispatchToProps = (dispatch) => ({
  update: (data) => dispatch(updateContest(data)),
  changeEditContest: (data) => dispatch(changeEditContest(data)),
  updateContest: () => dispatch(submit('contestForm')),
  clearUpdateContestStore: () => dispatch(clearUpdateContestStore()),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Brief));
