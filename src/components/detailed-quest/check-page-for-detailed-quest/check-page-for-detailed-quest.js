import { useDispatch } from 'react-redux';
import { fetchDetailedQuestAction } from '../../../store/api-actions';
import { fillDetailedQuest } from '../../../store/actions';
import DetailedQuest from '../detailed-quest';

const CheckPageForDetailedQuest = (propsQuest, id) => {
  const dispatch = useDispatch();

  const sendToStateQuestFromProps = (quest) => {
    dispatch(fillDetailedQuest(quest));
  };

  if (propsQuest === undefined) {
    dispatch(fetchDetailedQuestAction(id));
  } else {
    sendToStateQuestFromProps(propsQuest);
  }
  return <DetailedQuest />;
};

export default CheckPageForDetailedQuest;
