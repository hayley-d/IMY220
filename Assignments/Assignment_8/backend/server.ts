import { createServer, IncomingMessage, ServerResponse } from 'http';
import { URL } from 'url';
//import fetchPokemon from './api';
import fs from 'fs';
import path from 'path'

interface PokemonEntity {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: { type: { name: string } }[];
}

const corsMiddleware = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

const serveStatic = (filePath: string, res: ServerResponse) => {
    const absolutePath = path.resolve(filePath);
    fs.stat(absolutePath, (err) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
            return;
        }

        fs.createReadStream(absolutePath).pipe(res);
    });
};

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    corsMiddleware(req, res);
    const parsedUrl = new URL(req.url || '', `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    if(pathname === '/') {
        serveStatic('./frontend/public/index.html', res);
    } else if (pathname.startsWith('/api/')){
        const name = pathname.split('/')[2];
        var data : PokemonEntity | null;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            
            if (!response.ok) {
                console.error(`Pokemon "${name}" not found`);
                data = null;
            }

            data = await response.json();
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
            data = null;
        }
        //const data: PokemonEntity|null = await fetchPokemon(name);
        if(data) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: `Pokemon "${name}" not found` }));
        }
    } else {
        serveStatic('./frontend/public/index.html', res);
    }
    
});

server.listen(3001, () => {
    console.log('Server running on port 3001');
});

