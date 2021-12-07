import * as S from '../quests-catalog/quests-catalog.styled';
import QuestListItem from '../quest-list-item/quest-list-item';

const QuestsList = ({ questList }) => {
  return (
    <S.QuestsList>
      {questList.map((quest) => (
        <QuestListItem key={quest.id} quest={quest} />
      ))}
      ;
    </S.QuestsList>
  );
};

export default QuestsList;
