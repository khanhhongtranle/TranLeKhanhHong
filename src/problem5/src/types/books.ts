interface Books {
    id?: number;
    title: string;
    content?: string;
    published: boolean;
    deleted?: boolean;
}

interface BooksFilter {
    published?: boolean | true;
    title?: string | '';
}

export {
    Books,
    BooksFilter
}
