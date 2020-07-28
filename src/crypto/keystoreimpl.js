function KeyStoreImpl (publickey,crypto,id,version,mac,kdf){
    this.publickey = publickey;
    this.crypto = crypto;
    this.id = id;
    this.version = version;
    this.mac = mac;
    this.kdf = kdf;
}

module.exports = {
    KeyStoreImpl
};