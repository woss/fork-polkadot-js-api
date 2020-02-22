import { Server } from 'mock-socket';
declare const TEST_WS_URL = "ws://localhost:9955";
interface Scope {
    body: {
        [index: string]: {};
    };
    requests: number;
    server: Server;
    done: any;
}
declare function mockWs(requests: {
    method: string;
}[]): Scope;
export { TEST_WS_URL, mockWs };
