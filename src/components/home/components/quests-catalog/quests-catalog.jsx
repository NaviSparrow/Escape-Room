import QuestsMenu from '../quests-menu/quests-menu';
import { useSelector } from 'react-redux';
import { selectQuestList, selectQuestType } from '../../../../store/store';
import QuestsList from '../quests-list/quests-list';
import { filterQuestsByType } from '../../../../services/const';

const QuestsCatalog = () => {
  const questList = useSelector(selectQuestList);
  const currentQuestType = useSelector(selectQuestType);
  const filteredList = filterQuestsByType(questList, currentQuestType);
  return (
    <>
      <QuestsMenu />
      <QuestsList questList={filteredList} />
    </>
  );
};

export default QuestsCatalog;
