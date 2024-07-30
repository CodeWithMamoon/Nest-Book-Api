import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Get('/findAll')
    getAllBooks(): Book[] {
        return this.bookService.findAllBooks();
    }
    @Put('/update')
    updateBooks(@Body() book: Book): string {
        return this.bookService.updateBookService(book);
    }
    @Delete("/delete/:id")
    deleteBooks(@Param("id") bookid: string): string {
        return this.bookService.deleteBookService(bookid);
    }
    @Post("/add")
    addBooks(@Body() book: Book): string {
        return this.bookService.addBookService(book);
    }
}
