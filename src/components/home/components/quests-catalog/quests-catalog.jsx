import QuestsMenu from '../quests-menu/quests-menu';
import { useSelector } from 'react-redux';
import { selectQuestList, selectQuestType } from '../../../../store/store';
import QuestsList from '../quests-list/quests-list';
import { filterQuestsByType } from '../../../../services/const';

const QuestsCatalog = () => {
  const questList = useSelector(selectQuestList);
  const currentQuestType = useSelector(selectQuestType);
  const list = filterQuestsByType(questList, currentQuestType);
  console.log(list);
  return (
    <>
      <QuestsMenu />
      <QuestsList questList={filterQuestsByType(questList, currentQuestType)} />
    </>
  );
};

export default QuestsCatalog;
