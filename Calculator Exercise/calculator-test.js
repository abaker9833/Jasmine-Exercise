
it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 10000,
    years: 24,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual ('65.60');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount:  1000041,
    years: 24,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual ('656.00');
});

it("should handle a term of one year", function() {
  const values = {
    amount: 10000,
    years: 1,
    rate: 8
  };
  expect(calculateMonthlyPayment(values)).toEqual ('869.88');
});
