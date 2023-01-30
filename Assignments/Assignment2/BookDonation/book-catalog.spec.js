import {BookCatalog} from "./BookCatalog.js";
import {expect} from "chai";
import {Book} from "./Book.js"
import {Donor} from "./Donor.js"
const catalog=new BookCatalog()
const donor=new Donor(1221,"ahmed","saleh",456534543,"al-arab","doha","ss@fdf","455454")
const testBook=new Book(32,"story of life","Mr abdulahi","https/fdfa/fdfd.com",donor,"Available")

//NO ENOUGH TIME TO TEST DR THE HM WAS TOO LONG AND WE HAVE LOTS OF MIDTERMS SO SAD

describe("catalog class test", ()=>{
    it('should add book to the catalog', function () {
        expect(catalog.addBook(testBook)).equals(catalog.books[catalog.books.length-1])
        
    });


})




