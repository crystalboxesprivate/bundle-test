const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });

export const getMessages = async () => {
  await wait(1500);
  return [
    {
      id: 1,
      type: "MessageLeft",
      message: "あめんぼあかいなあいうえお",
      timestamp: "MM/DD 00:00",
      photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c",
      displayName: "",
      avatarDisp: true
    },
    {
      id: 2,
      type: "MessageLeft",
      message:
        "xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ",
      timestamp: "MM/DD 00:00",
      photoURL: "",
      displayName: "テスト",
      avatarDisp: false
    },
    {
      id: 3,
      type: "MessageRight",
      message:
        "messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお",
      timestamp: "MM/DD 00:00",
      photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c",
      displayName: "まさりぶ",
      avatarDisp: true
    },
    {
      id: 4,
      type: "MessageRight",
      message: "messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお",
      timestamp: "MM/DD 00:00",
      photoURL:
        "https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c",
      displayName: "まさりぶ",
      avatarDisp: false
    }
  ];
};
