// SPREAD
const bestFriend = ["Rohim", "Korim"];
const schoolFriend = ["jodu", "kodu", "modu"];
const clgFriend = ["alice", "bob"];

bestFriend.push(...schoolFriend);
console.log(bestFriend);

const user = { name: "Sany", phone: "01406" };
const otherInfo = { hobby: "outing", fabourite: "device" };

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

// REST OPERATOR

const sentInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`send invitation to ${friend}`),
  );
};

sentInvite("korim", "rohim", "moodu", "jodu");
