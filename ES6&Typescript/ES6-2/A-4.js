const chatRoomsUsers1 = [
    {
      sam: "hi",
    },
    { joker: "how are you" },
    { netha: "Hello! sam & joker" },
  ];
  const chatRoomsUsers2 = [
    {
      Siva: "Hey! I stuck in traffic now.",
    },
    { vaish: "Okay, Siva. But please come as soon as possible." },
    { mac: "Siva, Until you come I wll handle this." },
  ];
  const getUserName = (userData) => {
    console.log("chatroom1");
    userData.map((item) => console.log(item));
  };
  const getUserMessages = (userData) => {
    console.log("");
    console.log("chatroom2");
    userData.map((item) => console.log(item));
  };
  getUserName(chatRoomsUsers1);
  getUserMessages(chatRoomsUsers2);