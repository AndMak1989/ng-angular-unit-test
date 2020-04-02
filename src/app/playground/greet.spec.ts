import {hello} from "./greet";


describe('greet function',()=>{
    it('should include name  in return message',()=>{
      expect(hello('World')).toContain("dl")
    })
});
