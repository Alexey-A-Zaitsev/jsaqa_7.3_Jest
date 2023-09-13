const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Sorting duplicate book titles", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Властелин Колец",
    ];

    const expected = [
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });
});
