import { HttpResponse, http } from "msw";

export const handlers = [
  http.delete(
    "https://api-ghiblipedia.onrender.com/items/:id",
    ({ params }) => {
      const { id } = params;
      console.log(id);

      return HttpResponse.json({ status: 200 });
    },
  ),
  http.get("https://api-ghiblipedia.onrender.com/items", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "Castle in the Sky",
        original_title: "天空の城ラピュタ",
        original_title_romanised: "Tenkū no shiro Rapyuta",
        image:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
        movie_banner:
          "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
        description:
          "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
        running_time: "124",
        rt_score: "95",
      },
      {
        id: 2,
        title: "Grave of the Fireflies",
        original_title: "火垂るの墓",
        original_title_romanised: "Hotaru no haka",
        image:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
        movie_banner:
          "https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg",
        description:
          "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
        running_time: "89",
        rt_score: "97",
      },
    ]);
  }),
];
