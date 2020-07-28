/**
 * @description
 * 对称加密
 * @param {*} data 加密数据
 * @param {*} algorithm 加密算法
 * @param {*} key 密钥
 * @param {*} iv 向量
 * @returns
 */
function cipherivEncrypt(data, algorithm, key, iv) {
    const cipheriv = crypto.createCipheriv(algorithm, key, iv)
    let encrypted = cipheriv.update(data, 'utf8', 'hex');
    encrypted += cipheriv.final('hex');
    return encrypted
}

/**
 * @description
 * 对称解密
 * @param {*} data 解密数据
 * @param {*} algorithm 解密算法
 * @param {*} key 密钥
 * @param {*} iv 向量
 * @returns
 */
function cipherivDecrypt(data, algorithm, key, iv) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted
}

module.exports = {
    cipherivDecrypt,
    cipherivEncrypt
};