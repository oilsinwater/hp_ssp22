describe("isOldEnoughToDrive", function() {
  it("should return a boolean", function() {
    expect(typeof isOldEnoughToDrive(40)).toEqual("boolean");
  });
  it("should return true if the age is 16", function() {
    expect(isOldEnoughToDrive(16)).toBe(true);
  });
  it("should return false if the age is less than 16", function() {
    expect(isOldEnoughToDrive(15)).toBe(false);
  });
});
