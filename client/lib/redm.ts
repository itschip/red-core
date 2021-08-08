class _RedM {
  async delay(ms: number): Promise<void> {
    return new Promise((res) => {
      setTimeout(res, ms);
    });
  }
}

const RedM = new _RedM();

export default RedM;
