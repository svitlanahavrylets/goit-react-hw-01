import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map((friendItem) => {
        return (
          <li key={friendItem.id}>
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
