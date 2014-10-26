describe("numberInWords", function(){
   it("should take number '1' and return 'one'", function(){
      numberInWords(1).should.equal("one");
   });

   it("should take number '2' and return 'two'", function(){
      numberInWords(2).should.equal("two");
   });

   it("should take number '3' and return 'three'", function(){
      numberInWords(3).should.equal("three");
   });

   it("should take number '10' and return 'ten'", function(){
      numberInWords(10).should.equal("ten");
   });

   it("should take number '14' and return 'fourteen'", function(){
      numberInWords(14).should.equal("fourteen");
   });

   it("should take number '11' and return 'eleven'", function(){
      numberInWords(11).should.equal("eleven");
   });

   it("should take number '15' and return 'fifteen'", function(){
      numberInWords(15).should.equal("fifteen");
   });

   it("should take number '20' and return 'twenty'", function(){
      numberInWords(20).should.equal("twenty");
   });

   it("should take number '21' and return 'twenty one'", function(){
      numberInWords(21).should.equal("twenty one");
   });

   it("should take number '26' and return 'twenty six'", function(){
      numberInWords(26).should.equal("twenty six");
   });

   it("should take number '30' and return 'thirty'", function(){
      numberInWords(30).should.equal("thirty");
   });

   it("should take number '32' and return 'thirty two'", function(){
      numberInWords(32).should.equal("thirty two");
   });

   it("should take number '36' and return 'thirty six'", function(){
      numberInWords(36).should.equal("thirty six");
   });

   it("should take number '40' and return 'fourty'", function(){
      numberInWords(40).should.equal("fourty");
   });

   it("should take number '45' and return 'fourty five'", function(){
      numberInWords(45).should.equal("fourty five");
   });

   it("should take number '50' and return 'fifty'", function(){
      numberInWords(50).should.equal("fifty");
   });

   it("should take number '58' and return 'fifty eight'", function(){
      numberInWords(58).should.equal("fifty eight");
   });
   

   it("should take number '60' and return 'sixty'", function(){
      numberInWords(60).should.equal("sixty");
   });

   it("should take number '99' and return 'ninety nine'", function(){
      numberInWords(99).should.equal("ninety nine");
   });

   it("should take number '100' and return 'one hundred'", function(){
      numberInWords(100).should.equal("one hundred");
   });

   it("should take number '122' and return 'one hundred twenty two'", function(){
      numberInWords(122).should.equal("one hundred twenty two");
   });

   it("should take number '101' and return 'one hundred one'", function(){
      numberInWords(101).should.equal("one hundred one");
   });

   it("should take number '1001' and return 'one thousand one'", function(){
      numberInWords(1001).should.equal("one thousand one");      
   });

   it("should take number '1000' and return 'one thousand'", function(){
      numberInWords(1000).should.equal("one thousand");
   });

   it("should take number '1111' and return 'one thousand one hundred eleven'", function(){
      numberInWords(1111).should.equal("one thousand one hundred eleven");
   });

   it("should take number '10000' and return 'ten thousand'", function(){
      numberInWords(10000).should.equal("ten thousand");
   });

   it("should take number '11111' and return 'eleven thousand one hundred eleven'", function(){
      numberInWords(11111).should.equal("eleven thousand one hundred eleven");
   });

   it("should take number '111111' and return 'one hundred eleven thousand one hundred eleven'", function(){
      numberInWords(111111).should.equal("one hundred eleven thousand one hundred eleven");
   });

   it("should take number '100000' and return 'one hundred thousand'", function(){
      numberInWords(100000).should.equal("one hundred thousand");
   });

   it("should take number '1000000' and return 'one million'", function(){
      numberInWords(1000000).should.equal("one million");
   });

   it("should take number '1111111' and return 'one million one hundred eleven thousand one hundred eleven'", function(){
      numberInWords(1111111).should.equal("one million one hundred eleven thousand one hundred eleven");
   });

   it("should take number '111111111' and return 'one hundred eleven million one hundred eleven thousand one hundred eleven'", function(){
      numberInWords(111111111).should.equal("one hundred eleven million one hundred eleven thousand one hundred eleven");
   });

   it("should take number '100000000' and return 'one hundred million'", function(){
      numberInWords(100000000).should.equal("one hundred million");
   });

   it("should take number '1000000000' and return 'one trillion'", function(){
      numberInWords(1000000000).should.equal("one trillion");
   });

   it("should take number '111111111111' and return 'one hundred eleven trillion one hundred eleven million one hundred eleven thousand one hundred eleven'", function(){
      numberInWords(111111111111).should.equal("one hundred eleven trillion one hundred eleven million one hundred eleven thousand one hundred eleven");
   });
})