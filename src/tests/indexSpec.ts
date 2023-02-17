import fs from 'fs';
import path from 'path';
import supertest from 'supertest';
import app from '../index';
import { resizeImage } from '../utilities/resize';

// Test script runs and all tests created pass.
// There is at least 1 test per endpoint and at least one test for image processing.

const request = supertest(app);

describe('Test the image endpoint responses', () => {
    const filename = 'encenadaport.jpg';
    const fileWidth = 800;
    const fileheight = 400;

    //An error message should be provided to the user when an image has failed to process or does not exist.
    it('gets the api endpoint', async () => {
        const response = await request.get(
            `/api/images?name=${filename}&width=${fileWidth}&height=${fileheight}`
        );
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    it('gets an error for missing file', async () => {
        const response = await request.get(
            `/api/images?name=noname.jpg&width=${fileWidth}&height=${fileheight}`
        );
        expect(response.status).toEqual(400);
        expect(response.text).toEqual('no such image file');
    });

    it('gets an error for missing height', async () => {
        const response = await request.get(
            `/api/images?name=${filename}&width=${fileWidth}`
        );
        expect(response.status).toEqual(400);
        expect(response.text).toEqual('Invalid height/width parameters');
    });

    it('expects error message for bad width input', async () => {
        const fileWidth = -1;
        const response = await request.get(
            `/api/images?name=${filename}&width=${fileWidth}&height=${fileheight}`
        );
        expect(response.text).toBe(
            'Width and height must be positive integers'
        );
        expect(response.status).toEqual(400);
    });
});

describe('test the functionality of image processing', () => {
    it('expects the resized output function to work', async () => {
        const testThumb = 'icelandwaterfall.jpg';
        const resizePath = path.normalize(`./thumb/${testThumb}-700-400.jpg`);
        await resizeImage(testThumb, 700, 400);
        expect(fs.existsSync(resizePath)).toBe(true);
    });
});
