import {prisma} from '../db/client';
import { Request, Response } from 'express';
import {Books, BooksFilter} from '../types/books';

const getListBooks = async (req: Request, res: Response): Promise<Response> => {
    try{
        const filter: BooksFilter = {
            published: req.query?.published ? req.query.published === 'true' : true,
            title: req.query?.title ? String(req.query.title) : '',
        }
        const result = await prisma.books.findMany({
            where: {
                published: filter.published,
                title: {
                    contains: filter.title
                }
            }
        });
        return res.status(200).json(result);
    } catch (e) {
        console.log('getListBooks API Error: ', e);
        return res.status(500).json('Internal server error');
    }
}

const getBookById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const result = await prisma.books.findUnique({
            where: {
                id: id
            }
        })
        return res.status(200).json(result);
    }catch (e) {
        console.log('getBookById API Error: ', e);
        return res.status(500).json('Internal server error');
    }
}

const addBook = async (req: Request, res: Response): Promise<Response> => {
    try{
        const book: Books = req.body;
        const newBook = await prisma.books.create({
            data: book
        });
        return res.status(201).json(newBook);
    }catch (e) {
        console.log('addBook API Error: ', e);
        return res.status(500).json('Internal server error');
    }
}

const updateBook = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const book: Books = req.body;
        const newBook = await prisma.books.update({
            where: {
                id: id
            },
            data: book
        });
        return res.status(200).json(newBook);
    }catch (e) {
        console.log('updateBook API Error: ', e);
        return res.status(500).json('Internal server error');
    }
}

const removeBook = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        // Soft delete => update deleted flag in DB
        // const book = await prisma.books.update({
        //     where: {
        //         id: id
        //     },
        //     data: {
        //         deleted: true
        //     }
        // });

        // Permanently delete
        const book = await prisma.books.delete({
            where: {
                id: id
            }
        })
        return res.status(200).json(book);
    }catch (e) {
        console.log('removeBook API Error: ', e);
        return res.status(500).json('Internal server error');
    }
}

export {
    getListBooks,
    getBookById,
    addBook,
    updateBook,
    removeBook
}
