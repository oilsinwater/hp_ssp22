describe("lesserNum", function() {
  it("should be defined properly", function() {
    expect(lesserNum).toBeDefined();
  });

  it("should return lesser number", function() {
    expect(lesserNum(10, 1)).toBe(1);
    expect(lesserNum(-10, 1)).toBe(-10);
  });

  it("should return either number if equal", function() {
    expect(lesserNum(100, 100)).toBe(100);
  });
});

describe("countBy", function() {
  it("should be defined properly", function() {
    expect(countBy).toBeDefined();
  });

  it("should return an array", function() {
    expect(Array.isArray(countBy(10, 3))).toBe(true);
  });

  it("should return correct number of elements", function() {
    expect(countBy(1, 100).length).toBe(101);
  });

  it("should return correct array", function() {
    expect(countBy(9, 3)).toEqual([0, 9, 18, 27]);
    expect(countBy(-9, 3)).toEqual([0, -9, -18, -27]);
  });
});

describe("titleCase", function() {
  it("should be defined properly", function() {
    expect(titleCase).toBeDefined();
  });

  it("should return a string", function() {
    expect(typeof titleCase("hello")).toBe("string");
  });

  it("should return a title-cased string", function() {
    expect(titleCase("hello worlD")).toBe("Hello World");
  });
});
describe("getNameAndBirthday", function() {
  var testPerson;
  beforeEach(function() {
    testPerson = {
      name: {
        first: "John",
        last: "Jones"
      },
      birthDay: {
        month: "March",
        day: 1,
        year: 1000
      }
    };
  });

  it("should be defined properly", function() {
    expect(getNameAndBirthday).toBeDefined();
  });

  it("should return proper string", function() {
    expect(getNameAndBirthday(testPerson)).toBe("John Jones: March 1, 1000");
  });
});

describe("renderInfoNeatly", function() {
  var testPerson;
  beforeEach(function() {
    testPerson = {
      name: {
        first: "sPongeBoB",
        last: "sQUarEPants"
      },
      birthDay: {
        month: "jUlY",
        day: 14,
        year: 1986
      }
    };
  });

  it("should be defined properly", function() {
    expect(renderInfoNeatly).toBeDefined();
  });

  it("should return string in proper format", function() {
    expect(renderInfoNeatly(testPerson)).toBe(
      "Spongebob Squarepants: July 14, 1986"
    );
  });
});

describe("getPeopleBornIn", function() {
  var group;
  beforeEach(function() {
    group = [
      {
        name: { first: "Alyssa", last: "Hacker" },
        birthday: { month: "January", day: 5, year: 1987 }
      },
      {
        name: { first: "Ben", last: "Bitdiddle" },
        birthday: { month: "February", day: 19, year: 1984 }
      },
      {
        name: { first: "Eva", last: "Ator" },
        birthday: { month: "January", day: 29, year: 1980 }
      },
      {
        name: { first: "Lem", last: "Tweakit" },
        birthday: { month: "February", day: 11, year: 1989 }
      },
      {
        name: { first: "Louis", last: "Reasoner" },
        birthday: { month: "February", day: 17, year: 1992 }
      }
    ];
  });

  it("should be defined properly", function() {
    expect(getPeopleBornIn).toBeDefined();
  });

  it("should return an array of strings", function() {
    var result = getPeopleBornIn(group, "February");
    expect(Array.isArray(result)).toBe(true);
    expect(result.every(e => typeof e === "string")).toBe(true);
  });

  it("should return people with correct birth month", function() {
    var result = getPeopleBornIn(group, "January");
    expect(result[0]).toBe("Alyssa Hacker: January 5, 1987");
    expect(result[1]).toBe("Eva Ator: January 29, 1980");
  });
});

describe("This test", function() {
  it("will always fail -- this is by design. If this is the only test that's failing, you are done! Click submit one last time, and you may safely navigate away from/close this page.", function() {
    expect(0).toBe(1);
  });
});
