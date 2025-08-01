//process.stdin
//    .pipe(process.stdout)

import { Readable, Writable, Transform, Duplex } from 'node:stream'

class OneToHundredStream extends Readable{
    index = 1

    _read(){
        const i = this.index++

        setTimeout(() =>{
                    if (i > 100){
            this.push(null)
        } else {
            const buf = Buffer.from(String(i))

            this.push(buf)
        }
        }, 1000)
    }
}

class MultiplyByTenStream extends Writable{
    _write(chunk, encolding, callback) { //Dentro de uma stream de escrita não retornamos nada 
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

class InverseNumberStream extends Transform {
    _transform(chunk,encolding, callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())