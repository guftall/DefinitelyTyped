/// <reference types="node" />
import * as stream from 'stream';

declare namespace ss{

    function sandwichStream(options?: Options): SandwichStream;

    export interface SandwichStream extends stream.Readable{
        _streamsActive: boolean;
        _streamsAdded: boolean;
        _streams: Array<any>;
        _currentStream: undefined;
        _errorsEmitted: boolean;

        _head: any;
        _tail: any;
        _separator: any;

        add(newStream: SandwichStream): void;

        _substreamOnError(error: any): void;
        _pushHead(): void;
        _streamNextStream(): void;
        _nextStream(): boolean;
        _bindCurrentStreamEvents(): void;
        _currentStreamOnReadable(): void;
        _currentStreamOnEnd(): void;
        _pushSeparator(): void;
        _pushTail(): void;

    }

}

interface Options {
    head: any;
    tail: any;
    separator: any;
}

export = ss