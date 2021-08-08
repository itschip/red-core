class PromptGroup {
  private groupName: any;
  private groupId: number;
  private tick: any = null;
  prompt: any;

  constructor(groupText: string, id: number) {
    this.groupId = id;

    // @ts-ignore
    this.groupName = CreateVarString(10, 'LITERAL_STRING', groupText);
  }

  createPrompt(text: string, control: number) {
    this.prompt = Citizen.invokeNative('0x04F97DE45A519419');

    console.log('THE PROMPT', this.prompt);

    // PromptSetControlAction
    Citizen.invokeNative('0xB5352B7494A08258', this.prompt, control);

    // local str = CreateVarString(10, 'LITERAL_STRING', str);
    // @ts-ignore
    const str: any = CreateVarString(10, 'LITERAL_STRING', text);
    console.log('prompt string', str);

    // PromptSetText
    Citizen.invokeNative('0x5DD02A8318420DD7', this.prompt, str);

    // PromptSetGroup
    Citizen.invokeNative('0x2F11D3A254169EA4', this.prompt, this.groupId);

    // PromptRegisterEnd
    Citizen.invokeNative('0xF7AA2696A22AD8B9');
  }

  show() {
    // sets the prompt visible and enabled
    Citizen.invokeNative('0x71215ACCFDE075EE', this.prompt, true);
    Citizen.invokeNative('0x8A0FB4D03A630D21', this.prompt, true);

    this.tick = setTick(() => {
      Citizen.invokeNative('0xC65A45D4453C2627', this.groupId, this.groupName);
    });
  }

  hide() {
    clearTick(this.tick);
  }
}
