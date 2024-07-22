import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map((friendItem) => {
        return (
          <li className={css.item} key={friendItem.id}>
            <FriendListItem
              avatar={friendItem.avatar}
              name={friendItem.name}
              isOnline={friendItem.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
