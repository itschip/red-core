type PromptProps = {
  prompt: any;
  text: string;
  control: number;
};

export default class PromptGroup {
  private groupName: any;
  private groupId: number;
  private tick: any = null;
  private prompts: PromptProps[] = [];

  constructor(groupText: string) {
    this.groupId = Math.floor(Math.random() * 999999999999);

    // @ts-ignore
    this.groupName = CreateVarString(10, 'LITERAL_STRING', groupText);
  }

  createPrompt(text: string, control: number) {
    const prompt: any = Citizen.invokeNative('0x04F97DE45A519419');

    console.log('THE PROMPT', prompt);

    // PromptSetControlAction
    Citizen.invokeNative('0xB5352B7494A08258', prompt, control);

    // @ts-ignore
    const str: any = CreateVarString(10, 'LITERAL_STRING', text);
    console.log('prompt string', str);

    // PromptSetText
    Citizen.invokeNative('0x5DD02A8318420DD7', prompt, str);

    // PromptSetGroup
    Citizen.invokeNative('0x2F11D3A254169EA4', prompt, this.groupId);

    // PromptRegisterEnd
    Citizen.invokeNative('0xF7AA2696A22AD8B9');

    this.prompts.push({ prompt, text, control });
  }

  show() {
    // sets the prompt visible and enabled
    for (const { prompt, text, control } of this.prompts) {
      Citizen.invokeNative('0x71215ACCFDE075EE', prompt, true);
      Citizen.invokeNative('0x8A0FB4D03A630D21', prompt, true);
    }

    this.tick = setTick(() => {
      Citizen.invokeNative('0xC65A45D4453C2627', this.groupId, this.groupName);
    });
  }

  hide() {
    // sets the prompt hidden and disabled
    for (const { prompt, text, control } of this.prompts) {
      Citizen.invokeNative('0x71215ACCFDE075EE', prompt, false);
      Citizen.invokeNative('0x8A0FB4D03A630D21', prompt, false);
    }

    clearTick(this.tick);
  }
}
