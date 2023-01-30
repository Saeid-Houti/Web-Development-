import {BookCatalog} from "./BookCatalog.js"
import {Book} from "./Book.js"
import {Donor} from"./Donor.js"

let books=[]
let donors=[]

    let donor=new Donor(4434,"saeid","houti",9999999,"al-rayyan","muaither","sh@qu","9378382");
    let book=new Book(32,"story of life","Mr abdulahi","https/fdfa/fdfd.com",donor,"Available");
    books.push(book);
    donors.push(donor)

let donor1=new Donor(1221,"ahmed","saleh",456534543,"al-arab","doha","ss@fdf","455454");
let book1=new Book(15,"javascript","Mr ali","https/fdfadd/.com",donor1,"Pending");

const catalog=new BookCatalog(books,donors);
catalog.addBook(book1);
catalog.addDonor(donor1)

let book2= new Book(12,"Jungle Book","Michel","https//saqa.com",donor1,"Available");
catalog.updateBook(book2);
catalog.updateDonor(donor1)
console.log(catalog.getBooks());
console.log(catalog.getDonorBooks(1221));
console.log(catalog.getDonorBooks(4434))
catalog.deleteBook(15);
console.log("------------------update donor---------")
catalog.deleteDonor(4434)
console.log(catalog.getTopDonors())
