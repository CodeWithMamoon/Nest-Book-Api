import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto"
import { v4 as UUID } from "uuid";

@Injectable()
export class BookService{
public books:Book[]=[];


addBookService(book:Book):string{
    book.id=UUID()
    this.books.push(book)
    return 'The book is push'
}
updateBookService(book:Book):string{
    let index=this.books.findIndex((currentBook)=>{
        return currentBook.id=book.id
    })
    this.books[index]=book
    return 'Books updated'
}

deleteBookService(bookid: string): string {
    this.books = this.books.filter((book) => {
        return book.id !== bookid;
    });
    return "this book deleted"
}
findAllBooks():Book[]{
return this.books
}
}