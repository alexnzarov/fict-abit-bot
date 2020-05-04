import escape from 'escape-html';

export type UserLike = {
  id?: number;
  user_id?: number;
  username?: string;
  first_name: string;
  last_name?: string;
};

export const getName = (user: UserLike) => {
  return !user.last_name ? user.first_name : `${user.first_name} ${user.last_name}`;
};

export const getHTMLTag = (user: UserLike) => {
  const name = user.username ? `@${user.username}` : getName(user);
  return `<a href="tg://user?id=${user.id ?? user.user_id}">${escape(name)}</a>`;
};
