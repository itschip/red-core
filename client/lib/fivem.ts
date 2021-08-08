class _FiveM {
  async delay(ms: number): Promise<void> {
    return new Promise((res) => {
      setTimeout(res, ms);
    });
  }
}
