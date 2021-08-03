
describe('The greet function' , function(){
    it('should return "Hello, Khanya" when I greet Khanya' , function(){
        assert.equal('Hello, Khanya', greet('Khanya'));
    });

    it('should return "Hello, Sam" when I greet Khanya' , function(){
        assert.equal('Hello, Sam', greet('Sam'));
    });

    it('should return "Hello" when no name is entered ' , function(){
        assert.equal('Hello', greet(''));
    });

});