export async function generarKey(secret:string): Promise<CryptoKey>{
    return await crypto.subtle.importKey(
        "raw",                                  // formato de entrada secuencia de byts sin codificar
        new TextEncoder().encode(secret),       // convierte la clave en Uint8array entendible para importKey
        {name:"HMAC", hash: "SHA-256"},         // define el algoritmo para HMAC crea una clave con formato sha-256
        false,                                  // define si la clave puede ser importada despues de creada en este caso no
        ["sign","verify"]                       // define para que puede ser usada la clave sign="firmar datos" verify="verificar firma"
    )
}