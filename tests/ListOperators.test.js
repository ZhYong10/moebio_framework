//                  groupElements
// ======================================================
describe("ListOperators.groupElements", function()
{
  it("should be defined", function() {
    expect(ListOperators.groupElements).toBeDefined();
  });

  it("should return expected grouping", function() {
    var list = List.fromArray(["jan", "feb", "mar", "jan", "apr", "jan", "feb"]);
    var result = ListOperators.groupElements(list, true, 1);
    expect(result.length).toEqual(4);
  });
});


//          groupElementsByPropertyValue
// ======================================================
describe("ListOperators.groupElementsByPropertyValue", function()
{
  it("should be defined", function() {
    expect(ListOperators.groupElementsByPropertyValue).toBeDefined();
  });


  it("should return expected grouping well sorted", function() {
    var list = List.fromArray([
      { name:"daniel", surname:"aguilar", age:36 },
      { name:"anna", surname:"smith", age:37 },
      { name:"alex", surname:"aguilar", age:34 },
    ]);
    var result = ListOperators.groupElementsByPropertyValue(list, "surname");
    for(var i = 0; i < result; i++)
    {
      console.log(i, ": ", result[i].name);
    }
    expect(result[0].length).toEqual(2);
  });

});