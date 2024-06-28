import { Elysia } from 'elysia';
import { mockFilesResponse } from './mockdata';

const app = new Elysia()
    .get('/', () => 'Hello Elysia')
    .get('/files', mockFilesResponse)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
