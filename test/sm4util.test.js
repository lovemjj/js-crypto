const sm4util = require('../index').sm4util;

test('encrypt and decrypt data', () => {
    const str = 'xiaoliye';
    const key = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'; // 32
    const iv  = 'aaaaaaaaaaaaaaaa';  // 16
    const cipherAesText = sm4util.cipherivEncrypt(str, 'sm4', key,iv)
    const resultText = sm4util.cipherivDecrypt(cipherAesText, 'sm4', key,iv)

    expect(resultText).toBe(str);
});