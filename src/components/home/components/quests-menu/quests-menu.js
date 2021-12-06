import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { QuestType } from '../../../../services/const';
import { useDispatch, useSelector} from 'react-redux';
import { selectQuestType } from '../../../../store/store';
import { changeQuestType } from '../../../../store/actions';

const QuestsMenu = () => {
  const currentQuestType = useSelector(selectQuestType);
  const dispatch = useDispatch();
  const changeQuest = (quest) => {
    dispatch(changeQuestType(quest));
  };

return (
  <S.Tabs>
    <S.TabItem>
      <S.TabBtn
        isActive={currentQuestType === QuestType.All}
      onClick={() => changeQuest(QuestType.All)}
      >
        <IconAllQuests />
        <S.TabTitle>{QuestType.All}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>

    <S.TabItem>
      <S.TabBtn
        isActive={currentQuestType === QuestType.Adventures}
        onClick={() => changeQuest(QuestType.Adventures)}>
        <IconAdventures />
        <S.TabTitle>{QuestType.Adventures}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>

    <S.TabItem>
      <S.TabBtn
        isActive={currentQuestType === QuestType.Horrors}
        onClick={() => changeQuest(QuestType.Horrors)}>
        <IconHorrors />
        <S.TabTitle>{QuestType.Horrors}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>

    <S.TabItem>
      <S.TabBtn
        isActive={currentQuestType === QuestType.Mystic}
        onClick={() => changeQuest(QuestType.Mystic)}>
        <IconMystic />
        <S.TabTitle>{QuestType.Mystic}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>

    <S.TabItem>
      <S.TabBtn
        isActive={currentQuestType === QuestType.Detective}
        onClick={() => changeQuest(QuestType.Detective)}>
        <IconDetective />
        <S.TabTitle>{QuestType.Detective}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>

    <S.TabItem>
      <S.TabBtn
        isActive={currentQuestType === QuestType.SciFi}
        onClick={() => changeQuest(QuestType.SciFi)}>
        <IconScifi />
        <S.TabTitle>{QuestType.SciFi}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  </S.Tabs>);
};

export default QuestsMenu;
