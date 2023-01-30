
export class BookCatalog{
    constructor(books,donors){
        this.books=books;
        this.donors=donors;
    }

    addBook=(book)=>{
        this.books.push(book);
    }
    updateBook=(book)=>{
        this.books.map(b=>{
            if(b.bookid===book.bookid){
                Object.keys(b).forEach(key=>{
                    b[key]=book[key];
                })
            }
            return b;
        })
    }
    deleteBook=(bookid)=>{
        this.books=this.books.filter(book=>{
            if(book.bookid!==bookid){
                return book;
            }
        })
    }
    getDonorBooks=(donorid)=>{
        let donorBooks=this.books.filter(book=>{
            if(book.donor.donorid===donorid){
                return book;
            }
        })
        return donorBooks;
    }
    getBooks=()=>{
        let nonpendingbooks=this.books.filter(book=>{
            if(book.status!=="Pending"){
                return book;
            }
        });
        return nonpendingbooks;
    }

    addDonor=(donor)=>{
        this.donors.push(donor);
    }


    getTopDonors=()=>{
        let nonpendingdonors=this.donors.filter(donor=>{
                if(donor.status!=="Pending"){
                        return donor;
            }
        });
        return nonpendingdonors;
    }


    updateDonor=(donor)=>{
        this.donors.map(d=>{
            if(d.donorid===donor.donorid){
                Object.keys(d).forEach(key=>{
                    d[key]=donor[key];
                })
            }
            return d;
        })
    }


    deleteDonor=(donorid)=>{
        this.donors=this.donors.filter(donor=>{
            if(donor.donorid!==donorid){
                return donor;
            }
        })
    }



}