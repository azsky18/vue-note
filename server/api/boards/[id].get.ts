export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  console.log("server id", id);

  const data = [
    {
      id: "1",
      no: 1,
      title: "first board",
      content: "firt board's content",
    },
    {
      id: "2",
      no: 2,
      title: "second board",
      content: "second board's content",
    },
    {
      id: "3",
      no: 3,
      title: "third board",
      content: "third board's content",
    },
  ];

  return data.find((row) => row.id === id);
});
