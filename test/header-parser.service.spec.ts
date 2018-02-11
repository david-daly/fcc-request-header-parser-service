import { expect } from 'chai';
import 'mocha';
import { URLHeaderParserService } from '../src/services/header-parser.service';

const validIp = '127.0.0.1';
const validLanguage = 'en-GB,en-US;q=0.9,en;q=0.8';
const validSystemInfo = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';

const createEvent = (ipaddress, system, language) => {
    return {
        headers: {
            'Accept-Language': language,
            'User-Agent': system,
        },
        requestContext: {
            identity: {
                sourceIp: ipaddress,
            },
        },
    };
};

describe('Get User Details', () => {
    describe('When valid request handled by serice', () => {
        it(`should return the User's IP Address, Language and System`, () => {
                const event = createEvent(validIp, validSystemInfo, validLanguage);
                const service = new URLHeaderParserService(event);
                const result = service.getUserDetails();

                expect(result.ipaddress).to.equal('127.0.0.1');
                expect(result.language).to.equal('en-GB');
                expect(result.system).to.equal(validSystemInfo);
            });
        });

    describe('When request is missing Host', () => {
        it(`should return the User's Language and System`, () => {
            const event = createEvent(null, validSystemInfo, validLanguage);
            const service = new URLHeaderParserService(event);
            const result = service.getUserDetails();

            expect(result.ipaddress).to.equal(null);
            expect(result.language).to.equal('en-GB');
            expect(result.system).to.equal(validSystemInfo);
        });
    });

    describe('When request is missing Language', () => {
        it(`should return the User's IP Address and System`, () => {
            const event = createEvent(validIp, validSystemInfo, null);
            const service = new URLHeaderParserService(event);
            const result = service.getUserDetails();

            expect(result.ipaddress).to.equal('127.0.0.1');
            expect(result.language).to.equal(null);
            expect(result.system).to.equal(validSystemInfo);
        });
    });

    describe('When request is missing System Information', () => {
        it(`should return the User's IP Address and Language`, () => {
            const event = createEvent(validIp, null, validLanguage);
            const service = new URLHeaderParserService(event);
            const result = service.getUserDetails();

            expect(result.ipaddress).to.equal('127.0.0.1');
            expect(result.language).to.equal('en-GB');
            expect(result.system).to.equal(null);
        });
    });
});
